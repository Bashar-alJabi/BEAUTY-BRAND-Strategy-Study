export default function AudiencePage() {
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
	return (
		<div className="page-shell">
			<header className="hero">
				<p className="eyebrow">TARGET AUDIENCE</p>
				<h1>18–35</h1>
				<p>نستهدف طريقة التفكير وعلاقة الشخص بالجمال، وليس العمر وحده.</p>
			</header>
			<section className="section">
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
