import { JOURNEY_PACKAGES } from "@/data/journeyPackages";
const values = [
    ["Reduce Choice Overload", "تقليل الحيرة بين عشرات المنتجات والخيارات."],
    [
        "Save Time & Effort",
        "عدم إجبار المستخدم على البحث والمقارنة وتركيب الحل بنفسه.",
    ],
    [
        "Increase Confidence",
        "إعطاء المستخدم مسارًا واضحًا بدل التخمين وعدم التأكد.",
    ],
    ["Clear Guidance", "توضيح ماذا يستخدم، كيف يستخدمه، وبأي ترتيب."],
    [
        "Intent-Led Beauty Experience",
        "تنسيق المنتجات والأدوات الملائمة للنية ضمن Journey واحدة، دون اشتراط فئات أو تركيبة ثابتة.",
    ],
    [
        "Reach the Desired Result",
        "مساعدة المستخدم على الوصول إلى الـLook أو الـMood أو الـStyle الذي يريده.",
    ],
] as const;
const needs = [
    [
        "01 · Functional Needs",
        "الاحتياجات الوظيفية",
        "ترتبط بالمهمة العملية التي يريد المستخدم إنجازها بأقل وقت وجهد وتعقيد ممكن.",
        "المستخدم قد يعرف النتيجة أو الـLook الذي يريده، لكنه لا يعرف أي المنتجات أو الأدوات يحتاج، أو بأي ترتيب يستخدمها.",
        "نحوّل النتيجة المطلوبة إلى Journey عملية ومنظمة تجمع Products + Tools + Sequence + Guidance بحسب الحاجة، بدل أن يضطر المستخدم لبناء الحل بنفسه.",
        "We reduce the effort required to achieve the desired beauty result.",
        `GOAL

Professional Look



USER PROBLEM

يعرف أنه يريد مظهرًا مرتبًا ومناسبًا للعمل، لكنه لا يعرف المنتجات والأدوات والخطوات اللازمة.



BRAND RESPONSE

نقدّم Journey واضحة تحدد المنتجات والأدوات المطلوبة عند الحاجة، وترتيب استخدامها للوصول إلى النتيجة.`,
    ],
    [
        "02 · Emotional Needs",
        "الاحتياجات العاطفية",
        "ترتبط بما يريد المستخدم أن يشعر به أثناء اتخاذ القرار واستخدام المنتجات: وضوح، طمأنينة وثقة بدل الحيرة والقلق.",
        'المشكلة ليست فقط "ماذا أشتري؟"، بل أيضًا: "هل اخترت المنتج الصحيح؟ هل هذه العناصر مناسبة معًا؟ وهل ستوصلني للنتيجة التي أريدها؟"',
        "نقلل الـUncertainty عبر Journey واضحة ومنطقية تجعل المستخدم أكثر ثقة في اختياراته والخطوات التي يتبعها.",
        "We make beauty feel simpler, clearer and less overwhelming.",
        `SITUATION

المستخدم يريد Base Makeup مناسبًا ليوم طويل.



EMOTIONAL FRICTION

يشعر بالحيرة من كثرة المنتجات ويخشى شراء منتجات غير مناسبة أو استخدامها بطريقة خاطئة.



BRAND RESPONSE

نقدّم اختيارات واضحة للـPrimer والـFoundation والـPowder بحسب الحاجة، مع ترتيب التطبيق، فيصبح القرار أسهل.`,
    ],
    [
        "03 · Social & Identity Needs",
        "الاحتياجات الاجتماعية والصورة التي يريد إظهارها",
        "ترتبط بالطريقة التي يريد المستخدم أن يظهر بها أمام الآخرين وفي سياق اجتماعي أو مهني معين.",
        "المستخدم لا يبحث دائمًا عن منتج محدد؛ قد يريد أن يظهر Professional أو Elegant أو Minimal أو Bold أو Event-ready بما يناسب اللحظة.",
        "نربط الـBeauty بالسياق الذي يعيش فيه المستخدم ونساعده على بناء مظهر يعبّر عن الصورة التي يريد تقديمها.",
        "We help people express the version of themselves that fits the moment.",
        `CONTEXT

Job Interview



DESIRED IMAGE

Professional · Polished · Confident



BRAND RESPONSE

نقترح Journey تعطي مظهرًا مرتبًا وطبيعيًا يناسب المقابلة بدل التعامل مع كل منتج بشكل منفصل.`,
    ],
    [
        "04 · Stated Needs",
        "الاحتياجات المعلنة",
        "هي الحاجة التي يعبّر عنها المستخدم بشكل مباشر: ما يقول صراحة إنه يريده الآن.",
        'قد يقول المستخدم: "عندي عرس وبدي Wedding Look." أو "بدي Look للـLive." أو "بدي Professional Look."',
        "نأخذ الهدف الذي عبّر عنه المستخدم ونحوّله مباشرة إلى نقطة بداية للـJourney بدل إجباره على البدء من فئات المنتجات.",
        "You state the goal. We structure the path.",
        `USER SAYS

"عندي عرس وبدي Soft Elegant Look."



STATED NEED

Wedding · Soft Elegant



BRAND RESPONSE

نستخدم هذا الهدف كنقطة البداية ونبني له الـBeauty Journey المناسبة.`,
    ],
    [
        "05 · Real Needs",
        "الاحتياجات الفعلية",
        "هي الحاجة الحقيقية الكامنة خلف الطلب المعلن؛ أي ما يحتاجه المستخدم فعليًا لتحقيق الهدف الذي عبّر عنه.",
        'قد يقول المستخدم: "أريد Wedding Look"، لكن حاجته الفعلية ليست اسم الـLook نفسه، بل طريقة سهلة ومتناسقة للوصول إليه دون اختيار وتركيب كل المنتجات والأدوات بنفسه.',
        "نبحث خلف الطلب المباشر ونحدد المنتجات والأدوات والخطوات والتنسيق الذي يحتاجه المستخدم فعلًا للوصول إلى النتيجة.",
        "We solve the need behind the request.",
        `STATED NEED

"I want a Wedding Look."



REAL NEED

أحتاج عناصر متناسقة وخطوات واضحة تساعدني على تحقيق هذا المظهر بسهولة وبدون تخمين.



BRAND RESPONSE

نحوّل الـWedding Look إلى Journey تنفيذية كاملة بدل الاكتفاء بعرض منتجات مرتبطة بالأعراس.`,
    ],
    [
        "06 · Unstated Needs",
        "الاحتياجات غير المعلنة",
        "هي الأشياء التي لا يطلبها المستخدم صراحة لأنه يتوقع وجودها تلقائيًا ضمن تجربة جيدة.",
        "المستخدم قد لا يقول إنه يريد تعليمات واضحة، عناصر متوافقة أو ترتيبًا منطقيًا للخطوات، لكنه يتوقع أن تكون هذه الأمور موجودة.",
        "نبني الوضوح، التوافق والتنظيم داخل الـJourney بشكل افتراضي، بدون أن يضطر المستخدم لطلبها.",
        "We design the experience around what users reasonably expect, even when they don't ask for it.",
        `USER REQUEST

"بدي Makeup ثابت لمناسبة طويلة."



UNSTATED EXPECTATIONS

المنتجات متوافقة معًا.

الخطوات مرتبة.

طريقة الاستخدام واضحة.

لا توجد خطوات غير ضرورية.



BRAND RESPONSE

هذه العناصر تكون جزءًا أساسيًا من الـJourney دون أن يحتاج المستخدم لطلب كل واحدة منها.`,
    ],
    [
        "07 · Delight Needs",
        "احتياجات الاكتشاف غير المتوقع بعد الاستلام",
        "تفصيل خفي لا تعرف عنه العميلة شيئاً عند اختيار الباكج، ويضيف قيمة مرتبطة بالـJourney عند فتحه.",
        "ترى العميلة منتجات العناية والميكاب المعلنة فقط قبل الشراء؛ وبعد فتح الباكج تكتشف إضافة غير متوقعة تناسب رحلتها، مع كرت يوضح طريقة استخدامها أو الاستمتاع بها.",
        "Beauty Discovery أو Beauty Bite أو Perfume Discovery، مسارات داخلية للاختيار من بينها، لا تُعرض أو يُلمَّح إليها قبل الشراء.",
        "A relevant detail, discovered only after unboxing.",
        `BEFORE PURCHASE\nOnly the declared Care and Makeup products are visible. No Delight, gift or surprise messaging.\n\nAFTER UNBOXING\nOne internally selected addition, with a card explaining how to use or enjoy it within the chosen journey.`,
    ],
    [
        "08 · Secret Needs",
        "الاحتياجات العميقة غير المعلنة",
        "هي الدوافع المرتبطة بالصورة الذاتية والثقة والهوية الشخصية، والتي قد تؤثر في الاختيار حتى لو لم يعبّر عنها المستخدم مباشرة.",
        "خلف طلب مثل Professional Look قد توجد رغبة أعمق بأن يشعر المستخدم بأنه مستعد وواثق. وخلف Wedding Look قد توجد رغبة بأن يشعر بأنه مميز في لحظة مهمة.",
        "لا نتعامل مع الـBeauty كمنتجات فقط، بل كوسيلة تساعد المستخدم على التعبير عن الصورة التي يريد أن يراها في نفسه ويقدمها للآخرين.",
        "Beauty becomes a way to express the version of yourself you want to show today.",
        `VISIBLE REQUEST

"بدي Wedding Look."



DEEPER MOTIVATION

"بدي كون من أجمل الموجودين اليوم وأحس إني مميزة وواثقة من حالي."



BRAND ROLE

الـJourney لا تساعدها فقط على اختيار العناصر المناسبة للـWedding Look، بل تساعدها على الوصول إلى الصورة والشعور اللذين تريد أن تعيشهما في هذه المناسبة: جميلة، مميزة وواثقة.`,
    ],
] as const;
const valueSummary = [
    [
        "Functional",
        "Less Effort",
        "رحلة عملية واضحة بدل البحث والتركيب والمقارنة بين المنتجات والأدوات.",
    ],
    [
        "Emotional",
        "More Confidence",
        "وضوح أكبر وتقليل الحيرة وعدم التأكد أثناء الاختيار.",
    ],
    [
        "Social & Identity",
        "Right for the Moment",
        "مظهر يساعد المستخدم على تقديم الصورة التي يريدها في السياق المناسب.",
    ],
    [
        "Stated",
        "We Start From the Goal",
        "نأخذ ما يقوله المستخدم مباشرة كنقطة بداية للـJourney.",
    ],
    [
        "Real Need",
        "We Solve What's Behind It",
        "نحدد ما يحتاجه المستخدم فعليًا لتحقيق الهدف الذي عبّر عنه.",
    ],
    [
        "Unstated",
        "Built-in Clarity",
        "التوافق والتنظيم والتعليمات تكون جزءًا طبيعيًا من التجربة.",
    ],
    [
        "Delight",
        "Intent-Matched Extra",
        "إضافة واحدة غير معلنة تُكتشف فقط عند فتح الباكج، من Beauty Discovery أو Beauty Bite أو Perfume Discovery.",
    ],
    [
        "Secret",
        "Identity + Confidence",
        "ندعم الشعور والصورة الذاتية التي يريد المستخدم الوصول إليها خلف النتيجة الظاهرة.",
    ],
] as const;
export default function CustomerNeedsValuePage() {
    return (<div className="page-shell">

            <header className="hero">

                <p className="eyebrow">CUSTOMER NEEDS & VALUE</p>



                <h1>ما القيمة التي نضيفها للمستخدم؟</h1>



                <p>

                    القيمة ليست في إضافة منتجات أكثر، بل في تبسيط الطريق بين ما يريده

                    المستخدم وما يحتاجه للوصول إلى النتيجة التي يريدها.

                </p>

            </header>



            {/* CORE CUSTOMER VALUE */}



            <section className="section">

                <div className="highlight">

                    <h4>القيمة المضافة الأساسية</h4>



                    <h3 className="text-lg text-ruya-text">

                        <strong>

                            We translate personal intent into a complete beauty journey.

                        </strong>

                    </h3>



                    <p>

                        نحوّل ما يريده المستخدم إلى Journey تجمع المنتجات والأدوات والخطوات

                        المناسبة للوصول إلى النتيجة التي يريدها.

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



                        <p>البراند يترجم النية إلى منتجات وأدوات وخطوات وترتيب وإرشادات.</p>

                    </div>



                    <div className="model-step result">

                        <span className="label">WHAT I GET</span>



                        <h3>RESULT</h3>



                        <p>Look + Mood + Style + Confidence بطريقة أوضح وأقل حيرة.</p>

                    </div>

                </div>



                <div className="grid grid-3 mt-5">

                    {values.map(([title, text]) => (<div className="card" key={title}>

                            <span className="label">CUSTOMER VALUE</span>



                            <div className="big">{title}</div>



                            <p className="mt-2">{text}</p>

                        </div>))}

                </div>



                <div className="highlight">

                    <h4>المشكلة التي نحلها</h4>



                    <p className="text-ruya-text">

                        <strong>

                            Beauty offers too many choices, while users often know the result

                            they want better than the products they need to achieve it.

                        </strong>

                    </p>



                    <p>

                        المستخدم قد يعرف{" "}

                        <strong className="text-ruya-text">ماذا يريد</strong> قبل أن يعرف{" "}

                        <strong className="text-ruya-text">ماذا يحتاج</strong>.

                    </p>

                </div>

            </section>



            {/* EIGHT CUSTOMER NEEDS */}



            <section className="section">

                <header className="section-header">

                    <p className="eyebrow">EIGHT NEEDS</p>



                    <h2 className="section-title">طبقات الاحتياجات والرغبات</h2>



                    <p>

                        لا ننظر إلى الاحتياجات الثمانية كعناصر منفصلة، بل كطبقات تبدأ من

                        الطلب الظاهر وتنتهي بالدافع الأعمق.

                    </p>

                </header>



                <div className="needs-grid">

                    {needs.map(([label, title, description, problem, value, quote, example], i) => (<article className={`need-card ${i % 3 === 0 ? "care" : i % 3 === 1 ? "express" : "journey"}`} key={label}>

                                <div className="need-heading">

                                    <span className="label">{label}</span>



                                    <h3>{title}</h3>

                                </div>



                                <p className="need-description">{description}</p>



                                <div className="need-details">

                                    <div className="need-block">

                                        <span className="need-block-label">المشكلة / الحاجة</span>



                                        <p>{problem}</p>

                                    </div>



                                    <div className="need-block value">

                                        <span className="need-block-label">القيمة المضافة</span>



                                        <p>{value}</p>

                                    </div>

                                </div>



                                <div className="need-quote">

                                    <strong>{quote}</strong>

                                </div>



                                <div className="mt-4 overflow-hidden rounded-xl border border-ruya-line bg-ruya-bg/30">

                                    <div className="border-b border-ruya-line px-4 py-3">

                                        <span className="label">REAL-WORLD EXAMPLE</span>

                                    </div>



                                    <div className="whitespace-pre-line p-4 text-sm leading-7 text-ruya-muted">

                                        {example}

                                    </div>

                                </div>

                            </article>))}

                </div>



                {/* EIGHT NEEDS IN ONE JOURNEY */}



                <div className="highlight">

                    <h4>كيف تتجمع الطبقات الثمانية داخل Journey واحدة؟</h4>



                    <p>

                        مثال: المستخدم يقول &quot;عندي Interview&quot;. الطلب المعلن بسيط،

                        لكن خلفه طبقات متعددة من الاحتياجات:

                    </p>



                    <div className="model">

                        <div className="model-step intent">

                            <span className="label">STATED</span>



                            <h3>Interview Look</h3>



                            <p>الطلب الذي يقوله المستخدم.</p>

                        </div>



                        <div className="model-step journey-step">

                            <span className="label">REAL + FUNCTIONAL</span>



                            <h3>Easy + Coordinated</h3>



                            <p>يريد نتيجة واضحة دون معرفة كل المنتجات والأدوات والخطوات.</p>

                        </div>



                        <div className="model-step result">

                            <span className="label">EMOTIONAL + SOCIAL + SECRET</span>



                            <h3>Confidence + Professional Image</h3>



                            <p>يريد أن يظهر مرتبًا ويشعر بأنه مستعد وواثق.</p>

                        </div>

                    </div>



                    <div className="grid grid-2 mt-4">

                        <div className="card">

                            <span className="label">UNSTATED</span>



                            <p>يتوقع خطوات واضحة، عناصر متناسقة وعدم إغراقه بالخيارات.</p>

                        </div>



                        <div className="card express">

                            <span className="label">DELIGHT</span>



                            <p>

                                تضم الـEssential Journey مجموعة منتجات معلنة من العناية والميكاب

                                تناسب النتيجة المطلوبة. وبعد فتح الباكج تُكتشف إضافة غير معلنة

                                تناسب الـIntent، مع كرت يوضح استخدامها.

                            </p>

                        </div>

                    </div>

                </div>

            </section>



            {/* INTERNAL DELIGHT STRATEGY — NOT CUSTOMER-FACING COPY */}

            <section className="section">

                <header className="section-header">

                    <p className="eyebrow">

                        INTERNAL EXPERIENCE STRATEGY · POST-PURCHASE

                    </p>

                    <h2 className="section-title">Delight: an unexpected discovery</h2>

                    <p>

                        في تجربة الشراء ترى العميلة منتجات العناية والميكاب المعلنة فقط،

                        دون عدد ثابت. لا يُعلَن وجود Delight ولا نوعه أو محتواه في المتجر

                        أو السوشال ميديا أو الإعلان أو قبل الدفع. بعد استلام الباكج وفتحه

                        تكتشف إضافة غير معلنة اختارتها RUYA لتناسب رحلتها، مع كرت يوضح سبب

                        الاختيار وطريقة الاستخدام أو الاستمتاع بها ضمن الـJourney.

                    </p>

                </header>

                <div className="grid grid-3">

                    <div className="card journey">

                        <span className="label">PATH 01 · BEAUTY DISCOVERY</span>

                        <h3>Explore another beauty possibility</h3>

                        <p>

                            مستحضر أو أداة إضافية غير مكررة من المنتجات المعلنة؛ تكمل الرحلة

                            أو تفتح تجربة جمالية جديدة.

                        </p>

                    </div>

                    <div className="card express">

                        <span className="label">PATH 02 · BEAUTY BITE</span>

                        <h3>A bite for the moment</h3>

                        <p>

                            قطعة قابلة للأكل تُختار من أجواء اللحظة نفسها، وليست مكافأة موعودة

                            قبل الشراء.

                        </p>

                    </div>

                    <div className="card care">

                        <span className="label">PATH 03 · PERFUME DISCOVERY</span>

                        <h3>Discover a matching scent</h3>

                        <p>

                            عينة عطرية تتناسب مع الـMood أو المناسبة، وتتيح للبراند استكشاف

                            فئات Beauty جديدة.

                        </p>

                    </div>

                </div>

                <div className="highlight mt-5">

                    <h4>One Journey · One Unannounced Delight</h4>

                    <p>

                        مع كل طلب نختار مساراً واحداً من الثلاثة. قد يختلف نوع الإضافة من

                        طلب لآخر، لكن يظل مرتبطاً بالـIntent وملائماً للمنتجات الأساسية

                        المعلنة. لا يرى العميل أي اختيار للمفاجأة قبل الشراء.

                    </p>

                    <p>

                        هذه التفاصيل توضح آلية العمل داخلياً في دراسة البراند، ولا تُنسخ إلى

                        أي محتوى تجاري موجه للعميلة قبل فتح الباكج.

                    </p>

                </div>

                <div className="mt-8">

                    <header className="section-header">

                        <p className="eyebrow">

                            SEVEN JOURNEYS · INTERNAL MATCHING EXAMPLES

                        </p>

                        <h2 className="section-title">Every surprise fits the journey</h2>

                        <p>

                            الأمثلة التالية مخصصة لتصميم تجربة ما بعد الاستلام، ولا تظهر ضمن

                            عرض البيع أو الإعلانات.

                        </p>

                    </header>

                    <div className="grid grid-2">

                        {JOURNEY_PACKAGES.map((journey) => (<article className="card" key={journey.title}>

                                <span className="label">{journey.context}</span>

                                <h3 className="mt-2">{journey.title}</h3>

                                <p className="mt-2">{journey.result}</p>

                                <div className="mt-4 grid gap-2">

                                    {([
                ["Beauty Discovery", journey.delight.discovery],
                ["Beauty Bite", journey.delight.bite],
                ["Perfume Discovery", journey.delight.perfume],
            ] as const).map(([type, item]) => (<div key={type} className="rounded-xl border border-ruya-line bg-ui-fill/3 p-3">

                                            <span className="label">{type} · INTERNAL OPTION</span>

                                            <p className="mt-1 font-semibold text-ruya-text">

                                                {item.name}

                                            </p>

                                            <p className="mt-1 text-sm">{item.connection}</p>

                                            <p className="mt-2 text-xs text-ruya-muted">

                                                Journey Card: {item.cardInstruction}

                                            </p>

                                        </div>))}

                                </div>

                            </article>))}

                    </div>

                </div>

            </section>



            {/* VALUE SUMMARY */}



            <section className="section">

                <h2 className="section-title">الخلاصة: ما الذي نضيفه فعليًا؟</h2>



                <div className="needs-summary-grid">

                    {valueSummary.map(([label, title, text]) => (<div className="card" key={label}>

                            <span className="label">{label}</span>



                            <div className="big">{title}</div>



                            <p className="mt-2">{text}</p>

                        </div>))}

                </div>



                <div className="final-box mt-5">

                    <span className="label">VALUE PROPOSITION</span>



                    <div className="final-core">

                        <span className="bg-linear-to-l from-ruya-care via-ruya-express to-ruya-journey bg-clip-text text-transparent">

                            The user chooses the outcome. We simplify the journey.

                        </span>

                    </div>



                    <div className="quote">

                        <strong>نحوّل ما تريده اليوم إلى رحلة جمال متكاملة.</strong>

                    </div>

                </div>

            </section>

        </div>);
}
