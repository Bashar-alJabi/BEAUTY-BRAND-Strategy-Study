import BrandSymbol from "@/components/BrandSymbol";
import { BRAND } from "@/config/brand";
import Link from "next/link";

/* =========================================================
   WEBSITE SECTIONS
   ========================================================= */

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
		"The value we create, the eight customer needs and thoughtful additions to the journey experience.",
		"/customer-needs-value",
	],
	[
		"Brand Identity",
		"RUYA's visual identity, color system, typography, product mockups and ritual packaging concepts.",
		"/brand-identity",
	],
	[
		"Marketing Strategy",
		"Psychographic targeting, intent-led journeys, campaign strategy, funnel, channels, launch planning and creative direction.",
		"/marketing-strategy",
	],
	[
		"AI Prompts",
		"AI-driven prompts and frameworks used to develop the brand.",
		"/ai-prompts",
	],
] as const;

/* =========================================================
   HOME PAGE
   ========================================================= */

export default function Home() {
	return (
		<div className="page-shell">
			{/* =====================================================
			    HERO
			   ===================================================== */}

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
						<span className="brand-name-ar">{BRAND.nameArabic}</span>
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
						<strong className="text-ruya-text">{BRAND.name}</strong> كـBeauty
						Ecosystem يجمع بين العناية والتعبير عن المظهر، ويمتد عبر{" "}
						<strong className="text-ruya-text">
							Skincare، Haircare، Makeup، Beauty Tools وAccessories
						</strong>
						، ضمن تجربة تبدأ من احتياج المستخدم والنتيجة التي يريد الوصول إليها.
					</p>

					<div className="mx-auto my-8 h-px w-16 bg-ruya-line" />

					{/* CORE IDEA */}

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
							من فئة منتج يجب أن يبحث عنها. والبراند يحوّل هذه النية إلى رحلة
							واضحة تجمع المنتجات والأدوات والخطوات المناسبة، وتقوده إلى{" "}
							<strong className="text-ruya-text">النتيجة التي يريدها</strong>{" "}
							بدون إغراقه بالخيارات.
						</p>
					</div>

					{/* BRAND STATEMENT */}

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

			{/* =====================================================
			    BRAND SCOPE
			   ===================================================== */}

			<section className="section">
				<div className="section-header">
					<p className="eyebrow">BRAND SCOPE</p>

					<h2 className="section-title" dir="ltr">
						What {BRAND.name} Covers
					</h2>

					<p>
						يمتد نطاق {BRAND.name} عبر فئات ومنتجات وأدوات متعددة ضمن جانبين
						متكاملين من تجربة الجمال: Care وExpress.
					</p>
				</div>

				<div className="grid grid-2">
					{/* CARE */}

					<div className="card care">
						<p className="label">CARE</p>

						<h3 className="text-2xl font-bold text-ruya-text">العناية</h3>

						<p className="mt-3 leading-7">
							Hair Care · Skin Care · Body Care · Treatments · Routines · Care
							Tools · Beauty Devices
						</p>

						<p className="mt-4">
							منتجات وأدوات تهتم بالعناية والتحضير والحفاظ على البشرة والشعر
							والجسم، بحسب احتياج كل Journey.
						</p>
					</div>

					{/* EXPRESS */}

					<div className="card express">
						<p className="label">EXPRESS</p>

						<h3 className="text-2xl font-bold text-ruya-text">التعبير</h3>

						<p className="mt-3 leading-7">
							Makeup · Styling · Beauty Tools · Brushes · Accessories · Gadgets
							· Styling Devices
						</p>

						<p className="mt-4">
							منتجات وأدوات تمنح المستخدم حرية تشكيل الـLook والـStyle الذي
							يناسب شخصيته والمناسبة واللحظة الحالية.
						</p>
					</div>
				</div>

				{/* JOURNEY PRINCIPLE */}

				<div className="highlight mt-5">
					<h4>One Beauty Ecosystem. Different Journeys.</h4>

					<p>
						لا تتطلب كل Journey جميع فئات المنتجات. تُختار منتجات العناية
						والميكاب والأدوات المناسبة بحسب الـIntent والنتيجة المطلوبة، ثم
						تُنظّم ضمن خطوات وإرشادات واضحة.
					</p>

					<p className="text-ruya-text">
						<strong>
							The Journey determines what belongs in the experience.
						</strong>
					</p>
				</div>
			</section>

			{/* =====================================================
			    EXPERIENCE VALUE — SHORT INTRODUCTION ONLY
			   ===================================================== */}

			<section className="section">
				<div className="grid grid-2">
					<div className="card journey">
						<span className="label">CURATED EXPERIENCE</span>

						<h3>Beyond Individual Products</h3>

						<p className="mt-3">
							لا تقتصر قيمة RUYA على اختيار المنتجات والأدوات، بل تشمل تنظيم
							التجربة: ما الذي تحتاجه، بأي ترتيب تستخدمه، وكيف يصل بك إلى
							النتيجة المطلوبة.
						</p>
					</div>

					<div className="card express">
						<span className="label">THOUGHTFUL DETAILS</span>

						<h3>A Little Extra, When It Fits</h3>

						<p className="mt-3">
							يمكن أن تتضمن بعض الـJourneys إضافة اختيارية مدروسة تتناسب مع
							الـIntent: لحظة استمتاع صغيرة أو منتج أو أداة جمالية تضيف تجربة
							جديدة.
						</p>

						<Link
							href="/customer-needs-value"
							className="mt-5 inline-block text-sm font-semibold text-ruya-journey transition hover:text-ruya-express"
						>
							Explore Customer Value →
						</Link>
					</div>
				</div>
			</section>

			{/* =====================================================
			    PROJECT SECTIONS
			   ===================================================== */}

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

			{/* =====================================================
			    FOOTER
			   ===================================================== */}

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
