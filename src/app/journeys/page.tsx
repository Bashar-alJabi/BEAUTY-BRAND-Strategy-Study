export default function JourneysPage() {
	return (
		<div className="page-shell">
			<header className="hero">
				<p className="eyebrow">BEAUTY JOURNEY</p>
				<h1>كيف تعمل الـBeauty Journey عمليًا؟</h1>
				<p>
					المستخدم لا يريد أن يقارن عشرات المنتجات؛ هو يريد النتيجة المناسبة
					للمناسبة.
				</p>
			</header>
			<section className="section">
				<div className="grid grid-2">
					<div className="card journey">
						<span className="label">مثال</span>
						<div className="big">لدي Wedding اليوم</div>
						<p>المستخدم يريد النتيجة المناسبة للمناسبة.</p>
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
