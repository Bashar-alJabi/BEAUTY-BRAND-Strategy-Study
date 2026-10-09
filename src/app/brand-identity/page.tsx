"use client";

import BrandSymbol from "@/components/BrandSymbol";
import { BRAND } from "@/config/brand";
import { BRAND_COLORS } from "@/config/brandColors";
import Image from "next/image";
import { useEffect, useState } from "react";

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
			"ألوان الـAccent تضيف الشخصية والحركة والفخامة بدون أن تطغى على الهدوء العام للهوية.",
		colors: [
			BRAND_COLORS.dustyRose,
			BRAND_COLORS.mutedMauve,
			BRAND_COLORS.warmRoseGold,
		],
	},
] as const;

/* =========================================================
   ORIGINAL PRODUCT MOCKUPS
   ========================================================= */

const productMockups = [
	{
		title: "SKINCARE",
		description: "Serum · Cream · Cleanser",
		image: "/brand/mockups/p1.webp",
		alt: `${BRAND.name} luxury skincare product mockup`,
	},
	{
		title: "HAIR CARE",
		description: "Shampoo · Conditioner · Hair Mask",
		image: "/brand/mockups/p2.webp",
		alt: `${BRAND.name} luxury haircare product mockup`,
	},
	{
		title: "MAKEUP",
		description: "Foundation · Compact · Lip · Palette",
		image: "/brand/mockups/p3.webp",
		alt: `${BRAND.name} luxury makeup product mockup`,
	},
] as const;

/* =========================================================
   RITUAL BOX DATA
   ========================================================= */

type ProductKind = "skin" | "hair" | "makeup" | "tool" | "accessory";

type JourneyProduct = {
	label: string;
	kind: ProductKind;
};

type RitualConcept = {
	title: string;
	context: string;
	note: string;
	essentials: JourneyProduct[];
	bite: string;
	discovery: string;
	discoveryKind: ProductKind;
};

const ritualConcepts: RitualConcept[] = [
	{
		title: "Everyday Glow",
		context: "EVERYDAY / QUICK READY",
		note: "A fresh start to your everyday.",
		essentials: [
			{
				label: "Skin Prep",
				kind: "skin",
			},
			{
				label: "Light Makeup",
				kind: "makeup",
			},
		],
		bite: "Mini Oat & Cocoa Cookie",
		discovery: "Mini Cream Blush",
		discoveryKind: "makeup",
	},
	{
		title: "Date Night Ready",
		context: "DATE / DINNER",
		note: "Made for a memorable evening.",
		essentials: [
			{
				label: "Skin Prep",
				kind: "skin",
			},
			{
				label: "Hair Styling",
				kind: "hair",
			},
			{
				label: "Evening Makeup",
				kind: "makeup",
			},
		],
		bite: "Premium Dark Chocolate",
		discovery: "Mini Overnight Lip Mask",
		discoveryKind: "skin",
	},
	{
		title: "Professional Confidence",
		context: "PROFESSIONAL / WORK",
		note: "Ready for the moment ahead.",
		essentials: [
			{
				label: "Quick Skin Prep",
				kind: "skin",
			},
			{
				label: "Polished Makeup",
				kind: "makeup",
			},
		],
		bite: "Date & Oat Bite",
		discovery: "Pocket Styling Comb",
		discoveryKind: "tool",
	},
	{
		title: "Wedding Preparation",
		context: "WEDDING / CELEBRATION",
		note: "A little something for a special day.",
		essentials: [
			{
				label: "Skin Preparation",
				kind: "skin",
			},
			{
				label: "Hair Styling",
				kind: "hair",
			},
			{
				label: "Elegant Makeup",
				kind: "makeup",
			},
		],
		bite: "Elegant Mini Praline",
		discovery: "Mini Illuminating Primer",
		discoveryKind: "skin",
	},
	{
		title: "Study Day",
		context: "STUDY / UNIVERSITY",
		note: "Simple beauty for a full day.",
		essentials: [
			{
				label: "Quick Routine",
				kind: "skin",
			},
			{
				label: "Light Expression",
				kind: "makeup",
			},
		],
		bite: "Mini Granola Bite",
		discovery: "Foldable Pocket Mirror",
		discoveryKind: "accessory",
	},
	{
		title: "Self-Care Evening",
		context: "AT-HOME SELF-CARE",
		note: "Your evening, your ritual.",
		essentials: [
			{
				label: "Skin Care",
				kind: "skin",
			},
			{
				label: "Hair Care",
				kind: "hair",
			},
		],
		bite: "Small Cocoa Treat",
		discovery: "Silicone Scalp Massager",
		discoveryKind: "tool",
	},
];

type DelightMode = "bite" | "discovery";

/* =========================================================
   MINI PRODUCT VISUALS
   ========================================================= */

function MiniProduct({ kind, label }: JourneyProduct) {
	return (
		<div className="flex min-h-36 flex-col items-center justify-end gap-3 rounded-xl border border-black/10 bg-white/35 px-2 py-4">
			<div className="flex h-23 w-full items-center justify-center">
				{/* SKINCARE — MINI SERUM */}

				{kind === "skin" && (
					<div
						className="relative flex h-19 w-12 flex-col items-center justify-center rounded-2xl border shadow-lg"
						style={{
							borderColor: `${BRAND_COLORS.plumBrown}25`,
							background: `linear-gradient(
								160deg,
								${BRAND_COLORS.warmIvory},
								${BRAND_COLORS.softNude}
							)`,
						}}
					>
						<div
							className="absolute -top-3 h-4 w-6 rounded-t-md"
							style={{
								backgroundColor: BRAND_COLORS.plumBrown,
							}}
						/>

						<BrandSymbol className="h-7 w-7" />

						<span
							className="mt-1 text-[0.35rem] font-bold tracking-wider"
							style={{
								color: BRAND_COLORS.plumBrown,
							}}
						>
							RUYA
						</span>
					</div>
				)}

				{/* HAIR CARE — MINI BOTTLE */}

				{kind === "hair" && (
					<div
						className="relative flex h-21 w-11 flex-col items-center justify-center rounded-[1.4rem] border shadow-lg"
						style={{
							borderColor: `${BRAND_COLORS.warmRoseGold}50`,
							background: `linear-gradient(
								160deg,
								${BRAND_COLORS.plumBrown},
								${BRAND_COLORS.deepAubergine}
							)`,
						}}
					>
						<div
							className="absolute -top-2 h-4 w-5 rounded-t-md"
							style={{
								backgroundColor: BRAND_COLORS.warmRoseGold,
							}}
						/>

						<BrandSymbol className="h-7 w-7" />

						<span
							className="mt-1 text-[0.35rem] tracking-wider"
							style={{
								color: BRAND_COLORS.softNude,
							}}
						>
							RUYA
						</span>
					</div>
				)}

				{/* MAKEUP — MINI COMPACT */}

				{kind === "makeup" && (
					<div
						className="flex h-13 w-21 flex-col items-center justify-center rounded-2xl border shadow-lg"
						style={{
							borderColor: `${BRAND_COLORS.warmRoseGold}55`,
							background: `linear-gradient(
								145deg,
								${BRAND_COLORS.dustyRose},
								${BRAND_COLORS.plumBrown}
							)`,
						}}
					>
						<BrandSymbol className="h-8 w-8" />
					</div>
				)}

				{/* BEAUTY TOOL — STYLING TOOL */}

				{kind === "tool" && (
					<div className="relative flex h-22 w-15 items-center justify-center">
						<div
							className="absolute top-1 h-9 w-11 rounded-xl border shadow-md"
							style={{
								borderColor: BRAND_COLORS.warmRoseGold,
								background: `linear-gradient(
									145deg,
									${BRAND_COLORS.mutedMauve},
									${BRAND_COLORS.plumBrown}
								)`,
							}}
						/>

						<div
							className="absolute bottom-0 h-11 w-3 rounded-full shadow-sm"
							style={{
								backgroundColor: BRAND_COLORS.warmRoseGold,
							}}
						/>

						<span
							className="absolute top-4 text-[0.4rem] font-bold"
							style={{
								color: BRAND_COLORS.warmIvory,
							}}
						>
							R
						</span>
					</div>
				)}

				{/* ACCESSORY — POCKET MIRROR */}

				{kind === "accessory" && (
					<div
						className="flex h-19 w-19 items-center justify-center rounded-full border-5 shadow-lg"
						style={{
							borderColor: BRAND_COLORS.warmRoseGold,
							background: `linear-gradient(
								135deg,
								${BRAND_COLORS.warmIvory},
								${BRAND_COLORS.mutedMauve},
								${BRAND_COLORS.softNude}
							)`,
						}}
					>
						<div
							className="h-12 w-12 rounded-full border border-white/50"
							style={{
								background: `linear-gradient(
									135deg,
									${BRAND_COLORS.softNude},
									${BRAND_COLORS.warmIvory}
								)`,
							}}
						/>
					</div>
				)}
			</div>

			<span
				dir="ltr"
				className="text-center text-[0.65rem] font-semibold leading-4"
				style={{
					color: BRAND_COLORS.plumBrown,
				}}
			>
				{label}
			</span>
		</div>
	);
}

/* =========================================================
   BRAND IDENTITY PAGE
   ========================================================= */

export default function BrandIdentityPage() {
	const [selectedMockup, setSelectedMockup] = useState<
		(typeof productMockups)[number] | null
	>(null);

	const [activeJourney, setActiveJourney] = useState(0);

	const [delightMode, setDelightMode] = useState<DelightMode>("bite");

	const ritual = ritualConcepts[activeJourney];

	useEffect(() => {
		if (!selectedMockup) return;

		const previousOverflow = document.body.style.overflow;

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setSelectedMockup(null);
			}
		};

		document.addEventListener("keydown", handleKeyDown);

		document.body.style.overflow = "hidden";

		return () => {
			document.removeEventListener("keydown", handleKeyDown);

			document.body.style.overflow = previousOverflow;
		};
	}, [selectedMockup]);

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
						ألوان الـAccent الشخصية والحركة.
					</p>

					<div className="mt-5 flex h-3 overflow-hidden rounded-full">
						{[
							BRAND_COLORS.deepAubergine,
							BRAND_COLORS.plumBrown,
							BRAND_COLORS.dustyRose,
							BRAND_COLORS.mutedMauve,
							BRAND_COLORS.softNude,
							BRAND_COLORS.warmRoseGold,
						].map((color) => (
							<div
								key={color}
								className="flex-1"
								style={{
									backgroundColor: color,
								}}
							/>
						))}
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
					{/* BODONI MODA */}

					<div className="card">
						<div className="grid gap-8 md:grid-cols-[220px_1fr] md:items-center">
							<div>
								<span className="label">DISPLAY TYPEFACE</span>

								<h3 className="mt-2 text-2xl">Bodoni Moda</h3>

								<p className="mt-2">
									يستخدم للعناوين الإنجليزية الكبيرة، اسم {BRAND.name}
									واللحظات البصرية ذات الحضور الـPremium.
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
			    PRODUCT MOCKUPS — ORIGINAL GALLERY
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
						<button
							key={mockup.title}
							type="button"
							onClick={() => setSelectedMockup(mockup)}
							className="group cursor-zoom-in overflow-hidden rounded-2xl border border-ruya-line bg-ui-fill/3 text-start transition duration-500 hover:-translate-y-1 hover:border-ruya-express/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ruya-express"
							aria-label={`Open ${mockup.title} mockup`}
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

								<div className="pointer-events-none absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/30 opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
									<svg
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="1.8"
										className="text-white"
										aria-hidden="true"
									>
										<path d="M15 3h6v6" />
										<path d="M9 21H3v-6" />
										<path d="M21 3l-7 7" />
										<path d="M3 21l7-7" />
									</svg>
								</div>
							</div>
						</button>
					))}
				</div>

				<div className="highlight mt-6">
					<h4>Visual Direction</h4>

					<p>
						تجمع التطبيقات بين Deep Aubergine، Soft Nude، Dusty Rose، Muted
						Mauve وWarm Rose Gold ضمن لغة بصرية واحدة، بينما يبقى رمز{" "}
						{BRAND.name} والعلاقة بين الألوان عناصر ثابتة تربط جميع الفئات
						بالهوية الرئيسية.
					</p>

					<div className="mt-5 flex h-3 overflow-hidden rounded-full">
						{[
							BRAND_COLORS.deepAubergine,
							BRAND_COLORS.softNude,
							BRAND_COLORS.dustyRose,
							BRAND_COLORS.mutedMauve,
							BRAND_COLORS.warmRoseGold,
						].map((color) => (
							<div
								key={color}
								className="flex-1"
								style={{
									backgroundColor: color,
								}}
							/>
						))}
					</div>
				</div>
			</section>

			{/* =====================================================
			    RITUAL BOX APPLICATION
			   ===================================================== */}

			<section className="section">
				<header className="section-header">
					<p className="eyebrow">RITUAL BOX APPLICATION</p>

					<h2 className="section-title">{BRAND.name} Ritual Box Concept</h2>

					<p>
						تصوّر بصري مرن لتجربة تغليف تتكيّف مع الـJourney المختارة، مع
						إمكانية إضافة Beauty Bite أو Discovery Gift بتصميم متناسق مع هوية
						RUYA.
					</p>
				</header>

				{/* COMPACT JOURNEY FILTERS */}

				<div className="flex flex-wrap gap-2">
					{ritualConcepts.map((concept, index) => {
						const active = activeJourney === index;

						return (
							<button
								key={concept.title}
								type="button"
								aria-pressed={active}
								onClick={() => setActiveJourney(index)}
								className={`inline-flex min-h-10 items-center justify-center rounded-full border px-4 py-2 text-xs font-semibold leading-5 transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ruya-express ${
									active
										? "border-ruya-express bg-ruya-express/15 text-ruya-text"
										: "border-ruya-line bg-ui-fill/3 text-ruya-muted hover:border-ruya-express/50 hover:text-ruya-text"
								}`}
							>
								{concept.title}
							</button>
						);
					})}
				</div>

				{/* COMPACT DELIGHT FILTERS */}

				<div className="mt-3 flex flex-wrap gap-2">
					<button
						type="button"
						aria-pressed={delightMode === "bite"}
						onClick={() => setDelightMode("bite")}
						className={`inline-flex min-h-10 items-center justify-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ruya-express ${
							delightMode === "bite"
								? "border-ruya-express bg-ruya-express/15 text-ruya-text"
								: "border-ruya-line bg-ui-fill/3 text-ruya-muted hover:border-ruya-express/50 hover:text-ruya-text"
						}`}
					>
						Beauty Bite
					</button>

					<button
						type="button"
						aria-pressed={delightMode === "discovery"}
						onClick={() => setDelightMode("discovery")}
						className={`inline-flex min-h-10 items-center justify-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ruya-express ${
							delightMode === "discovery"
								? "border-ruya-express bg-ruya-express/15 text-ruya-text"
								: "border-ruya-line bg-ui-fill/3 text-ruya-muted hover:border-ruya-express/50 hover:text-ruya-text"
						}`}
					>
						Discovery Gift
					</button>
				</div>

				{/* RITUAL BOX VISUAL */}

				<div className="mt-5 overflow-hidden rounded-4xl border border-ruya-line bg-ruya-bg/50 p-3 sm:p-6">
					<div
						className="relative overflow-hidden rounded-[1.6rem] p-4 shadow-2xl sm:p-9"
						style={{
							background: `radial-gradient(
								ellipse at 50% 0%,
								${BRAND_COLORS.dustyRose}40,
								transparent 60%
							),
							linear-gradient(
								145deg,
								${BRAND_COLORS.plumBrown},
								${BRAND_COLORS.charcoalPlum}
							)`,
						}}
					>
						{/* BOX LID */}

						<div
							className="mx-auto max-w-3xl rounded-t-3xl border border-b-0 px-6 py-6 text-center shadow-xl"
							style={{
								borderColor: `${BRAND_COLORS.warmRoseGold}55`,
								background: `linear-gradient(
									140deg,
									${BRAND_COLORS.deepAubergine},
									${BRAND_COLORS.plumBrown}
								)`,
							}}
						>
							<BrandSymbol className="mx-auto h-14 w-14" />

							<div
								dir="ltr"
								className="mt-3 font-display text-3xl tracking-[0.15em]"
							>
								<span className="brand-name-en">{BRAND.name}</span>
							</div>

							<p
								dir="ltr"
								className="mt-2 text-xs tracking-[0.18em]"
								style={{
									color: BRAND_COLORS.softNude,
								}}
							>
								{ritual.note}
							</p>
						</div>

						{/* OPEN BOX */}

						<div
							className="mx-auto max-w-3xl rounded-b-3xl border p-4 shadow-2xl sm:p-7"
							style={{
								borderColor: `${BRAND_COLORS.warmRoseGold}55`,
								background: `linear-gradient(
									155deg,
									${BRAND_COLORS.softNude},
									${BRAND_COLORS.warmIvory}
								)`,
							}}
						>
							<div className="mb-5 text-center">
								<span
									dir="ltr"
									className="text-[0.65rem] font-semibold tracking-[0.22em]"
									style={{
										color: BRAND_COLORS.plumBrown,
									}}
								>
									CURATED FOR YOUR JOURNEY
								</span>

								<h3
									className="mt-2 font-display text-2xl"
									style={{
										color: BRAND_COLORS.deepAubergine,
									}}
								>
									{ritual.title}
								</h3>
							</div>

							{/* MINI ESSENTIAL PRODUCTS */}

							<div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
								{ritual.essentials.map((product) => (
									<MiniProduct
										key={product.label}
										kind={product.kind}
										label={product.label}
									/>
								))}
							</div>

							{/* OPTIONAL DELIGHT SLOT */}

							<div
								className="mt-4 rounded-2xl border p-4 sm:p-6"
								style={{
									borderColor: `${BRAND_COLORS.dustyRose}77`,
									background: `linear-gradient(
										145deg,
										${BRAND_COLORS.warmIvory},
										${BRAND_COLORS.softNude}
									)`,
								}}
							>
								<div className="grid gap-5 sm:grid-cols-[140px_1fr] sm:items-center">
									{/* EXTRA VISUAL */}

									<div className="flex items-center justify-center">
										{delightMode === "bite" ? (
											<div
												className="flex h-30 w-30 rotate-[-7deg] flex-col items-center justify-center rounded-full border-4 text-center shadow-xl"
												style={{
													borderColor: BRAND_COLORS.warmRoseGold,
													background: `radial-gradient(
														circle at 30% 25%,
														${BRAND_COLORS.dustyRose},
														${BRAND_COLORS.deepAubergine}
													)`,
													color: BRAND_COLORS.warmIvory,
												}}
											>
												<span className="font-display text-2xl tracking-widest">
													RUYA
												</span>

												<span className="mt-2 text-[0.55rem] tracking-widest">
													BEAUTY BITE
												</span>
											</div>
										) : (
											<div className="w-34">
												<MiniProduct
													kind={ritual.discoveryKind}
													label="DISCOVERY"
												/>
											</div>
										)}
									</div>

									{/* EXTRA INFORMATION */}

									<div>
										<span
											className="text-[0.65rem] font-semibold tracking-[0.18em]"
											style={{
												color: BRAND_COLORS.dustyRose,
											}}
										>
											{delightMode === "bite"
												? "OPTION A · MOMENT DELIGHT"
												: "OPTION B · DISCOVERY DELIGHT"}
										</span>

										<h4
											className="mt-2 text-xl font-semibold"
											style={{
												color: BRAND_COLORS.deepAubergine,
											}}
										>
											{delightMode === "bite" ? ritual.bite : ritual.discovery}
										</h4>

										<p
											className="mt-3 text-xs"
											style={{
												color: BRAND_COLORS.plumBrown,
											}}
										>
											{delightMode === "bite"
												? "A little treat, chosen for this moment."
												: "A beauty discovery, chosen for your journey."}
										</p>
									</div>
								</div>
							</div>

							{/* JOURNEY CARD */}

							<div
								className="mt-4 rounded-xl border px-5 py-4 text-center"
								style={{
									borderColor: `${BRAND_COLORS.plumBrown}35`,
									backgroundColor: BRAND_COLORS.warmIvory,
								}}
							>
								<p
									dir="ltr"
									className="font-display text-lg"
									style={{
										color: BRAND_COLORS.deepAubergine,
									}}
								>
									Your Journey, Thoughtfully Prepared.
								</p>

								<p
									className="mt-2 text-xs"
									style={{
										color: BRAND_COLORS.plumBrown,
									}}
								>
									Products · Tools · Sequence · Guidance
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* PACKAGING APPLICATION */}

				<div className="mt-5 grid grid-2">
					<div className="card express">
						<span className="label">OPTION A · PACKAGING</span>

						<h3>Beauty Bite Packaging</h3>

						<p>
							غلاف غذائي مستقل بتصميم متناسق مع الهوية، مع الحفاظ على معلومات
							المنتج ومسببات الحساسية، وفصله عن مستحضرات التجميل.
						</p>
					</div>

					<div className="card journey">
						<span className="label">OPTION B · PACKAGING</span>

						<h3>Discovery Gift Packaging</h3>

						<p>
							تغليف مناسب لنوع الإضافة، سواء كانت مستحضرًا تجميليًا، Beauty Tool
							أو Accessory، مع إرشادات استخدام عند الحاجة.
						</p>
					</div>
				</div>

				<div className="highlight mt-5">
					<h4>Visual Concept, Not Final Packaging</h4>

					<p>
						هذه معاينة بصرية لتطبيق الهوية على تجربة الـRitual Box، وليست تصميم
						إنتاج نهائيًا. تتغير محتويات العلبة بحسب الـJourney، ولا يشترط جمع
						جميع فئات المنتجات فيها.
					</p>

					<p>
						يُعرض خيار Delight واحد في كل معاينة، لتوضيح استقلال الخيارين وتساوي
						أهميتهما.
					</p>
				</div>
			</section>

			{/* =====================================================
			    PRODUCT IMAGE MODAL
			   ===================================================== */}

			{selectedMockup && (
				<div
					className="fixed inset-0 z-100 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md md:p-8"
					role="dialog"
					aria-modal="true"
					aria-label={`${selectedMockup.title} product mockup`}
					onClick={() => setSelectedMockup(null)}
				>
					<button
						type="button"
						onClick={() => setSelectedMockup(null)}
						className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-md transition hover:bg-white/10 md:right-8 md:top-8"
						aria-label="Close image"
					>
						<svg
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.8"
							strokeLinecap="round"
							aria-hidden="true"
						>
							<path d="M18 6 6 18" />
							<path d="m6 6 12 12" />
						</svg>
					</button>

					<div
						className="relative flex h-full max-h-[92vh] w-full max-w-6xl items-center justify-center"
						onClick={(event) => event.stopPropagation()}
					>
						<Image
							src={selectedMockup.image}
							alt={selectedMockup.alt}
							width={1800}
							height={2200}
							sizes="100vw"
							priority
							className="max-h-[92vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
						/>
					</div>
				</div>
			)}

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
