"use client";
import { useState } from "react";
const prompt = String.raw`Act as a senior verbal identity strategist and advertising copywriter specializing in modern beauty, lifestyle, consumer experience and future-oriented brands.

Create a memorable permanent slogan for [SELECTED BRAND NAME].

BRAND CONCEPT:

The brand connects:

CARE → EXPRESS

CARE:
Taking care of yourself, preparing yourself and maintaining what you already have.

EXPRESS:
Changing, styling and expressing how you want to appear, feel or show up.

KEY DIFFERENTIATION:

The brand is organized around USER INTENT rather than only product categories.

Instead of asking:

"What product do you need?"

the brand asks:

"What do you want today?"

The user may want to be or appear:

Everyday
Professional
School-ready
Wedding-ready
Party-ready
Camera-ready
Minimal
Bold
Creative
or other future moods, occasions and styles.

The brand then creates a curated BEAUTY JOURNEY using the right combination of:

Hair Care
Skin Care
Makeup
Styling
Beauty Tools
Accessories
Gadgets
Devices

CORE EXPERIENCE:

INTENT → JOURNEY → RESULT

The user chooses what they want today.

The brand translates that intention into a clear beauty journey that helps them achieve the desired look, mood or style.

CORE PHILOSOPHY:

"Beauty is not only how you care for yourself. It's also how you express yourself."

VALUE PROPOSITION:

"Choose how you want to show up today. We build the beauty journey to get you there."

TARGET AUDIENCE:

Consumers approximately 18–35 who see beauty as part of their lifestyle, identity and personal expression.

They do not have one fixed beauty identity.

SLOGAN OBJECTIVE:

Create a permanent slogan that communicates:

Personal choice
Adaptability
Self-expression
Beauty journey
Confidence

The slogan should NOT describe a specific product category.

REQUIREMENTS:

1. Prefer 2–6 words.
2. Easy to remember.
3. Easy to pronounce.
4. Modern.
5. Confident.
6. Intelligent.
7. Flexible across different beauty journeys.
8. Suitable for packaging, campaigns, digital products and social media.
9. Should remain relevant even if the brand expands beyond cosmetics.
10. Should support the idea that the user chooses who they want to be or how they want to show up today.
11. Avoid generic beauty clichés.

Avoid phrases such as:

"Be beautiful"
"Love yourself"
"Glow every day"
"Be your best self"
"Beauty inside and out"
"Look your best"

Do not use unsupported performance claims.

Generate 20 slogan directions divided into:

Minimal
Personal
Bold
Conceptual

For each slogan explain:

- Meaning
- Emotional impact
- Relationship to CARE → EXPRESS
- Relationship to INTENT → JOURNEY → RESULT
- Why it fits the target audience
- Whether it works better as a permanent brand slogan or as a campaign line

At the end, create a shortlist of 5 candidates based on:

Memorability
Clarity
Distinctiveness
Strategic fit
Scalability
Ability to represent the complete brand ecosystem

Do not choose a final winner.
Provide a shortlist for human evaluation.`;
export default function SloganPage() {
	const [copied, setCopied] = useState(false);
	const copy = async () => {
		await navigator.clipboard.writeText(prompt);
		setCopied(true);
		setTimeout(() => setCopied(false), 1500);
	};
	return (
		<div className="page-shell">
			<header className="hero">
				<p className="eyebrow">PROMPT 3 · SLOGAN</p>
				<h1>Personal Choice + Beauty Journey</h1>
				<p>اختصار فكرة الاختيار والمرونة والتعبير في عبارة قابلة للتذكر.</p>
			</header>
			<section className="section">
				<div className="prompt-card">
					<div className="prompt-head">
						<span className="prompt-title">PROMPT 3 — SLOGAN STRATEGY</span>
						<button
							className={`copy-btn ${copied ? "copied" : ""}`}
							onClick={copy}
						>
							{copied ? "تم النسخ ✓" : "نسخ البرومبت"}
						</button>
					</div>
					<pre>{prompt}</pre>
				</div>
				<div className="highlight">
					<h4>لماذا تغير الـSlogan Prompt؟</h4>
					<p>
						لم يعد المطلوب اختصار Care + Expression فقط؛ بل يجب أن يتسع أيضًا
						لفكرة{" "}
						<strong className="text-white">
							Personal Choice + Adaptability + Beauty Journey
						</strong>
						.
					</p>
				</div>
			</section>
		</div>
	);
}
