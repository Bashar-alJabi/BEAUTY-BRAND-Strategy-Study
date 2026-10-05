"use client";

import { useEffect, useMemo, useState } from "react";

type Tone = "care" | "express" | "journey";

type Creative = {
	id: string;
	name: string;
	stage:
		| "Awareness"
		| "Education"
		| "Desire"
		| "Consideration"
		| "Conversion"
		| "Retargeting"
		| "Retention"
		| "Brand"
		| "Community";
	segment: string;
	need: string;
	journey: string;
	angle: string;
	hook: string;
	format: string;
	platforms: string;
	objective: string;
	visual: string;
	script: string;
	cta: string;
	metric: string;
	tone: Tone;
};

const creatives: Creative[] = [
	{
		id: "AD-01",
		name: "Going Out Tonight",
		stage: "Awareness",
		segment: "Outcome Seeker",
		need: "Stated + Social",
		journey: "Going Out / Dinner",
		angle: "Context-led",
		hook: "طالعة الليلة؟ كيف بدك تطلعي؟",
		format: "UGC Vertical Video",
		platforms: "TikTok · Instagram Reels",
		objective: "البدء من الـmoment والنتيجة بدل Product Category.",
		visual:
			"Creator أمام المرآة مع Soft / Glowy / Bold / Polished options ثم تظهر Journey مرتبة.",
		script: `طالعة الليلة؟

السؤال مو:
شو المنتج اللي لازم أشتريه؟

السؤال هو:
كيف بدي أطلع؟

Soft؟
Glowy؟
Bold؟
Polished؟

أنا بختار النتيجة.

RUYA بترتب الـJourney:
شو أستخدم،
بأي ترتيب،
وليش.`,
		cta: "Explore Your Journey",
		metric: "Hook Rate · CTR · Journey Start",
		tone: "express",
	},
	{
		id: "AD-02",
		name: "Dinner in Two Hours",
		stage: "Awareness",
		segment: "Efficient Achiever",
		need: "Functional + Emotional",
		journey: "Dinner",
		angle: "Time pressure",
		hook: "Dinner بعد ساعتين... ولساتك مو مقررة شو تعملي؟",
		format: "Fast UGC",
		platforms: "TikTok · Instagram Reels",
		objective: "إظهار قيمة الوضوح والسرعة.",
		visual: "Clock overlay + Products مبعثرة ثم Journey مرتبة.",
		script: `Dinner بعد ساعتين.

وعندك منتجات.

بس لساتك مو عارفة:
شو أول؟
شو ضروري؟
وشو أصلًا بيخدم الـLook؟

المشكلة مو نقص Products.

المشكلة إن الطريق مو واضح.

اختاري النتيجة.

واتبعي الـJourney.`,
		cta: "Choose Your Look",
		metric: "Hook Rate · CTR",
		tone: "care",
	},
	{
		id: "AD-03",
		name: "Soft or Bold",
		stage: "Awareness",
		segment: "Identity Shifter",
		need: "Identity",
		journey: "Multi-Journey",
		angle: "Identity choice",
		hook: "Soft اليوم؟ ولا Bold؟",
		format: "Split-screen Reel",
		platforms: "Instagram Reels · TikTok",
		objective: "إظهار مرونة الهوية بحسب اللحظة.",
		visual: "الشخص نفسه في أكثر من Look وسياق.",
		script: `مو لازم يكون عندك Look واحد يعرّفك.

اليوم Soft.

بكرا Polished.

الويكند Bold.

وكلهم أنتِ.

Beauty بتتغير مع اللحظة.

How do you want to show up today?`,
		cta: "Choose Your Journey",
		metric: "Completion · Saves · Shares",
		tone: "express",
	},
	{
		id: "AD-04",
		name: "Everyday But Better",
		stage: "Awareness",
		segment: "Efficient Achiever",
		need: "Functional + Identity",
		journey: "Everyday",
		angle: "Daily relevance",
		hook: "مو كل يوم بده Full Glam.",
		format: "Routine Reel",
		platforms: "Instagram · TikTok",
		objective: "ربط RUYA بالحياة اليومية.",
		visual: "Morning routine خفيفة تنتهي بنتيجة Fresh.",
		script: `مو كل يوم بده Full Glam.

أحيانًا بدك بس:

Fresh.
مرتبة.
خفيفة.
وبدون عشر خطوات.

Everyday Journey تبدأ من النتيجة اللي بدك ياها فعلًا.`,
		cta: "Explore Everyday",
		metric: "Saves · Journey Start",
		tone: "care",
	},
	{
		id: "AD-05",
		name: "Too Many Recommendations",
		stage: "Awareness",
		segment: "Overwhelmed Consumer",
		need: "Functional + Emotional",
		journey: "General",
		angle: "Choice Overload",
		hook: "يمكن المشكلة مو إنك بحاجة Recommendation جديدة.",
		format: "Talking Head UGC",
		platforms: "TikTok · Instagram",
		objective: "إعادة تعريف المشكلة من نقص المعلومات إلى كثرتها.",
		visual: "Reviews كثيرة ثم Journey واحدة واضحة.",
		script: `كل مرة بدك Look جديد...

Reviews.
TikToks.
Saved Posts.
Recommendations.

وبالآخر؟

حيرة أكتر.

يمكن المشكلة مو إنك بحاجة Recommendation جديدة.

يمكن بحاجة طريق أوضح.`,
		cta: "See How RUYA Works",
		metric: "Hold Rate · CTR",
		tone: "journey",
	},
	{
		id: "AD-06",
		name: "Professional Moment",
		stage: "Awareness",
		segment: "Outcome Seeker",
		need: "Identity + Emotional",
		journey: "Professional",
		angle: "Confidence",
		hook: "عندك يوم مهم؟ كيف بدك تدخلي عليه؟",
		format: "UGC / Lifestyle Reel",
		platforms: "Instagram · TikTok",
		objective: "ربط Professional بالاستعداد والثقة.",
		visual: "Getting ready قبل Meeting أو Interview.",
		script: `في أيام بدك فيها Look يقول:

مرتبة.
Polished.
واثقة.

مو لأنه في شكل واحد اسمه Professional.

لكن لأنك عارفة كيف بدك تظهري بهاللحظة.

RUYA تبدأ من هالنتيجة.`,
		cta: "Explore Professional",
		metric: "CTR · Journey Start",
		tone: "journey",
	},
	{
		id: "AD-07",
		name: "Intent Journey Result",
		stage: "Education",
		segment: "All",
		need: "Functional",
		journey: "General",
		angle: "How it works",
		hook: "RUYA بثلاث خطوات.",
		format: "Motion / Demo",
		platforms: "Instagram · TikTok · YouTube Shorts",
		objective: "شرح نموذج RUYA.",
		visual: "INTENT → JOURNEY → RESULT.",
		script: `RUYA بثلاث خطوات.

INTENT.

شو بدك اليوم؟

JOURNEY.

شو المنتجات والخطوات والترتيب؟

RESULT.

الـLook أو النتيجة اللي اخترتيها من البداية.`,
		cta: "See How It Works",
		metric: "Completion · CTR",
		tone: "journey",
	},
	{
		id: "AD-08",
		name: "What Why When",
		stage: "Education",
		segment: "Overwhelmed Consumer",
		need: "Unstated",
		journey: "General",
		angle: "Guidance",
		hook: "شو أستخدم؟ ليش؟ ومتى؟",
		format: "Step-by-step Reel",
		platforms: "Instagram · TikTok",
		objective: "تحويل Guidance إلى Benefit واضح.",
		visual: "Product + Step + Role.",
		script: `شو أستخدم؟

ليش هاد المنتج موجود؟

ومتى أستخدمه؟

كل Journey لازم تجاوب هالأسئلة.

شو.
ليش.
متى.
وبأي ترتيب.`,
		cta: "Explore a Journey",
		metric: "Saves · CTR",
		tone: "care",
	},
	{
		id: "AD-09",
		name: "Journey Is Not a Bundle",
		stage: "Education",
		segment: "Beauty-aware Consumer",
		need: "Real Need",
		journey: "General",
		angle: "Category education",
		hook: "Journey ≠ Bundle.",
		format: "Explainer",
		platforms: "Instagram · TikTok · Website",
		objective: "منع سوء فهم الفكرة.",
		visual:
			"Bundle = Products. Journey = Intent + Sequence + Guidance + Outcome.",
		script: `Bundle يعني:

مجموعة Products.

Journey تعني:

ليش هاي المنتجات؟
بأي ترتيب؟
كيف تستخدم؟
وشو النتيجة؟

هذا الفرق.`,
		cta: "See the Difference",
		metric: "Completion · CTR",
		tone: "journey",
	},
	{
		id: "AD-10",
		name: "Date Night",
		stage: "Desire",
		segment: "Identity Shifter",
		need: "Social + Secret",
		journey: "Date",
		angle: "Confidence",
		hook: "شو الـversion اللي بدك توصلي فيها الليلة؟",
		format: "Cinematic UGC",
		platforms: "Instagram · TikTok",
		objective: "ربط Beauty بالهوية والشعور.",
		visual: "Outfit + Mirror + Beauty Journey.",
		script: `يمكن بدك شي:

Soft.
Natural.
Warm.
Confident.

الفكرة مو تصيري حدا غيرك.

الفكرة تختاري النسخة اللي بدك تعبري عنها اليوم.`,
		cta: "Explore Date Night",
		metric: "Saves · Journey Start",
		tone: "express",
	},
	{
		id: "AD-11",
		name: "Party Mode",
		stage: "Desire",
		segment: "Explorer",
		need: "Identity + Delight",
		journey: "Party / Night Out",
		angle: "Expression",
		hook: "الليلة مو Everyday.",
		format: "High-energy Reel",
		platforms: "TikTok · Instagram",
		objective: "إظهار مساحة Expression أكبر.",
		visual: "Everyday → Night Out transition.",
		script: `الليلة مو Everyday.

يمكن بدك:

More glow.
More color.
More definition.
More attitude.

اختاري النتيجة.

والـJourney تتغير معها.`,
		cta: "Explore Party",
		metric: "Completion · Shares",
		tone: "express",
	},
	{
		id: "AD-12",
		name: "Camera Ready",
		stage: "Desire",
		segment: "Social-first Consumer",
		need: "Social + Functional",
		journey: "Camera Ready",
		angle: "Context",
		hook: "حلو بالمراية... بس كيف رح يطلع بالكاميرا؟",
		format: "Split Camera Demo",
		platforms: "TikTok · Instagram · YouTube Shorts",
		objective: "إظهار أهمية Context.",
		visual: "Mirror vs Camera result.",
		script: `الـLook اللي حلو بالمراية...

مو دائمًا نفسه اللي بيطلع أحسن بالكاميرا.

الإضاءة مختلفة.
الـfinish مختلف.
والهدف مختلف.

Context changes the journey.`,
		cta: "Explore Camera-ready",
		metric: "CTR · Journey Start",
		tone: "journey",
	},
	{
		id: "AD-13",
		name: "Wedding Result",
		stage: "Desire",
		segment: "Outcome Seeker",
		need: "Social + Emotional",
		journey: "Wedding / Special Occasion",
		angle: "High-intent occasion",
		hook: "المناسبة مهمة. والـLook لازم يكون محسوب.",
		format: "Cinematic Reel",
		platforms: "Instagram · Pinterest",
		objective: "إظهار قيمة Journey في مناسبة عالية الـIntent.",
		visual: "Preparation details ثم final reveal.",
		script: `في مناسبات ما بدك تتركي النتيجة للصدفة.

بدك تعرفي:

شو أول؟
شو بعده؟
شو يطول؟
وشو يخدم الـLook كامل؟

هنا قيمة Journey بتبين أكتر.`,
		cta: "Explore Special Occasion",
		metric: "Saves · Journey Start",
		tone: "express",
	},
	{
		id: "AD-14",
		name: "Why Every Product Is Here",
		stage: "Consideration",
		segment: "Outcome Seeker",
		need: "Real + Unstated",
		journey: "General",
		angle: "Product rationale",
		hook: "كل Product هون عنده وظيفة.",
		format: "Carousel / Reel",
		platforms: "Instagram · Meta",
		objective: "إثبات Curated Journey.",
		visual: "Product + Role + Step.",
		script: `هاي مو Products حطيناهم سوا.

كل Step له وظيفة.

وكل Product يخدم النتيجة.

هذا الفرق بين مجموعة Products...

وبين Journey.`,
		cta: "View the Journey",
		metric: "Carousel Completion · ATC",
		tone: "journey",
	},
	{
		id: "AD-15",
		name: "Five vs Fifteen",
		stage: "Consideration",
		segment: "Efficient Achiever",
		need: "Functional",
		journey: "Everyday",
		angle: "Choice simplification",
		hook: "5 منتجات فاهمتهم أحسن من 15 محتارة فيهم.",
		format: "Visual Comparison",
		platforms: "Meta · Instagram · TikTok",
		objective: "توضيح قيمة تقليل الاختيارات.",
		visual: "Many products vs curated steps.",
		script: `15 Product ما بيعنوا Routine أحسن.

إذا ما بتعرفي:

أي واحد ضروري؟
أي واحد قبله؟
وأي واحد ممكن تستغني عنه؟

العدد صار عبء.

أقل حيرة.
طريق أوضح.`,
		cta: "Simplify Your Routine",
		metric: "CTR · ATC",
		tone: "care",
	},
	{
		id: "AD-16",
		name: "Professional Walkthrough",
		stage: "Consideration",
		segment: "Outcome Seeker",
		need: "Functional + Emotional",
		journey: "Professional",
		angle: "Demonstration",
		hook: "من Prep إلى Polished.",
		format: "Journey Demo",
		platforms: "Instagram · Meta",
		objective: "إظهار Professional Journey كاملة.",
		visual: "Prepare → Care → Express → Finish.",
		script: `Professional Journey.

Prepare.

Care.

Express.

Finish.

كل خطوة واضحة.

والهدف من البداية:

Polished.
Confident.
Ready.`,
		cta: "Explore Professional",
		metric: "ATC · Journey Start",
		tone: "journey",
	},
	{
		id: "AD-17",
		name: "Long Night",
		stage: "Consideration",
		segment: "Outcome Seeker",
		need: "Functional",
		journey: "Party / Night Out",
		angle: "Performance",
		hook: "الـLook لازم يكمل معك.",
		format: "Demo Reel",
		platforms: "TikTok · Instagram",
		objective: "ربط Products بالـContext.",
		visual: "Start → Mid-night → End-night.",
		script: `Night Out Journey مو بس كيف يبدأ الـLook.

المهم كمان كيف يكمل.

Prep.
Products.
Finish.

كلهم يخدموا نفس الـcontext.`,
		cta: "Explore Night Out",
		metric: "CTR · ATC",
		tone: "express",
	},
	{
		id: "AD-18",
		name: "Already Sequenced",
		stage: "Conversion",
		segment: "Overwhelmed Consumer",
		need: "Functional + Unstated",
		journey: "General",
		angle: "Convenience",
		hook: "Selected together. Sequenced together.",
		format: "Carousel",
		platforms: "Meta · Instagram",
		objective: "تلخيص القيمة قبل الشراء.",
		visual: "Outcome → Steps → Result.",
		script: `Selected together.

Sequenced together.

Explained step by step.

Choose the result.

Follow the journey.`,
		cta: "Start Your Journey",
		metric: "ATC · Purchase · CAC",
		tone: "care",
	},
	{
		id: "AD-19",
		name: "Real Going Out Story",
		stage: "Conversion",
		segment: "Outcome Seeker",
		need: "Emotional + Social Proof",
		journey: "Going Out",
		angle: "Testimonial",
		hook: "أول مرة ما غيرت رأيي عشر مرات وأنا عم جهز.",
		format: "Customer UGC",
		platforms: "Meta · Instagram",
		objective: "إضافة Proof إنساني.",
		visual: "Selfie UGC أثناء التحضير.",
		script: `كنت عارفة شو بدي:

Soft Glow.

الـJourney كانت واضحة:

شو أستخدم.
ليش.
وبأي ترتيب.

وأكتر شي ارتحتله؟

إني ما ضليت أغير رأيي بكل خطوة.`,
		cta: "Start Your Journey",
		metric: "Purchase · CAC · ROAS",
		tone: "express",
	},
	{
		id: "AD-20",
		name: "Wedding Walkthrough",
		stage: "Conversion",
		segment: "High-intent Customer",
		need: "Functional + Emotional",
		journey: "Wedding",
		angle: "High-intent proof",
		hook: "Journey واضحة ليوم ما بدك تتركي فيه التفاصيل للصدفة.",
		format: "Walkthrough",
		platforms: "Meta · Instagram · Pinterest",
		objective: "تحويل High Intent إلى Purchase.",
		visual: "Full sequence + result.",
		script: `لما المناسبة مهمة...

كل Step لازم يكون واضح.

Prep.
Care.
Expression.
Finish.

مو بس شو المنتجات.

ليش موجودة وكيف تخدم النتيجة.`,
		cta: "Start Your Occasion Journey",
		metric: "Purchase · CAC",
		tone: "journey",
	},
	{
		id: "AD-21",
		name: "Still Thinking",
		stage: "Retargeting",
		segment: "Journey Viewer",
		need: "Emotional",
		journey: "Dynamic",
		angle: "Return to intent",
		hook: "لساتك عم تفكري بالـLook؟",
		format: "Short Video",
		platforms: "Meta Retargeting",
		objective: "إعادة المستخدم للـIntent.",
		visual: "Result first + Journey preview.",
		script: `لساتك عم تفكري بالـLook؟

النتيجة اللي اخترتيها بعدها نفسها.

والـJourney بعدها جاهزة.

كمّلي من المكان اللي وقفتي عنده.`,
		cta: "Continue Your Journey",
		metric: "Return Rate · Purchase",
		tone: "journey",
	},
	{
		id: "AD-22",
		name: "Journey Reminder",
		stage: "Retargeting",
		segment: "Journey Viewer",
		need: "Functional",
		journey: "Dynamic",
		angle: "Sequence reminder",
		hook: "You already chose the result.",
		format: "Carousel",
		platforms: "Meta · Instagram",
		objective: "تقليل Friction.",
		visual: "Prepare → Care → Express → Finish.",
		script: `You already chose the result.

Prepare.

Care.

Express.

Finish.

The path is ready.`,
		cta: "Finish Your Journey",
		metric: "CVR · CAC",
		tone: "care",
	},
	{
		id: "AD-23",
		name: "Different Version",
		stage: "Retention",
		segment: "Existing Customer",
		need: "Secret + Delight",
		journey: "Next Journey",
		angle: "Identity evolution",
		hook: "شو بدك تكون الـversion الجاية؟",
		format: "CRM Video",
		platforms: "Email · Instagram Retargeting",
		objective: "تحويل Repeat Purchase إلى New Intent.",
		visual: "Previous look → new possibilities.",
		script: `آخر Journey كانت شي.

بس اليوم يمكن بدك شي تاني.

Softer?
Bolder?
More polished?
More effortless?

ما في داعي تبدأي من الصفر.

اختاري النتيجة الجديدة.`,
		cta: "Discover What's Next",
		metric: "Second Journey Rate · Repeat Purchase",
		tone: "express",
	},
	{
		id: "AD-24",
		name: "Sample to Journey",
		stage: "Retention",
		segment: "Explorer",
		need: "Delight",
		journey: "Next Journey",
		angle: "Discovery",
		hook: "هالـSample مو موجودة بالصدفة.",
		format: "UGC / QR",
		platforms: "Email · Organic · Retargeting",
		objective: "تحويل Sample إلى Journey جديدة.",
		visual: "Sample + Card + QR.",
		script: `لقيتي هالـSample بطلبك؟

مو Random Gift.

هي احتمال جديد.

جربيها.

وافتحي الـJourney المرتبطة فيها.

One order.
Another possibility.`,
		cta: "Unlock the Next Journey",
		metric: "QR Scan · Journey Start",
		tone: "journey",
	},
	{
		id: "AD-25",
		name: "Hero Brand Film",
		stage: "Brand",
		segment: "All",
		need: "Identity + Secret",
		journey: "Multi-Journey",
		angle: "Brand platform",
		hook: "How do you want to show up today?",
		format: "Hero Film",
		platforms: "Instagram · YouTube · Website",
		objective: "بناء Mental Association.",
		visual:
			"Dinner · Everyday · Party · Professional · Camera · Special Occasion.",
		script: `Some days call for softness.

Some for confidence.

Some for expression.

Some for simplicity.

Beauty doesn't begin with a category.

It begins with an intention.

How do you want to show up today?

RUYA builds the journey.

SEE YOURSELF, YOUR WAY.`,
		cta: "Discover RUYA",
		metric: "Completion · Brand Search",
		tone: "express",
	},
	{
		id: "AD-26",
		name: "How You Showed Up",
		stage: "Community",
		segment: "Existing Customer",
		need: "Social + Identity",
		journey: "Any",
		angle: "Community",
		hook: "Show us how you showed up.",
		format: "UGC Montage",
		platforms: "Instagram · TikTok",
		objective: "بناء Community وSocial Proof.",
		visual: "Different customers + different contexts.",
		script: `Soft for dinner.

Fresh for the day.

Bold for the night.

Polished for work.

Elegant for the occasion.

Same person.

Different moments.

Show us how you showed up.`,
		cta: "Share Your Journey",
		metric: "UGC · Mentions · Shares",
		tone: "care",
	},
	{
		id: "AD-27",
		name: "Travel Light",
		stage: "Awareness",
		segment: "Efficient Achiever",
		need: "Functional",
		journey: "Travel",
		angle: "Simplification",
		hook: "رحلة أربع أيام ما بدها كل الحمام.",
		format: "Packing UGC",
		platforms: "TikTok · Instagram",
		objective: "اختبار Travel Intent.",
		visual: "Overpacked bag → curated selection.",
		script: `رحلة أربع أيام.

بس Beauty bag كأنك مسافرة شهر.

المشكلة مو نقص Products.

المشكلة إنك ما بتعرفي شو فعلًا تحتاجي.

Travel Journey تبدأ من الـcontext.`,
		cta: "Explore Travel",
		metric: "Saves · Journey Start",
		tone: "care",
	},
	{
		id: "AD-28",
		name: "I Want a Change",
		stage: "Awareness",
		segment: "Explorer",
		need: "Secret + Delight",
		journey: "Reinvention",
		angle: "Self-reinvention",
		hook: "بدك تغيير... بس مو عارفة من وين تبدأي؟",
		format: "Mirror POV",
		platforms: "TikTok · Instagram",
		objective: "إظهار أن Intent ليست دائمًا Occasion.",
		visual: "Soft · Warm · Fresh · Bold mood choices.",
		script: `أحيانًا ما عندك مناسبة.

وما عندك Product محدد.

بس عندك إحساس:

بدي تغيير.

Softer?
Warmer?
Bolder?
Fresher?

ابدئي من النتيجة.

مو من الـCategory.`,
		cta: "Find Your Next Journey",
		metric: "Shares · Saves · Journey Start",
		tone: "express",
	},
];

const stages = [
	"All",
	"Awareness",
	"Education",
	"Desire",
	"Consideration",
	"Conversion",
	"Retargeting",
	"Retention",
	"Brand",
	"Community",
] as const;

export default function MarketingCreativeLibrary() {
	const [selected, setSelected] = useState<Creative | null>(null);
	const [stage, setStage] = useState<(typeof stages)[number]>("All");

	const filtered = useMemo(() => {
		if (stage === "All") {
			return creatives;
		}

		return creatives.filter((creative) => creative.stage === stage);
	}, [stage]);

	useEffect(() => {
		if (!selected) {
			document.body.style.overflow = "";
			return;
		}

		document.body.style.overflow = "hidden";

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setSelected(null);
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [selected]);

	return (
		<>
			<div className="flex flex-wrap gap-2">
				{stages.map((item) => (
					<button
						key={item}
						type="button"
						onClick={() => setStage(item)}
						className={`rounded-full border px-3 py-2 text-xs font-semibold transition ${
							stage === item
								? "border-ruya-express/60 bg-ruya-express/15 text-ruya-text"
								: "border-ruya-line bg-ui-fill/3 text-ruya-muted hover:border-ruya-express/30 hover:text-ruya-text"
						}`}
					>
						{item}
					</button>
				))}
			</div>

			<div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
				{filtered.map((creative) => (
					<button
						key={creative.id}
						type="button"
						onClick={() => setSelected(creative)}
						className={`card ${creative.tone} group text-right transition hover:-translate-y-1 hover:border-ruya-express/40`}
					>
						<div className="flex items-start justify-between gap-3">
							<span className="label">
								{creative.id} · {creative.stage}
							</span>

							<span className="text-lg text-ruya-muted transition group-hover:text-ruya-text">
								↗
							</span>
						</div>

						<h3 className="mt-3 text-lg">{creative.name}</h3>

						<p className="mt-3 text-sm leading-7">{creative.hook}</p>

						<div className="pill-row">
							<span className="pill journey">{creative.journey}</span>
							<span className="pill">{creative.angle}</span>
						</div>

						<span className="mt-5 inline-block text-xs font-semibold text-ruya-express">
							OPEN CREATIVE →
						</span>
					</button>
				))}
			</div>

			{selected && (
				<div
					className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 p-3 backdrop-blur-sm md:p-6"
					role="dialog"
					aria-modal="true"
					onMouseDown={(event) => {
						if (event.target === event.currentTarget) {
							setSelected(null);
						}
					}}
				>
					<div className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-ruya-line bg-ruya-surface shadow-2xl">
						<div className="sticky top-0 z-10 flex items-start justify-between gap-5 border-b border-ruya-line bg-ruya-surface/95 p-5 backdrop-blur-xl md:p-7">
							<div>
								<span className="label">
									{selected.id} · {selected.stage}
								</span>

								<h2 className="mt-2 text-2xl font-bold text-ruya-text md:text-3xl">
									{selected.name}
								</h2>
							</div>

							<button
								type="button"
								onClick={() => setSelected(null)}
								className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ruya-line bg-ui-fill/3 text-xl text-ruya-muted transition hover:text-ruya-text"
								aria-label="إغلاق"
							>
								×
							</button>
						</div>

						<div className="p-5 md:p-7">
							<div className="pill-row mt-0">
								<span className="pill">{selected.segment}</span>
								<span className="pill">{selected.need}</span>
								<span className="pill journey">{selected.journey}</span>
								<span className="pill express">{selected.angle}</span>
							</div>

							<div className="mt-6 rounded-2xl border border-ruya-express/25 bg-ruya-express/5 p-5">
								<span className="label">HOOK</span>

								<p className="mt-3 text-xl font-bold leading-9 text-ruya-text">
									{selected.hook}
								</p>
							</div>

							<div className="mt-5 grid gap-4 md:grid-cols-2">
								<div className="need-block">
									<span className="need-block-label">FORMAT</span>
									<p>{selected.format}</p>
								</div>

								<div className="need-block">
									<span className="need-block-label">PLATFORMS</span>
									<p>{selected.platforms}</p>
								</div>
							</div>

							<div className="mt-5">
								<span className="label">OBJECTIVE</span>
								<p className="mt-2">{selected.objective}</p>
							</div>

							<div className="mt-5">
								<span className="label">VISUAL DIRECTION</span>
								<p className="mt-2">{selected.visual}</p>
							</div>

							<div className="mt-6 rounded-2xl border border-ruya-line bg-ruya-bg/40 p-5">
								<span className="label">SUGGESTED SCRIPT</span>

								<p className="mt-4 whitespace-pre-line leading-8 text-ruya-muted">
									{selected.script}
								</p>
							</div>

							<div className="mt-5 grid gap-4 md:grid-cols-2">
								<div className="need-block value">
									<span className="need-block-label">CTA</span>
									<p className="text-ruya-text">{selected.cta}</p>
								</div>

								<div className="need-block">
									<span className="need-block-label">METRIC TO WATCH</span>
									<p>{selected.metric}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
