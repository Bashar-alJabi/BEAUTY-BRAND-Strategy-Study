"use client";

import { useState } from "react";

const prompt = String.raw`Act as a senior brand identity designer and creative director specializing in modern beauty, lifestyle, consumer experience and future-oriented brands.

Develop the visual identity and logo direction for a beauty brand called [SELECTED BRAND NAME].

BRAND CONCEPT:

The brand is a modern Beauty Ecosystem built around a different way of experiencing beauty.

The key differentiation is not simply offering multiple beauty categories.

The brand starts with USER INTENT.

Instead of asking:

"What product do you need?"

the brand asks:

"What do you want today?"

The user may begin with:

- An occasion
- A mood
- A style
- A desired look
- A context
- A personal preference
- Other future needs or situations

Examples:

Everyday
Professional
School
Wedding
Party
Live / Content
Minimal
Bold
Creative
and future moods, occasions and styles.

The brand then translates that intention into a clear BEAUTY JOURNEY.

CORE EXPERIENCE:

INTENT → JOURNEY → RESULT

INTENT:
What does the user want today?

JOURNEY:
What products, steps, sequence and guidance are needed to get there?

RESULT:
What does the user achieve — the desired Look, Mood, Style or overall appearance?

The visual identity should communicate:

Choice
Clarity
Adaptability
Movement
Transformation
Personalization
Possibility
Journey
Connection between different beauty needs

The visual system should make the brand feel flexible enough to adapt to different journeys while remaining clearly recognizable as one brand.

BRAND SCOPE:

The ecosystem begins with Hair Care and Skin Care and expands into broader beauty categories.

CARE includes:

Hair Care
Skin Care
Body Care
Treatments
Routines
Care Tools
Beauty Devices

EXPRESS includes:

Makeup
Styling
Accessories
Beauty Tools
Gadgets
Devices
and other forms of beauty expression

CARE + EXPRESS define the scope of the ecosystem.

They should NOT be treated as the main visual concept or as two separate identities.

The main visual concept should support the INTENT → JOURNEY → RESULT experience.

IMPORTANT:

The logo itself should remain recognizable and consistent.

Do not create a different logo for every journey.

Instead, develop:

1. A core symbol
2. A flexible visual system around the symbol
3. A way to visually distinguish different beauty journeys without breaking brand recognition

The identity should be able to adapt without looking like multiple unrelated brands.

The logo should NOT literally depict:

- Hair
- Skin
- Lips
- Eyes
- Faces
- Makeup brushes
- Flowers
- Leaves
- Water drops
- Crowns
- Diamonds
- Generic beauty symbols

Instead explore abstract concepts such as:

Choice
Movement
Journey
Transformation
Transition
Adaptability
Modularity
Flow
Connection
Possibility
Direction
Path
Personalization
Change

The symbol should work independently from the wordmark.

It must work across:

Packaging
Hair products
Skincare products
Makeup
Beauty tools
Gadgets
Devices
Digital interfaces
Mobile applications
Social media
Small product embossing
Icons

Create 4 DISTINCT strategic logo directions.

For each direction provide:

1. Concept name
2. Visual description
3. Shape / construction logic
4. Meaning
5. Relationship to INTENT → JOURNEY → RESULT
6. How it supports choice and adaptability
7. Relationship to the overall Beauty Ecosystem
8. Relationship to the brand name
9. Typography direction
10. Color direction
11. Journey-system application
12. Packaging application
13. Digital application
14. Strengths
15. Weaknesses

JOURNEY SYSTEM:

Explore how the visual identity can adapt to different journeys such as:

Everyday
Professional
School
Wedding
Party
Live / Content
Minimal
Bold
Creative

The core logo should remain stable.

Variation should happen through the surrounding visual system, such as:

Color
Patterns
Graphic elements
Layouts
Motion
Typography
Shapes
Secondary identifiers

Do not redesign the core logo for each journey.

PRIORITIES:

Conceptual meaning
Simplicity
Clarity
Scalability
Visual ownership
Recognition
System thinking
Flexibility
Adaptability
Long-term relevance

Avoid decorative beauty aesthetics.

Avoid visual clichés associated with traditional beauty brands.

Do not make the identity look overly feminine, clinical, pharmaceutical or trend-dependent.

Do not select one final direction.

Provide four strategically different directions for human evaluation.`;

export default function VisualIdentityPromptPage() {
	const [copied, setCopied] = useState(false);

	const copy = async () => {
		await navigator.clipboard.writeText(prompt);
		setCopied(true);
		setTimeout(() => setCopied(false), 1500);
	};

	return (
		<div className="page-shell">
			<header className="hero">
				<p className="eyebrow">PROMPT 2 · VISUAL IDENTITY &amp; LOGO</p>

				<h1>Core Symbol + Flexible System</h1>

				<p>
					هوية بصرية ثابتة وقابلة للتوسع، تعبّر عن الاختيار والمرونة والـBeauty
					Journeys المختلفة دون تغيير هوية البراند الأساسية.
				</p>
			</header>

			<section className="section">
				<div className="prompt-card">
					<div className="prompt-head">
						<span className="prompt-title">
							PROMPT 2 — VISUAL IDENTITY &amp; LOGO DIRECTION
						</span>

						<button
							className={`copy-btn ${copied ? "copied" : ""}`}
							onClick={copy}
						>
							{copied ? "تم النسخ ✓" : "نسخ البرومبت"}
						</button>
					</div>

					<pre>{prompt}</pre>
				</div>

				<div className="grid grid-2 mt-5">
					{[
						[
							"Direction A",
							"Adaptive Core",
							"رمز أساسي ثابت مع Visual System مرن يتغير حسب الـJourney.",
						],
						[
							"Direction B",
							"Path & Movement",
							"هوية مبنية حول فكرة المسار والانتقال من Intent إلى Result.",
						],
						[
							"Direction C",
							"Modular Choice",
							"نظام بصري مبني من وحدات يمكن أن تتغير وتترك الهوية الأساسية ثابتة.",
						],
						[
							"Direction D",
							"Open Possibility",
							"رمز أساسي يمثل الاختيار والإمكانات، مع نظام بصري يتكيف مع النتائج المختلفة.",
						],
					].map(([tag, title, text]) => (
						<div className="direction" key={tag}>
							<span className="label text-[#ff4b78]">{tag}</span>
							<h3>{title}</h3>
							<p>{text}</p>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
