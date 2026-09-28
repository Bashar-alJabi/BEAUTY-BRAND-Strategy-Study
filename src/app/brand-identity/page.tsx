"use client";

import BrandSymbol from "@/components/BrandSymbol";
import { BRAND } from "@/config/brand";
import Image from "next/image";

const palette = [
	{
		name: "Deep Aubergine",
		token: "--ruya-deep-aubergine",
		hex: "#24171F",
		role: "Primary Surface",
		description:
			"اللون الأساسي للأسطح الداكنة والـcards والعناصر التي تحتاج عمقًا بصريًا.",
	},
	{
		name: "Plum Brown",
		token: "--ruya-plum-brown",
		hex: "#3A2532",
		role: "Secondary Surface",
		description:
			"طبقة دافئة أفتح قليلًا تستخدم للفصل بين الأسطح وإضافة عمق بدون كسر هدوء الهوية.",
	},
	{
		name: "Dusty Rose",
		token: "--ruya-dusty-rose",
		hex: "#B86F7D",
		role: "Express / Accent",
		description: "لون التعبير والحركة والـinteractive accents داخل تجربة RUYA.",
	},
	{
		name: "Muted Mauve",
		token: "--ruya-muted-mauve",
		hex: "#B9A0BF",
		role: "Journey",
		description:
			"يرمز إلى الـJourney والانتقال والمرونة، ويعمل كلون accent أكثر هدوءًا.",
	},
	{
		name: "Soft Nude",
		token: "--ruya-soft-nude",
		hex: "#E8D5CC",
		role: "Soft Neutral",
		description: "لون محايد دافئ يخفف الهوية ويضيف إحساسًا ناعمًا وإنسانيًا.",
	},
	{
		name: "Warm Ivory",
		token: "--ruya-warm-ivory",
		hex: "#F4EFEA",
		role: "Primary Light",
		description: "اللون الفاتح الرئيسي للنصوص والمساحات الراقية والـcontrast.",
	},
	{
		name: "Charcoal Plum",
		token: "--ruya-charcoal-plum",
		hex: "#181217",
		role: "Main Background",
		description:
			"الخلفية الأساسية للموقع. داكنة، دافئة وأقل قسوة من الأسود الصريح.",
	},
	{
		name: "Warm Rose Gold",
		token: "--ruya-warm-rose-gold",
		hex: "#C98F7A",
		role: "Premium Accent",
		description:
			"Accent فاخر مستوحى من اللوغو، مناسب للتفاصيل الراقية والتغليف والـfoil.",
	},
] as const;

const semanticColors = [
	{
		label: "BACKGROUND",
		value: "Charcoal Plum",
		color: "var(--background)",
	},
	{
		label: "SURFACE",
		value: "Deep Aubergine",
		color: "var(--surface)",
	},
	{
		label: "CARE",
		value: "Warm Rose Gold",
		color: "var(--care)",
	},
	{
		label: "EXPRESS",
		value: "Dusty Rose",
		color: "var(--express)",
	},
	{
		label: "JOURNEY",
		value: "Muted Mauve",
		color: "var(--journey)",
	},
	{
		label: "TEXT",
		value: "Warm Ivory",
		color: "var(--foreground)",
	},
] as const;

const productMockups = [
	{
		title: "SKINCARE",
		description: "Serum · Cream · Cleanser",
		image: "/brand/mockups/p1.png",
		alt: "RUYA luxury skincare product mockup",
	},
	{
		title: "HAIR CARE",
		description: "Shampoo · Conditioner · Hair Mask",
		image: "/brand/mockups/p2.png",
		alt: "RUYA luxury haircare product mockup",
	},
	{
		title: "MAKEUP",
		description: "Foundation · Compact · Lip · Palette",
		image: "/brand/mockups/p3.png",
		alt: "RUYA luxury makeup product mockup",
	},
] as const;

export default function BrandIdentityPage() {
	return (
		<div className="page-shell">
			{/* =====================================================
			    HERO
			   ===================================================== */}

			<header className="hero">
				<p className="eyebrow">RUYA VISUAL IDENTITY</p>

				<div className="relative mx-auto mt-8 flex w-fit items-center justify-center">
					<div
						className="absolute inset-4 rounded-full bg-ruya-express/10 blur-3xl"
						aria-hidden="true"
					/>

					<BrandSymbol
						className="relative h-32 w-32 md:h-40 md:w-40"
						priority
					/>
				</div>

				<h1 dir="ltr" className="mb-0! mt-3">
					{BRAND.name}
				</h1>

				<div
					dir="rtl"
					className="mt-2 font-arabic text-[2.6rem] font-medium leading-tight md:text-[3.4rem]"
				>
					<span className="inline-block origin-center scale-x-[1.1] bg-linear-to-l from-ruya-nude via-ruya-rose-gold to-ruya-mauve bg-clip-text text-transparent">
						{BRAND.nameArabic}
					</span>
				</div>

				<p
					dir="ltr"
					className="mx-auto mt-5 text-xs font-semibold tracking-[0.24em] text-ruya-muted md:text-sm"
				>
					{BRAND.slogan}
				</p>

				<p className="mx-auto mt-7 max-w-2xl">
					النظام البصري لـRUYA يجمع بين الهدوء، الدفء، المرونة والفخامة
					المعاصرة. الهدف ليس إنشاء Beauty Brand تقليدي، بل هوية قادرة على العمل
					عبر المنتجات والتجارب والـJourneys المختلفة.
				</p>
			</header>

			{/* =====================================================
			    BRAND LOCKUP
			   ===================================================== */}

			<section className="section">
				<header className="section-header">
					<p className="eyebrow">BRAND LOCKUP</p>

					<h2 className="section-title">النظام الأساسي للهوية</h2>

					<p>
						اللوغو عبارة عن Symbol مستقل، بينما اسم RUYA والاسم العربي
						والـSlogan تبقى عناصر نصية قابلة للتحكم والتطوير داخل النظام البصري.
					</p>
				</header>

				<div className="grid grid-2">
					<div className="card flex min-h-90 items-center justify-center">
						<div className="text-center">
							<div className="relative mx-auto flex h-44 w-44 items-center justify-center">
								<div
									className="absolute inset-6 rounded-full bg-ruya-express/10 blur-3xl"
									aria-hidden="true"
								/>

								<BrandSymbol className="relative h-44 w-44" />
							</div>

							<p className="label mt-5">CORE SYMBOL</p>
						</div>
					</div>

					<div className="card flex min-h-90 items-center justify-center">
						<div className="text-center">
							<BrandSymbol className="mx-auto h-24 w-24" />

							<div
								dir="ltr"
								className="font-display mt-4 text-5xl font-medium tracking-wider text-ruya-text"
							>
								{BRAND.name}
							</div>

							<div dir="rtl" className="mt-2 font-arabic text-3xl font-medium">
								<span className="inline-block origin-center scale-x-[1.1] bg-linear-to-l from-ruya-nude via-ruya-rose-gold to-ruya-mauve bg-clip-text text-transparent">
									{BRAND.nameArabic}
								</span>
							</div>

							<div
								dir="ltr"
								className="mt-5 text-[0.7rem] font-semibold tracking-[0.22em] text-ruya-muted"
							>
								{BRAND.slogan}
							</div>

							<p className="label mt-6">PRIMARY LOCKUP</p>
						</div>
					</div>
				</div>
			</section>

			{/* =====================================================
			    COLOR PALETTE
			   ===================================================== */}

			<section className="section">
				<header className="section-header">
					<p className="eyebrow">COLOR SYSTEM</p>

					<h2 className="section-title">RUYA Color Palette</h2>

					<p>
						الألوان التالية مرتبطة مباشرة بالـCSS Variables في الموقع. إذا تغير
						اللون في <code>globals.css</code>، تتغير العينة هنا تلقائيًا.
					</p>
				</header>

				<div className="grid grid-2">
					{palette.map((color) => (
						<article
							key={color.token}
							className="overflow-hidden rounded-2xl border border-ruya-line bg-ruya-ivory/3"
						>
							<div
								className="h-40 w-full"
								style={{
									backgroundColor: `var(${color.token})`,
								}}
							/>

							<div className="p-5">
								<div className="flex items-start justify-between gap-4">
									<div>
										<h3 className="text-xl font-bold text-ruya-text">
											{color.name}
										</h3>

										<p className="mt-1 text-sm font-semibold text-ruya-express">
											{color.role}
										</p>
									</div>

									<span
										dir="ltr"
										className="rounded-full border border-ruya-line bg-ruya-bg/40 px-3 py-1 font-english text-xs text-ruya-muted"
									>
										{color.hex}
									</span>
								</div>

								<p className="mt-4 leading-7 text-ruya-muted">
									{color.description}
								</p>

								<code
									dir="ltr"
									className="mt-4 block text-xs text-ruya-journey"
								>
									{color.token}
								</code>
							</div>
						</article>
					))}
				</div>
			</section>

			{/* =====================================================
			    SEMANTIC COLORS
			   ===================================================== */}

			<section className="section">
				<header className="section-header">
					<p className="eyebrow">SEMANTIC COLOR ROLES</p>

					<h2 className="section-title">كيف نستخدم الألوان؟</h2>

					<p>
						بدل ربط الـcomponents بلون ثابت، نربطها بوظيفة. هذا يسمح لنا بتغيير
						الهوية لاحقًا بدون تعديل كل صفحة.
					</p>
				</header>

				<div className="grid grid-3">
					{semanticColors.map((item) => (
						<div className="card" key={item.label}>
							<div
								className="mb-5 h-16 rounded-xl border border-ruya-line"
								style={{
									backgroundColor: item.color,
								}}
							/>

							<span className="label">{item.label}</span>

							<h3 className="mt-2">{item.value}</h3>
						</div>
					))}
				</div>

				<div className="highlight">
					<h4>CARE · EXPRESS · JOURNEY</h4>

					<p>
						هذه الألوان لا تمثل ثلاثة Brands مختلفة. هي إشارات داخل نظام RUYA
						الواحد تساعد على تنظيم التجربة وإظهار أنواع مختلفة من الـJourneys
						بدون تغيير هوية البراند الأساسية.
					</p>

					<div className="mt-5 flex h-3 overflow-hidden rounded-full">
						<div className="flex-1 bg-ruya-care" />
						<div className="flex-1 bg-ruya-express" />
						<div className="flex-1 bg-ruya-journey" />
					</div>
				</div>
			</section>

			{/* =====================================================
			    TYPOGRAPHY
			   ===================================================== */}

			<section className="section">
				<header className="section-header">
					<p className="eyebrow">TYPOGRAPHY</p>

					<h2 className="section-title">RUYA Type System</h2>

					<p>
						ثلاثة أدوار واضحة: Display للهوية، English UI للمحتوى الإنجليزي، وخط
						عربي متوازن للقراءة والواجهة.
					</p>
				</header>

				<div className="grid gap-5">
					{/* BODONI */}

					<div className="card">
						<div className="grid gap-8 md:grid-cols-[220px_1fr] md:items-center">
							<div>
								<span className="label">DISPLAY TYPEFACE</span>

								<h3 className="mt-2 text-2xl">Bodoni Moda</h3>

								<p className="mt-2">
									يستخدم للعناوين الإنجليزية الكبيرة، RUYA، واللحظات البصرية
									الـpremium.
								</p>
							</div>

							<div dir="ltr" className="font-display text-left">
								<div className="text-5xl font-medium leading-none text-ruya-text md:text-7xl">
									RUYA
								</div>

								<div className="mt-4 text-2xl text-ruya-muted md:text-4xl">
									See yourself, your way.
								</div>

								<div className="mt-5 text-sm tracking-[0.16em] text-ruya-express">
									ABCDEFGHIJKLMNOPQRSTUVWXYZ
								</div>
							</div>
						</div>
					</div>

					{/* MANROPE */}

					<div className="card">
						<div className="grid gap-8 md:grid-cols-[220px_1fr] md:items-center">
							<div>
								<span className="label">ENGLISH UI</span>

								<h3 className="mt-2 text-2xl">Manrope</h3>

								<p className="mt-2">
									Navigation، UI، Labels، Product Information والنصوص الإنجليزية
									اليومية.
								</p>
							</div>

							<div dir="ltr" className="font-english text-left">
								<div className="text-3xl font-semibold text-ruya-text md:text-4xl">
									Beauty that starts with what you want.
								</div>

								<p className="mt-4 max-w-2xl text-base leading-8 text-ruya-muted">
									Choose the outcome. RUYA simplifies the journey from intent to
									result.
								</p>

								<div className="mt-5 text-sm tracking-[0.08em] text-ruya-journey">
									ABCDEFGHIJKLMNOPQRSTUVWXYZ · 0123456789
								</div>
							</div>
						</div>
					</div>

					{/* ARABIC */}

					<div className="card">
						<div className="grid gap-8 md:grid-cols-[220px_1fr] md:items-center">
							<div>
								<span className="label">ARABIC TYPEFACE</span>

								<h3 className="mt-2 text-2xl">IBM Plex Sans Arabic</h3>

								<p className="mt-2">
									يستخدم للنصوص العربية، الواجهات، الوصف والمحتوى الطويل.
								</p>
							</div>

							<div dir="rtl" className="font-arabic">
								<div className="text-4xl font-medium text-ruya-text md:text-5xl">
									رُؤيا
								</div>

								<p className="mt-4 max-w-2xl text-xl leading-9 text-ruya-muted">
									تبدأ رحلتك من النتيجة التي تريدها، ونبني لك الطريق للوصول
									إليها.
								</p>

								<div className="mt-5 text-lg text-ruya-express">
									أ ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن هـ و ي
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* =====================================================
			    APPLICATION PREVIEW
			   ===================================================== */}

			<section className="section">
				<header className="section-header">
					<p className="eyebrow">BRAND APPLICATION</p>

					<h2 className="section-title">Packaging Direction Preview</h2>

					<p>
						هذه ليست Mockups نهائية. هي Preview سريع يوضح كيف يمكن أن تعيش ألوان
						RUYA والـsymbol فوق فئات Beauty مختلفة قبل إنتاج صور المنتجات
						الحقيقية.
					</p>
				</header>

				<div className="grid grid-3">
					{/* SKINCARE */}

					<div className="card flex min-h-107.5 flex-col items-center justify-between overflow-hidden">
						<div className="label">SKINCARE</div>

						<div className="flex flex-1 items-center justify-center py-8">
							<div
								className="relative flex h-64 w-36 flex-col items-center rounded-[2.6rem] border border-ruya-line px-5 pt-12 shadow-2xl"
								style={{
									background:
										"linear-gradient(160deg, var(--ruya-warm-ivory), var(--ruya-soft-nude))",
								}}
							>
								<div className="absolute -top-6 h-14 w-16 rounded-t-2xl bg-ruya-plum" />

								<BrandSymbol className="h-16 w-16" />

								<div
									dir="ltr"
									className="font-display mt-5 text-2xl font-medium tracking-[0.08em] text-ruya-charcoal"
								>
									RUYA
								</div>

								<div className="mt-2 text-center font-english text-[0.55rem] tracking-[0.15em] text-ruya-plum">
									SKIN PREP SERUM
								</div>
							</div>
						</div>

						<p className="text-center text-sm text-ruya-muted">
							Warm Ivory + Soft Nude
						</p>
					</div>

					{/* HAIRCARE */}

					<div className="card flex min-h-107.5 flex-col items-center justify-between overflow-hidden">
						<div className="label">HAIR CARE</div>

						<div className="flex flex-1 items-center justify-center py-8">
							<div
								className="relative flex h-72 w-32 flex-col items-center rounded-[3.5rem] border border-ruya-line px-5 pt-14 shadow-2xl"
								style={{
									background:
										"linear-gradient(160deg, var(--ruya-plum-brown), var(--ruya-deep-aubergine))",
								}}
							>
								<div className="absolute -top-4 h-16 w-14 rounded-t-2xl bg-ruya-rose-gold" />

								<BrandSymbol className="h-16 w-16" />

								<div
									dir="ltr"
									className="font-display mt-5 text-2xl font-medium tracking-[0.08em] text-ruya-ivory"
								>
									RUYA
								</div>

								<div className="mt-2 text-center font-english text-[0.55rem] tracking-[0.15em] text-ruya-muted">
									RESTORE HAIR RITUAL
								</div>
							</div>
						</div>

						<p className="text-center text-sm text-ruya-muted">
							Deep Aubergine + Rose Gold
						</p>
					</div>

					{/* MAKEUP */}

					<div className="card flex min-h-107.5 flex-col items-center justify-between overflow-hidden">
						<div className="label">MAKEUP</div>

						<div className="flex flex-1 items-center justify-center py-8">
							<div
								className="flex h-36 w-52 flex-col items-center justify-center rounded-4xl border border-ruya-line shadow-2xl"
								style={{
									background:
										"linear-gradient(145deg, var(--ruya-dusty-rose), var(--ruya-plum-brown))",
								}}
							>
								<BrandSymbol className="h-16 w-16" />

								<div
									dir="ltr"
									className="font-display mt-2 text-2xl font-medium tracking-[0.08em] text-ruya-ivory"
								>
									RUYA
								</div>
							</div>
						</div>

						<p className="text-center text-sm text-ruya-muted">
							Dusty Rose + Plum Brown
						</p>
					</div>
				</div>
			</section>

			{/* =====================================================
    PRODUCT MOCKUPS
   ===================================================== */}

			<section className="section">
				<header className="section-header">
					<p className="eyebrow">PRODUCT MOCKUPS</p>

					<h2 className="section-title">RUYA Product Applications</h2>

					<p>
						تطبيقات بصرية أولية توضّح كيف يمكن أن تعيش هوية RUYA عبر Skincare،
						Hair Care وMakeup باستخدام نفس نظام الألوان والـsymbol والطابع
						البصري الموحد.
					</p>
				</header>

				<div className="grid grid-3">
					{productMockups.map((mockup) => (
						<article
							key={mockup.title}
							className="group overflow-hidden rounded-2xl border border-ruya-line bg-ruya-ivory/3 transition duration-500 hover:-translate-y-1 hover:border-ruya-express/40"
						>
							<div className="relative aspect-4/5 overflow-hidden bg-ruya-bg">
								<Image
									src={mockup.image}
									alt={mockup.alt}
									fill
									sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
									className="object-cover transition duration-700 group-hover:scale-[1.03]"
								/>

								<div
									className="pointer-events-none absolute inset-0 bg-linear-to-t from-ruya-bg/75 via-transparent to-transparent"
									aria-hidden="true"
								/>

								<div className="absolute inset-x-0 bottom-0 p-5">
									<span className="label text-ruya-nude">{mockup.title}</span>

									<p
										dir="ltr"
										className="mt-2 text-sm font-medium text-ruya-ivory/80"
									>
										{mockup.description}
									</p>
								</div>
							</div>
						</article>
					))}
				</div>

				<div className="highlight mt-6">
					<h4>Visual Direction</h4>

					<p>
						الـmockups توحّد بين Deep Aubergine، Soft Nude، Dusty Rose وWarm
						Rose Gold، بينما يبقى رمز RUYA هو العنصر الأساسي الثابت عبر جميع
						الفئات.
					</p>
				</div>
			</section>

			<footer className="footer">
				<div
					dir="ltr"
					className="font-display text-base font-medium tracking-[0.16em]"
				>
					{BRAND.name}
				</div>

				<div className="mt-1">{BRAND.nameArabic}</div>

				<div dir="ltr" className="mt-2 text-[0.68rem] tracking-[0.16em]">
					{BRAND.slogan}
				</div>
			</footer>
		</div>
	);
}
