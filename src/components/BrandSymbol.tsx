import { BRAND } from "@/config/brand";
import Image from "next/image";

type BrandSymbolProps = {
	className?: string;
	priority?: boolean;
};

export default function BrandSymbol({
	className = "",
	priority = false,
}: BrandSymbolProps) {
	return (
		<Image
			src={BRAND.logoSymbol}
			alt={`${BRAND.name} brand symbol`}
			width={1254}
			height={1254}
			className={`object-contain ${className}`}
			priority={priority}
		/>
	);
}
