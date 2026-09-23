const traits = [
	"يهتم بالعناية الشخصية",
	"يهتم بالمظهر",
	"يحب التجربة والتغيير",
	"يرى Beauty كجزء من Lifestyle",
	"يتغير حسب المناسبة",
	"قد يكون Minimal اليوم وBold غدًا",
	"قد لا يعرف الفرق بين المنتجات",
	"يريد نتيجة واضحة دون حيرة",
];

export default function AudienceInsightPage() {
	return (
		<div className="page-shell">
			<header className="hero">
				<p className="eyebrow">AUDIENCE & INSIGHT</p>

				<h1>من هو المستخدم الذي نبني له هذه التجربة؟</h1>

				<p>
					نستهدف أشخاصًا يهتمون بالعناية الشخصية والمظهر، ويرون Beauty كجزء من
					Lifestyle، وتتغير احتياجاتهم وطريقة تعبيرهم عن أنفسهم حسب اليوم
					والمناسبة.
				</p>
			</header>

			<section className="section">
				<header className="section-header">
					<p className="eyebrow">CONSUMER INSIGHT</p>

					<h2 className="section-title">المستخدم لا يعيش حياته كفئات منتجات</h2>

					<p>
						هو يعيش أيامًا ومناسبات وحالات مختلفة، وقد يتغير ما يحتاجه أو يريد
						أن يظهر به من يوم إلى آخر.
					</p>
				</header>

				<div className="grid grid-2">
					<div className="card">
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
						وهنا يأتي دور البراند كـ{" "}
						<strong className="text-white">Translator</strong>: يحوّل الرغبة إلى
						Journey واضحة.
					</p>
				</div>
			</section>

			<section className="section">
				<header className="section-header">
					<p className="eyebrow">TARGET AUDIENCE</p>

					<h2 className="section-title">من نستهدف؟</h2>

					<p>
						التركيز ليس على العمر فقط، بل على طريقة تفكير المستخدم وعلاقته
						بالجمال واحتياجاته المتغيرة.
					</p>
				</header>

				<div className="grid grid-2">
					<div className="card care">
						<span className="label">Primary Audience</span>

						<div className="big">18–35</div>

						<p>الفئة العمرية الأساسية المقترحة.</p>
					</div>

					<div className="card">
						<span className="label">الأهم من العمر</span>

						<div className="big">Psychographics</div>

						<p>نستهدف طريقة التفكير وعلاقة الشخص بالجمال، وليس العمر وحده.</p>
					</div>
				</div>

				<div className="card mt-5">
					<h3>الشخص الذي نريد خدمته</h3>

					<div className="pill-row">
						{traits.map((x) => (
							<span className="pill" key={x}>
								{x}
							</span>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
