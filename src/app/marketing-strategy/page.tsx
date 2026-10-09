import MarketingCreativeLibrary from "@/components/MarketingCreativeLibrary";
import { BRAND } from "@/config/brand";

/* =========================================================
   PSYCHOGRAPHIC SEGMENTS
   ========================================================= */

const psychographicSegments = [
	{
		id: "01",
		title: "The Outcome Seeker",
		priority: "PRIMARY",
		description:
			"تعرف النتيجة أو الـLook الذي تريده، لكنها لا تعرف بالضرورة المنتجات والأدوات والخطوات اللازمة للوصول إليه.",
		motivation: "الوصول إلى نتيجة واضحة بأقل تخمين ممكن.",
		frustration: "منتجات كثيرة لكن الطريق بينها وبين النتيجة غير واضح.",
		desiredIdentity: "تشعر أنها اختارت الـLook المناسب للحظة.",
		bestAngle: "ابدئي بالنتيجة، وليس بالمنتج.",
		message: "Choose the outcome. We build the journey.",
		tone: "journey",
	},
	{
		id: "02",
		title: "The Overwhelmed Beauty Consumer",
		priority: "PRIMARY",
		description:
			"مهتمة بالـBeauty، لكن كثرة المنتجات والـReviews والـRoutines جعلت القرار أصعب.",
		motivation: "وضوح وثقة أكبر في القرار.",
		frustration: "معلومات كثيرة وتوصيات متضاربة.",
		desiredIdentity: "تشعر أنها تعرف ماذا تستخدم ولماذا.",
		bestAngle: "You don't need more recommendations. You need a clearer path.",
		message: "Less confusion. More confidence.",
		tone: "express",
	},
	{
		id: "03",
		title: "The Identity Shifter",
		priority: "PRIMARY",
		description:
			"ترى Beauty كوسيلة للتعبير عن نسخ مختلفة من نفسها بحسب اليوم والمكان والمزاج.",
		motivation: "التعبير عن النسخة المناسبة للحظة.",
		frustration:
			"Product Categories وحدها لا تعبّر عن الطريقة التي تفكر بها في شكلها.",
		desiredIdentity:
			"Soft في لحظة، Polished في أخرى، Bold عندما تريد، وكلها أجزاء منها.",
		bestAngle: "How do you want to show up today?",
		message: "Different moments. Different versions. Still you.",
		tone: "care",
	},
	{
		id: "04",
		title: "The Efficient Achiever",
		priority: "SECONDARY",
		description:
			"قد تعرف Beauty جيدًا، لكنها لا تريد قضاء وقت طويل في البحث والمقارنة كل مرة.",
		motivation: "نتيجة جيدة بأقل Cognitive Effort.",
		frustration: "إعادة بناء الـRoutine من الصفر.",
		desiredIdentity: "سريعة، مرتبة وواثقة.",
		bestAngle: "Less searching. More getting ready.",
		message: "A clearer route to the look you already want.",
		tone: "journey",
	},
	{
		id: "05",
		title: "The Explorer",
		priority: "GROWTH",
		description:
			"تحب تجربة Looks وStyles ومنتجات وأدوات جديدة وتستخدم Beauty كمساحة للاكتشاف.",
		motivation: "التغيير والتجربة.",
		frustration: "عدم معرفة ماذا يمكن أن تجرب بعد ذلك.",
		desiredIdentity: "متجددة وفضولية.",
		bestAngle: "What do you want to try next?",
		message: "Your next journey might already be waiting.",
		tone: "express",
	},
] as const;

/* =========================================================
   LAUNCH JOURNEY PORTFOLIO
   ========================================================= */

const launchJourneys = [
	{
		title: "Going Out / Dinner",
		role: "HIGH PRIORITY",
		description:
			"Intent متكرر واجتماعي وغني بالـIdentity، ويعطي مساحة قوية لدمج Skin وHair وExpression داخل Result واحد.",
		examples: "Dinner · Drinks · Friends · Evening Out",
		tone: "express",
	},
	{
		title: "Everyday / Quick Ready",
		role: "HIGH PRIORITY",
		description:
			"يمثل الاستخدام المتكرر ويختبر قيمة السرعة والوضوح وتقليل الـChoice Overload.",
		examples: "Fresh · Minimal · Quick · Put Together",
		tone: "care",
	},
	{
		title: "Date / Social",
		role: "HIGH PRIORITY",
		description:
			"يربط Beauty بالثقة والهوية والسياق الاجتماعي بطريقة واضحة وقابلة للتكرار.",
		examples: "Soft · Warm · Natural · Confident",
		tone: "journey",
	},
	{
		title: "Party / Night Out",
		role: "STRONG TEST",
		description:
			"مساحة قوية للـExpression والـTransformation والـHigh-impact Creative.",
		examples: "Bold · Glow · Statement · Long-lasting",
		tone: "express",
	},
	{
		title: "Professional / Work",
		role: "STRONG TEST",
		description:
			"Intent واضح يرتبط بالثقة والاستعداد، ويخدم Work وMeetings وInterviews وPresentations.",
		examples: "Polished · Confident · Prepared · Refined",
		tone: "journey",
	},
	{
		title: "Content / Camera Ready",
		role: "STRONG TEST",
		description:
			"مناسب لجمهور Social-first حيث تتغير النتيجة بحسب الإضاءة والكاميرا والسياق الرقمي.",
		examples: "Live · Reels · Photos · Creator",
		tone: "care",
	},
	{
		title: "Wedding / Special Occasion",
		role: "OCCASION OPPORTUNITY",
		description:
			"Journey عالية الـIntent والقيمة، ومهمة للمناسبات التي تحتاج Result واضحًا ومدروسًا.",
		examples: "Wedding · Engagement · Formal Event · Celebration",
		tone: "express",
	},
] as const;

/* =========================================================
   INTENT ARCHITECTURE
   ========================================================= */

const intentLayers = [
	{
		label: "CONTEXT",
		title: "Where am I going?",
		items: ["Dinner", "Party", "Date", "Work", "Wedding", "Travel", "Content"],
		tone: "care",
	},
	{
		label: "DESIRED LOOK",
		title: "How do I want to look?",
		items: ["Soft", "Glowy", "Bold", "Minimal", "Polished", "Fresh", "Elegant"],
		tone: "express",
	},
	{
		label: "NEED / CONSTRAINT",
		title: "What matters right now?",
		items: [
			"Quick",
			"Long-lasting",
			"Low Effort",
			"Camera-ready",
			"Daylight",
			"Lightweight",
		],
		tone: "journey",
	},
] as const;

/* =========================================================
   CAMPAIGN TERRITORIES
   ========================================================= */

const campaignTerritories = [
	{
		title: "How Do You Want to Show Up Today?",
		score: "10/10",
		role: "RECOMMENDED",
		description:
			"الأقرب إلى جوهر RUYA لأنه يتسع للحظات اليومية والاجتماعية والمهنية والخاصة بدون حصر البراند في Journey واحدة.",
	},
	{
		title: "Start With What You Want",
		score: "9/10",
		role: "STRONG",
		description:
			"واضح جدًا من ناحية Positioning ويشرح الفرق بين Product-first وIntent-first.",
	},
	{
		title: "Stop Shopping Products. Start Choosing Outcomes.",
		score: "8/10",
		role: "PERFORMANCE",
		description:
			"قوي في Problem-aware Advertising، لكنه أقسى كـBrand Platform رئيسية.",
	},
	{
		title: "Your Look. Your Journey.",
		score: "7/10",
		role: "SUPPORTING",
		description:
			"سهل الاستخدام عبر Journeys متعددة لكنه أقل تميزًا من الخيارات السابقة.",
	},
] as const;

/* =========================================================
   FULL FUNNEL
   ========================================================= */

const funnel = [
	{
		stage: "01 · AWARENESS",
		thought: "هذا الموقف أو الشعور يشبهني.",
		message: "ابدئي من اللحظة والنتيجة التي تريدينها، لا من Product Category.",
		content: "POV · Context · Identity · Problem-aware · UGC",
		cta: "See the Journey",
		kpi: "Hook Rate · Hold Rate · CTR",
		tone: "care",
	},
	{
		stage: "02 · EDUCATION",
		thought: "ما الفرق بين Journey وBundle؟",
		message: "Intent → Selection → Sequence → Guidance → Outcome.",
		content: "Journey Demo · Explainer · Carousel",
		cta: "See How It Works",
		kpi: "CTR · Journey Start",
		tone: "journey",
	},
	{
		stage: "03 · DESIRE",
		thought: "أي نتيجة أو Look يناسبني؟",
		message: "Soft، Bold، Fresh، Polished أو Elegant بحسب اللحظة.",
		content: "Identity · Transformation · Creator Stories",
		cta: "Choose Your Journey",
		kpi: "Journey Start · Saves · Shares",
		tone: "express",
	},
	{
		stage: "04 · CONSIDERATION",
		thought: "لماذا هذه المنتجات والأدوات والخطوات؟",
		message: "كل منتج أو أداة له دور داخل النتيجة والـSequence.",
		content: "Product & Tool Proof · Reviews · Sequence · Demonstration",
		cta: "Explore This Journey",
		kpi: "ATC · Checkout · CVR",
		tone: "journey",
	},
	{
		stage: "05 · CONVERSION",
		thought: "هل أبدأ الآن؟",
		message: "النتيجة واضحة والطريق مرتب.",
		content: "UGC · Walkthrough · Retargeting · Proof",
		cta: "Start Your Journey",
		kpi: "Purchase · CAC · AOV · ROAS",
		tone: "express",
	},
	{
		stage: "06 · EXPERIENCE",
		thought: "كيف أستخدم كل شيء؟",
		message: "Guidance تستمر بعد الشراء، من فتح العلبة إلى تطبيق الـJourney.",
		content: "Email · QR · How-to · Journey Card · Product Guidance",
		cta: "Follow Your Journey",
		kpi: "Engagement · Satisfaction · Experience Feedback",
		tone: "care",
	},
	{
		stage: "07 · RETENTION",
		thought: "شو بدي بعد ذلك؟",
		message:
			"First Journey يمكن أن تفتح Next Journey من خلال تجربة جيدة وتوصيات مرتبطة بالـIntent.",
		content: "Discovery Gifts · CRM · Recommendations · Retargeting",
		cta: "Discover What's Next",
		kpi: "Repeat Purchase · Second Journey Rate · LTV",
		tone: "journey",
	},
] as const;

/* =========================================================
   CHANNEL STRATEGY
   ========================================================= */

const channels = [
	{
		channel: "Instagram / Meta",
		priority: "MUST HAVE",
		role: "Full Funnel",
		why: "Visual Desire، Reels، Creator Ads، Retargeting وConversion.",
	},
	{
		channel: "TikTok",
		priority: "MUST TEST",
		role: "Discovery",
		why: "مناسب لـPOV، GRWM، Context-led Storytelling والـNative UGC.",
	},
	{
		channel: "UGC Creators",
		priority: "MUST HAVE",
		role: "Creative Engine",
		why: "يشرح المشكلة والـJourney بصوت بشري وليس Product-only.",
	},
	{
		channel: "Organic Social",
		priority: "MUST HAVE",
		role: "Brand + Learning",
		why: "لتعليم السوق واختبار الرسائل والـJourneys.",
	},
	{
		channel: "Email / CRM",
		priority: "MUST HAVE",
		role: "Retention",
		why: "لدعم استخدام الـJourney الأولى وتشجيع اكتشاف Intents وتجارب جديدة.",
	},
	{
		channel: "Google Search",
		priority: "SECONDARY",
		role: "Intent Capture",
		why: "لالتقاط البحث الموجود أصلًا حول Looks وRoutines وOccasions.",
	},
	{
		channel: "Pinterest",
		priority: "TEST",
		role: "Inspiration",
		why: "مناسب للـLooks والـMood والـOccasion Planning.",
	},
	{
		channel: "YouTube",
		priority: "TEST → SCALE",
		role: "Education + Trust",
		why: "مناسب للشرح الأطول والـJourney Demonstration.",
	},
] as const;

/* =========================================================
   LAUNCH PHASES
   ========================================================= */

const launchPhases = [
	{
		phase: "01 · PRE-LAUNCH",
		duration: "2–3 Weeks",
		objective: "Problem + Intent Learning",
		actions: [
			"اختبار Outcome-first وContext-first Messaging.",
			"إنتاج Creative Library متنوعة بدل Hero Film واحد.",
			"اختبار أكثر من Intent بدون فتح Journeys كثيرة جدًا.",
		],
	},
	{
		phase: "02 · LAUNCH",
		duration: "4–6 Weeks",
		objective: "Understanding + Desire + Purchase",
		actions: [
			"بدء الاختبار من Priority Journey Portfolio.",
			"استخدام How Do You Want to Show Up Today? كمظلة Brand.",
			"اختبار Functional vs Emotional vs Identity Messaging.",
			"إرسال Context-specific Ads إلى Journey Landing Pages مناسبة.",
		],
	},
	{
		phase: "03 · OPTIMIZATION",
		duration: "Weeks 7–12",
		objective: "Scale + Expand",
		actions: [
			"تحديد أفضل Intent وأفضل Psychological Angle.",
			"إضافة Creator Variations وSocial Proof.",
			"توسيع Journeys بناءً على البيانات والموسمية.",
			"اختبار الإضافات الاختيارية داخل تجربة ما بعد الشراء.",
			"تحسين CRM وRetention وSecond Journey Discovery.",
		],
	},
] as const;

/* =========================================================
   FIRST 90 DAYS
   ========================================================= */

const roadmap = [
	[
		"DAYS 1–14",
		"Foundation",
		"Tracking، Journey Landing Pages، CRM، UTMs وإنتاج أول Creative Batch.",
	],
	[
		"DAYS 15–30",
		"Launch Tests",
		"اختبار Going Out / Dinner، Everyday وDate / Social كـHigh Priority Intents مع زوايا نفسية مختلفة.",
	],
	[
		"DAYS 31–45",
		"Learn",
		"مقارنة Hook وCTR وJourney Start وATC وPurchase لتحديد الـIntents التي تستحق Scale.",
	],
	[
		"DAYS 46–60",
		"Expand",
		"إضافة Party وProfessional وCamera-ready ضمن Structured Tests.",
	],
	[
		"DAYS 61–75",
		"Broaden",
		"توسيع أفضل Journeys وإدخال Special Occasion / Wedding عندما يكون الـContext مناسبًا.",
	],
	[
		"DAYS 76–90",
		"Retain",
		"CRM وSecond Journey Experiments واختبارات Delight الاختيارية المرتبطة بالـIntent.",
	],
] as const;

/* =========================================================
   BUDGET FRAMEWORK
   ========================================================= */

const budgets = [
	{
		title: "Lean Launch",
		rows: [
			["Prospecting", "55%"],
			["Retargeting", "15%"],
			["Creative / UGC", "20%"],
			["Search", "5%"],
			["Experiments", "5%"],
		],
	},
	{
		title: "Balanced Launch",
		rows: [
			["Prospecting", "50%"],
			["Retargeting", "15%"],
			["Creator / UGC", "15%"],
			["Search", "10%"],
			["Experiments", "10%"],
		],
	},
	{
		title: "Aggressive Launch",
		rows: [
			["Scaled Prospecting", "45%"],
			["Retargeting", "15%"],
			["Creators", "15%"],
			["Search / YouTube", "10%"],
			["New Journey Tests", "10%"],
			["Experimental", "5%"],
		],
	},
] as const;

/* =========================================================
   TESTING AND METRICS
   ========================================================= */

const testingLayers = [
	["01", "JOURNEY", "Going Out vs Everyday vs Date vs Professional"],
	["02", "PSYCHOLOGY", "Functional vs Emotional vs Identity"],
	["03", "HOOK", "Context vs Problem vs Identity vs Curiosity"],
	["04", "FORMAT", "UGC vs Demo vs Polished vs Carousel"],
	["05", "CTA", "See Journey vs Choose Journey vs Start Journey"],
] as const;

const metrics = [
	["Hook Rate", "هل أول ثواني أوقفت المستخدم؟"],
	["Hold Rate", "هل بقي يشاهد بعد الـHook؟"],
	["CTR", "هل الرسالة خلقت اهتمامًا؟"],
	["Journey Start", "كم شخص بدأ Journey؟"],
	["ATC", "هل الاهتمام وصل إلى نية شراء؟"],
	["CVR", "كم نسبة الزوار الذين اشتروا؟"],
	["CAC", "كم كلف اكتساب عميل جديد؟"],
	["AOV", "ما متوسط قيمة الطلب؟"],
	["ROAS", "ما الإيراد المباشر مقابل الإنفاق؟"],
	["Repeat Purchase", "هل عاد العميل واشترى مجددًا؟"],
	["Second Journey Rate", "كم عميل انتقل إلى Journey أخرى؟"],
	["LTV", "ما قيمة العميل عبر كامل العلاقة؟"],
] as const;

/* =========================================================
   DELIGHT EXPERIMENTATION

   Equal alternatives:
   Control vs Moment Delight vs Discovery Delight

   Do not confuse a post-purchase test with an ad test.
   ========================================================= */

const delightTestVariants = [
	{
		label: "CONTROL",
		title: "Core Journey Only",
		description:
			"الـJourney الأساسية بمنتجاتها أو أدواتها وإرشاداتها، دون إضافة Delight.",
		question: "ما مستوى الرضا وإعادة الشراء دون أي إضافة اختيارية؟",
		tone: "care",
	},
	{
		label: "OPTION A",
		title: "Moment Delight",
		description:
			"Beauty Bite مختارة بحسب الـIntent، ضمن تغليف غذائي مستقل ومناسب.",
		question: "هل الإضافة تحسن تجربة فتح الطلب والرضا وتذكر البراند؟",
		tone: "express",
	},
	{
		label: "OPTION B",
		title: "Discovery Delight",
		description:
			"Discovery Gift من Cosmetics أو Beauty Tools أو Accessories، مرتبطة بالـJourney.",
		question:
			"هل الإضافة تحسن التجربة وتزيد الاهتمام بمنتجات أو Journeys أخرى؟",
		tone: "journey",
	},
] as const;

const delightMeasurement = [
	{
		metric: "Experience Satisfaction",
		meaning: "تقييم تجربة الاستلام وفتح الطلب بعد استخدام الـJourney.",
	},
	{
		metric: "Gift Relevance",
		meaning: "هل شعر العميل أن الإضافة مناسبة لما اختاره فعلًا؟",
	},
	{
		metric: "Incremental Cost",
		meaning: "تكلفة الإضافة والتغليف والشحن والتشغيل لكل طلب.",
	},
	{
		metric: "Repeat Purchase",
		meaning: "هل تحسن احتمال العودة للشراء مقارنة بمجموعة Control؟",
	},
	{
		metric: "Discovery Engagement",
		meaning: "هل جرب العميل الـDiscovery Gift أو تفاعل مع إرشاداتها؟",
	},
	{
		metric: "Second Journey Rate",
		meaning: "هل أدى الاكتشاف إلى اهتمام فعلي أو شراء Journey مختلفة؟",
	},
] as const;

/* =========================================================
   PAGE
   ========================================================= */

export default function MarketingStrategyPage() {
	return (
		<div className="page-shell">
			{/* HERO */}

			<header className="hero">
				<p className="eyebrow">MARKETING STRATEGY</p>

				<h1>من Brand Strategy إلى Market Action</h1>

				<p>
					تحويل فكرة{" "}
					<strong className="text-ruya-text">Intent → Journey → Result</strong>{" "}
					إلى نظام تسويقي وإعلاني يصل إلى الجمهور المناسب، يشرح قيمة{" "}
					{BRAND.name} ويقود إلى تجربة وشراء فعليين.
				</p>
			</header>

			{/* STRATEGIC DIAGNOSIS */}

			<section className="section">
				<header className="section-header">
					<p className="eyebrow">STRATEGIC DIAGNOSIS</p>

					<h2 className="section-title">ما الذي يجب أن نسوّقه فعليًا؟</h2>
				</header>

				<div className="grid grid-3">
					<div className="card care">
						<span className="label">WHAT THE USER SEES</span>

						<div className="big mt-2">Beauty Products</div>

						<p className="mt-3">
							Skincare، Hair، Makeup، Tools وAccessories وغيرها.
						</p>
					</div>

					<div className="card journey">
						<span className="label">WHAT RUYA ORGANIZES</span>

						<div className="big mt-2">Selection + Sequence + Guidance</div>

						<p className="mt-3">ترتيب الطريق بحسب النتيجة والـContext.</p>
					</div>

					<div className="card express">
						<span className="label">WHAT THE USER BUYS</span>

						<div className="big mt-2">Clarity + Confidence + Outcome</div>

						<p className="mt-3">
							القيمة النهائية هي سهولة الوصول إلى النتيجة المطلوبة.
						</p>
					</div>
				</div>

				<div className="highlight">
					<h4>Strategic Thesis</h4>

					<p
						dir="ltr"
						className="text-xl font-semibold leading-9 text-ruya-text"
					>
						RUYA should not compete on having more beauty products. It should
						compete on making the path to the desired result clearer.
					</p>
				</div>
			</section>

			{/* INTENT ARCHITECTURE */}

			<section className="section">
				<header className="section-header">
					<p className="eyebrow">INTENT ARCHITECTURE</p>

					<h2 className="section-title">الـIntent أوسع من المناسبة وحدها</h2>

					<p>
						يمكن أن تبدأ Beauty Journey من الـContext، أو الـLook المطلوب، أو
						حاجة عملية محددة، أو مزيج بينها.
					</p>
				</header>

				<div className="grid grid-3">
					{intentLayers.map((layer) => (
						<div key={layer.label} className={`card ${layer.tone}`}>
							<span className="label">{layer.label}</span>

							<h3 className="mt-2" dir="ltr">
								{layer.title}
							</h3>

							<div className="pill-row">
								{layer.items.map((item) => (
									<span className="pill" key={item}>
										{item}
									</span>
								))}
							</div>
						</div>
					))}
				</div>

				<div className="highlight">
					<h4>Intent Combination</h4>

					<p dir="ltr" className="text-xl font-semibold text-ruya-text">
						Dinner + Soft Glow + Quick
					</p>

					<p>
						كلما أصبح النظام أكثر تطورًا، تستطيع RUYA الانتقال من Journeys ثابتة
						إلى Intent Engine أكثر مرونة.
					</p>
				</div>
			</section>

			{/* PSYCHOGRAPHIC SEGMENTATION */}

			<section className="section">
				<header className="section-header">
					<p className="eyebrow">PSYCHOGRAPHIC SEGMENTATION</p>

					<h2 className="section-title">من نستهدف من ناحية طريقة التفكير؟</h2>

					<p>
						العمر والجنس مهمان للـMedia Planning، لكن سبب الشراء الحقيقي يأتي من
						Motivation، Friction، Identity وContext.
					</p>
				</header>

				<div className="needs-grid">
					{psychographicSegments.map((segment) => (
						<article key={segment.id} className={`need-card ${segment.tone}`}>
							<div className="need-heading">
								<span className="label">
									{segment.id} · {segment.priority}
								</span>

								<h3 dir="ltr">{segment.title}</h3>
							</div>

							<p className="need-description">{segment.description}</p>

							<div className="need-details">
								<div className="need-block">
									<span className="need-block-label">CORE MOTIVATION</span>
									<p>{segment.motivation}</p>
								</div>

								<div className="need-block">
									<span className="need-block-label">FRUSTRATION</span>
									<p>{segment.frustration}</p>
								</div>

								<div className="need-block">
									<span className="need-block-label">DESIRED IDENTITY</span>
									<p>{segment.desiredIdentity}</p>
								</div>

								<div className="need-block value">
									<span className="need-block-label">BEST ANGLE</span>
									<p>{segment.bestAngle}</p>
								</div>
							</div>

							<div className="need-quote" dir="ltr">
								<strong>{segment.message}</strong>
							</div>
						</article>
					))}
				</div>
			</section>

			{/* LAUNCH JOURNEY PORTFOLIO */}

			<section className="section">
				<header className="section-header">
					<p className="eyebrow">LAUNCH JOURNEY PORTFOLIO</p>

					<h2 className="section-title">Priority Intents for Launch Testing</h2>

					<p>
						تختلف الأولوية بحسب الـFrequency، الـContext، الـDesired Look،
						الـCommercial Potential والهدف التسويقي، بينما يبقى النظام قادرًا
						على خدمة لحظات يومية واجتماعية ومهنية وخاصة.
					</p>
				</header>

				<div className="grid grid-2">
					{launchJourneys.map((journey) => (
						<div key={journey.title} className={`card ${journey.tone}`}>
							<span className="label">{journey.role}</span>

							<h3 className="mt-2">{journey.title}</h3>

							<p className="mt-3">{journey.description}</p>

							<p dir="ltr" className="mt-4 text-sm text-ruya-text">
								{journey.examples}
							</p>
						</div>
					))}
				</div>

				<div className="highlight">
					<h4>Journey Portfolio</h4>

					<p>
						Higher launch priority does not mean lower strategic importance for
						the other Journeys. الأولوية هنا تحدد ترتيب الاختبار، لا قيمة
						الـJourney داخل النظام.
					</p>

					<div className="pill-row">
						<span className="pill express">Going Out / Dinner</span>
						<span className="pill care">Everyday</span>
						<span className="pill journey">Date / Social</span>
						<span className="pill express">Party</span>
						<span className="pill">Professional</span>
						<span className="pill">Camera-ready</span>
						<span className="pill">Wedding</span>
						<span className="pill">Travel</span>
					</div>
				</div>
			</section>

			{/* CAMPAIGN BIG IDEA */}

			<section className="section">
				<header className="section-header">
					<p className="eyebrow">CAMPAIGN BIG IDEA</p>

					<h2 className="section-title">الفكرة الإعلانية الرئيسية</h2>
				</header>

				<div className="final-box">
					<p className="label">RECOMMENDED CAMPAIGN PLATFORM</p>

					<div
						dir="ltr"
						className="font-display mt-4 text-4xl font-medium leading-tight text-ruya-text md:text-6xl"
					>
						How do you want
						<br />
						to show up today?
					</div>

					<p className="mx-auto mt-6 max-w-2xl text-lg text-ruya-muted">
						السؤال يبدأ من الصورة والنتيجة التي يريد المستخدم الوصول إليها في
						اللحظة الحالية، وليس من فئة المنتج.
					</p>
				</div>

				<div className="grid grid-2 mt-5">
					{campaignTerritories.map((territory) => (
						<div className="card" key={territory.title}>
							<div className="flex items-center justify-between gap-3">
								<span className="label">{territory.role}</span>

								<span className="pill journey">{territory.score}</span>
							</div>

							<h3 dir="ltr" className="mt-3 text-xl">
								{territory.title}
							</h3>

							<p className="mt-3">{territory.description}</p>
						</div>
					))}
				</div>
			</section>

			{/* MESSAGING ARCHITECTURE */}

			<section className="section">
				<header className="section-header">
					<p className="eyebrow">MESSAGING ARCHITECTURE</p>

					<h2 className="section-title">ماذا نقول للسوق؟</h2>
				</header>

				<div className="highlight">
					<h4>Master Message</h4>

					<p
						dir="ltr"
						className="text-xl font-semibold leading-9 text-ruya-text"
					>
						Choose how you want to show up. RUYA builds the beauty journey to
						get you there.
					</p>
				</div>

				<div className="grid grid-2 mt-5">
					<div className="card care">
						<span className="label">FUNCTIONAL</span>

						<h3 dir="ltr">
							Stop piecing your routine together product by product.
						</h3>
					</div>

					<div className="card express">
						<span className="label">EMOTIONAL</span>

						<h3 dir="ltr">Feel sure about what comes next.</h3>
					</div>

					<div className="card journey">
						<span className="label">IDENTITY</span>

						<h3 dir="ltr">
							Soft today. Polished tomorrow. Bold when you want.
						</h3>
					</div>

					<div className="card">
						<span className="label">CHOICE OVERLOAD</span>

						<h3 dir="ltr">
							More products aren&apos;t the answer. A clearer path is.
						</h3>
					</div>
				</div>
			</section>

			{/* FULL FUNNEL */}

			<section className="section">
				<header className="section-header">
					<p className="eyebrow">FULL FUNNEL</p>

					<h2 className="section-title">من أول Moment إلى Next Journey</h2>
				</header>

				<div className="grid gap-4">
					{funnel.map((item) => (
						<article key={item.stage} className={`card ${item.tone}`}>
							<div className="grid gap-5 md:grid-cols-[180px_1fr]">
								<div>
									<span className="label">{item.stage}</span>

									<div className="mt-3 text-lg font-bold text-ruya-text">
										{item.thought}
									</div>
								</div>

								<div className="grid gap-4 md:grid-cols-2">
									<div>
										<span className="label">MESSAGE</span>
										<p className="mt-2">{item.message}</p>
									</div>

									<div>
										<span className="label">CONTENT</span>
										<p className="mt-2">{item.content}</p>
									</div>

									<div>
										<span className="label">CTA</span>
										<p className="mt-2 text-ruya-text">{item.cta}</p>
									</div>

									<div>
										<span className="label">KEY SIGNAL</span>
										<p className="mt-2">{item.kpi}</p>
									</div>
								</div>
							</div>
						</article>
					))}
				</div>
			</section>

			{/* CHANNEL STRATEGY */}

			<section className="section">
				<header className="section-header">
					<p className="eyebrow">CHANNEL STRATEGY</p>

					<h2 className="section-title">القنوات والمنصات المناسبة</h2>
				</header>

				<div className="comparison">
					<table>
						<thead>
							<tr>
								<th>Channel</th>
								<th>Priority</th>
								<th>Role</th>
								<th>Why</th>
							</tr>
						</thead>

						<tbody>
							{channels.map((channel) => (
								<tr key={channel.channel}>
									<td>
										<strong className="text-ruya-text">
											{channel.channel}
										</strong>
									</td>

									<td>{channel.priority}</td>
									<td>{channel.role}</td>
									<td>{channel.why}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</section>

			{/* LAUNCH PLAN */}

			<section className="section">
				<header className="section-header">
					<p className="eyebrow">LAUNCH PLAN</p>

					<h2 className="section-title">كيف نطلق الحملة؟</h2>
				</header>

				<div className="grid grid-3">
					{launchPhases.map((phase) => (
						<article className="card" key={phase.phase}>
							<span className="label">{phase.phase}</span>

							<h3 className="mt-2">{phase.duration}</h3>

							<div className="quote journey">
								<strong>{phase.objective}</strong>
							</div>

							<div className="mt-4 space-y-3">
								{phase.actions.map((action) => (
									<p key={action}>• {action}</p>
								))}
							</div>
						</article>
					))}
				</div>
			</section>

			{/* FIRST 90 DAYS */}

			<section className="section">
				<header className="section-header">
					<p className="eyebrow">FIRST 90 DAYS</p>

					<h2 className="section-title">خريطة التنفيذ لأول ثلاثة أشهر</h2>
				</header>

				<div className="grid gap-3">
					{roadmap.map(([time, phase, action]) => (
						<div
							key={time}
							className="card grid gap-3 md:grid-cols-[150px_170px_1fr] md:items-center"
						>
							<span className="label">{time}</span>

							<strong className="text-ruya-text">{phase}</strong>

							<p>{action}</p>
						</div>
					))}
				</div>
			</section>

			{/* BUDGET FRAMEWORK */}

			<section className="section">
				<header className="section-header">
					<p className="eyebrow">BUDGET FRAMEWORK</p>

					<h2 className="section-title">توزيع الميزانية حسب حجم الإطلاق</h2>
				</header>

				<div className="grid grid-3">
					{budgets.map((budget) => (
						<article className="card" key={budget.title}>
							<h3>{budget.title}</h3>

							<div className="mt-5 space-y-3">
								{budget.rows.map(([name, value]) => (
									<div
										key={name}
										className="flex items-center justify-between gap-4 border-b border-ruya-line pb-3"
									>
										<span className="text-sm text-ruya-muted">{name}</span>

										<strong className="text-ruya-text">{value}</strong>
									</div>
								))}
							</div>
						</article>
					))}
				</div>

				<div className="highlight">
					<h4>Important Principle</h4>

					<p dir="ltr" className="text-lg font-semibold text-ruya-text">
						Media Budget should not grow faster than Creative Learning Capacity.
					</p>
				</div>
			</section>

			{/* TESTING FRAMEWORK */}

			<section className="section">
				<header className="section-header">
					<p className="eyebrow">TESTING FRAMEWORK</p>

					<h2 className="section-title">ماذا نختبر وبأي ترتيب؟</h2>
				</header>

				<div className="grid gap-4 md:grid-cols-5">
					{testingLayers.map(([no, title, description]) => (
						<div className="card" key={no}>
							<span className="label">{no}</span>

							<h3 className="mt-2">{title}</h3>

							<p className="mt-3">{description}</p>
						</div>
					))}
				</div>

				<div className="highlight">
					<h4>Testing Rule</h4>

					<p>
						لا تغيّر Journey + Creator + Hook + Audience + Offer + Landing Page
						كلها في الاختبار نفسه، وإلا لن تعرف لماذا فاز الإعلان أو خسر.
					</p>
				</div>
			</section>

			{/* LANDING PAGE STRATEGY */}

			<section className="section">
				<header className="section-header">
					<p className="eyebrow">LANDING PAGE STRATEGY</p>

					<h2 className="section-title">
						الحفاظ على الـIntent من الإعلان حتى الـConversion
					</h2>
				</header>

				<div className="model">
					<div className="model-step intent">
						<span className="label">AD PROMISE</span>

						<h3>Specific Intent</h3>

						<p>Context · Look · Need.</p>
					</div>

					<div className="model-step journey-step">
						<span className="label">LANDING PAGE</span>

						<h3>Relevant Journey</h3>

						<p>Products + Tools + Why + Sequence + Guidance.</p>
					</div>

					<div className="model-step result">
						<span className="label">CONVERSION</span>

						<h3>Start This Journey</h3>

						<p>نفس النية تستمر حتى قرار الشراء.</p>
					</div>
				</div>

				<div className="highlight">
					<h4>Intent Continuity</h4>

					<p>
						إذا بدأ الإعلان من Dinner أو Professional أو Wedding أو أي Context
						آخر، يجب أن تكمل صفحة الهبوط نفس الفكرة بدل إعادة المستخدم إلى
						Product Categories عامة.
					</p>
				</div>
			</section>

			{/* MEASUREMENT */}

			<section className="section">
				<header className="section-header">
					<p className="eyebrow">MEASUREMENT</p>

					<h2 className="section-title">ما الذي نقيس؟</h2>
				</header>

				<div className="grid grid-3">
					{metrics.map(([metric, explanation]) => (
						<div className="card" key={metric}>
							<span className="label">{metric}</span>

							<p className="mt-3">{explanation}</p>
						</div>
					))}
				</div>

				<div className="highlight">
					<h4>RUYA-specific Signals</h4>

					<div className="pill-row">
						<span className="pill journey">Journey Start Rate</span>

						<span className="pill express">Journey → Purchase Rate</span>

						<span className="pill care">Second Journey Rate</span>
					</div>
				</div>
			</section>

			{/* RETENTION STRATEGY */}

			<section className="section">
				<header className="section-header">
					<p className="eyebrow">RETENTION STRATEGY</p>

					<h2 className="section-title">
						من First Journey إلى Beauty Ecosystem
					</h2>
				</header>

				<div className="model">
					<div className="model-step intent">
						<span className="label">FIRST PURCHASE</span>

						<h3>First Journey</h3>

						<p>أول تجربة لقيمة النظام.</p>
					</div>

					<div className="model-step journey-step">
						<span className="label">CONTINUED RELATIONSHIP</span>

						<h3>Next Relevant Intent</h3>

						<p>CRM + Recommendations + Discovery Opportunities.</p>
					</div>

					<div className="model-step result">
						<span className="label">LONG TERM</span>

						<h3>RUYA Ecosystem</h3>

						<p>يعود المستخدم عندما تتغير النتيجة التي يريدها.</p>
					</div>
				</div>

				<div className="grid grid-2 mt-5">
					<div className="card express">
						<span className="label">POST-PURCHASE EXPERIENCE</span>

						<h3>Make the First Journey Count</h3>

						<p className="mt-3">
							وضوح التعليمات، تجربة فتح الطلب، جودة العناصر، وسهولة تطبيق
							الـJourney عوامل أساسية لبناء الرضا والثقة والعودة للشراء.
						</p>
					</div>

					<div className="card journey">
						<span className="label">CRM QUESTION</span>

						<h3 dir="ltr">What do you want next?</h3>

						<p className="mt-3">
							العلاقة تتحول من إعادة شراء المنتج إلى اكتشاف Intent جديدة، مع
							Recommendations مرتبطة بسلوك وتفضيلات المستخدم.
						</p>
					</div>
				</div>
			</section>

			{/* DELIGHT EXPERIMENTATION */}

			<section className="section">
				<header className="section-header">
					<p className="eyebrow">POST-PURCHASE EXPERIMENTATION</p>

					<h2 className="section-title">
						Testing the Value of a Thoughtful Extra
					</h2>

					<p>
						نختبر إن كانت الإضافة المرتبطة بالـIntent تحسّن تجربة العميل
						والعلاقة مع RUYA، بدل اعتبار أي هدية قيمة مضمونة.
					</p>
				</header>

				<div className="grid grid-3">
					{delightTestVariants.map((variant) => (
						<article key={variant.label} className={`card ${variant.tone}`}>
							<span className="label">{variant.label}</span>

							<h3 className="mt-3">{variant.title}</h3>

							<p className="mt-3">{variant.description}</p>

							<div className="mt-5 border-t border-ruya-line pt-4">
								<span className="label">TEST QUESTION</span>

								<p className="mt-2">{variant.question}</p>
							</div>
						</article>
					))}
				</div>

				<div className="highlight mt-5">
					<h4>Experimental Design</h4>

					<p>
						نقارن ثلاث مجموعات متشابهة داخل الـJourney نفسها: Control بدون
						إضافة، ومجموعة Beauty Bite، ومجموعة Discovery Gift.
					</p>

					<p>
						يجب تثبيت العوامل الأخرى قدر الإمكان، مثل المنتجات الأساسية والسعر
						والوقت والتغليف الرئيسي، مع اختيار الإضافات وفق متطلبات السلامة
						والملاءمة.
					</p>

					<p>
						لا نعرض الإضافة كـPurchase Promise إلا إذا أصبحت جزءًا مضمونًا من
						العرض الفعلي. أما الاختبار غير المعلن فنتعامل معه كتجربة
						Post-purchase منفصلة.
					</p>
				</div>

				<div className="grid grid-3 mt-5">
					{delightMeasurement.map((item) => (
						<div className="card" key={item.metric}>
							<span className="label">{item.metric}</span>

							<p className="mt-3">{item.meaning}</p>
						</div>
					))}
				</div>

				<div className="highlight mt-5">
					<h4>Decision Rule</h4>

					<p>
						لا يكفي أن تعجب العميلة بالهدية؛ يجب أن تتجاوز القيمة التي تحققها
						تكلفة الإضافة والتغليف والتشغيل، مع الحفاظ على تجربة RUYA الأساسية.
					</p>

					<p className="text-ruya-text">
						<strong>
							Scale the extra that creates measurable value, not the one that
							only looks appealing.
						</strong>
					</p>
				</div>
			</section>

			{/* CAMPAIGN CREATIVE LIBRARY */}

			<section className="section">
				<header className="section-header">
					<p className="eyebrow">CAMPAIGN CREATIVE LIBRARY</p>

					<h2 className="section-title">Creative Concepts Across the Funnel</h2>

					<p>
						مكتبة من الاتجاهات الإعلانية المبنية على الـPsychographics
						والـIntents والاحتياجات المختلفة، من Awareness إلى Conversion
						وRetention.
					</p>
				</header>

				<MarketingCreativeLibrary />
			</section>

			<footer className="footer">
				{BRAND.name} · Strategic Marketing & Advertising Playbook
			</footer>
		</div>
	);
}
