"use client";

import { useState } from "react";

const prompt = String.raw`Act as a senior global brand naming strategist specializing in modern beauty, lifestyle, consumer experience and future-oriented brands.

Develop a distinctive and memorable name for a modern Beauty Ecosystem built around a new way of discovering and experiencing beauty.

BRAND CONCEPT:

The brand starts from a simple idea:

Users often know what they want to achieve before they know which products they need to achieve it.

Instead of organizing the experience only around product categories, the brand starts with USER INTENT.

Instead of asking:

"What product do you need?"

the brand asks:

"What do you want today?"

The user's intent may be based on:

- Occasion
- Mood
- Style
- Desired look
- Context
- Personal expression
- Other future needs, situations and preferences

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

The brand then translates that intent into a clear BEAUTY JOURNEY.

CORE EXPERIENCE MODEL:

INTENT → JOURNEY → RESULT

INTENT:
What does the user want today?

JOURNEY:
What products, steps, sequence and guidance are needed to get there?

RESULT:
What does the user achieve — the desired Look, Mood, Style or overall appearance?

The key differentiation is therefore NOT simply having more beauty categories or more products.

The key differentiation is simplifying the journey from personal intent to desired result.

VALUE PROPOSITION:

"The user chooses the outcome. We simplify the journey."

The brand helps users avoid unnecessary searching, comparing and combining products on their own.

BRAND SCOPE:

The ecosystem begins with Hair Care and Skin Care and expands into broader beauty categories.

CARE includes areas such as:

Hair Care
Skin Care
Body Care
Treatments
Routines
Care Tools
Beauty Devices

EXPRESS includes areas such as:

Makeup
Styling
Accessories
Beauty Tools
Gadgets
Devices
and other forms of beauty expression

CARE + EXPRESS describe the scope of the ecosystem.

They are NOT the primary naming concept.

The name should primarily support the idea of:

Intent
Choice
Adaptability
Journey
Transformation
Desired result
Clarity
Personalization

TARGET AUDIENCE:

Consumers approximately 18–35 who see beauty as part of their lifestyle and personal expression.

They do not have one fixed beauty identity.

Their needs, moods, occasions and styles can change from day to day.

BRAND PERSONALITY:

Modern
Confident
Intelligent
Minimal
Refined
Inclusive
Flexible
Contemporary
Helpful
Forward-looking

NAMING OBJECTIVE:

Create a name that can become the umbrella identity for this entire Beauty Ecosystem.

The name must be able to sit above multiple categories, multiple beauty journeys and future forms of beauty without becoming tied to one product or one use case.

NAMING REQUIREMENTS:

1. Create abstract, distinctive and brandable names.
2. Do not use names that describe one product category.
3. Do not lock the brand into skincare, haircare, makeup or cosmetics.
4. Do not lock the brand into Care, Express or Self-Expression.
5. Do not lock the brand into a specific mood, occasion or lifestyle.
6. The name must work across multiple beauty journeys.
7. The name should support a brand built around user intent and desired outcomes.
8. The name should feel appropriate for both physical products and digital experiences.
9. Prefer short names, approximately 4–7 letters where possible.
10. Easy to pronounce internationally.
11. Reasonably easy to pronounce in Arabic.
12. Strong visually as a wordmark.
13. Avoid generic words such as Beauty, Glow, Skin, Hair, Pure, Care, Cosmetics, Glam, etc.
14. Avoid obvious beauty clichés.
15. Avoid pharmaceutical, clinical or childish naming.
16. Avoid names that feel strongly tied to one temporary trend.
17. Do not invent fake linguistic origins and present them as real meanings.
18. Prioritize memorability, distinctiveness, pronunciation, flexibility and long-term scalability.
19. The name should be capable of becoming a standalone ecosystem rather than a single product line.
20. The name should still make sense if the brand expands into new beauty categories, tools, devices, services or digital experiences.

CREATIVE TERRITORIES:

Generate naming directions across different conceptual territories, such as:

- Choice / Freedom
- Intent / Desire
- Movement / Journey
- Transformation
- Adaptability
- Identity / Individuality
- Outcome / Possibility
- Abstract / Future-oriented

OUTPUT:

Generate 15 original naming directions.

For each name provide:

- Name
- Pronunciation
- Brand feeling
- Intended association
- Why it fits the INTENT → JOURNEY → RESULT model
- Why it fits the overall Beauty Ecosystem
- Why it can expand beyond cosmetics
- Visual potential
- Potential weakness or naming risk

Do NOT force every name to have a literal meaning.

The strongest names may work through sound, association, concept or brandability rather than dictionary meaning.

At the end, create a strategic shortlist of 5 candidates based on:

Memorability
Distinctiveness
Pronunciation
Conceptual fit
Brand flexibility
Visual potential
Digital potential
Long-term scalability

Do not choose one final winner.

The purpose is to create a strategic shortlist for human evaluation.

Do not claim trademark, legal or domain availability unless it has actually been verified.`;

export default function NamingPromptPage() {
	const [copied, setCopied] = useState(false);

	const copy = async () => {
		await navigator.clipboard.writeText(prompt);
		setCopied(true);
		setTimeout(() => setCopied(false), 1500);
	};

	return (
		<div className="page-shell">
			<header className="hero">
				<p className="eyebrow">PROMPT 1 · BRAND NAME</p>

				<h1>Naming Strategy</h1>

				<p>
					ابتكار اسم واسع ومرن يمثل الـBeauty Ecosystem ويستوعب الـJourneys
					والتوسعات المستقبلية بدون الارتباط بفئة أو مناسبة أو أسلوب محدد.
				</p>
			</header>

			<section className="section">
				<div className="prompt-card">
					<div className="prompt-head">
						<span className="prompt-title">PROMPT 1 — NAMING STRATEGY</span>

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
					<h4>لماذا صممنا Prompt 1 هكذا؟</h4>

					<p>
						أعطينا الـAI{" "}
						<strong className="text-white">
							Context + Core Differentiation + Brand Scope + Naming Constraints
							+ Evaluation Criteria
						</strong>
						، مع التأكيد أن الفكرة الأساسية هي{" "}
						<strong className="text-white">INTENT → JOURNEY → RESULT</strong>،
						وليس مجرد الجمع بين Care وExpress.
					</p>
				</div>
			</section>
		</div>
	);
}
