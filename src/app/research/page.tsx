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
				{/* <p>
					دراسة المنافسين أوضحت أن تعدد فئات Beauty موجود بالفعل، كما أن خطاب
					Self-Care وSelf-Expression ليس جديدًا بحد ذاته.
				</p> */}
			</header>
			<section className="section">
				<h2 className="section-title">
					تحليل السوق: لماذا Hair + Skin + Makeup وحدها لا تكفي؟
				</h2>
				<p className="intro">
					دراسة المنافسين أوضحت أن تعدد فئات Beauty موجود بالفعل، كما أن خطاب
					Self-Care وSelf-Expression ليس جديدًا بحد ذاته. لذلك لا نستطيع بناء
					الـUSP على &quot;عدد الفئات&quot; فقط.
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
							{/* <span className="mt-2 block text-xs font-bold text-[#e8b59b]">
								Conceptual Reference
							</span> */}
						</article>
					))}
				</div>
				<div className="highlight">
					<h4>ما الذي تعلمناه؟</h4>
					<p>
						لا نستطيع أن نقول إن &quot;جمع Hair + Skin + Makeup&quot; هو
						الاختلاف، ولا أن &quot;Care + Self-Expression&quot; فكرة حصرية. لذلك
						نحتاج إلى نقل نقطة التميز من{" "}
						<strong className="text-white">ماذا نبيع؟</strong> إلى{" "}
						<strong className="text-white">
							كيف نساعد المستخدم على الوصول لما يريده؟
						</strong>
					</p>
				</div>
			</section>
			<section className="section">
				<h2 className="section-title">المشكلة التي وجدناها</h2>
				<div className="grid grid-2">
					<div className="card">
						<span className="label">إذا قلنا</span>
						<div className="quote">
							<strong>&quot;نحن Brand يجمع Hair + Skin + Makeup.&quot;</strong>
						</div>
						<p className="text-[#ff4b78]">هذا موجود في السوق.</p>
					</div>
					<div className="card">
						<span className="label">وإذا قلنا</span>
						<div className="quote">
							<strong>
								&quot;نحن Brand يجمع Self-Care + Self-Expression.&quot;
							</strong>
						</div>
						<p className="text-[#ff4b78]">هذا أيضًا له أمثلة موجودة.</p>
					</div>
				</div>
				<div className="highlight">
					<h4>إذن أين نبحث عن القيمة؟</h4>
					<p>
						في تجربة المستخدم نفسها: كيف يكتشف المنتجات، كيف يختارها، وكيف يعرف
						أي مجموعة يحتاجها ليصل إلى الـLook أو الـMood أو الـStyle الذي
						يريده.
					</p>
				</div>
			</section>
		</div>
	);
}
