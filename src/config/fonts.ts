import { Bodoni_Moda, IBM_Plex_Sans_Arabic, Manrope } from "next/font/google";

export const displayFont = Bodoni_Moda({
	variable: "--font-ruya-display",
	subsets: ["latin"],
});

export const englishFont = Manrope({
	variable: "--font-ruya-english",
	subsets: ["latin"],
});

export const arabicFont = IBM_Plex_Sans_Arabic({
	variable: "--font-ruya-arabic",
	subsets: ["arabic"],
	weight: ["400", "500", "600", "700"],
});

export const brandFontVariables = [
	displayFont.variable,
	englishFont.variable,
	arabicFont.variable,
].join(" ");
