import LoadingScreen from "@/components/LoadingScreen";
import Sidebar from "@/components/Sidebar";
import { BRAND } from "@/config/brand";
import { BRAND_COLORS, BRAND_GRADIENTS } from "@/config/brandColors";
import { brandFontVariables } from "@/config/fonts";
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import "./globals.css";

export const metadata: Metadata = {
	title: `${BRAND.name} — ${BRAND.slogan}`,
	description: `${BRAND.name} is an intent-centric beauty ecosystem.`,

	authors: [
		{
			name: "Bashar AlJabi",
		},
	],

	creator: "Bashar AlJabi",
};

const brandCssVariables = {
	"--brand-deep-aubergine": BRAND_COLORS.deepAubergine,
	"--brand-plum-brown": BRAND_COLORS.plumBrown,
	"--brand-dusty-rose": BRAND_COLORS.dustyRose,
	"--brand-muted-mauve": BRAND_COLORS.mutedMauve,
	"--brand-soft-nude": BRAND_COLORS.softNude,
	"--brand-warm-ivory": BRAND_COLORS.warmIvory,
	"--brand-charcoal-plum": BRAND_COLORS.charcoalPlum,
	"--brand-warm-rose-gold": BRAND_COLORS.warmRoseGold,

	"--brand-gradient-primary": BRAND_GRADIENTS.primary,
	"--brand-gradient-symbol": BRAND_GRADIENTS.symbol,
	"--brand-gradient-name-english": BRAND_GRADIENTS.nameEnglish,
	"--brand-gradient-name-arabic": BRAND_GRADIENTS.nameArabic,
	"--brand-gradient-slogan": BRAND_GRADIENTS.slogan,
	"--brand-gradient-heading": BRAND_GRADIENTS.heading,
} as CSSProperties & Record<`--${string}`, string>;

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			lang="ar"
			dir="rtl"
			className={brandFontVariables}
			style={brandCssVariables}
		>
			<body>
				<LoadingScreen />

				<Sidebar />

				<main className="site-main">{children}</main>
			</body>
		</html>
	);
}
