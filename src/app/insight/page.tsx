export default function InsightPage() {
	return (
		<div className="page-shell">
			<header className="hero">
				<p className="eyebrow">CONSUMER INSIGHT</p>
				<h1>المستخدم لا يعيش حياته كفئات منتجات</h1>
				<p>
					هو يعيش أيامًا ومناسبات وحالات مختلفة، وقد يتغير ما يحتاجه أو يريد أن
					يظهر به من يوم إلى آخر.
				</p>
			</header>
			<section className="section">
				<div className="grid grid-2">
					<div className="card">
						{/* <p>لا يقول: اليوم أنا Skin Care Consumer.</p> */}
						<div className="quote">لا يقول: اليوم أنا Skin Care Consumer.</div>
						<div className="quote">ثم غدًا: اليوم أنا Makeup Consumer.</div>
					</div>
					<div className="card journey">
						<span className="label">Consumer Insight</span>
						<div className="big">
							Your beauty journey should start with what you want today.
						</div>
						<p className="mt-3">
							المستخدم قد يعرف النتيجة أو الـMood الذي يريده، حتى لو لم يكن يعرف
							المنتجات التي ستوصله إليه.
						</p>
					</div>
				</div>
				<div className="highlight">
					<h4>الفكرة الجوهرية</h4>
					<p className="text-lg text-white">
						<strong>
							The user may know the outcome before knowing the products.
						</strong>
					</p>
					<p>
						وهنا يأتي دور البراند كـ
						<strong className="text-white">Translator</strong>: يحوّل الرغبة إلى
						Journey واضحة.
					</p>
				</div>
			</section>
		</div>
	);
}
