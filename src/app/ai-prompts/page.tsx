import Link from "next/link";
export default function AIPromptsPage() {
	return (
		<div className="page-shell">
			<header className="hero">
				<p className="eyebrow">AI PROMPTS FRAMEWORK</p>
				<h1>Prompts</h1>
				{/* <p>
					بعد بناء Product → Market Analysis → Competitor Analysis → Consumer
					Problem → Insight → Target Audience → Value Proposition → Brand
					Architecture → Differentiation، نستخدم الـAI لحل ثلاث مشاكل مختلفة.
				</p> */}
				<p>نستخدم الـ AI لحل مشاكل مختلفة.</p>
			</header>
			<section className="grid grid-3">
				{[
					[
						"Prompt 01",
						"Naming",
						"اسم يستطيع أن يعيش فوق الـEcosystem والـJourneys كلها.",
						"/ai-prompts/naming",
						"care",
					],
					[
						"Prompt 02",
						"Visual Identity + Logo",
						"ترجمة CARE → EXPRESS إلى هوية ثابتة ونظام بصري مرن للـJourneys.",
						"/ai-prompts/identity",
						"journey",
					],
					[
						"Prompt 03",
						"Slogan",
						"اختصار فكرة الاختيار والمرونة والتعبير في عبارة قابلة للتذكر.",
						"/ai-prompts/slogan",
						"express",
					],
				].map(([label, title, text, href, tone]) => (
					<Link className={`card ${tone}`} href={href} key={href}>
						<span className="label">{label}</span>
						<h2>{title}</h2>
						<p>{text}</p>
						<span className="mt-5 inline-block text-sm font-bold text-[#c9a9ff]">
							OPEN PROMPT →
						</span>
					</Link>
				))}
			</section>
		</div>
	);
}
