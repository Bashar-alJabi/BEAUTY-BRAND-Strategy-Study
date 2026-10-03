import BrandSymbol from "@/components/BrandSymbol";
import { BRAND } from "@/config/brand";
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
				<p className="eyebrow">{BRAND.name} BRAND STRATEGY</p>

				<div className="relative mx-auto mt-8 flex w-fit items-center justify-center">
					<div
						className="absolute inset-5 rounded-full bg-ruya-express/10 blur-3xl"
						aria-hidden="true"
					/>

					<BrandSymbol
						className="relative h-36 w-36 md:h-44 md:w-44"
						priority
					/>
				</div>

				<div className="mt-3 flex flex-col items-center">
					<h1 dir="ltr" className="mb-0!">
						<span className="brand-name-en">{BRAND.name}</span>
					</h1>

					<div
						dir="rtl"
						className="mt-2 font-arabic text-[2.6rem] font-medium leading-tight md:text-[3.4rem]"
					>
						<span className="brand-name-ar origin-center scale-x-[1.16]">
							{BRAND.nameArabic}
						</span>
					</div>

					<div className="mt-5 h-px w-12 bg-linear-to-r from-transparent via-ruya-express/60 to-transparent" />

					<p
						dir="ltr"
						className="mx-auto mt-5 text-xs font-semibold tracking-[0.24em] md:text-sm"
					>
						<span className="brand-slogan">{BRAND.slogan}</span>
					</p>
				</div>

				<div className="mx-auto mt-8 max-w-3xl text-center">
					<p className="text-lg leading-8 text-ruya-muted md:text-xl md:leading-9">
						هذا المشروع يطوّر براند{" "}
						<strong className="text-ruya-text">{BRAND.name}</strong> يبدأ من
						العناية بالشعر والبشرة، ويتوسع ليشمل الـ{" "}
						<strong className="text-ruya-text">Makeup</strong> وكل ما يرتبط
						بالجمال والتعبير عن المظهر.
					</p>

					<div className="mx-auto my-8 h-px w-16 bg-ruya-line" />

					<div className="rounded-2xl border border-ruya-journey/20 bg-ui-fill/3 p-6 text-center">
						<p className="mb-3 text-sm font-semibold uppercase tracking-[.16em] text-ruya-journey">
							THE CORE IDEA
						</p>

						<div className="final-core" dir="ltr">
							INTENT → JOURNEY → RESULT
						</div>

						<p className="mt-4 text-lg leading-8 text-ruya-muted">
							المستخدم يبدأ من{" "}
							<strong className="text-ruya-text">ما يريده اليوم</strong>، وليس
							من منتج يجب أن يبحث عنه، والبراند يحوّل هذه النية إلى رحلة واضحة
							تقوده إلى{" "}
							<strong className="text-ruya-text">النتيجة التي يريدها</strong>،
							بدون إغراقه بالخيارات.
						</p>
					</div>

					<div className="mx-auto mt-10 max-w-4xl text-center">
						<p
							dir="ltr"
							className="font-display font-medium leading-[1.1] tracking-tight"
							style={{
								fontSize: "clamp(1.8rem, 3.5vw, 3.8rem)",
							}}
						>
							<span className="text-ruya-text">
								The user chooses the outcome.
							</span>

							<br />

							<span className="bg-linear-to-r from-ruya-care via-ruya-express to-ruya-journey bg-clip-text text-transparent">
								We simplify the journey.
							</span>
						</p>
					</div>
				</div>

				<div className="mx-auto mt-8 h-1 w-28 rounded-full bg-linear-to-l from-ruya-journey via-ruya-express to-ruya-care" />
			</header>

			<section className="section">
				<div className="section-header">
					<p className="eyebrow">BRAND SCOPE</p>

					<h2 className="section-title" dir="ltr">
						What {BRAND.name} Covers
					</h2>

					<p>
						البراند يمكن أن يمتد عبر فئات Beauty متعددة، لكنها تتحرك ضمن جانبين
						أساسيين من تجربة الجمال.
					</p>
				</div>

				<div className="grid grid-2">
					<div className="card care">
						<p className="label">CARE</p>

						<h3 className="text-2xl font-bold text-ruya-text">العناية</h3>

						<p className="mt-3 leading-7">
							Hair Care · Skin Care · Body Care · Treatments · Routines · Care
							Tools
						</p>
					</div>

					<div className="card express">
						<p className="label">EXPRESS</p>

						<h3 className="text-2xl font-bold text-ruya-text">التعبير</h3>

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
						className="card group transition hover:-translate-y-1 hover:border-ruya-express/50"
					>
						<h2 className="mt-1 text-xl font-bold text-ruya-text transition group-hover:text-ruya-express">
							{title}
						</h2>

						<p className="mt-2 text-ruya-muted">{description}</p>

						<span className="mt-5 inline-block text-xs font-semibold text-ruya-journey">
							OPEN SECTION →
						</span>
					</Link>
				))}
			</section>

			<footer className="footer">
				<div
					dir="ltr"
					className="font-display text-base font-medium tracking-[0.16em]"
				>
					<span className="brand-name-en">{BRAND.name}</span>
				</div>

				<div className="mt-1">
					<span className="brand-name-ar">{BRAND.nameArabic}</span>
				</div>

				<div dir="ltr" className="mt-2 text-[0.68rem] tracking-[0.16em]">
					<span className="brand-slogan">{BRAND.slogan}</span>
				</div>
			</footer>
		</div>
	);
}
