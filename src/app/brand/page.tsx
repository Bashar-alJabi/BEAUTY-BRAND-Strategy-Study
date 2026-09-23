export default function BrandPage() {
	const statements = [
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
	];
	return (
		<div className="page-shell">
			<header className="hero">
				<p className="eyebrow">BRAND SYSTEM</p>
				<h1>Brand Architecture</h1>
				<p>
					Beauty is not only how you care for yourself. It&apos;s also how you
					express yourself.
				</p>
			</header>
			<section className="section">
				<h2 className="section-title">
					Brand Philosophy — Promise — Positioning — Value Proposition
				</h2>
				<div className="grid grid-2">
					{statements.map(([label, title, text, tone]) => (
						<div className={`card ${tone}`} key={label}>
							<span className="label">{label}</span>
							<h3>{title}</h3>
							<p>{text}</p>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
