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
		"ربط Hair + Skin + Expression داخل Journey واحدة عند الحاجة.",
	],
	[
		"Reach the Desired Result",
		"مساعدة المستخدم على الوصول إلى الـLook أو الـMood أو الـStyle الذي يريده.",
	],
];

const needs = [
	[
		"01 · Functional Needs",
		"الاحتياجات الوظيفية",
		"ترتبط بإنجاز مهمة ملموسة: توفير الوقت، تقليل الجهد، التنظيم ورفع وضوح القرار.",
		"المستخدم قد يعرف الـLook الذي يريده، لكنه لا يعرف أي المنتجات يحتاج، كم منتجًا يحتاج، بأي ترتيب يستخدمها، وما الذي يمكن دمجه.",
		"نحوّل النتيجة المطلوبة إلى حل منظم: Products + Sequence + Guidance.",
		"We reduce the effort required to achieve the desired beauty result.",
	],
	[
		"02 · Emotional Needs",
		"الاحتياجات العاطفية",
		"ترتبط بالشعور الداخلي: تقليل القلق والتوتر، البساطة، الأمان والوضوح.",
		'"هل اخترت المنتج الصحيح؟" و"هل هذه المنتجات ستعمل معًا؟" — المشكلة هنا هي Uncertainty.',
		"نحوّل التجربة من Confusion → Clarity ومن Uncertainty → Confidence.",
		"We make beauty feel simpler, clearer and less overwhelming.",
	],
	[
		"03 · Social & Status Needs",
		"الاحتياجات الاجتماعية والمكانة",
		"ترتبط بكيف يريد المستخدم أن يظهر في سياق اجتماعي أو مهني معين.",
		"المستخدم يريد أن يظهر كـ Professional أو Elegant أو Minimal أو Bold أو Event-ready.",
		"لا نقدم منتجًا فقط، بل نساعد المستخدم على تحقيق مظهر يناسب اللحظة والمكان.",
		"We help people express the version of themselves that fits the moment.",
	],
	[
		"04 · Stated Needs",
		"الرغبات المعلنة",
		"ما يطلبه العميل بشكل مباشر وصريح.",
		'"عندي عرس وبدي Wedding Look." أو "بدي Look للـLive." أو "بدي Professional Look."',
		"نأخذ الطلب المباشر ونحوّله فورًا إلى Journey واضحة بدل أن يبدأ المستخدم من عشرات المنتجات.",
		"You state the goal. We structure the path.",
	],
	[
		"05 · Real Needs",
		"الرغبات الحقيقية",
		"المعنى الفعلي وراء الطلب المباشر، أي ما يريد المستخدم تحقيقه فعليًا.",
		"Stated: I need a wedding look.",
		"أحتاج طريقة سهلة ومنسقة للوصول إلى الـLook بدون أن أضطر لاختيار كل شيء وتركيبه بنفسي.",
		"We solve the need behind the request.",
	],
	[
		"06 · Unstated Needs",
		"الرغبات غير المعلنة",
		"التوقعات البديهية التي يتوقعها المستخدم دون أن يطلبها صراحة.",
		"وضوح: يعرف ماذا يفعل ولماذا. تنظيم: الخطوات مرتبة ومنطقية. توافق: المنتجات مقترحة ضمن Journey متماسكة.",
		"عدم إغراق المستخدم بالخيارات، وضوح النتيجة، تجربة متماسكة وتعليمات مفهومة.",
		"We design the experience around the things users expect, even when they don't ask for them.",
	],
	[
		"07 · Delight Needs",
		"احتياجات البهجة",
		"مزايا إضافية غير متوقعة ترفع قيمة التجربة وتخلق أسبابًا للعودة.",
		"المستخدم قد لا يتوقع الحصول على خيارات وتجارب إضافية بعد اختيار الـJourney الأساسية.",
		"نوفر Look Variations مثل Minimal / Bold / Day / Evening، مع Quick Tips وStep-by-Step Guide وQR Tutorial وميزات Personalization مثل Save Look وReorder Journey.",
		"We don't stop at solving the problem; we make the journey enjoyable and discoverable.",
	],
	[
		"08 · Secret Needs",
		"الرغبات السرية",
		"الدوافع الأعمق المرتبطة بالصورة الذاتية، التقدير، الهوية والثقة؛ وقد لا يقولها المستخدم بصراحة.",
		"Professional: أريد أن أشعر أنني مرتب وواثق ومسيطر على الموقف. Wedding: أريد أن أشعر أنني جميل ومميز في هذه المناسبة. Minimal: أريد أن أظهر طبيعيًا دون الشعور أنني مضطر لمجاراة معيار ثابت.",
		"نساعد المستخدم على استخدام الـBeauty كوسيلة للتعبير عن الصورة التي يريد أن يظهر بها وعن النسخة التي يريد أن يكونها في هذه اللحظة.",
		"Beauty becomes a way to express the version of yourself you want to show today.",
	],
];

const valueSummary = [
	["Functional", "Less effort", "رحلة واضحة بدل بحث وتركيب ومقارنة."],
	["Emotional", "Less uncertainty", "وضوح وثقة أكثر في الاختيار."],
	[
		"Social & Status",
		"Better fit for the moment",
		"مظهر يناسب المناسبة أو السياق.",
	],
	[
		"Stated",
		"We structure the request",
		"نحوّل ما يطلبه المستخدم مباشرة إلى Journey واضحة.",
	],
	[
		"Real Need",
		"We solve the need behind the request",
		"لا نكتفي بالكلمات التي يقولها المستخدم، بل نعالج الحاجة الفعلية خلفها.",
	],
	[
		"Unstated",
		"Built-in clarity",
		"نبني الوضوح والتنظيم والتوافق داخل التجربة حتى دون أن يطلبها المستخدم.",
	],
	[
		"Delight",
		"More than expected",
		"تخصيص، Variations وGuidance ترفع قيمة التجربة.",
	],
	[
		"Secret Need",
		"Identity + Confidence",
		"الـBeauty تصبح وسيلة للتعبير عن الصورة التي يريد المستخدم إظهارها.",
	],
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

			<section className="section">
				<div className="highlight">
					<h4>القيمة المضافة الأساسية</h4>

					<h3 className="text-lg text-white">
						<strong>
							We translate personal intent into a complete beauty journey.
						</strong>
					</h3>

					<p>
						نحوّل ما يريده المستخدم إلى Journey تجمع المنتجات والخطوات المناسبة
						للوصول إلى النتيجة التي يريدها.
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
						<p>البراند يترجم النية إلى منتجات، خطوات، ترتيب وإرشادات.</p>
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

					<p className="text-white">
						<strong>
							Beauty offers too many choices, while users often know the result
							they want better than the products they need to achieve it.
						</strong>
					</p>

					<p>
						المستخدم قد يعرف <strong className="text-white">ماذا يريد</strong>{" "}
						قبل أن يعرف <strong className="text-white">ماذا يحتاج</strong>.
					</p>
				</div>
			</section>

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
						([label, title, description, problem, value, quote], i) => (
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
							</article>
						),
					)}
				</div>

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
							<p>يريد نتيجة واضحة دون معرفة كل المنتجات والخطوات.</p>
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
							<p>يتوقع خطوات واضحة، منتجات متناسقة وعدم إغراقه بالخيارات.</p>
						</div>

						<div className="card express">
							<span className="label">DELIGHT</span>
							<p>
								يمكن أن يحصل على Quick Version أو Day / Evening Variation أو Tip
								إضافية.
							</p>
						</div>
					</div>
				</div>

				<section className="mt-8">
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
							<span className="bg-linear-to-l from-[#e8b59b] via-[#ff4b78] to-[#c9a9ff] bg-clip-text text-transparent">
								The user chooses the outcome. We simplify the journey.
							</span>
						</div>

						<div className="quote">
							<strong>نحوّل ما تريده اليوم إلى رحلة جمال متكاملة.</strong>
						</div>
					</div>
				</section>
			</section>
		</div>
	);
}
