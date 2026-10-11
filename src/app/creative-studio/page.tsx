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
		id: "brand-stories",
		index: "01",
		label: "BRAND & LIFESTYLE",
		title: "Brand Stories & Journeys",
		description:
			"Cinematic brand stories and beauty journeys, from everyday moments to special occasions.",
	},
	{
		id: "product-worlds",
		index: "02",
		label: "PRODUCT & EXPERIENCE",
		title: "Products & Sensory Worlds",
		description:
			"Product films, surreal CGI, packaging moments, beauty textures, and sensory details.",
	},
	{
		id: "scroll-stoppers",
		index: "03",
		label: "VIRAL & EXPERIMENTAL",
		title: "Scroll Stoppers & Trends",
		description:
			"Unexpected visuals, impossible transitions, emerging formats, and experimental ideas.",
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

function buildItems(folder: string, filenames: string[]): CreativeMedia[] {
	const files = filenames.filter((filename) => {
		const extension = path.extname(filename).toLowerCase();

		return (
			!filename.startsWith(".") &&
			(imageExtensions.has(extension) || videoExtensions.has(extension))
		);
	});

	const videos = files.filter((filename) =>
		videoExtensions.has(path.extname(filename).toLowerCase()),
	);

	const posters = new Map<string, string>();
	const usedPosters = new Set<string>();

	for (const video of videos) {
		const stem = path.basename(video, path.extname(video)).toLowerCase();

		const poster = files.find((filename) => {
			const extension = path.extname(filename).toLowerCase();

			return (
				imageExtensions.has(extension) &&
				path.basename(filename, path.extname(filename)).toLowerCase() ===
					`${stem}-poster`
			);
		});

		if (poster) {
			posters.set(video, poster);
			usedPosters.add(poster);
		}
	}

	return files
		.filter((filename) => !usedPosters.has(filename))
		.sort((a, b) => a.localeCompare(b, "en", { numeric: true }))
		.map((filename) => ({
			id: `${folder}/${filename}`,
			title: mediaTitle(filename),
			src: mediaUrl(folder, filename),
			type: videoExtensions.has(path.extname(filename).toLowerCase())
				? ("video" as const)
				: ("image" as const),
			poster: posters.has(filename)
				? mediaUrl(folder, posters.get(filename)!)
				: undefined,
		}));
}

/* =========================================================
   PAGE
   ========================================================= */

export default async function CreativeStudioPage() {
	const sections: CreativeSection[] = await Promise.all(
		collections.map(async (collection) => ({
			...collection,
			items: buildItems(collection.id, await readFiles(collection.id)),
		})),
	);

	return <CreativeStudioGallery sections={sections} />;
}
