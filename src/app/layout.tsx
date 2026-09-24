import LoadingScreen from "@/components/LoadingScreen";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
	variable: "--font-arabic",
	subsets: ["arabic"],
	weight: ["400", "500", "700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
	variable: "--font-english",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
	title: "Beauty Brand Strategy",
	description: "An intent-centric beauty ecosystem.",
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			lang="ar"
			dir="rtl"
			className={`${tajawal.variable} ${plusJakarta.variable}`}
		>
			<body>
				<LoadingScreen />
				<Sidebar />
				<main className="site-main">{children}</main>
			</body>
		</html>
	);
}
