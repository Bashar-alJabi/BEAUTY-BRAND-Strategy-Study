export default function BrandStrategyPage() {
	return (
		<div className="page-shell">
			<header className="hero">
				<p className="eyebrow">BRAND STRATEGY</p>
				<h1>من Product Categories إلى User Intent</h1>
				<p>
					نريد منظومة Beauty تستطيع أن تمتد من Hair Care وSkin Care إلى Makeup
					وStyling وTools وAccessories وGadgets وDevices.
				</p>
			</header>
			<section className="section">
				<h2 className="section-title">المنطق التقليدي مقابل منطقنا</h2>
				<div className="grid grid-2">
					<div className="card">
						<span className="label">المنطق التقليدي</span>
						<div className="big">What product do I need?</div>
						<div className="pill-row">
							{["Hair", "Skin", "Makeup", "Tools"].map((x) => (
								<span className="pill" key={x}>
									{x}
								</span>
							))}
						</div>
					</div>
					<div className="card journey">
						<span className="label">منطقنا</span>
						<div className="big">What do I want today?</div>
						<div className="pill-row">
							{["Wedding", "Professional", "Everyday", "Live"].map((x) => (
								<span className="pill journey" key={x}>
									{x}
								</span>
							))}
						</div>
					</div>
				</div>
				<div className="model">
					<div className="model-step intent">
						<span className="label">01 · INTENT</span>
						<h3>ماذا أريد اليوم؟</h3>
						<p>مناسبة، Mood، Style أو شكل أريد أن أظهر به.</p>
					</div>
					<div className="model-step journey-step">
						<span className="label">02 · JOURNEY</span>
						<h3>كيف أصل إليه؟</h3>
						<p>
							البراند يبني لي مسارًا يجمع المنتجات والخطوات المناسبة، بدل أن
							أبحث عنها منفردة.
						</p>
					</div>
					<div className="model-step result">
						<span className="label">03 · RESULT</span>
						<h3>ماذا أحصل عليه؟</h3>
						<p>
							الـLook أو الـMood أو الـStyle الذي اخترته، مع تجربة أوضح وأقل
							حيرة.
						</p>
					</div>
				</div>
				<div className="highlight">
					<h4>القيمة المضافة الأساسية</h4>
					<p className="text-lg text-white">
						<strong>
							We turn beauty choices into a clear, curated journey.
						</strong>
					</p>
					<p>
						لا نزيد عدد الخيارات فقط؛ بل نساعد المستخدم على تحويل النتيجة التي
						يريدها إلى مجموعة خطوات ومنتجات واضحة.
					</p>
				</div>
			</section>
			<section className="section">
				<h2 className="section-title">CARE → EXPRESS: فلسفة البراند</h2>
				<div className="grid grid-2">
					<div className="card care">
						<span className="label">CARE</span>
						<h3>الأساس</h3>
						<div className="pill-row">
							{["أعتني", "أنظف", "أرطب", "أصلح", "أحافظ", "أجهز"].map((x) => (
								<span className="pill care" key={x}>
									{x}
								</span>
							))}
						</div>
						<div className="quote care">Care gives you the foundation.</div>
					</div>
					<div className="card express">
						<span className="label">EXPRESS</span>
						<h3>الامتداد</h3>
						<div className="pill-row">
							{["أغيّر", "ألوّن", "أجرّب", "أStyling", "أبرز", "أعبّر"].map(
								(x) => (
									<span className="pill express" key={x}>
										{x}
									</span>
								),
							)}
						</div>
						<div className="quote">Expression gives you the freedom.</div>
					</div>
				</div>
				<div className="highlight">
					<h4>مهم: CARE → EXPRESS ليست الـSlogan</h4>
					<p>
						أصبحت{" "}
						<strong className="text-white">
							Brand Philosophy / Architecture
						</strong>
						: العناية تبني الأساس، والتعبير يمنح المستخدم الحرية في تحديد الشكل
						أو الحالة التي يريدها.
					</p>
				</div>
			</section>
			<section className="section">
				<header className="section-header">
					<h2 className="section-title">
						Brand Philosophy — Promise — Positioning — Value Proposition
					</h2>
				</header>
				<div className="grid grid-2">
					{[
						[
							"Brand Philosophy",
							"Beauty is not only how you care for yourself. It's also how you express yourself.",
							"تشرح لماذا يجمع البراند بين العناية والتعبير.",
							"care",
						],
						[
							"Brand Promise",
							"We care for what you are and help you express what you want to be today.",
							"تربط العناية بالاحتياج المتغير للمستخدم.",
							"express",
						],
						[
							"Positioning",
							"A beauty ecosystem that turns personal intentions into curated beauty journeys.",
							"يشرح المكان الذي نريد أن يحتله البراند.",
							"journey",
						],
						[
							"Value Proposition",
							"Choose how you want to show up today. We build the beauty journey to get you there.",
							"هذه تشرح القيمة العملية للمستخدم، وليست بالضرورة الـSlogan.",
							"",
						],
					].map(([label, title, text, tone]) => (
						<div className={`card ${tone}`} key={label}>
							<span className="label">{label}</span>
							<h3>{title}</h3>
							<p>{text}</p>
						</div>
					))}
				</div>
			</section>
			<section className="section">
				<header className="hero">
					<p className="eyebrow">BEAUTY JOURNEY</p>
					<h2>كيف تعمل الـBeauty Journey عمليًا؟</h2>
					<p>
						المستخدم لا يريد أن يقارن عشرات المنتجات؛ هو يريد النتيجة المناسبة
						للمناسبة.
					</p>
				</header>
				<div className="grid grid-2">
					<div className="card journey">
						<span className="label">مثال</span>
						<div className="big">لدي Wedding اليوم</div>
						<p>
							المستخدم لا يريد أن يقارن عشرات المنتجات؛ هو يريد النتيجة المناسبة
							للمناسبة.
						</p>
					</div>
					<div className="card">
						<span className="label">البراند يترجم النية</span>
						<div className="big">Wedding Journey</div>
						<div className="pill-row">
							{["Skin Prep", "Hair Prep", "Makeup", "Styling", "Finish"].map(
								(x, i) => (
									<span
										className={`pill ${i < 2 ? "care" : i < 4 ? "express" : "journey"}`}
										key={x}
									>
										{x}
									</span>
								),
							)}
						</div>
					</div>
				</div>
				<div className="model">
					<div className="model-step intent">
						<span className="label">INPUT</span>
						<h3>Wedding</h3>
						<p>المستخدم يحدد المناسبة.</p>
					</div>
					<div className="model-step journey-step">
						<span className="label">JOURNEY</span>
						<h3>Prepare → Care → Express → Finish</h3>
						<p>ترتيب واضح يجمع Hair + Skin + Expression عند الحاجة.</p>
					</div>
					<div className="model-step result">
						<span className="label">OUTPUT</span>
						<h3>The desired look</h3>
						<p>
							بدل الحيرة بين المنتجات، يرى المستخدم ما يحتاجه للوصول إلى
							النتيجة.
						</p>
					</div>
				</div>
				<div className="grid grid-3 mt-5">
					{[
						["Intention", "ماذا أريد؟", "مناسبة، Mood، Style أو حالة."],
						[
							"Selection + Sequence",
							"ماذا أحتاج؟",
							"المنتجات المناسبة وبأي ترتيب تستخدم.",
						],
						[
							"Outcome",
							"إلى ماذا أصل؟",
							"Look / Mood / Style واضح ومقترح مسبقًا.",
						],
					].map(([label, title, text]) => (
						<div className="card" key={label}>
							<span className="label">{label}</span>
							<h3>{title}</h3>
							<p>{text}</p>
						</div>
					))}
				</div>
				<div className="highlight">
					<h4>USER INTENT</h4>
					<div className="grid grid-2">
						<div className="card journey">
							<h3>EVERYDAY</h3>
							<p>روتين بسيط، عملي، سريع ومناسب للحياة اليومية.</p>
						</div>
						<div className="card journey">
							<h3>PROFESSIONAL</h3>
							<p>Business، Work، Meetings أو Interview — مظهر مرتب ومهني.</p>
						</div>
						<div className="card journey">
							<h3>SCHOOL / STUDY</h3>
							<p>
								ستايل عملي، مرتب وخفيف يناسب الدراسة والحياة اليومية التعليمية.
							</p>
						</div>
						<div className="card journey">
							<h3>SOCIAL / OCCASION</h3>
							<p>Wedding، Party، Dinner، Celebration أو أي مناسبة اجتماعية.</p>
						</div>
						<div className="card journey">
							<h3>LIVE / CONTENT</h3>
							<p>Camera-ready، Live، Photography أو Content Creation.</p>
						</div>
					</div>
					<div className="quote journey">
						<strong>النقطة الذكية</strong>
						<p>
							نفس المنتج يمكن أن يدخل في أكثر من Journey. الـSerum مثلًا ليس
							&quot;Wedding Product&quot; بحد ذاته؛ لكنه قد يكون جزءًا من
							Wedding Journey أو Professional Journey أو Everyday Journey بحسب
							النتيجة المطلوبة.
						</p>
					</div>
				</div>
				<div className="highlight">
					<h4>Journey ≠ Bundle</h4>
					<p>
						الـBundle مجرد مجموعة منتجات. أما الـJourney فهي تجربة كاملة:{" "}
						<strong className="text-white">
							Intent + Selection + Sequence + Guidance + Outcome
						</strong>
						.
					</p>
				</div>
			</section>
		</div>
	);
}
