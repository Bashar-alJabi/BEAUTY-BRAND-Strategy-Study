"use client";

import { Sparkles } from "lucide-react";
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
			aria-label="Loading Beauty Brand"
		>
			<div className="site-loader-aura" />

			<div className="site-loader-content">
				<div className="site-loader-logo">
					<Sparkles size={40} strokeWidth={1.7} aria-hidden="true" />
				</div>

				<p className="site-loader-brand">BEAUTY BRAND</p>

				<div className="site-loader-flow">
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
