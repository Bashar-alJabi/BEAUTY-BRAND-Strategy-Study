import Link from "next/link";

const prompts = [
	{
		label: "Prompt 01",
		title: "Naming",
		description:
			"ابتكار اسم واسع ومرن يستطيع أن يعيش فوق الـBeauty Ecosystem والـJourneys والتوسعات المستقبلية.",
		href: "/ai-prompts/naming",
		tone: "care",
	},
	{
		label: "Prompt 02",
		title: "Visual Identity + Logo",
		description:
			"استكشاف اتجاهات استراتيجية للرمز والهوية الأساسية تعبّر عن الاختيار، الحركة والـBeauty Journeys.",
		href: "/ai-prompts/identity",
		tone: "journey",
	},
	{
		label: "Prompt 03",
		title: "Slogan",
		description:
			"تطوير عبارة دائمة تعبّر عن فكرة الاختيار والنتيجة وتجربة البراند بدون الارتباط بفئة Beauty محددة.",
		href: "/ai-prompts/slogan",
		tone: "express",
	},
	{
		label: "Prompt 04",
		title: "Visual System",
		description:
			"تطوير اللغة البصرية للبراند من الألوان والخطوط إلى الـgraphic language والتغليف والتطبيقات الرقمية.",
		href: "/ai-prompts/visual-system",
		tone: "care",
	},
	{
		label: "Prompt 05",
		title: "Marketing Strategy + Advertising",
		description:
			"بناء Strategic Marketing & Advertising Playbook متكامل يعتمد على Psychographics والاحتياجات الثمانية والـIntent → Journey → Result، من الجمهور والرسائل إلى القنوات والـFunnel والحملات والقياس.",
		href: "/ai-prompts/marketing-strategy",
		tone: "journey",
	},
] as const;

export default function AIPromptsPage() {
	return (
		<div className="page-shell">
			<header className="hero">
				<p className="eyebrow">AI PROMPTS FRAMEWORK</p>

				<h1>Brand Development Prompts</h1>

				<p>
					مجموعة البرومبتات الاستراتيجية المستخدمة لتطوير البراند خطوة بخطوة، من
					الاسم والهوية الأساسية إلى النظام البصري والاستراتيجية التسويقية
					والإعلانية.
				</p>
			</header>

			<section className="grid grid-3">
				{prompts.map((prompt) => (
					<Link
						className={`card ${prompt.tone} group transition hover:-translate-y-1`}
						href={prompt.href}
						key={prompt.href}
					>
						<span className="label">{prompt.label}</span>

						<h2 className="transition group-hover:text-ruya-express">
							{prompt.title}
						</h2>

						<p>{prompt.description}</p>

						<span className="mt-5 inline-block text-sm font-semibold text-ruya-journey">
							OPEN PROMPT →
						</span>
					</Link>
				))}
			</section>
		</div>
	);
}
