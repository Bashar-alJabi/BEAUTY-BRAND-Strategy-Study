"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
	["Research", "/research"],
	["Brand Strategy", "/brand-strategy"],
	["Audience & Insight", "/audience-insight"],
	["Customer Needs & Value", "/customer-needs-value"],
	["AI Prompts", "/ai-prompts"],
] as const;

export default function Sidebar() {
	const [open, setOpen] = useState(false);

	return (
		<>
			<button
				className="fixed right-4 top-4 z-50 rounded-lg border border-white/10 bg-[#121018] px-3 py-2 text-white lg:hidden"
				onClick={() => setOpen(true)}
				aria-label="فتح القائمة"
			>
				☰
			</button>

			{open && (
				<button
					className="fixed inset-0 z-40 bg-black/60 lg:hidden"
					onClick={() => setOpen(false)}
					aria-label="إغلاق القائمة"
				/>
			)}

			<aside
				className={`fixed right-0 top-0 z-50 flex h-screen w-72 max-w-[86vw] flex-col overflow-hidden border-l border-white/10 bg-[#111017] p-5 shadow-2xl transition-transform duration-300 lg:w-72 lg:translate-x-0 ${
					open ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<div className="mb-7 flex items-center justify-between">
					<Link
						href="/"
						onClick={() => setOpen(false)}
						className="flex items-center gap-4"
						aria-label="الصفحة الرئيسية"
					>
						<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#ff4b78]/25 bg-[#ff4b78]/5 text-[#ff9bb5] transition hover:border-[#ff4b78]/50 hover:bg-[#ff4b78]/10">
							<svg
								viewBox="0 0 24 24"
								className="h-6 w-6"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								aria-hidden="true"
							>
								<path d="m3 10 9-7 9 7" />
								<path d="M5 9v11h14V9M9 20v-6h6v6" />
							</svg>
						</div>

						<div>
							<div className="text-sm font-extrabold tracking-[.14em] text-[#ff9bb5]">
								BEAUTY BRAND
							</div>
							<div className="mt-1 text-xl font-extrabold text-white">
								Strategy Study
							</div>
						</div>
					</Link>

					<button
						className="text-2xl text-white lg:hidden"
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
							className="rounded-xl border border-white/5 bg-white/2 px-4 py-3.5 text-base font-bold text-[#b8b2c0] transition hover:border-[#ff4b78]/30 hover:bg-[#ff4b78]/6 hover:text-white"
						>
							{label}
						</Link>
					))}
				</nav>
			</aside>
		</>
	);
}
