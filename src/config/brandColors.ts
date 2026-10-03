export const BRAND_COLORS = {
	deepAubergine: "#24171F",
	plumBrown: "#3A2532",
	dustyRose: "#B86F7D",
	mutedMauve: "#B9A0BF",
	softNude: "#E8D5CC",
	warmIvory: "#F4EFEA",
	charcoalPlum: "#181217",
	warmRoseGold: "#C98F7A",
} as const;

const primary = `linear-gradient(
	135deg,
	${BRAND_COLORS.warmRoseGold} 0%,
	${BRAND_COLORS.softNude} 24%,
	${BRAND_COLORS.dustyRose} 48%,
	${BRAND_COLORS.mutedMauve} 72%,
	${BRAND_COLORS.plumBrown} 100%
)`;

export const BRAND_GRADIENTS = {
	primary,

	symbol: primary,
	nameEnglish: primary,
	nameArabic: primary,
	slogan: primary,

	heading: `linear-gradient(
		115deg,
		${BRAND_COLORS.warmIvory} 0%,
		${BRAND_COLORS.softNude} 34%,
		${BRAND_COLORS.warmRoseGold} 58%,
		${BRAND_COLORS.dustyRose} 78%,
		${BRAND_COLORS.mutedMauve} 100%
	)`,
} as const;
