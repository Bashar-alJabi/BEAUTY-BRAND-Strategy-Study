import { BRAND } from "@/config/brand";
import { BRAND_COLORS, BRAND_GRADIENTS } from "@/config/brandColors";
import type { CSSProperties } from "react";

type BrandSymbolProps = {
	className?: string;
	priority?: boolean;
	variant?: "primary" | "light" | "dark" | "rose";
};

export default function BrandSymbol({
	className = "",
	variant = "primary",
}: BrandSymbolProps) {
	const background =
		variant === "light"
			? BRAND_COLORS.warmIvory
			: variant === "dark"
				? BRAND_COLORS.charcoalPlum
				: variant === "rose"
					? BRAND_COLORS.warmRoseGold
					: BRAND_GRADIENTS.symbol;

	const style: CSSProperties = {
		background,

		WebkitMaskImage: `url("${BRAND.logoSymbol}")`,
		maskImage: `url("${BRAND.logoSymbol}")`,

		WebkitMaskRepeat: "no-repeat",
		maskRepeat: "no-repeat",

		WebkitMaskPosition: "center",
		maskPosition: "center",

		WebkitMaskSize: "contain",
		maskSize: "contain",
	};

	return (
		<span
			role="img"
			aria-label={`${BRAND.name} brand symbol`}
			className={`inline-block ${className}`}
			style={style}
		/>
	);
}
