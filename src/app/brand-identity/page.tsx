"use client";

import BrandSymbol from "@/components/BrandSymbol";

import { BRAND } from "@/config/brand";

import Image from "next/image";

/* =========================================================

   RUYA OFFICIAL BRAND COLORS

   Independent from the active website theme.

   ========================================================= */

import { BRAND_COLORS } from "@/config/brandColors";

/* =========================================================

   COLOR PALETTE

   ========================================================= */

const palette = [
	{
		name: "Deep Aubergine",

		hex: BRAND_COLORS.deepAubergine,

		role: "Primary",

		description: `درجة داكنة وغنية تمنح الهوية عمقًا وحضورًا راقيًا، وتشكل أحد الأسس البصرية الرئيسية لـ${BRAND.name}.`,
	},

	{
		name: "Plum Brown",

		hex: BRAND_COLORS.plumBrown,

		role: "Secondary",

		description:
			"درجة دافئة تكمل الألوان الداكنة وتضيف إحساسًا أكثر نعومة ودفئًا إلى الهوية.",
	},

	{
		name: "Dusty Rose",

		hex: BRAND_COLORS.dustyRose,

		role: "Signature Accent",

		description: `وردي هادئ يعكس الجانب الحيوي والأنثوي المعاصر في ${BRAND.name} بدون الاعتماد على ألوان Beauty تقليدية.`,
	},

	{
		name: "Muted Mauve",

		hex: BRAND_COLORS.mutedMauve,

		role: "Soft Accent",

		description:
			"درجة هادئة تضيف توازنًا ومرونة إلى النظام البصري وتعمل كلون مكمل للدرجات الدافئة.",
	},

	{
		name: "Soft Nude",

		hex: BRAND_COLORS.softNude,

		role: "Neutral",

		description:
			"درجة محايدة دافئة تمنح الهوية إحساسًا طبيعيًا، ناعمًا وإنسانيًا.",
	},

	{
		name: "Warm Ivory",

		hex: BRAND_COLORS.warmIvory,

		role: "Light Neutral",

		description:
			"الدرجة الفاتحة الأساسية للمساحات النظيفة والتباين الراقي والتطبيقات ذات الطابع الهادئ.",
	},

	{
		name: "Charcoal Plum",

		hex: BRAND_COLORS.charcoalPlum,

		role: "Deep Neutral",

		description:
			"لون داكن غني يمنح الهوية قاعدة قوية وأكثر دفئًا من استخدام الأسود الصريح.",
	},

	{
		name: "Warm Rose Gold",

		hex: BRAND_COLORS.warmRoseGold,

		role: "Premium Accent",

		description:
			"درجة دافئة مستوحاة من الـRose Gold تضيف إحساسًا بالفخامة، خصوصًا في التغليف والتفاصيل الراقية.",
	},
] as const;

/* =========================================================

   COLOR DIRECTION

   ========================================================= */

const colorDirections = [
	{
		title: "Deep & Refined",

		label: "DEPTH",

		description: `الدرجات الداكنة تمنح ${BRAND.name} العمق والحضور الراقي الذي يشكل القاعدة البصرية للهوية.`,

		colors: [
			BRAND_COLORS.charcoalPlum,

			BRAND_COLORS.deepAubergine,

			BRAND_COLORS.plumBrown,
		],
	},

	{
		title: "Soft & Human",

		label: "SOFTNESS",

		description:
			"الدرجات المحايدة تخفف الهوية وتضيف إحساسًا دافئًا، طبيعيًا وقريبًا من التجربة الإنسانية.",

		colors: [BRAND_COLORS.softNude, BRAND_COLORS.warmIvory],
	},

	{
		title: "Expressive & Premium",

		label: "EXPRESSION",

		description:
			"ألوان الـaccent تضيف الشخصية والحركة والفخامة بدون أن تطغى على الهدوء العام للهوية.",

		colors: [
			BRAND_COLORS.dustyRose,

			BRAND_COLORS.mutedMauve,

			BRAND_COLORS.warmRoseGold,
		],
	},
] as const;

/* =========================================================

   PRODUCT MOCKUPS

   ========================================================= */

const productMockups = [
	{
		title: "SKINCARE",

		description: "Serum · Cream · Cleanser",

		image: "/brand/mockups/p1.png",

		alt: `${BRAND.name} luxury skincare product mockup`,
	},

	{
		title: "HAIR CARE",

		description: "Shampoo · Conditioner · Hair Mask",

		image: "/brand/mockups/p2.png",

		alt: `${BRAND.name} luxury haircare product mockup`,
	},

	{
		title: "MAKEUP",

		description: "Foundation · Compact · Lip · Palette",

		image: "/brand/mockups/p3.png",

		alt: `${BRAND.name} luxury makeup product mockup`,
	},
] as const;

export default function BrandIdentityPage() {
	return (
		<div className="page-shell">
			{/* =====================================================

                HERO

               ===================================================== */}

			<header className="hero">
				<p className="eyebrow">{BRAND.name} VISUAL IDENTITY</p>

				<div className="relative mx-auto mt-8 flex w-fit items-center justify-center">
					<div
						className="absolute inset-4 rounded-full blur-3xl"
						style={{
							backgroundColor: `${BRAND_COLORS.dustyRose}1A`,
						}}
						aria-hidden="true"
					/>

					<BrandSymbol
						className="relative h-32 w-32 md:h-40 md:w-40"
						priority
					/>
				</div>

				<h1 dir="ltr" className="mb-0! mt-3">
					<span className="brand-name-en">{BRAND.name}</span>
				</h1>

				<div
					dir="rtl"
					className="mt-2 font-arabic text-[2.6rem] font-medium leading-tight md:text-[3.4rem]"
				>
					<span className="brand-name-ar">{BRAND.nameArabic}</span>
				</div>

				<p
					dir="ltr"
					className="mx-auto mt-5 text-xs font-semibold tracking-[0.24em] md:text-sm"
				>
					<span className="brand-slogan">{BRAND.slogan}</span>
				</p>

				<p className="mx-auto mt-7 max-w-2xl">
					هوية {BRAND.name} تجمع بين الهدوء، الدفء والفخامة المعاصرة ضمن نظام
					بصري مرن يستطيع العمل عبر المنتجات، التغليف والتجارب المختلفة مع
					الحفاظ على شخصية واحدة واضحة ومميزة.
				</p>
			</header>

			{/* =====================================================

                BRAND LOCKUP

               ===================================================== */}

			<section className="section">
				<header className="section-header">
					<p className="eyebrow">BRAND IDENTITY</p>

					<h2 className="section-title">هوية {BRAND.name} البصرية</h2>

					<p>
						تجمع هوية {BRAND.name} بين الرمز، الاسم باللغتين والشعار ضمن نظام
						بصري هادئ ومميز، صُمم ليبقى واضحًا وقابلًا للتعرّف عبر المنتجات
						والتغليف والتجارب الرقمية.
					</p>
				</header>

				<div className="grid grid-2">
					<div className="card flex min-h-90 items-center justify-center">
						<div className="text-center">
							<div className="relative mx-auto flex h-44 w-44 items-center justify-center">
								<div
									className="absolute inset-6 rounded-full blur-3xl"
									style={{
										backgroundColor: `${BRAND_COLORS.dustyRose}1A`,
									}}
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
								className="font-display mt-4 text-5xl font-medium tracking-wider"
							>
								<span className="brand-name-en">{BRAND.name}</span>
							</div>

							<div dir="rtl" className="mt-2 font-arabic text-3xl font-medium">
								<span className="brand-name-ar">{BRAND.nameArabic}</span>
							</div>

							<div
								dir="ltr"
								className="mt-5 text-[0.7rem] font-semibold tracking-[0.22em]"
							>
								<span className="brand-slogan">{BRAND.slogan}</span>
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

					<h2 className="section-title">{BRAND.name} Color Palette</h2>

					<p>
						لوحة ألوان دافئة ومتوازنة تجمع بين درجات البرقوق، الوردي الهادئ،
						الـMauve والدرجات المحايدة لتعكس شخصية {BRAND.name} الراقية، الناعمة
						والمعاصرة.
					</p>
				</header>

				<div className="grid grid-2">
					{palette.map((color) => (
						<article
							key={color.name}
							className="overflow-hidden rounded-2xl border border-ruya-line bg-ui-fill/3"
						>
							<div
								className="h-40 w-full"
								style={{
									backgroundColor: color.hex,
								}}
							/>

							<div className="p-5">
								<div className="flex items-start justify-between gap-4">
									<div>
										<h3 className="text-xl font-bold text-ruya-text">
											{color.name}
										</h3>

										<p
											className="mt-1 text-sm font-semibold"
											style={{
												color: BRAND_COLORS.dustyRose,
											}}
										>
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
							</div>
						</article>
					))}
				</div>
			</section>

			{/* =====================================================

                COLOR DIRECTION

               ===================================================== */}

			<section className="section">
				<header className="section-header">
					<p className="eyebrow">COLOR DIRECTION</p>

					<h2 className="section-title">شخصية الألوان</h2>

					<p>
						تعتمد هوية {BRAND.name} على التوازن بين العمق، النعومة والتعبير.
						تعمل مجموعات الألوان معًا لبناء شخصية متماسكة تستطيع أن تبدو راقية،
						قريبة ومعاصرة في الوقت نفسه.
					</p>
				</header>

				<div className="grid grid-3">
					{colorDirections.map((direction) => (
						<article className="card" key={direction.title}>
							<div className="mb-5 flex h-20 overflow-hidden rounded-xl border border-ruya-line">
								{direction.colors.map((color) => (
									<div
										key={color}
										className="flex-1"
										style={{
											backgroundColor: color,
										}}
									/>
								))}
							</div>

							<span className="label">{direction.label}</span>

							<h3 className="mt-2">{direction.title}</h3>

							<p className="mt-3">{direction.description}</p>
						</article>
					))}
				</div>

				<div className="highlight mt-6">
					<h4>One Identity · Multiple Expressions</h4>

					<p>
						لا تعمل هذه الألوان كهويات منفصلة. قوتها تأتي من استخدامها ضمن نظام
						واحد؛ الدرجات الداكنة تمنح العمق، المحايدة تضيف النعومة، بينما تقدم
						ألوان الـaccent الشخصية والحركة.
					</p>

					<div className="mt-5 flex h-3 overflow-hidden rounded-full">
						<div
							className="flex-1"
							style={{
								backgroundColor: BRAND_COLORS.deepAubergine,
							}}
						/>

						<div
							className="flex-1"
							style={{
								backgroundColor: BRAND_COLORS.plumBrown,
							}}
						/>

						<div
							className="flex-1"
							style={{
								backgroundColor: BRAND_COLORS.dustyRose,
							}}
						/>

						<div
							className="flex-1"
							style={{
								backgroundColor: BRAND_COLORS.mutedMauve,
							}}
						/>

						<div
							className="flex-1"
							style={{
								backgroundColor: BRAND_COLORS.softNude,
							}}
						/>

						<div
							className="flex-1"
							style={{
								backgroundColor: BRAND_COLORS.warmRoseGold,
							}}
						/>
					</div>
				</div>
			</section>

			{/* =====================================================

                TYPOGRAPHY

               ===================================================== */}

			<section className="section">
				<header className="section-header">
					<p className="eyebrow">TYPOGRAPHY</p>

					<h2 className="section-title">{BRAND.name} Type System</h2>

					<p>
						يجمع النظام الطباعي بين خط Display مميز للهوية، خط إنجليزي حديث
						وواضح للواجهات، وخط عربي متوازن يضمن قراءة مريحة وشخصية متناسقة عبر
						اللغتين.
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
									يستخدم للعناوين الإنجليزية الكبيرة، اسم {BRAND.name} واللحظات
									البصرية ذات الحضور الـpremium.
								</p>
							</div>

							<div dir="ltr" className="font-display text-left">
								<div
									className="text-5xl font-medium leading-none md:text-7xl"
									style={{
										color: BRAND_COLORS.warmIvory,
									}}
								>
									{BRAND.name}
								</div>

								<div
									className="mt-4 text-2xl md:text-4xl"
									style={{
										color: BRAND_COLORS.softNude,
									}}
								>
									{BRAND.slogan}
								</div>

								<div
									className="mt-5 text-sm tracking-[0.16em]"
									style={{
										color: BRAND_COLORS.dustyRose,
									}}
								>
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
									يستخدم للـNavigation، UI، Labels، Product Information والنصوص
									الإنجليزية اليومية.
								</p>
							</div>

							<div dir="ltr" className="font-english text-left">
								<div
									className="text-3xl font-semibold md:text-4xl"
									style={{
										color: BRAND_COLORS.warmIvory,
									}}
								>
									Beauty that starts with what you want.
								</div>

								<p
									className="mt-4 max-w-2xl text-base leading-8"
									style={{
										color: BRAND_COLORS.softNude,
									}}
								>
									Choose the outcome. {BRAND.name} simplifies the journey from
									intent to result.
								</p>

								<div
									className="mt-5 text-sm tracking-[0.08em]"
									style={{
										color: BRAND_COLORS.mutedMauve,
									}}
								>
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
								<div
									className="text-4xl font-medium md:text-5xl"
									style={{
										color: BRAND_COLORS.warmIvory,
									}}
								>
									{BRAND.nameArabic}
								</div>

								<p
									className="mt-4 max-w-2xl text-xl leading-9"
									style={{
										color: BRAND_COLORS.softNude,
									}}
								>
									تبدأ رحلتك من النتيجة التي تريدها، ونبني لك الطريق للوصول
									إليها.
								</p>

								<div
									className="mt-5 text-lg"
									style={{
										color: BRAND_COLORS.dustyRose,
									}}
								>
									أ ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن هـ و ي
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* =====================================================

                PACKAGING DIRECTION

               ===================================================== */}

			<section className="section">
				<header className="section-header">
					<p className="eyebrow">BRAND APPLICATION</p>

					<h2 className="section-title">Packaging Direction Preview</h2>

					<p>
						تصوّر أولي لكيف يمكن أن تنتقل هوية {BRAND.name} إلى عالم المنتجات.
						تستخدم كل فئة توليفة مختلفة من نفس لوحة الألوان للحفاظ على وحدة
						البراند مع منح كل مجموعة شخصية بصرية خاصة بها.
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
									background: `linear-gradient(

                                        160deg,

                                        ${BRAND_COLORS.warmIvory},

                                        ${BRAND_COLORS.softNude}

                                    )`,
								}}
							>
								<div
									className="absolute -top-6 h-14 w-16 rounded-t-2xl"
									style={{
										backgroundColor: BRAND_COLORS.plumBrown,
									}}
								/>

								<BrandSymbol className="h-16 w-16" />

								<div
									dir="ltr"
									className="font-display mt-5 text-2xl font-medium tracking-[0.08em]"
								>
									<span className="brand-name-en">{BRAND.name}</span>
								</div>

								<div
									className="mt-2 text-center font-english text-[0.55rem] tracking-[0.15em]"
									style={{
										color: BRAND_COLORS.plumBrown,
									}}
								>
									SKIN PREP SERUM
								</div>
							</div>
						</div>

						<div className="text-center">
							<p className="text-sm text-ruya-muted">Warm Ivory + Soft Nude</p>

							<div className="mt-3 flex justify-center gap-2">
								<span
									className="h-4 w-4 rounded-full border border-white/10"
									style={{
										backgroundColor: BRAND_COLORS.warmIvory,
									}}
								/>

								<span
									className="h-4 w-4 rounded-full border border-white/10"
									style={{
										backgroundColor: BRAND_COLORS.softNude,
									}}
								/>

								<span
									className="h-4 w-4 rounded-full border border-white/10"
									style={{
										backgroundColor: BRAND_COLORS.plumBrown,
									}}
								/>
							</div>
						</div>
					</div>

					{/* HAIR CARE */}

					<div className="card flex min-h-107.5 flex-col items-center justify-between overflow-hidden">
						<div className="label">HAIR CARE</div>

						<div className="flex flex-1 items-center justify-center py-8">
							<div
								className="relative flex h-72 w-32 flex-col items-center rounded-[3.5rem] border border-ruya-line px-5 pt-14 shadow-2xl"
								style={{
									background: `linear-gradient(

                                        160deg,

                                        ${BRAND_COLORS.plumBrown},

                                        ${BRAND_COLORS.deepAubergine}

                                    )`,
								}}
							>
								<div
									className="absolute -top-4 h-16 w-14 rounded-t-2xl"
									style={{
										backgroundColor: BRAND_COLORS.warmRoseGold,
									}}
								/>

								<BrandSymbol className="h-16 w-16" />

								<div
									dir="ltr"
									className="font-display mt-5 text-2xl font-medium tracking-[0.08em]"
								>
									<span className="brand-name-en">{BRAND.name}</span>
								</div>

								<div
									className="mt-2 text-center font-english text-[0.55rem] tracking-[0.15em]"
									style={{
										color: BRAND_COLORS.softNude,
									}}
								>
									RESTORE HAIR RITUAL
								</div>
							</div>
						</div>

						<div className="text-center">
							<p className="text-sm text-ruya-muted">
								Deep Aubergine + Rose Gold
							</p>

							<div className="mt-3 flex justify-center gap-2">
								<span
									className="h-4 w-4 rounded-full border border-white/10"
									style={{
										backgroundColor: BRAND_COLORS.deepAubergine,
									}}
								/>

								<span
									className="h-4 w-4 rounded-full border border-white/10"
									style={{
										backgroundColor: BRAND_COLORS.plumBrown,
									}}
								/>

								<span
									className="h-4 w-4 rounded-full border border-white/10"
									style={{
										backgroundColor: BRAND_COLORS.warmRoseGold,
									}}
								/>
							</div>
						</div>
					</div>

					{/* MAKEUP */}

					<div className="card flex min-h-107.5 flex-col items-center justify-between overflow-hidden">
						<div className="label">MAKEUP</div>

						<div className="flex flex-1 items-center justify-center py-8">
							<div
								className="flex h-36 w-52 flex-col items-center justify-center rounded-4xl border border-ruya-line shadow-2xl"
								style={{
									background: `linear-gradient(

                                        145deg,

                                        ${BRAND_COLORS.dustyRose},

                                        ${BRAND_COLORS.plumBrown}

                                    )`,
								}}
							>
								<BrandSymbol className="h-16 w-16" />

								<div
									dir="ltr"
									className="font-display mt-2 text-2xl font-medium tracking-[0.08em]"
								>
									<span className="brand-name-en">{BRAND.name}</span>
								</div>
							</div>
						</div>

						<div className="text-center">
							<p className="text-sm text-ruya-muted">Dusty Rose + Plum Brown</p>

							<div className="mt-3 flex justify-center gap-2">
								<span
									className="h-4 w-4 rounded-full border border-white/10"
									style={{
										backgroundColor: BRAND_COLORS.dustyRose,
									}}
								/>

								<span
									className="h-4 w-4 rounded-full border border-white/10"
									style={{
										backgroundColor: BRAND_COLORS.plumBrown,
									}}
								/>

								<span
									className="h-4 w-4 rounded-full border border-white/10"
									style={{
										backgroundColor: BRAND_COLORS.warmIvory,
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* =====================================================

                PRODUCT MOCKUPS

               ===================================================== */}

			<section className="section">
				<header className="section-header">
					<p className="eyebrow">PRODUCT MOCKUPS</p>

					<h2 className="section-title">{BRAND.name} Product Applications</h2>

					<p>
						تصورات بصرية توضح كيف يمكن أن تمتد هوية {BRAND.name} عبر فئات
						Skincare، Hair Care وMakeup مع الحفاظ على لغة تصميم واحدة وشخصية
						متماسكة عبر جميع المنتجات.
					</p>
				</header>

				<div className="grid grid-3">
					{productMockups.map((mockup) => (
						<article
							key={mockup.title}
							className="group overflow-hidden rounded-2xl border border-ruya-line bg-ui-fill/3 transition duration-500 hover:-translate-y-1 hover:border-ruya-express/40"
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
									className="pointer-events-none absolute inset-0"
									style={{
										background: `linear-gradient(

                                            to top,

                                            ${BRAND_COLORS.charcoalPlum}D9,

                                            transparent 55%

                                        )`,
									}}
									aria-hidden="true"
								/>

								<div className="absolute inset-x-0 bottom-0 p-5">
									<span
										className="label"
										style={{
											color: BRAND_COLORS.softNude,
										}}
									>
										{mockup.title}
									</span>

									<p
										dir="ltr"
										className="mt-2 text-sm font-medium"
										style={{
											color: `${BRAND_COLORS.warmIvory}CC`,
										}}
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
						تجمع التطبيقات بين Deep Aubergine، Soft Nude، Dusty Rose، Muted
						Mauve وWarm Rose Gold ضمن لغة بصرية واحدة، بينما يبقى رمز{" "}
						{BRAND.name}
						والعلاقة بين الألوان عناصر ثابتة تربط جميع الفئات بالهوية الرئيسية.
					</p>

					<div className="mt-5 flex h-3 overflow-hidden rounded-full">
						<div
							className="flex-1"
							style={{
								backgroundColor: BRAND_COLORS.deepAubergine,
							}}
						/>

						<div
							className="flex-1"
							style={{
								backgroundColor: BRAND_COLORS.softNude,
							}}
						/>

						<div
							className="flex-1"
							style={{
								backgroundColor: BRAND_COLORS.dustyRose,
							}}
						/>

						<div
							className="flex-1"
							style={{
								backgroundColor: BRAND_COLORS.mutedMauve,
							}}
						/>

						<div
							className="flex-1"
							style={{
								backgroundColor: BRAND_COLORS.warmRoseGold,
							}}
						/>
					</div>
				</div>
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
