"use client";

import { ArrowLeft, ArrowRight, Film, ImageIcon, Play, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export type CreativeMedia = {
	id: string;
	title: string;
	src: string;
	type: "image" | "video";
	poster?: string;
};

export type CreativeSection = {
	id: string;
	index: string;
	label: string;
	title: string;
	description: string;
	items: CreativeMedia[];
};

type ActiveMedia = {
	sectionIndex: number;
	itemIndex: number;
};

export default function CreativeStudioGallery({
	sections,
}: {
	sections: CreativeSection[];
}) {
	const rails = useRef<Record<string, HTMLDivElement | null>>({});

	const [active, setActive] = useState<ActiveMedia | null>(null);

	const [canScroll, setCanScroll] = useState<Record<string, boolean>>({});

	const totalMedia = sections.reduce(
		(sum, section) => sum + section.items.length,
		0,
	);

	const currentSection = active ? sections[active.sectionIndex] : undefined;

	const currentItem = active
		? currentSection?.items[active.itemIndex]
		: undefined;

	/* =====================================================
	   DETECT HORIZONTAL OVERFLOW
	   ===================================================== */

	useEffect(() => {
		const update = () => {
			const next: Record<string, boolean> = {};

			for (const section of sections) {
				const rail = rails.current[section.id];

				next[section.id] = Boolean(
					rail && rail.scrollWidth > rail.clientWidth + 3,
				);
			}

			setCanScroll(next);
		};

		const observer = new ResizeObserver(update);

		for (const rail of Object.values(rails.current)) {
			if (rail) observer.observe(rail);
		}

		window.addEventListener("resize", update);

		return () => {
			observer.disconnect();
			window.removeEventListener("resize", update);
		};
	}, [sections]);

	/* =====================================================
	   LIGHTBOX NAVIGATION
	   ===================================================== */

	const moveLightbox = useCallback(
		(direction: number) => {
			setActive((current) => {
				if (!current) return null;

				const count = sections[current.sectionIndex]?.items.length ?? 0;

				if (!count) return null;

				return {
					sectionIndex: current.sectionIndex,
					itemIndex: (current.itemIndex + direction + count) % count,
				};
			});
		},
		[sections],
	);

	useEffect(() => {
		if (!active) return;

		const previousOverflow = document.body.style.overflow;

		document.body.style.overflow = "hidden";

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setActive(null);
			}

			if (event.key === "ArrowRight") {
				moveLightbox(1);
			}

			if (event.key === "ArrowLeft") {
				moveLightbox(-1);
			}
		};

		window.addEventListener("keydown", onKeyDown);

		return () => {
			document.body.style.overflow = previousOverflow;

			window.removeEventListener("keydown", onKeyDown);
		};
	}, [active, moveLightbox]);

	/* =====================================================
	   CAROUSEL NAVIGATION
	   ===================================================== */

	const scrollRail = (id: string, direction: number) => {
		const rail = rails.current[id];

		if (!rail) return;

		rail.scrollBy({
			left: direction * rail.clientWidth * 0.75,
			behavior: "smooth",
		});
	};

	return (
		<div className="page-shell" dir="ltr">
			{/* =================================================
			    HERO
			   ================================================= */}

			<header className="relative isolate mb-8 overflow-hidden rounded-[28px] border border-ruya-rose/20 bg-ruya-surface px-6 py-10 sm:px-10 sm:py-12">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute -right-20 -top-36 -z-10 h-96 w-96 rounded-full bg-ruya-rose/15 blur-3xl"
				/>

				<div
					aria-hidden="true"
					className="pointer-events-none absolute -bottom-36 left-1/3 -z-10 h-72 w-72 rounded-full bg-ruya-mauve/10 blur-3xl"
				/>

				<p className="eyebrow">RUYA / CREATIVE STUDIO</p>

				<h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight font-medium tracking-tight text-ruya-ivory sm:text-5xl">
					Stories in <span className="text-ruya-rose-gold">Motion.</span>
				</h1>

				<p className="mt-4 max-w-xl text-sm leading-7 text-ruya-muted sm:text-base">
					An evolving collection of cinematic stories, sensory product worlds,
					and unexpected creative moments.
				</p>

				<div className="mt-7 flex flex-wrap items-center gap-3 text-[11px] font-semibold tracking-[0.15em] text-ruya-muted uppercase">
					<span className="rounded-full border border-ruya-line bg-ui-fill/4 px-3 py-1.5">
						03 creative worlds
					</span>

					{totalMedia > 0 && (
						<span className="rounded-full border border-ruya-line bg-ui-fill/4 px-3 py-1.5">
							{totalMedia} visual {totalMedia === 1 ? "piece" : "pieces"}
						</span>
					)}
				</div>
			</header>

			{/* =================================================
			    THREE VISIBLE COLLECTIONS
			   ================================================= */}

			<main className="space-y-9 pb-10 sm:space-y-11">
				{sections.map((section, sectionIndex) => (
					<section key={section.id} aria-labelledby={`${section.id}-title`}>
						<div className="mb-4 flex items-end justify-between gap-3">
							<div className="min-w-0">
								<p className="mb-1 text-[11px] font-semibold tracking-[0.14em] text-ruya-rose-gold uppercase">
									{section.index} / {section.label}
								</p>

								<h2
									id={`${section.id}-title`}
									className="text-xl leading-tight font-semibold text-ruya-text sm:text-2xl"
								>
									{section.title}
								</h2>

								<p className="mt-1.5 max-w-2xl text-xs leading-6 text-ruya-muted sm:text-sm">
									{section.description}
								</p>
							</div>

							{canScroll[section.id] && (
								<div className="flex shrink-0 items-center gap-2 pb-1">
									<button
										type="button"
										aria-label={`Scroll ${section.title} left`}
										onClick={() => scrollRail(section.id, -1)}
										className="flex h-9 w-9 items-center justify-center rounded-full border border-ruya-line text-ruya-text transition hover:border-ruya-rose/60 hover:bg-ruya-rose/10"
									>
										<ArrowLeft size={17} />
									</button>

									<button
										type="button"
										aria-label={`Scroll ${section.title} right`}
										onClick={() => scrollRail(section.id, 1)}
										className="flex h-9 w-9 items-center justify-center rounded-full border border-ruya-line text-ruya-text transition hover:border-ruya-rose/60 hover:bg-ruya-rose/10"
									>
										<ArrowRight size={17} />
									</button>
								</div>
							)}
						</div>

						{/* EMPTY COLLECTION */}

						{section.items.length === 0 ? (
							<div className="flex min-h-28 items-center gap-4 rounded-2xl border border-dashed border-ruya-line bg-ruya-surface/55 px-5 py-5">
								<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ruya-rose/10 text-ruya-rose">
									<Film size={21} strokeWidth={1.6} />
								</div>

								<div>
									<p className="text-sm font-medium text-ruya-text">
										Coming into focus.
									</p>

									<p className="mt-1 text-xs text-ruya-muted">
										New visual stories will appear here.
									</p>
								</div>
							</div>
						) : (
							/* HORIZONTAL MEDIA RAIL */

							<div
								ref={(element) => {
									rails.current[section.id] = element;
								}}
								dir="ltr"
								className="flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain scroll-smooth pb-2 scrollbar-none [&::-webkit-scrollbar]:hidden"
							>
								{section.items.map((item, itemIndex) => (
									<button
										key={item.id}
										type="button"
										onClick={() =>
											setActive({
												sectionIndex,
												itemIndex,
											})
										}
										aria-label={`Open ${item.title}, ${item.type}`}
										className="group w-38.75 shrink-0 snap-start text-left sm:w-46.25 lg:w-51.25"
									>
										<div className="relative aspect-4/5 overflow-hidden rounded-2xl border border-ruya-line bg-ruya-aubergine">
											{item.type === "image" || item.poster ? (
												<Image
													src={item.poster ?? item.src}
													alt={item.title}
													fill
													unoptimized
													sizes="(max-width: 640px) 155px, (max-width: 1024px) 185px, 205px"
													className="object-cover transition duration-500 group-hover:scale-105"
												/>
											) : (
												<video
													src={`${item.src}#t=0.1`}
													preload="metadata"
													muted
													playsInline
													aria-hidden="true"
													tabIndex={-1}
													className="pointer-events-none h-full w-full object-cover transition duration-500 group-hover:scale-105"
												/>
											)}

											<span className="absolute left-2.5 top-2.5 flex items-center gap-1 rounded-full border border-white/15 bg-black/50 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur-md">
												{item.type === "video" ? (
													<Film size={12} />
												) : (
													<ImageIcon size={12} />
												)}

												{item.type === "video" ? "FILM" : "IMAGE"}
											</span>

											{item.type === "video" && (
												<span className="absolute inset-0 flex items-center justify-center">
													<span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-sm transition group-hover:scale-110 group-hover:bg-ruya-rose/60">
														<Play size={20} fill="currentColor" />
													</span>
												</span>
											)}
										</div>

										<p className="mt-2 truncate text-sm font-medium text-ruya-text transition group-hover:text-ruya-rose-gold">
											{item.title}
										</p>
									</button>
								))}
							</div>
						)}
					</section>
				))}
			</main>

			{/* =================================================
			    FULL-SCREEN MEDIA PREVIEW
			   ================================================= */}

			{active && currentSection && currentItem && (
				<div
					className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-3 backdrop-blur-xl sm:p-6"
					onMouseDown={(event) => {
						if (event.target === event.currentTarget) {
							setActive(null);
						}
					}}
				>
					<div
						role="dialog"
						aria-modal="true"
						aria-label={currentItem.title}
						className="flex max-h-[95vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#131019] shadow-2xl"
					>
						<div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5">
							<div className="min-w-0">
								<p className="truncate text-sm font-semibold text-white">
									{currentItem.title}
								</p>

								<p className="text-[11px] text-white/50">
									{currentSection.title} · {active.itemIndex + 1}/
									{currentSection.items.length}
								</p>
							</div>

							<button
								type="button"
								aria-label="Close preview"
								onClick={() => setActive(null)}
								className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition hover:bg-white/10"
							>
								<X size={19} />
							</button>
						</div>

						<div className="relative flex h-[min(77vh,760px)] min-h-0 items-center justify-center bg-black">
							{currentItem.type === "image" ? (
								<Image
									key={currentItem.id}
									src={currentItem.src}
									alt={currentItem.title}
									fill
									unoptimized
									sizes="95vw"
									className="object-contain"
								/>
							) : (
								<video
									key={currentItem.id}
									src={currentItem.src}
									poster={currentItem.poster}
									controls
									autoPlay
									playsInline
									preload="metadata"
									className="h-full w-full object-contain"
								/>
							)}
						</div>

						{currentSection.items.length > 1 && (
							<div className="flex items-center justify-between border-t border-white/10 px-4 py-3">
								<button
									type="button"
									onClick={() => moveLightbox(-1)}
									className="flex items-center gap-2 rounded-lg px-2 py-1 text-xs text-white/80 hover:bg-white/10"
								>
									<ArrowLeft size={17} />
									Previous
								</button>

								<button
									type="button"
									onClick={() => moveLightbox(1)}
									className="flex items-center gap-2 rounded-lg px-2 py-1 text-xs text-white/80 hover:bg-white/10"
								>
									Next
									<ArrowRight size={17} />
								</button>
							</div>
						)}
					</div>
				</div>
			)}
		</div>
	);
}
