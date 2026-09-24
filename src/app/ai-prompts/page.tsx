import Link from "next/link";

export default function AIPromptsPage() {
	return (
		<div className="page-shell">
			<header className="hero">
				<p className="eyebrow">AI PROMPTS FRAMEWORK</p>

				<h1>Brand Development Prompts</h1>

				<p>
					نستخدم الـAI لتطوير عناصر البراند المختلفة انطلاقًا من الفكرة
					الأساسية: فهم ما يريده المستخدم، وتحويله إلى Beauty Journey واضحة
					توصله إلى النتيجة التي يريدها.
				</p>
			</header>

			<section className="grid grid-3">
				{[
					[
						"Prompt 01",
						"Naming",
						"اسم واسع ومرن يستطيع أن يعيش فوق الـBeauty Ecosystem والـJourneys المستقبلية.",
						"/ai-prompts/naming",
						"care",
					],
					[
						"Prompt 02",
						"Visual Identity + Logo",
						"هوية بصرية ثابتة ومرنة تعبّر عن الاختيار، التغيّر وBeauty Journeys المختلفة.",
						"/ai-prompts/identity",
						"journey",
					],
					[
						"Prompt 03",
						"Slogan",
						"عبارة دائمة تعبّر عن فكرة الاختيار والنتيجة وتجربة البراند بدون أن ترتبط بفئة محددة.",
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
