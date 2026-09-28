import LoadingScreen from "@/components/LoadingScreen";
import Sidebar from "@/components/Sidebar";
import { BRAND } from "@/config/brand";
import { brandFontVariables } from "@/config/fonts";
import type { Metadata } from "next";
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

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="ar" dir="rtl" className={brandFontVariables}>
			<body>
				<LoadingScreen />

				<Sidebar />

				<main className="site-main">{children}</main>
			</body>
		</html>
	);
}
