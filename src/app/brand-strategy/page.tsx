export default function BrandStrategyPage() {
	return (
		<div className="page-shell">
			<header className="hero">
				<p className="eyebrow">BRAND STRATEGY</p>

				<h1>من Product Categories إلى User Intent</h1>

				<p>
					بدل أن يبدأ البراند من المنتجات التي يبيعها، يبدأ من النتيجة التي يريد
					المستخدم الوصول إليها، ثم يبني له الطريق المناسب إليها.
				</p>
			</header>

			<section className="section">
				<h2 className="section-title">منطقنا مقابل المنطق التقليدي</h2>

				<div className="grid grid-2">
					<div className="card">
						<span className="label">المنطق التقليدي</span>

						<div className="big">What product do I need?</div>

						<div className="pill-row">
							{["Complexion", "Cheeks", "Eyes", "Lips", "Tools"].map((x) => (
								<span className="pill" key={x}>
									{x}
								</span>
							))}
						</div>

						<p className="mt-4">
							المستخدم يبدأ من فئة المنتج ويحاول معرفة ماذا يختار وكيف يجمعه مع
							غيره.
						</p>
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

						<p className="mt-4">
							المستخدم يبدأ من المناسبة أو النتيجة التي يريدها، والبراند يترجمها
							إلى الطريق المناسب.
						</p>
					</div>
				</div>
			</section>

			<section className="section">
				<h2 className="section-title">النموذج الأساسي</h2>

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
							البراند يترجم النية إلى المنتجات والأدوات والخطوات المناسبة، مع
							ترتيب واضح وإرشادات للاستخدام.
						</p>
					</div>

					<div className="model-step result">
						<span className="label">03 · RESULT</span>

						<h3>ماذا أحصل عليه؟</h3>

						<p>
							الـLook أو الـMood أو الـStyle الذي اخترته، بتجربة أوضح وأقل حيرة.
						</p>
					</div>
				</div>

				<div className="highlight">
					<h4>الفكرة الأساسية</h4>

					<p className="text-lg text-ruya-text">
						<strong>
							The user chooses the outcome. We simplify the journey.
						</strong>
					</p>

					<p>
						لا نزيد عدد الخيارات؛ بل نختصر الطريق بين ما يريده المستخدم والنتيجة
						التي يريد الوصول إليها.
					</p>
				</div>
			</section>

			<section className="section">
				<header className="section-header">
					<p className="eyebrow">BEAUTY JOURNEY</p>

					<h2 className="section-title">كيف يعمل النموذج عمليًا؟</h2>

					<p>
						المستخدم لا يريد أن يقارن عشرات المنتجات والأدوات؛ هو يريد النتيجة
						المناسبة للمناسبة.
					</p>
				</header>

				<div className="grid grid-2">
					<div className="card journey">
						<span className="label">INTENT</span>

						<div className="big">لدي Wedding اليوم</div>

						<p>المستخدم يحدد المناسبة بدل أن يبدأ من فئة منتجات معينة.</p>
					</div>

					<div className="card">
						<span className="label">THE BRAND TRANSLATES THE INTENT</span>

						<div className="big">Wedding Journey</div>

						<div className="pill-row">
							{[
								"Complexion",
								"Cheeks",
								"Eyes",
								"Lips",
								"Makeup Tools",
								"Finish",
							].map((x, i) => (
								<span
									className={`pill ${
										i < 2 ? "care" : i < 5 ? "express" : "journey"
									}`}
									key={x}
								>
									{x}
								</span>
							))}
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

						<h3>Select → Prepare → Apply → Finish</h3>

						<p>
							خطوات توضيحية لهذه الرحلة تحديدًا، تُختار من المنتجات والأدوات
							الملائمة دون فرض مراحل ثابتة على جميع الـJourneys.
						</p>
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
							"منتجات وأدوات مناسبة، مع ترتيب الاستخدام.",
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

						<p>نفس المنتج أو الأداة يمكن أن يدخل في أكثر من Journey.</p>

						<p>
							الـCream Blush مثلًا ليس &quot;Wedding Product&quot; بحد ذاته؛
							يمكن استخدامه ضمن Wedding Journey أو Professional Journey
							أو Everyday Journey بحسب اللون وطريقة التطبيق والنتيجة المطلوبة.
						</p>

						<p>
							وبنفس الطريقة، يمكن استخدام Makeup Brush أو Beauty Sponge ضمن
							Journeys مختلفة، بحسب الحاجة وطريقة التطبيق والنتيجة.
						</p>
					</div>
				</div>

				<div className="highlight">
					<h4>Journey ≠ Bundle</h4>

					<p>
						الـBundle مجرد مجموعة منتجات. أما الـJourney فهي تجربة كاملة:{" "}
						<strong className="text-ruya-text">
							Intent + Selection + Sequence + Guidance + Outcome
						</strong>
						.
					</p>

					<p>
						الـJourney هي التي تحدد المنتجات والأدوات المطلوبة، وليس العكس. لذلك
						قد تتضمن تجربة واحدة اختيارات من عدة فئات، بينما تحتاج تجربة أخرى
						إلى منتج واحد أو عناصر من فئة واحدة فقط.
					</p>

					<p>
						ويمكن تخصيص التجربة بإضافات مرتبطة بالـIntent عندما تحقق قيمة واضحة
						للمستخدم، دون أن تصبح شرطًا ثابتًا في كل Journey.
					</p>
				</div>
			</section>

			<section className="section">
				<header className="section-header">
					<p className="eyebrow">BRAND SCOPE</p>

					<h2 className="section-title">نطاق مرن، تجربة تتمحور حول النية</h2>

					<p>
						تبدأ رحلة منتجات البراند من الميكاب، ثم تتطور لتشمل
						فئات الجمال المختلفة بحسب احتياجات العميلات والتشكيلة
						المتاحة. أما نقطة التميز فهي التجربة التي تبدأ من الـIntent.
					</p>
				</header>

				<div className="grid grid-2">
					<div className="card care">
						<span className="label">FLEXIBLE BEAUTY SCOPE</span>

						<h3>المنتجات وسائل وليست نقطة البداية</h3>

						<div className="pill-row">
							{["Makeup", "Cosmetics", "Beauty Tools", "Accessories", "Skincare", "Haircare", "Fragrance"].map((x) => (
								<span className="pill care" key={x}>{x}</span>
							))}
						</div>

						<p className="mt-4">
							هذه أمثلة لفئات تستطيع منظومة Beauty استيعابها؛
						تبدأ التشكيلة بالميكاب ويمكن توسيعها تدريجيًا،
						دون اعتبار أي فئة تعريفًا دائمًا للبراند.
						</p>
					</div>

					<div className="card express">
						<span className="label">INTENT-LED CURATION</span>

						<h3>النتيجة تحدد الاختيارات</h3>

						<div className="pill-row">
							{["Intent", "Selection", "Guidance", "Journey", "Result"].map((x) => (
								<span className="pill journey" key={x}>{x}</span>
							))}
						</div>

						<p className="mt-4">
							بعض الرحلات تحتاج منتجًا واحدًا، وأخرى تحتاج مجموعة مختارة
							من منتجات أو أدوات. لا توجد فئة إلزامية أو خطوات ثابتة لكل Journey.
						</p>
					</div>
				</div>

				<div className="highlight">
					<h4>Product Categories Are Flexible. Brand Purpose Is Consistent.</h4>

					<p>
						بداية المنتجات من الميكاب لا تعني حصر هوية البراند فيه؛
						بل تتسع منظومة الجمال بحسب ما يخدم العميلة. ويبقى
						جوهر التجربة تبسيط الانتقال من النية إلى النتيجة المرغوبة.
					</p>
				</div>
			</section>

			<section className="section">
				<header className="section-header">
					<p className="eyebrow">BRAND SYSTEM</p>

					<h2 className="section-title">
						Brand Philosophy — Promise — Positioning — Value Proposition
					</h2>
				</header>

				<div className="grid grid-2">
					{[
						[
							"Brand Philosophy",
							"Beauty begins with the person, not the product category.",
							"تؤكد أن نقطة البداية هي رغبة المستخدم والنتيجة التي يسعى إليها، لا فئة المنتجات.",
							"care",
						],
						[
							"Brand Promise",
							"We make it easier to turn what you want into a beauty journey that fits you.",
							"تعد بتبسيط الاختيار وتنظيم التجربة بحسب النية والاحتياج.",
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
							"تشرح القيمة العملية التي يقدمها البراند للمستخدم.",
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
		</div>
	);
}
