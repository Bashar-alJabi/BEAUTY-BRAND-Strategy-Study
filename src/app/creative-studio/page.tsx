import CreativeStudioGallery, {
	type CreativeMedia,
	type CreativeSection,
} from "@/components/CreativeStudioGallery";
import { creativeMediaManifest } from "@/data/creativeMediaManifest";
import type { Metadata } from "next";
import { readdir } from "node:fs/promises";
import path from "node:path";

export const metadata: Metadata = {
	title: "Creative Studio — RUYA",
	description:
		"Explore RUYA brand stories, product worlds, and scroll-stopping creative concepts.",
};

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

/* =========================================================
   CREATIVE COLLECTIONS
   ========================================================= */

const collections = [
	{
		id: "images",
		index: "01",
		kind: "image",
		label: "VISUAL GALLERY",
		title: "Creative Images",
		description:
			"A curated gallery of brand imagery, product photography, campaign visuals, and creative explorations.",
	},
	{
		id: "videos",
		index: "02",
		kind: "video",
		label: "MOTION GALLERY",
		title: "Creative Videos",
		description:
			"A collection of cinematic films, product animations, advertising videos, and experimental motion.",
	},
] as const;

const imageExtensions = new Set([
	".jpg",
	".jpeg",
	".png",
	".webp",
	".avif",
	".gif",
]);

const videoExtensions = new Set([".mp4", ".webm"]);

/* =========================================================
   AUTOMATIC FILE DISCOVERY
   ========================================================= */

async function readFiles(folder: string): Promise<string[]> {
	if (process.env.NODE_ENV === "production") {
		return creativeMediaManifest[folder] ?? [];
	}

	try {
		const entries = await readdir(
			path.join(process.cwd(), "public", "creative-studio", folder),
			{ withFileTypes: true },
		);

		return entries.filter((entry) => entry.isFile()).map((entry) => entry.name);
	} catch (error) {
		if ((error as NodeJS.ErrnoException).code === "ENOENT") {
			return [];
		}

		throw error;
	}
}

function mediaUrl(folder: string, filename: string) {
	return `/creative-studio/${folder}/${encodeURIComponent(filename)}`;
}

function mediaTitle(filename: string) {
	const name = filename
		.replace(/\.[^.]+$/, "")
		.replace(/^\d+[\s._-]+/, "")
		.replace(/[-_]+/g, " ")
		.trim();

	return (
		name.replace(/\b[a-z]/g, (letter) => letter.toUpperCase()) || "Untitled"
	);
}

/* =========================================================
   MEDIA ITEMS + OPTIONAL VIDEO POSTERS
   ========================================================= */

function buildItems(
	folder: string,
	filenames: string[],
	kind: "image" | "video",
): CreativeMedia[] {
	const files = filenames.filter((filename) => {
		const extension = path.extname(filename).toLowerCase();

		return (
			!filename.startsWith(".") &&
			(imageExtensions.has(extension) || videoExtensions.has(extension))
		);
	});

	const images = files.filter((filename) =>
		imageExtensions.has(path.extname(filename).toLowerCase()),
	);

	const visibleFiles =
		kind === "image"
			? images
			: files.filter((filename) =>
					videoExtensions.has(path.extname(filename).toLowerCase()),
				);

	return visibleFiles
		.sort((a, b) => a.localeCompare(b, "en", { numeric: true }))
		.map((filename) => {
			const stem = path
				.basename(filename, path.extname(filename))
				.toLowerCase();

			const poster =
				kind === "video"
					? images.find(
							(image) =>
								path.basename(image, path.extname(image)).toLowerCase() ===
								`${stem}-poster`,
						)
					: undefined;

			return {
				id: `${folder}/${filename}`,
				title: mediaTitle(filename),
				src: mediaUrl(folder, filename),
				type: kind,
				poster: poster ? mediaUrl(folder, poster) : undefined,
			};
		});
}

/* =========================================================
   PAGE
   ========================================================= */

export default async function CreativeStudioPage() {
	const sections: CreativeSection[] = await Promise.all(
		collections.map(async ({ kind, ...collection }) => ({
			...collection,
			items: buildItems(collection.id, await readFiles(collection.id), kind),
		})),
	);

	return <CreativeStudioGallery sections={sections} />;
}
