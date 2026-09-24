"use client";

import { useState } from "react";

const prompt = String.raw`Act as a senior verbal identity strategist and advertising copywriter specializing in modern beauty, lifestyle, consumer experience and future-oriented brands.

Create a memorable permanent slogan for [SELECTED BRAND NAME].

BRAND CONCEPT:

The brand is a modern Beauty Ecosystem that starts from what the user wants to achieve, rather than from a specific product category.

The key customer problem is simple:

Beauty offers many products and choices, while users may know the result they want better than the products they need to achieve it.

Instead of asking:

"What product do you need?"

the brand asks:

"What do you want today?"

The user's intention may be based on:

- Occasion
- Mood
- Style
- Desired look
- Context
- Personal preference
- Other future needs and situations

Examples include:

Everyday
Professional
School-ready
Wedding-ready
Party-ready
Camera-ready
Minimal
Bold
Creative

CORE EXPERIENCE:

INTENT → JOURNEY → RESULT

INTENT:
What does the user want today?

JOURNEY:
The brand translates that intention into the relevant products, steps, sequence and guidance.

RESULT:
The user reaches the desired Look, Mood, Style or overall appearance.

KEY DIFFERENTIATION:

The brand does not simply offer more products or more categories.

It simplifies the path between the user's intention and the desired result.

VALUE PROPOSITION:

"The user chooses the outcome. We simplify the journey."

The brand should make beauty feel clearer, easier to navigate and less overwhelming.

BRAND SCOPE:

The ecosystem begins with Hair Care and Skin Care and can expand across broader beauty categories.

CARE represents:

Hair Care
Skin Care
Body Care
Treatments
Routines
Care Tools
Beauty Devices

EXPRESS represents:

Makeup
Styling
Accessories
Beauty Tools
Gadgets
Devices
and other forms of beauty expression

CARE + EXPRESS define the scope of the ecosystem.

They are NOT the primary slogan concept.

TARGET AUDIENCE:

Consumers approximately 18–35 who see beauty as part of their lifestyle and personal expression.

They do not have one fixed beauty identity.

Their needs, moods, occasions and styles can change from day to day.

SLOGAN OBJECTIVE:

Create a permanent brand slogan that communicates the central brand idea in a simple, memorable and distinctive way.

The slogan should support the idea that:

The user chooses what they want.
The brand makes the path easier.
The experience adapts to different needs, moments and outcomes.

The slogan may evoke ideas such as:

Personal choice
Possibility
Adaptability
Clarity
Freedom
Journey
Transformation
Self-expression
Confidence
Desired outcome

The slogan does NOT need to literally mention beauty, products, journeys or intent.

The strongest slogan may communicate the concept through an emotional or conceptual idea rather than explaining the business model directly.

REQUIREMENTS:

1. Prefer 2–6 words.
2. Easy to remember.
3. Easy to pronounce internationally.
4. Reasonably easy to pronounce in Arabic.
5. Modern.
6. Confident.
7. Intelligent.
8. Distinctive.
9. Flexible across different beauty journeys.
10. Suitable for packaging, campaigns, digital products and social media.
11. Relevant if the brand expands beyond cosmetics.
12. Should work as a permanent brand slogan, not only as a campaign line.
13. Should support the idea of personal choice and an easier path to the desired result.
14. Avoid slogans tied to one product category.
15. Avoid slogans tied to one occasion, mood or trend.
16. Avoid generic beauty clichés.
17. Avoid unsupported performance claims.
18. Avoid slogans that simply restate the brand strategy in technical language.

Avoid phrases such as:

"Be beautiful"
"Love yourself"
"Glow every day"
"Be your best self"
"Beauty inside and out"
"Look your best"

CREATIVE TERRITORIES:

Generate 20 slogan directions divided into:

- Choice / Possibility
- Personal / Identity
- Journey / Transformation
- Minimal / Conceptual
- Bold / Expressive

For each slogan provide:

- Slogan
- Meaning
- Emotional impact
- Strategic idea behind it
- Relationship to INTENT → JOURNEY → RESULT
- Why it fits the overall Beauty Ecosystem
- Why it can remain relevant as the brand expands
- Whether it feels stronger as a permanent slogan or a campaign line
- Potential weakness or risk

Important:

Do not force every slogan to explain the full business model.

A permanent slogan should be memorable first, while still being strategically compatible with the brand idea.

At the end, create a strategic shortlist of 5 candidates based on:

Memorability
Clarity
Distinctiveness
Strategic fit
Emotional resonance
Scalability
Long-term relevance
Ability to represent the complete Beauty Ecosystem

Do not choose a final winner.

Provide the shortlist for human evaluation.

Do not claim trademark, legal or domain availability unless it has actually been verified.`;

export default function SloganPromptPage() {
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

				<h1>Choice + Desired Result</h1>

				<p>
					تطوير Slogan دائم يعبّر عن فكرة الاختيار والمرونة وتبسيط الطريق إلى
					النتيجة، بدون الارتباط بفئة Beauty محددة.
				</p>
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
					<h4>لماذا صممنا Prompt 3 هكذا؟</h4>

					<p>
						أعطينا الـAI{" "}
						<strong className="text-white">
							Context + Core Idea + Audience + Slogan Requirements + Evaluation
							Criteria
						</strong>
						، مع التركيز على أن الـSlogan يعبّر عن الفكرة الأساسية للبراند:{" "}
						<strong className="text-white">
							المستخدم يختار النتيجة، والبراند يبسّط الطريق إليها.
						</strong>
					</p>
				</div>
			</section>
		</div>
	);
}
