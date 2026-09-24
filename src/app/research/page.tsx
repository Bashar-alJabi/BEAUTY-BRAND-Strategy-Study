export default function ResearchPage() {
	const competitors = [
		[
			"Fenty",
			"مثال على Brand تمتد عبر Makeup وSkincare وHair وغيرها، مع حضور قوي لفكرة التعبير والـStyle.",
			"https://fentybeauty.com/",
		],
		[
			"Glossier",
			"مثال على دمج Skincare وMakeup وغيرها مع خطاب واضح عن الفردية والبساطة والتعبير عن الذات.",
			"https://www.glossier.com/",
		],
		[
			"Milk Makeup",
			"مثال قوي على وضع الإبداع والـSelf-Expression في قلب التجربة الجمالية.",
			"https://milkmakeup.com/",
		],
		[
			"VIOLETTE_FR",
			"تربط بين Makeup وSkincare وHair وFragrance وتبني حضورًا واضحًا حول الفردية والإبداع.",
			"https://www.violettefr.com/",
		],
		[
			"EXIST",
			"الأقرب فلسفيًا لفكرة Beauty كمنظومة متطورة تربط care وexpression والابتكار والتفكير المستقبلي.",
			"https://wecanexist.com/",
		],
		[
			"Sephora",
			"Retail Benchmark مهم بسبب اتساع فئات Beauty وتنوع المنتجات وأدوات الاكتشاف والشراء.",
			"https://www.sephora.com/",
		],
	];

	return (
		<div className="page-shell">
			<header className="hero">
				<p className="eyebrow">RESEARCH</p>

				<h1>السوق والمشكلة</h1>

				<p>
					بحثنا في السوق والمنافسين لفهم ما هو موجود فعلًا، وما الذي لا يمكن
					اعتماده كنقطة تميز للبراند.
				</p>
			</header>

			<section className="section">
				<h2 className="section-title">ماذا وجدنا في السوق؟</h2>

				<p className="intro">
					تعدد فئات Beauty موجود بالفعل، كما أن الجمع بين العناية والتعبير عن
					الذات ليس جديدًا بحد ذاته. لذلك لا يمكن بناء الـUSP على{" "}
					<strong className="text-white">عدد الفئات</strong> أو مجرد الجمع بين
					Care وSelf-Expression.
				</p>

				<div className="grid grid-3 mt-5">
					{competitors.map(([name, description, url]) => (
						<article className="card" key={name}>
							<h3>{name}</h3>

							<p>{description}</p>

							<a
								className="mt-4 inline-block text-sm font-bold text-white underline decoration-[#ff4b78]"
								href={url}
								target="_blank"
								rel="noreferrer"
							>
								الموقع الرسمي ↗
							</a>
						</article>
					))}
				</div>

				<div className="highlight">
					<h4>ما الذي تعلمناه من السوق؟</h4>

					<p>
						جمع Hair + Skin + Makeup موجود بالفعل، وكذلك الجمع بين Self-Care
						وSelf-Expression. لذلك التميز يجب ألا يكون فقط في{" "}
						<strong className="text-white">ماذا نبيع؟</strong>، بل في{" "}
						<strong className="text-white">
							كيف نساعد المستخدم على الوصول إلى ما يريده؟
						</strong>
					</p>
				</div>
			</section>

			<section className="section">
				<h2 className="section-title">المشكلة التي كشفها البحث</h2>

				<div className="grid grid-2">
					<div className="card">
						<span className="label">إذا قلنا</span>

						<div className="quote">
							<strong>&quot;نحن Brand يجمع Hair + Skin + Makeup.&quot;</strong>
						</div>

						<p className="text-[#ff4b78]">هذا النموذج موجود في السوق.</p>
					</div>

					<div className="card">
						<span className="label">وإذا قلنا</span>

						<div className="quote">
							<strong>
								&quot;نحن Brand يجمع Self-Care + Self-Expression.&quot;
							</strong>
						</div>

						<p className="text-[#ff4b78]">هذه الفكرة أيضًا لها أمثلة موجودة.</p>
					</div>
				</div>

				<div className="highlight">
					<h4>أين تظهر المشكلة الحقيقية؟</h4>

					<p>
						في تجربة الاختيار نفسها: المستخدم قد يواجه عددًا كبيرًا من المنتجات،
						ويحتاج إلى البحث والمقارنة وفهم الاختلافات بينها، ثم تحديد أي منتجات
						يحتاجها وبأي ترتيب ليصل إلى الـLook أو الـMood أو الـStyle الذي
						يريده.
					</p>

					<p className="mt-4">
						بمعنى آخر، قد يعرف المستخدم{" "}
						<strong className="text-white">النتيجة التي يريدها</strong> قبل أن
						يعرف{" "}
						<strong className="text-white">
							المنتجات التي يحتاجها للوصول إليها
						</strong>
						.
					</p>
				</div>

				<div className="highlight">
					<h4>الاستنتاج الاستراتيجي</h4>

					<p className="text-lg text-white">
						<strong>
							The opportunity is not adding more products. It is simplifying the
							path to the desired result.
						</strong>
					</p>

					<p>
						وهنا تبدأ فكرة البراند الأساسية: الانتقال من منطق{" "}
						<strong className="text-white">Product Categories</strong> إلى منطق{" "}
						<strong className="text-white">User Intent</strong>.
					</p>
				</div>
			</section>
		</div>
	);
}
