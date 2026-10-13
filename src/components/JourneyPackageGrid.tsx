import { BRAND } from "@/config/brand";
import {
  JOURNEY_EXPANSION_NOTE,
  JOURNEY_PACKAGES,
  getVisibleProducts,
} from "@/data/journeyPackages";

/** Safe pre-purchase-style representation: NEVER expose delight options here. */
export default function JourneyPackageGrid({
	compact = false,
}: {
	compact?: boolean;
}) {
	return (
		<section className="section">
			<header className="section-header">
				<p className="eyebrow">{BRAND.name} · CURATED BEAUTY JOURNEYS</p>
				<h2 className="section-title">
					Seven moments. Seven curated beauty journeys.
				</h2>
				<p>
					كل باكج يبدأ من لحظة أو نتيجة محددة، ويجمع مجموعة مختارة من منتجات
					العناية والميكاب التي تتكامل أدوارها ضمن Beauty Journey واحدة، بدل
					الاختيار العشوائي من أقسام المنتجات.
				</p>
			</header>
			<div className="grid grid-2">
				{JOURNEY_PACKAGES.map((journey, index) => (
					<article
						className={`card ${index % 3 === 0 ? "care" : index % 3 === 1 ? "express" : "journey"}`}
						key={journey.title}
					>
						<span className="label">
							{String(index + 1).padStart(2, "0")} · {journey.context}
						</span>
						<h3 className="mt-3">{journey.title}</h3>
						<p className="mt-2 text-sm text-ruya-muted">{journey.mood}</p>
						<p className="mt-3">{journey.result}</p>
						<div className="mt-5 grid grid-cols-2 gap-2">
							{getVisibleProducts(journey).map((product, productIndex) => (
								<div
									key={`${journey.title}-${productIndex}`}
									className="rounded-xl border border-ruya-line bg-ui-fill/3 p-3"
								>
									<span className="label">
										{product.category} · 0{productIndex + 1}
									</span>
									<p
										className="mt-2 text-sm font-semibold text-ruya-text"
										dir="ltr"
									>
										{product.name}
									</p>
								</div>
							))}
						</div>
					</article>
				))}
			</div>
			{!compact && (
				<div className="highlight mt-5">
					<h4>Flexible by design</h4>
					<p>{JOURNEY_EXPANSION_NOTE}</p>
				</div>
			)}
		</section>
	);
}
