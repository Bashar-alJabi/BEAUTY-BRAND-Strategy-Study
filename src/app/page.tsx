import Link from "next/link";

const sections = [
	[
		"Research",
		"Market analysis, competitors and the problem discovered.",
		"/research",
	],
	[
		"Brand Strategy",
		"Brand philosophy, positioning, CARE → EXPRESS and the core strategy.",
		"/brand-strategy",
	],
	[
		"Audience & Insight",
		"Audience, insight and the people behind the idea.",
		"/audience-insight",
	],
	[
		"Customer Needs & Value",
		"Value proposition and the customer needs behind the experience.",
		"/customer-needs-value",
	],
	[
		"AI Prompts",
		"AI-driven prompts and frameworks for developing the brand.",
		"/ai-prompts",
	],
] as const;

export default function Home() {
	return (
		<div className="page-shell">
			<header className="hero">
				<p className="eyebrow">BEAUTY BRAND STRATEGY</p>

				<h1>
					Beauty Brand
					<br />
					Care → Express
				</h1>

				<div className="mx-auto mt-8 max-w-3xl text-center">
					<p className="text-lg leading-8 text-[#c9c4cf] md:text-xl md:leading-9">
						هذا المشروع يطوّر{" "}
						<strong className="text-white">Beauty Brand</strong> يبدأ من العناية
						بالشعر والبشرة، ويتوسع ليشمل الـ{" "}
						<strong className="text-white">Makeup</strong> وكل ما يساعد المستخدم
						على التعبير عن نفسه من خلال الجمال والمظهر.
					</p>

					<div className="mx-auto my-7 h-px w-16 bg-white/15" />

					<div className="grid gap-4 text-right md:grid-cols-2">
						<div className="rounded-2xl border border-[#e8b59b]/15 bg-white/2 p-5">
							<p className="mb-2 text-sm font-bold tracking-wider text-[#e8b59b]">
								CARE
							</p>
							<p className="leading-7 text-[#a6a0b0]">
								العناية بالشعر، البشرة والجسم، والروتين والأدوات المرتبطة بها.
							</p>
						</div>

						<div className="rounded-2xl border border-[#ff4b78]/15 bg-white/2 p-5">
							<p className="mb-2 text-sm font-bold tracking-wider text-[#ff9bb5]">
								EXPRESS
							</p>
							<p className="leading-7 text-[#a6a0b0]">
								الـMakeup، الـStyling، الـAccessories، الـBeauty Tools
								والابتكارات التي تمنح المستخدم حرية التعبير عن نفسه.
							</p>
						</div>
					</div>

					<p className="mt-7 text-lg leading-8 text-[#c9c4cf] md:text-xl md:leading-9">
						لكن البراند لا يقتصر على بيع هذه المنتجات كفئات منفصلة؛ بل يبدأ من{" "}
						<strong className="text-white">ما يريده المستخدم اليوم</strong>، ثم
						يحوّل هذا الاختيار إلى{" "}
						<strong className="text-white">Beauty Journey</strong> واضحة تجمع
						المنتجات والخطوات المناسبة للوصول إلى النتيجة التي يريدها.
					</p>
				</div>

				<div className="mx-auto mt-8 h-1 w-28 rounded-full bg-linear-to-l from-[#c9a9ff] via-[#ff4b78] to-[#e8b59b]" />
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
