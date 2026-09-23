"use client";

import Link from "next/link";
import { useState } from "react";

const primaryLinks = [
	["Overview", "/"],
	["Research", "/research"],
	["Strategy", "/strategy"],
	["Insight", "/insight"],
	["Journeys", "/journeys"],
	["Audience", "/audience"],
	["Brand", "/brand"],
	["Value Proposition", "/value"],
	["8 Needs", "/needs"],
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
				className={`fixed right-0 top-0 z-50 flex h-screen w-72 max-w-[86vw] flex-col overflow-hidden border-l border-white/10 bg-[#111017] p-4 shadow-2xl transition-transform duration-300 lg:w-64 lg:p-5 lg:translate-x-0 ${open ? "translate-x-0" : "translate-x-full"}`}
			>
				<div className="mb-4 flex items-start justify-between">
					<div>
						<p className="text-xs font-bold tracking-[.14em] text-[#ff9bb5]">
							BEAUTY BRAND
						</p>
						<h2 className="mt-1 text-xl font-extrabold text-white">
							Strategy Study
						</h2>
					</div>
					<button
						className="text-2xl text-white lg:hidden"
						onClick={() => setOpen(false)}
						aria-label="إغلاق القائمة"
					>
						×
					</button>
				</div>
				<nav className="flex flex-col gap-1" aria-label="التنقل الرئيسي">
					{primaryLinks.map(([label, href]) => (
						<Link
							key={href}
							href={href}
							onClick={() => setOpen(false)}
							className="rounded-lg px-3 py-1.5 text-sm font-bold text-[#a6a0b0] transition hover:bg-white/5 hover:text-white"
						>
							{label}
						</Link>
					))}
					<Link
						href="/prompts"
						onClick={() => setOpen(false)}
						className="mt-3 rounded-lg border border-[#ff4b78]/25 px-3 py-1.5 text-sm font-bold text-[#ff9bb5] transition hover:bg-[#ff4b78]/10"
					>
						Prompts
					</Link>
				</nav>
			</aside>
		</>
	);
}
