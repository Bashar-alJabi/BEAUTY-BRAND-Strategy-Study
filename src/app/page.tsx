import Link from "next/link";

const sections = [
	[
		"Research",
		"Market analysis, competitors and the problem discovered.",
		"/research",
	],
	[
		"Strategy",
		"From product categories to user intent and CARE → EXPRESS.",
		"/strategy",
	],
	["Experience", "Insight and the Beauty Journey model.", "/insight"],
	[
		"Audience",
		"The people, contexts and psychographics behind the idea.",
		"/audience",
	],
	[
		"Brand System",
		"Philosophy, promise, positioning and value proposition.",
		"/brand",
	],
	["Value & Needs", "The full value analysis and eight need layers.", "/value"],
	["AI Prompts", "Naming, visual identity and slogan strategy.", "/prompts"],
] as const;

export default function Home() {
	return (
		<div className="page-shell">
			<header className="hero">
				<p className="eyebrow">BEAUTY BRAND STRATEGY · AI PROMPTS FRAMEWORK</p>
				<h1>
					Beauty Brand
					<br />
					Care → Express
				</h1>
				<p>
					من Beauty Brand منظّم حول المنتجات إلى{" "}
					<strong className="text-white">
						Intent-Centric Beauty Ecosystem
					</strong>
					: المستخدم يحدد ما يريد اليوم، والبراند يحوّل اختياره إلى رحلة جمال
					واضحة تجمع العناية والتعبير للوصول إلى النتيجة التي يريدها.
				</p>
				<div className="mx-auto mt-7 h-1 w-28 rounded-full bg-linear-to-l from-[#c9a9ff] via-[#ff4b78] to-[#e8b59b]" />
			</header>
			<section className="section text-center">
				<p className="label">THE CORE IDEA</p>
				<div className="final-core">INTENT → JOURNEY → RESULT</div>
				<p className="text-lg text-white">
					داخل فلسفة <strong>CARE → EXPRESS</strong>
				</p>
			</section>
			<section className="grid grid-2">
				{sections.map(([title, description, href]) => (
					<Link
						key={href}
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
