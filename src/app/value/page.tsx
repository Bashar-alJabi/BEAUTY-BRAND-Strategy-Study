const values = [
	["Reduce Choice Overload", "تقليل الحيرة بين عشرات المنتجات والخيارات."],
	[
		"Save Time & Effort",
		"عدم إجبار المستخدم على البحث والمقارنة وتركيب الحل بنفسه.",
	],
	[
		"Connect Categories",
		"ربط Hair + Skin + Expression داخل Journey واحدة عند الحاجة.",
	],
	["Increase Confidence", "إعطاء المستخدم مسارًا واضحًا بدل التخمين."],
	[
		"Enable Expression",
		"مساعدته على الوصول إلى الشكل الذي يريد أن يظهر به اليوم.",
	],
	["Outcome → Journey", "نبدأ من النتيجة المطلوبة، ثم نحدد الطريق إليها."],
];
export default function ValuePage() {
	return (
		<div className="page-shell">
			<header className="hero">
				<p className="eyebrow">VALUE PROPOSITION</p>
				<h1>نحوّل النية إلى رحلة</h1>
				<p>
					نحن لا نضيف القيمة فقط من خلال بيع منتجات أكثر، بل من خلال تحويل ما
					يريده المستخدم إلى Journey واضحة.
				</p>
			</header>
			<section className="section">
				<div className="highlight">
					<h4>القيمة المضافة الأساسية</h4>
					<p className="text-lg text-white">
						<strong>
							We translate personal intent into a complete beauty journey.
						</strong>
					</p>
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
							<span className="label">VALUE</span>
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
		</div>
	);
}
