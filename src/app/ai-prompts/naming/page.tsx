"use client";
import { useState } from "react";

const prompt = String.raw`Act as a senior global brand naming strategist specializing in modern beauty, lifestyle, consumer experience and future-oriented brands.

Develop a distinctive and memorable name for a modern Beauty Ecosystem built around personalized beauty journeys.

BRAND CONCEPT:

The brand combines two core dimensions of beauty:

CARE → taking care of yourself, preparing yourself and maintaining what you already have.

EXPRESS → changing, styling and expressing how you want to appear, feel or show up.

However, the brand's key differentiation is not simply combining beauty categories.

The brand is organized around USER INTENT.

Instead of asking only:

"What product do you need?"

the brand asks:

"What do you want today?"

Users may want to be or appear:

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

The brand then builds a curated BEAUTY JOURNEY combining relevant products across:

Hair Care
Skin Care
Makeup / Expression
Styling
Beauty Tools
Accessories
Gadgets
Beauty Devices
and future beauty innovations.

CORE EXPERIENCE MODEL:

INTENT → JOURNEY → RESULT

The user chooses what they want today.

The brand translates that intention into a clear beauty journey with relevant products, steps and guidance.

CORE BRAND PHILOSOPHY:

"Beauty is not only how you care for yourself. It's also how you express yourself."

VALUE PROPOSITION:

"Choose how you want to show up today. We build the beauty journey to get you there."

TARGET AUDIENCE:

Consumers approximately 18–35 who see beauty as part of their lifestyle, identity, routine and personal expression.

They do not have one fixed beauty identity.

Their needs, moods, occasions and styles can change from day to day.

BRAND PERSONALITY:

Modern
Confident
Intelligent
Minimal
Refined
Inclusive
Expressive
Flexible
Contemporary
Helpful

NAMING REQUIREMENTS:

1. Create abstract, distinctive and brandable names.
2. Do not use names that describe one product category.
3. Do not lock the brand into skincare, haircare, makeup or cosmetics.
4. Do not lock the brand into a specific mood, occasion or lifestyle.
5. The name must work for a brand that can contain multiple beauty journeys.
6. The name should feel appropriate for both physical products and digital experiences.
7. Prefer short names, approximately 4–7 letters where possible.
8. Easy to pronounce internationally.
9. Reasonably easy to pronounce in Arabic.
10. Strong visually as a wordmark.
11. Avoid generic words such as Beauty, Glow, Skin, Hair, Pure, Care, Cosmetics, Glam, etc.
12. Avoid obvious beauty clichés.
13. Avoid pharmaceutical, clinical or childish naming.
14. Avoid names that feel strongly tied to one temporary trend.
15. Do not invent fake linguistic origins and present them as real meanings.
16. Prioritize memorability, distinctiveness, flexibility and long-term scalability.
17. The name should feel capable of becoming a standalone ecosystem rather than a single product line.

OUTPUT:

Generate 15 original naming directions.

Group them into different creative territories, for example:

- Transformation
- Movement / Journey
- Identity / Individuality
- Choice / Freedom
- Abstract / Future-oriented

For each name provide:

- Name
- Pronunciation
- Brand feeling
- Intended association
- Why it fits the INTENT → JOURNEY → RESULT model
- Why it fits CARE → EXPRESS
- Why it can expand beyond cosmetics
- Visual potential
- Potential weakness or naming risk

At the end, create a strategic shortlist of 5 candidates based on:

Memorability
Distinctiveness
Pronunciation
Visual potential
Brand flexibility
Digital potential
Long-term scalability

Do not choose one final winner.
The purpose is to create a strategic shortlist for human evaluation.

Do not claim trademark or domain availability unless it has actually been verified.`;

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
					ابتكار اسم Abstract وBrandable لا يرتبط بـSkin أو Hair أو Makeup أو
					Wedding أو Mood.
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
						أعطينا الـAI:{" "}
						<strong className="text-white">
							Context + Audience + Constraints + Evaluation Criteria
						</strong>
						. لم نطلب &quot;اسمًا جميلًا&quot;، بل طلبنا منه حل مشكلة Naming
						مرتبطة بنظام Journey كامل.
					</p>
				</div>
			</section>
		</div>
	);
}
