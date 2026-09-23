"use client";
import { useState } from "react";
const prompt = String.raw`Act as a senior brand identity designer and creative director specializing in modern beauty, lifestyle, consumer experience and future-oriented brands.

Develop the visual identity and logo direction for a beauty brand called [SELECTED BRAND NAME].

BRAND CONCEPT:

The brand is built around:

CARE → EXPRESS

CARE represents taking care of yourself, preparing yourself and maintaining what you already have.

EXPRESS represents the freedom to change, style and express how you want to appear, feel or show up.

However, the brand's key differentiation is its INTENT-CENTRIC beauty experience.

The user does not begin by choosing a product category.

Instead, the user begins with:

"What do I want today?"

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
and future moods or occasions.

The brand then creates a curated BEAUTY JOURNEY combining products from:

Hair
Skin
Makeup / Expression
Styling
Beauty Tools
Accessories
Gadgets
Devices

CORE EXPERIENCE:

INTENT → JOURNEY → RESULT

The visual identity should communicate that beauty can move and adapt according to the person.

CARE should feel:

Grounded
Calm
Structured
Balanced
Nurturing

EXPRESS should feel:

Fluid
Open
Dynamic
Creative
Personal

The visual system should express a controlled transition between these two states.

IMPORTANT:

The logo itself should remain recognizable and consistent.

Do not create a different logo for every journey.

Instead, develop:

1. A core symbol
2. A flexible visual system around the symbol
3. A way to visually distinguish different beauty journeys without breaking brand recognition

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

Transformation
Movement
Transition
Flow
Duality
Choice
Adaptability
Balance
Modularity
Individuality
Connection

The symbol must work independently from the wordmark.

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
5. Relationship to CARE → EXPRESS
6. Relationship to INTENT → JOURNEY → RESULT
7. Relationship to the brand name
8. Typography direction
9. Color direction
10. Journey-system application
11. Packaging application
12. Digital application
13. Strengths
14. Weaknesses

Prioritize:

Conceptual meaning
Simplicity
Scalability
Visual ownership
Recognition
System thinking
Flexibility

Avoid decorative beauty aesthetics.

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
				<p>هوية ثابتة + Visual System يمكن أن يتغير حولها حسب الـJourney.</p>
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
							"رمز أساسي ثابت مع عناصر متغيرة حوله لتمثيل Journeys مختلفة.",
						],
						[
							"Direction B",
							"Modular Path",
							"رمز مبني من وحدات ومسارات يمكن ترتيبها لتعكس Journey مختلفة.",
						],
						[
							"Direction C",
							"Dual State",
							"رمز يحتوي على حالتين بصريتين: Stable State وFluid State.",
						],
						[
							"Direction D",
							"Open Choice",
							"شكل ثابت منطلقه واحد، لكنه يسمح بمسارات مختلفة تعكس الاختيار والمرونة.",
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
