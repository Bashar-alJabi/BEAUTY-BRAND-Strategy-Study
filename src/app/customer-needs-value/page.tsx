const values = [
	["Reduce Choice Overload", "تقليل الحيرة بين عشرات المنتجات والخيارات."],
	[
		"Save Time & Effort",
		"عدم إجبار المستخدم على البحث والمقارنة وتركيب الحل بنفسه.",
	],
	[
		"Increase Confidence",
		"إعطاء المستخدم مسارًا واضحًا بدل التخمين وعدم التأكد.",
	],
	["Clear Guidance", "توضيح ماذا يستخدم، كيف يستخدمه، وبأي ترتيب."],
	[
		"Connected Beauty Experience",
		"ربط Hair + Skin + Expression والأدوات المناسبة داخل Journey واحدة عند الحاجة.",
	],
	[
		"Reach the Desired Result",
		"مساعدة المستخدم على الوصول إلى الـLook أو الـMood أو الـStyle الذي يريده.",
	],
] as const;

const needs = [
	[
		"01 · Functional Needs",
		"الاحتياجات الوظيفية",
		"ترتبط بالمهمة العملية التي يريد المستخدم إنجازها بأقل وقت وجهد وتعقيد ممكن.",
		"المستخدم قد يعرف النتيجة أو الـLook الذي يريده، لكنه لا يعرف أي المنتجات أو الأدوات يحتاج، أو بأي ترتيب يستخدمها.",
		"نحوّل النتيجة المطلوبة إلى Journey عملية ومنظمة تجمع Products + Tools + Sequence + Guidance بحسب الحاجة، بدل أن يضطر المستخدم لبناء الحل بنفسه.",
		"We reduce the effort required to achieve the desired beauty result.",
		`GOAL
Professional Look

USER PROBLEM
يعرف أنه يريد مظهرًا مرتبًا ومناسبًا للعمل، لكنه لا يعرف المنتجات والأدوات والخطوات اللازمة.

BRAND RESPONSE
نقدّم Journey واضحة تحدد المنتجات والأدوات المطلوبة عند الحاجة، وترتيب استخدامها للوصول إلى النتيجة.`,
	],
	[
		"02 · Emotional Needs",
		"الاحتياجات العاطفية",
		"ترتبط بما يريد المستخدم أن يشعر به أثناء اتخاذ القرار واستخدام المنتجات: وضوح، طمأنينة وثقة بدل الحيرة والقلق.",
		'المشكلة ليست فقط "ماذا أشتري؟"، بل أيضًا: "هل اخترت المنتج الصحيح؟ هل هذه العناصر مناسبة معًا؟ وهل ستوصلني للنتيجة التي أريدها؟"',
		"نقلل الـUncertainty عبر Journey واضحة ومنطقية تجعل المستخدم أكثر ثقة في اختياراته والخطوات التي يتبعها.",
		"We make beauty feel simpler, clearer and less overwhelming.",
		`SITUATION
المستخدم يريد Skincare Routine جديدة.

EMOTIONAL FRICTION
يشعر بالحيرة من كثرة المنتجات ويخشى شراء منتجات غير مناسبة أو استخدامها بطريقة خاطئة.

BRAND RESPONSE
نقدم Routine واضحة تشرح ماذا يستخدم، لماذا، ومتى يستخدم كل منتج، فيشعر بثقة أكبر في قراره.`,
	],
	[
		"03 · Social & Identity Needs",
		"الاحتياجات الاجتماعية والصورة التي يريد إظهارها",
		"ترتبط بالطريقة التي يريد المستخدم أن يظهر بها أمام الآخرين وفي سياق اجتماعي أو مهني معين.",
		"المستخدم لا يبحث دائمًا عن منتج محدد؛ قد يريد أن يظهر Professional أو Elegant أو Minimal أو Bold أو Event-ready بما يناسب اللحظة.",
		"نربط الـBeauty بالسياق الذي يعيش فيه المستخدم ونساعده على بناء مظهر يعبّر عن الصورة التي يريد تقديمها.",
		"We help people express the version of themselves that fits the moment.",
		`CONTEXT
Job Interview

DESIRED IMAGE
Professional · Polished · Confident

BRAND RESPONSE
نقترح Journey تعطي مظهرًا مرتبًا وطبيعيًا يناسب المقابلة بدل التعامل مع كل منتج بشكل منفصل.`,
	],
	[
		"04 · Stated Needs",
		"الاحتياجات المعلنة",
		"هي الحاجة التي يعبّر عنها المستخدم بشكل مباشر: ما يقول صراحة إنه يريده الآن.",
		'قد يقول المستخدم: "عندي عرس وبدي Wedding Look." أو "بدي Look للـLive." أو "بدي Professional Look."',
		"نأخذ الهدف الذي عبّر عنه المستخدم ونحوّله مباشرة إلى نقطة بداية للـJourney بدل إجباره على البدء من فئات المنتجات.",
		"You state the goal. We structure the path.",
		`USER SAYS
"عندي عرس وبدي Soft Elegant Look."

STATED NEED
Wedding · Soft Elegant

BRAND RESPONSE
نستخدم هذا الهدف كنقطة البداية ونبني له الـBeauty Journey المناسبة.`,
	],
	[
		"05 · Real Needs",
		"الاحتياجات الفعلية",
		"هي الحاجة الحقيقية الكامنة خلف الطلب المعلن؛ أي ما يحتاجه المستخدم فعليًا لتحقيق الهدف الذي عبّر عنه.",
		'قد يقول المستخدم: "أريد Wedding Look"، لكن حاجته الفعلية ليست اسم الـLook نفسه، بل طريقة سهلة ومتناسقة للوصول إليه دون اختيار وتركيب كل المنتجات والأدوات بنفسه.',
		"نبحث خلف الطلب المباشر ونحدد المنتجات والأدوات والخطوات والتنسيق الذي يحتاجه المستخدم فعلًا للوصول إلى النتيجة.",
		"We solve the need behind the request.",
		`STATED NEED
"I want a Wedding Look."

REAL NEED
أحتاج عناصر متناسقة وخطوات واضحة تساعدني على تحقيق هذا المظهر بسهولة وبدون تخمين.

BRAND RESPONSE
نحوّل الـWedding Look إلى Journey تنفيذية كاملة بدل الاكتفاء بعرض منتجات مرتبطة بالأعراس.`,
	],
	[
		"06 · Unstated Needs",
		"الاحتياجات غير المعلنة",
		"هي الأشياء التي لا يطلبها المستخدم صراحة لأنه يتوقع وجودها تلقائيًا ضمن تجربة جيدة.",
		"المستخدم قد لا يقول إنه يريد تعليمات واضحة، عناصر متوافقة أو ترتيبًا منطقيًا للخطوات، لكنه يتوقع أن تكون هذه الأمور موجودة.",
		"نبني الوضوح، التوافق والتنظيم داخل الـJourney بشكل افتراضي، بدون أن يضطر المستخدم لطلبها.",
		"We design the experience around what users reasonably expect, even when they don't ask for it.",
		`USER REQUEST
"بدي Routine للبشرة قبل مناسبة."

UNSTATED EXPECTATIONS
المنتجات متوافقة معًا.
الخطوات مرتبة.
طريقة الاستخدام واضحة.
لا توجد خطوات غير ضرورية.

BRAND RESPONSE
هذه العناصر تكون جزءًا أساسيًا من الـJourney دون أن يحتاج المستخدم لطلب كل واحدة منها.`,
	],
	[
		"07 · Delight Needs",
		"احتياجات المفاجأة والقيمة الإضافية",
		"قيمة غير متوقعة تتجاوز الطلب الأساسي، وتُختار بما يتناسب مع الـIntent والـJourney بدل إضافة هدية عشوائية.",
		"بعد الحصول على الحل الأساسي، يمكن لتفصيل صغير ومدروس أن يجعل التجربة أجمل، أو يمنح المستخدم فرصة للاستفادة من منتج أو أداة لم يكن قد اكتشفها.",
		"تختار RUYA إضافة مناسبة من مسارين متساويين: Moment Delight عبر Beauty Bite، أو Discovery Delight عبر Beauty Product أو Tool أو Accessory. قد تكمل الإضافة الرحلة الحالية أو تفتح تجربة جديدة، ولا يشترط جمع المسارين معًا.",
		"A thoughtful extra, chosen for your journey.",
		`CURRENT JOURNEY
Date Night · Soft Glow

CORE EXPERIENCE
Skin Prep + Hair Styling + Makeup
Selection + Sequence + Guidance

OPTION A · MOMENT DELIGHT
Premium Dark Chocolate
قطعة صغيرة تناسب أجواء العشاء والسهرة.

OR

OPTION B · DISCOVERY DELIGHT
Mini Makeup Brush
أداة مختارة تتيح تجربة طريقة مختلفة لتطبيق الميكاب.

THE PRINCIPLE
One relevant extra.
Two equally valuable ways to delight.`,
	],
	[
		"08 · Secret Needs",
		"الاحتياجات العميقة غير المعلنة",
		"هي الدوافع المرتبطة بالصورة الذاتية والثقة والهوية الشخصية، والتي قد تؤثر في الاختيار حتى لو لم يعبّر عنها المستخدم مباشرة.",
		"خلف طلب مثل Professional Look قد توجد رغبة أعمق بأن يشعر المستخدم بأنه مستعد وواثق. وخلف Wedding Look قد توجد رغبة بأن يشعر بأنه مميز في لحظة مهمة.",
		"لا نتعامل مع الـBeauty كمنتجات فقط، بل كوسيلة تساعد المستخدم على التعبير عن الصورة التي يريد أن يراها في نفسه ويقدمها للآخرين.",
		"Beauty becomes a way to express the version of yourself you want to show today.",
		`VISIBLE REQUEST
"بدي Wedding Look."

DEEPER MOTIVATION
"بدي كون من أجمل الموجودين اليوم وأحس إني مميزة وواثقة من حالي."

BRAND ROLE
الـJourney لا تساعدها فقط على اختيار العناصر المناسبة للـWedding Look، بل تساعدها على الوصول إلى الصورة والشعور اللذين تريد أن تعيشهما في هذه المناسبة: جميلة، مميزة وواثقة.`,
	],
] as const;

const valueSummary = [
	[
		"Functional",
		"Less Effort",
		"رحلة عملية واضحة بدل البحث والتركيب والمقارنة بين المنتجات والأدوات.",
	],
	[
		"Emotional",
		"More Confidence",
		"وضوح أكبر وتقليل الحيرة وعدم التأكد أثناء الاختيار.",
	],
	[
		"Social & Identity",
		"Right for the Moment",
		"مظهر يساعد المستخدم على تقديم الصورة التي يريدها في السياق المناسب.",
	],
	[
		"Stated",
		"We Start From the Goal",
		"نأخذ ما يقوله المستخدم مباشرة كنقطة بداية للـJourney.",
	],
	[
		"Real Need",
		"We Solve What's Behind It",
		"نحدد ما يحتاجه المستخدم فعليًا لتحقيق الهدف الذي عبّر عنه.",
	],
	[
		"Unstated",
		"Built-in Clarity",
		"التوافق والتنظيم والتعليمات تكون جزءًا طبيعيًا من التجربة.",
	],
	[
		"Delight",
		"Intent-Matched Extra",
		"Beauty Bite أو Discovery Gift مختارة بما يتناسب مع الرحلة.",
	],
	[
		"Secret",
		"Identity + Confidence",
		"ندعم الشعور والصورة الذاتية التي يريد المستخدم الوصول إليها خلف النتيجة الظاهرة.",
	],
] as const;

const delightExamples = [
	{
		intent: "EVERYDAY / QUICK READY",
		journey: "Everyday Glow",
		description: "روتين سريع ومرتب يناسب الجامعة والخروج اليومي.",

		bite: "Mini Oat & Cocoa Cookie",
		biteReason: "قطعة بسيطة ولذيذة تتناسب مع الطابع اليومي والخفيف للتجربة.",

		discovery: "Mini Cream Blush",
		discoveryReason:
			"منتج Makeup صغير يفتح إمكانية تجربة Soft Rosy Look مختلف عن الـEveryday Look المعتاد.",
	},
	{
		intent: "DATE / DINNER",
		journey: "Date Night Ready",
		description: "تحضير متناسق للبشرة والشعر والـLook المناسب للسهرة.",

		bite: "Premium Dark Chocolate",
		biteReason: "لمسة أنيقة تتناسب مع أجواء العشاء والاستمتاع باللحظة.",

		discovery: "Mini Overnight Lip Mask",
		discoveryReason:
			"منتج Lip Care يتيح اكتشاف روتين مختلف للعناية بالشفاه بعد السهرة.",
	},
	{
		intent: "PROFESSIONAL / WORK",
		journey: "Professional Confidence",
		description: "مظهر مرتب وعملي يناسب العمل والاجتماعات والمقابلات.",

		bite: "Date & Oat Bite",
		biteReason: "سناك صغير وسهل الحمل يتناسب مع طبيعة يوم العمل والتنقل.",

		discovery: "Pocket Styling Comb",
		discoveryReason:
			"أداة Hair Styling صغيرة تساعد على ترتيب الشعر وتجديد المظهر خلال اليوم.",
	},
	{
		intent: "WEDDING / CELEBRATION",
		journey: "Wedding Preparation",
		description: "تحضير متكامل للحظة خاصة بطابع أنيق واحتفالي.",

		bite: "Elegant Mini Praline",
		biteReason: "قطعة حلوى فاخرة تضيف لمسة احتفالية تناسب خصوصية المناسبة.",

		discovery: "Mini Illuminating Primer",
		discoveryReason:
			"منتج Makeup يفتح إمكانية الانتقال من Soft Elegant Look إلى Evening Glow أكثر إشراقًا.",
	},
	{
		intent: "STUDY / UNIVERSITY",
		journey: "Study Day",
		description: "روتين خفيف وسريع يناسب الحركة والتنقل والحياة الجامعية.",

		bite: "Mini Granola Bite",
		biteReason: "إضافة بسيطة وسهلة الحمل تتناسب مع إيقاع الحياة اليومية.",

		discovery: "Foldable Pocket Mirror",
		discoveryReason:
			"Beauty Accessory عملية تسهّل مراجعة الـLook واللمسات السريعة أثناء التنقل.",
	},
	{
		intent: "AT-HOME SELF-CARE",
		journey: "Self-Care Evening",
		description:
			"تجربة عناية منزلية هادئة تهتم بالروتين والاستمتاع بالوقت الشخصي.",

		bite: "Small Cocoa Treat",
		biteReason: "لحظة استمتاع بسيطة تتناسب مع أجواء العناية الشخصية في المنزل.",

		discovery: "Soft Silicone Scalp Massager",
		discoveryReason:
			"Beauty Tool تفتح تجربة مختلفة لتدليك فروة الرأس ضمن Hair Care Ritual.",
	},
] as const;

export default function CustomerNeedsValuePage() {
	return (
		<div className="page-shell">
			<header className="hero">
				<p className="eyebrow">CUSTOMER NEEDS & VALUE</p>

				<h1>ما القيمة التي نضيفها للمستخدم؟</h1>

				<p>
					القيمة ليست في إضافة منتجات أكثر، بل في تبسيط الطريق بين ما يريده
					المستخدم وما يحتاجه للوصول إلى النتيجة التي يريدها.
				</p>
			</header>

			{/* CORE CUSTOMER VALUE */}

			<section className="section">
				<div className="highlight">
					<h4>القيمة المضافة الأساسية</h4>

					<h3 className="text-lg text-ruya-text">
						<strong>
							We translate personal intent into a complete beauty journey.
						</strong>
					</h3>

					<p>
						نحوّل ما يريده المستخدم إلى Journey تجمع المنتجات والأدوات والخطوات
						المناسبة للوصول إلى النتيجة التي يريدها.
					</p>
				</div>

				<div className="model">
					<div className="model-step intent">
						<span className="label">WHAT I WANT</span>

						<h3>INTENT</h3>

						<p>المستخدم يعرف النتيجة أو الـMood أو المناسبة.</p>
					</div>

					<div className="model-step journey-step">
						<span className="label">WHAT I NEED</span>

						<h3>JOURNEY</h3>

						<p>البراند يترجم النية إلى منتجات وأدوات وخطوات وترتيب وإرشادات.</p>
					</div>

					<div className="model-step result">
						<span className="label">WHAT I GET</span>

						<h3>RESULT</h3>

						<p>Look + Mood + Style + Confidence بطريقة أوضح وأقل حيرة.</p>
					</div>
				</div>

				<div className="grid grid-3 mt-5">
					{values.map(([title, text]) => (
						<div className="card" key={title}>
							<span className="label">CUSTOMER VALUE</span>

							<div className="big">{title}</div>

							<p className="mt-2">{text}</p>
						</div>
					))}
				</div>

				<div className="highlight">
					<h4>المشكلة التي نحلها</h4>

					<p className="text-ruya-text">
						<strong>
							Beauty offers too many choices, while users often know the result
							they want better than the products they need to achieve it.
						</strong>
					</p>

					<p>
						المستخدم قد يعرف{" "}
						<strong className="text-ruya-text">ماذا يريد</strong> قبل أن يعرف{" "}
						<strong className="text-ruya-text">ماذا يحتاج</strong>.
					</p>
				</div>
			</section>

			{/* EIGHT CUSTOMER NEEDS */}

			<section className="section">
				<header className="section-header">
					<p className="eyebrow">EIGHT NEEDS</p>

					<h2 className="section-title">طبقات الاحتياجات والرغبات</h2>

					<p>
						لا ننظر إلى الاحتياجات الثمانية كعناصر منفصلة، بل كطبقات تبدأ من
						الطلب الظاهر وتنتهي بالدافع الأعمق.
					</p>
				</header>

				<div className="needs-grid">
					{needs.map(
						(
							[label, title, description, problem, value, quote, example],
							i,
						) => (
							<article
								className={`need-card ${
									i % 3 === 0 ? "care" : i % 3 === 1 ? "express" : "journey"
								}`}
								key={label}
							>
								<div className="need-heading">
									<span className="label">{label}</span>

									<h3>{title}</h3>
								</div>

								<p className="need-description">{description}</p>

								<div className="need-details">
									<div className="need-block">
										<span className="need-block-label">المشكلة / الحاجة</span>

										<p>{problem}</p>
									</div>

									<div className="need-block value">
										<span className="need-block-label">القيمة المضافة</span>

										<p>{value}</p>
									</div>
								</div>

								<div className="need-quote">
									<strong>{quote}</strong>
								</div>

								<div className="mt-4 overflow-hidden rounded-xl border border-ruya-line bg-ruya-bg/30">
									<div className="border-b border-ruya-line px-4 py-3">
										<span className="label">REAL-WORLD EXAMPLE</span>
									</div>

									<div className="whitespace-pre-line p-4 text-sm leading-7 text-ruya-muted">
										{example}
									</div>
								</div>
							</article>
						),
					)}
				</div>

				{/* EIGHT NEEDS IN ONE JOURNEY */}

				<div className="highlight">
					<h4>كيف تتجمع الطبقات الثمانية داخل Journey واحدة؟</h4>

					<p>
						مثال: المستخدم يقول &quot;عندي Interview&quot;. الطلب المعلن بسيط،
						لكن خلفه طبقات متعددة من الاحتياجات:
					</p>

					<div className="model">
						<div className="model-step intent">
							<span className="label">STATED</span>

							<h3>Interview Look</h3>

							<p>الطلب الذي يقوله المستخدم.</p>
						</div>

						<div className="model-step journey-step">
							<span className="label">REAL + FUNCTIONAL</span>

							<h3>Easy + Coordinated</h3>

							<p>يريد نتيجة واضحة دون معرفة كل المنتجات والأدوات والخطوات.</p>
						</div>

						<div className="model-step result">
							<span className="label">EMOTIONAL + SOCIAL + SECRET</span>

							<h3>Confidence + Professional Image</h3>

							<p>يريد أن يظهر مرتبًا ويشعر بأنه مستعد وواثق.</p>
						</div>
					</div>

					<div className="grid grid-2 mt-4">
						<div className="card">
							<span className="label">UNSTATED</span>

							<p>يتوقع خطوات واضحة، عناصر متناسقة وعدم إغراقه بالخيارات.</p>
						</div>

						<div className="card express">
							<span className="label">DELIGHT</span>

							<p>
								يمكن أن تتضمن التجربة إضافة مدروسة تناسب المقابلة ويوم العمل؛
								مثل Date & Oat Bite، أو أداة صغيرة كـPocket Styling Comb.
							</p>

							<p className="mt-3">
								الاختيار بينهما يعتمد على القيمة الأنسب للعميلة، وليس على قاعدة
								تفرض نوعًا ثابتًا من الهدايا.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* DELIGHT SYSTEM — SINGLE CENTRAL SECTION */}

			<section className="section">
				<header className="section-header">
					<p className="eyebrow">INTENT-MATCHED DELIGHT</p>

					<h2 className="section-title">One Journey. A Thoughtful Extra.</h2>

					<p>
						يمكن أن تتجاوز RUYA ما يطلبه المستخدم بإضافة صغيرة لها معنى واضح ضمن
						الـJourney. قد تضيف متعة إلى اللحظة الحالية، أو تقدّم تجربة جمالية
						جديدة أو مكملة.
					</p>
				</header>

				<div className="grid grid-2">
					<div className="card express">
						<span className="label">OPTION A · MOMENT DELIGHT</span>

						<h3 className="mt-3">Beauty Bite</h3>

						<p>
							Ritual Treat صغيرة تتناسب مع الـIntent وطبيعة اللحظة، مثل شوكولاتة
							أنيقة للعشاء، أو سناك عملي ليوم عمل، أو قطعة حلوى لمناسبة خاصة.
						</p>

						<p className="mt-3">
							قيمتها في الاستمتاع بالتجربة والملاءمة للسياق، دون تقديم وعود صحية
							أو علاجية أو مرتبطة بالأداء.
						</p>

						<div className="pill-row mt-4">
							<span className="pill express">Moment</span>

							<span className="pill express">Ritual</span>

							<span className="pill express">Experience</span>
						</div>
					</div>

					<div className="card journey">
						<span className="label">OPTION B · DISCOVERY DELIGHT</span>

						<h3 className="mt-3">Discovery Gift</h3>

						<p>
							منتج أو أداة جمالية مختارة تكمل الـJourney الحالية أو تفتح طريقة
							استخدام جديدة أو Result أو Journey مختلفة وقريبة من اهتمامات
							العميلة.
						</p>

						<p className="mt-3">
							قد تكون العينة من Skincare، Haircare أو Makeup، وقد تكون Beauty
							Tool أو Accessory صغيرًا، بحسب طبيعة التجربة.
						</p>

						<div className="pill-row mt-4">
							<span className="pill journey">Products</span>

							<span className="pill journey">Tools</span>

							<span className="pill journey">Discovery</span>
						</div>
					</div>
				</div>

				<div className="highlight mt-5">
					<h4>Equal Value. Different Experiences.</h4>

					<p>
						لا توجد أفضلية ثابتة بين الخيارين. يمكن أن تقدّم RUYA Beauty Bite أو
						Discovery Gift بحسب ما يضيف قيمة فعلية إلى الـJourney، دون اشتراط
						وجودهما معًا.
					</p>

					<p className="text-ruya-text">
						<strong>The right extra is the one that fits the journey.</strong>
					</p>

					<p>
						وإذا لم تكن أي إضافة مناسبة، تبقى الـJourney تجربة مكتملة بمنتجاتها
						وأدواتها وخطواتها وإرشاداتها الأساسية.
					</p>
				</div>

				{/* JOURNEY EXAMPLES */}

				<div className="mt-8">
					<header className="section-header">
						<p className="eyebrow">DELIGHT BY INTENT</p>

						<h2 className="section-title">
							The Right Extra for the Right Moment
						</h2>

						<p>
							تختلف اللحظات التي يعيشها الشخص، ولذلك تختلف القيمة الإضافية
							المناسبة لكل Journey. قد تكون لحظة استمتاع صغيرة أو فرصة لاكتشاف
							منتج أو أداة جمالية جديدة.
						</p>
					</header>

					<div className="grid grid-2">
						{delightExamples.map((item) => (
							<article className="card" key={item.journey}>
								<span className="label">{item.intent}</span>

								<h3 className="mt-3">{item.journey}</h3>

								<p>{item.description}</p>

								<div className="grid grid-2 mt-5">
									<div className="card express">
										<span className="label">OPTION A</span>

										<h4 className="mt-2">Beauty Bite</h4>

										<div className="font-semibold text-ruya-text big">
											{item.bite}
										</div>

										<p className="mt-3 text-sm">{item.biteReason}</p>
									</div>

									<div className="card journey">
										<span className="label">OPTION B</span>

										<h4 className="mt-2">Discovery Gift</h4>

										<div className="font-semibold text-ruya-text big">
											{item.discovery}
										</div>

										<p className="mt-3 text-sm">{item.discoveryReason}</p>
									</div>
								</div>
							</article>
						))}
					</div>
				</div>

				{/* SELECTION PRINCIPLES */}

				<div className="highlight mt-6">
					<h4>Intent First. Extra Second.</h4>

					<p>
						يبدأ اختيار الإضافة من فهم المناسبة والـDesired Result وطبيعة
						الاستخدام، ثم تُقيّم الخيارات بحسب مدى ارتباطها بتجربة العميلة.
					</p>

					<div className="grid grid-3 mt-5">
						<div className="card">
							<span className="label">01 · RELEVANCE</span>

							<h3>Fits the Intent</h3>

							<p>للإضافة سبب مفهوم يربطها باللحظة أو بالـJourney المختارة.</p>
						</div>

						<div className="card">
							<span className="label">02 · USEFULNESS</span>

							<h3>Worth Including</h3>

							<p>
								تضيف متعة أو استخدامًا أو اكتشافًا حقيقيًا، بدل زيادة عناصر
								العلبة بلا فائدة واضحة.
							</p>
						</div>

						<div className="card">
							<span className="label">03 · PERSONAL FIT</span>

							<h3>Right for the Person</h3>

							<p>
								تراعي التفضيلات، وملاءمة المنتج، واحتياجات الاستخدام ومسببات
								الحساسية عند وجود طعام.
							</p>
						</div>
					</div>
				</div>

				<div className="grid grid-2 mt-5">
					<div className="card express">
						<span className="label">BEAUTY BITE CONSIDERATIONS</span>

						<h3>Thoughtful Food Pairing</h3>

						<p>
							الـBeauty Bite إضافة غذائية اختيارية وليست مكملًا غذائيًا أو
							منتجًا علاجيًا.
						</p>

						<p className="mt-3">
							يُختار الصنف وفق ملاءمته للـIntent وتفضيلات العميلة، ويُقدّم
							بتغليف غذائي مستقل ومعلومات واضحة عن المكونات ومسببات الحساسية، مع
							فصل مناسب عن منتجات التجميل.
						</p>
					</div>

					<div className="card journey">
						<span className="label">DISCOVERY GIFT CONSIDERATIONS</span>

						<h3>Meaningful Beauty Discovery</h3>

						<p>
							لا يقتصر الاكتشاف على مستحضر تجميل صغير. يمكن أن يشمل Sample،
							Beauty Tool، Accessory أو أداة تجميل مناسبة.
						</p>

						<p className="mt-3">
							تُرفق عند الحاجة بطاقة تشرح دور الإضافة، وطريقة استخدامها،
							والتجربة التي يمكن أن تضيفها إلى الـJourney الحالية أو القادمة.
						</p>
					</div>
				</div>

				<div className="quote journey mt-5">
					<strong>A Better Moment or a New Discovery.</strong>

					<p>
						مساران متساويان للقيمة الإضافية، يجمعهما مبدأ واحد: كل تفصيل في
						تجربة RUYA يجب أن يكون مقصودًا ومرتبطًا بما اختاره المستخدم.
					</p>
				</div>
			</section>

			{/* VALUE SUMMARY */}

			<section className="section">
				<h2 className="section-title">الخلاصة: ما الذي نضيفه فعليًا؟</h2>

				<div className="needs-summary-grid">
					{valueSummary.map(([label, title, text]) => (
						<div className="card" key={label}>
							<span className="label">{label}</span>

							<div className="big">{title}</div>

							<p className="mt-2">{text}</p>
						</div>
					))}
				</div>

				<div className="final-box mt-5">
					<span className="label">VALUE PROPOSITION</span>

					<div className="final-core">
						<span className="bg-linear-to-l from-ruya-care via-ruya-express to-ruya-journey bg-clip-text text-transparent">
							The user chooses the outcome. We simplify the journey.
						</span>
					</div>

					<div className="quote">
						<strong>نحوّل ما تريده اليوم إلى رحلة جمال متكاملة.</strong>
					</div>
				</div>
			</section>
		</div>
	);
}
