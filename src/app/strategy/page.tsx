export default function StrategyPage() {
	return (
		<div className="page-shell">
			<header className="hero">
				<p className="eyebrow">STRATEGY</p>
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
		</div>
	);
}
