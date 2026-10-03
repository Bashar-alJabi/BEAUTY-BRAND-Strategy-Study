"use client";

import BrandSymbol from "@/components/BrandSymbol";
import { BRAND } from "@/config/brand";
import { BRAND_GRADIENTS } from "@/config/brandColors";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
	["Research", "/research"],
	["Brand Strategy", "/brand-strategy"],
	["Audience & Insight", "/audience-insight"],
	["Customer Needs & Value", "/customer-needs-value"],
	["Brand Identity", "/brand-identity"],
	["AI Prompts", "/ai-prompts"],
] as const;

export default function Sidebar() {
	const [open, setOpen] = useState(false);

	return (
		<>
			<button
				className="fixed right-4 top-4 z-50 rounded-lg border border-ruya-line bg-ruya-surface px-3 py-2 text-ruya-text lg:hidden"
				onClick={() => setOpen(true)}
				aria-label="فتح القائمة"
			>
				☰
			</button>

			{open && (
				<button
					className="fixed inset-0 z-40 bg-ruya-bg/85 lg:hidden"
					onClick={() => setOpen(false)}
					aria-label="إغلاق القائمة"
				/>
			)}

			<aside
				className={`fixed right-0 top-0 z-50 flex h-screen w-72 max-w-[86vw] flex-col overflow-hidden border-l border-ruya-line bg-ruya-surface p-5 shadow-2xl transition-transform duration-300 lg:w-72 lg:translate-x-0 ${
					open ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<div className="mb-7 flex items-center justify-between">
					<Link
						href="/"
						onClick={() => setOpen(false)}
						className="group flex items-center gap-3"
						aria-label={`${BRAND.name} — الصفحة الرئيسية`}
					>
						<div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
							<div
								className="absolute inset-2 rounded-full bg-ruya-express/10 blur-xl transition group-hover:bg-ruya-express/15"
								aria-hidden="true"
							/>

							<BrandSymbol className="relative h-14 w-14 transition duration-300 group-hover:scale-105" />
						</div>

						<div>
							<div className="font-display text-xl font-medium tracking-[0.16em]">
								<span
									className="inline-block bg-clip-text text-transparent"
									style={{
										backgroundImage: BRAND_GRADIENTS.primary,
									}}
								>
									{BRAND.name}
								</span>
							</div>

							<div className="mt-0.5 text-sm font-semibold">
								<span
									className="inline-block bg-clip-text text-transparent"
									style={{
										backgroundImage: BRAND_GRADIENTS.primary,
									}}
								>
									{BRAND.nameArabic}
								</span>
							</div>

							<div className="mt-1 text-[0.6rem] uppercase tracking-[0.14em] text-ruya-muted">
								Strategy Study
							</div>
						</div>
					</Link>

					<button
						className="text-2xl text-ruya-text lg:hidden"
						onClick={() => setOpen(false)}
						aria-label="إغلاق القائمة"
					>
						×
					</button>
				</div>

				<nav className="flex flex-col gap-2" aria-label="التنقل الرئيسي">
					{navLinks.map(([label, href]) => (
						<Link
							key={href}
							href={href}
							onClick={() => setOpen(false)}
							className="rounded-xl border border-ruya-line bg-ruya-ivory/3 px-4 py-3.5 text-base font-semibold text-ruya-muted transition hover:border-ruya-express/35 hover:bg-ruya-express/8 hover:text-ruya-text"
						>
							{label}
						</Link>
					))}
				</nav>
			</aside>
		</>
	);
}
