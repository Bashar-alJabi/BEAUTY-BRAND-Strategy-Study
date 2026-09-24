import Link from "next/link";

const sections = [
	[
		"Research",
		"Market analysis, competitors and the problem discovered.",
		"/research",
	],
	[
		"Brand Strategy",
		"The strategic solution: from Product Categories to User Intent, Journey and Result.",
		"/brand-strategy",
	],
	[
		"Audience & Insight",
		"Who the user is and what we understand about their behavior and needs.",
		"/audience-insight",
	],
	[
		"Customer Needs & Value",
		"The value we create and the customer needs behind the experience.",
		"/customer-needs-value",
	],
	[
		"AI Prompts",
		"AI-driven prompts and frameworks used to develop the brand.",
		"/ai-prompts",
	],
] as const;

export default function Home() {
	return (
		<div className="page-shell">
			<header className="hero">
				<p className="eyebrow">BEAUTY BRAND STRATEGY</p>

				<h1>Beauty Brand</h1>

				<div className="mx-auto mt-8 max-w-3xl text-center">
					<p className="text-lg leading-8 text-[#c9c4cf] md:text-xl md:leading-9">
						هذا المشروع يطوّر{" "}
						<strong className="text-white">Beauty Brand</strong> يبدأ من العناية
						بالشعر والبشرة، ويتوسع ليشمل الـ{" "}
						<strong className="text-white">Makeup</strong> وكل ما يرتبط بالجمال
						والتعبير عن المظهر.
					</p>

					<div className="mx-auto my-8 h-px w-16 bg-white/15" />

					<div className="rounded-2xl border border-[#c9a9ff]/15 bg-white/2 p-6 text-center">
						<p className="mb-3 text-sm font-bold uppercase tracking-[.16em] text-[#c9a9ff]">
							THE CORE IDEA
						</p>

						<div className="final-core">INTENT → JOURNEY → RESULT</div>

						<p className="mt-4 text-lg leading-8 text-[#c9c4cf]">
							المستخدم يبدأ من{" "}
							<strong className="text-white">ما يريده اليوم</strong>، وليس من
							منتج يجب أن يبحث عنه، والبراند يحوّل هذه النية إلى رحلة واضحة
							تقوده إلى{" "}
							<strong className="text-white">النتيجة التي يريدها</strong>، بدون
							إغراقه بالخيارات.
						</p>
					</div>

					<div className="mx-auto mt-10 max-w-4xl text-center">
						<p
							className="font-extrabold leading-[1.1] tracking-tight"
							style={{
								fontSize: "clamp(1.8rem, 3.5vw, 3.8rem)",
							}}
						>
							<span className="text-white">The user chooses the outcome.</span>
							<br />
							<span className="bg-linear-to-r from-[#e8b59b] via-[#ff4b78] to-[#c9a9ff] bg-clip-text text-transparent">
								We simplify the journey.
							</span>
						</p>
					</div>
				</div>

				<div className="mx-auto mt-8 h-1 w-28 rounded-full bg-linear-to-l from-[#c9a9ff] via-[#ff4b78] to-[#e8b59b]" />
			</header>

			<section className="section">
				<div className="section-header">
					<p className="eyebrow">BRAND SCOPE</p>

					<h2 className="section-title">What the Beauty Brand Covers</h2>

					<p>
						البراند يمكن أن يمتد عبر فئات Beauty متعددة، لكنها تتحرك ضمن جانبين
						أساسيين من تجربة الجمال.
					</p>
				</div>

				<div className="grid grid-2">
					<div className="card care">
						<p className="label">CARE</p>

						<h3 className="text-2xl font-extrabold text-white">العناية</h3>

						<p className="mt-3 leading-7">
							Hair Care · Skin Care · Body Care · Treatments · Routines · Care
							Tools
						</p>
					</div>

					<div className="card express">
						<p className="label">EXPRESS</p>

						<h3 className="text-2xl font-extrabold text-white">التعبير</h3>

						<p className="mt-3 leading-7">
							Makeup · Styling · Accessories · Beauty Tools · Devices وكل ما
							يمنح المستخدم حرية التعبير عن مظهره.
						</p>
					</div>
				</div>
			</section>

			<section className="grid grid-2">
				{sections.map(([title, description, href]) => (
					<Link
						key={title}
						href={href}
						className="card group transition hover:-translate-y-1 hover:border-[#ff4b78]/50"
					>
						<h2 className="mt-1 text-xl font-extrabold text-white group-hover:text-[#ff9bb5]">
							{title}
						</h2>

						<p className="mt-2 text-[#a6a0b0]">{description}</p>

						<span className="mt-5 inline-block text-xs font-bold text-[#c9a9ff]">
							OPEN SECTION →
						</span>
					</Link>
				))}
			</section>

			<footer className="footer">Beauty Brand</footer>
		</div>
	);
}
