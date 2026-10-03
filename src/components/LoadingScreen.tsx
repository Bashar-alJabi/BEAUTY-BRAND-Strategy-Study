"use client";

import BrandSymbol from "@/components/BrandSymbol";
import { BRAND } from "@/config/brand";
import { BRAND_GRADIENTS } from "@/config/brandColors";
import { useEffect, useRef } from "react";

const LOADING_DURATION = 1000;

export default function LoadingScreen() {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = containerRef.current;

		if (!container) return;

		document.body.style.overflow = "hidden";

		const hideTimer = window.setTimeout(() => {
			container.classList.add("site-loader-hidden");

			const removeFromViewTimer = window.setTimeout(() => {
				container.style.display = "none";
				document.body.style.overflow = "";
			}, 500);

			return () => {
				window.clearTimeout(removeFromViewTimer);
			};
		}, LOADING_DURATION);

		return () => {
			window.clearTimeout(hideTimer);
			document.body.style.overflow = "";
		};
	}, []);

	return (
		<div
			ref={containerRef}
			className="site-loader"
			role="status"
			aria-label={`Loading ${BRAND.name}`}
		>
			<div className="site-loader-aura" />

			<div className="site-loader-content">
				<div className="relative flex h-28 w-28 items-center justify-center">
					<div
						className="absolute inset-4 rounded-full bg-ruya-express/10 blur-2xl"
						aria-hidden="true"
					/>

					<BrandSymbol className="relative h-28 w-28" priority />
				</div>

				<p dir="ltr" className="site-loader-brand">
					<span
						className="inline-block bg-clip-text text-transparent"
						style={{
							backgroundImage: BRAND_GRADIENTS.primary,
						}}
					>
						{BRAND.name}
					</span>
				</p>

				<p className="mt-1 text-sm font-semibold">
					<span
						className="inline-block bg-clip-text text-transparent"
						style={{
							backgroundImage: BRAND_GRADIENTS.primary,
						}}
					>
						{BRAND.nameArabic}
					</span>
				</p>

				<div className="site-loader-flow" dir="ltr">
					<span>INTENT</span>
					<i>→</i>
					<span>JOURNEY</span>
					<i>→</i>
					<span>RESULT</span>
				</div>

				<div className="site-loader-progress">
					<span />
				</div>
			</div>
		</div>
	);
}
