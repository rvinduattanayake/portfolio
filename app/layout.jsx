import "./globals.css";
import { Poppins, Jost } from "next/font/google";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { Analytics } from "@vercel/analytics/react";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	style: ["normal", "italic"],
	display: "swap",
	variable: "--font-poppins",
});

const jost = Jost({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
	variable: "--font-jost",
});

export const metadata = {
	metadataBase: new URL("https://www.alvalens.my.id"),
	title: "Ravindu | Portfolio",

	description:
		"Ravindu, a Computer Science and Software Engineering undergraduate student with a strong interest in full-stack web development.",

	author: "Ravindu Attanayake",
	siteUrl: "https://www.alvalens.my.id",
	applicationName: "Ravindu",

	keywords: [
		"ravindu",
		"ravindu attanayake",
		"software engineering student",
		"computer science student",
		"full stack developer",
	],

	openGraph: {
		type: "website",
		url: "https://www.alvalens.my.id",
		title: "Ravindu | Portfolio",
		siteName: "Ravindu | Portfolio",
		description: "My name is Ravindu. This is my portfolio website.",
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Ravindu Portfolio",
				width: 1200,
				height: 630,
			},
		],
	},
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Ravindu Attanayake",
	url: "https://www.alvalens.my.id",
	jobTitle: "Computer Science & Software Engineering Student",
	sameAs: [
		"https://github.com/rvinduattanayake",
		"https://www.linkedin.com/in/ravindu02",
	],
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${poppins.variable} ${jost.variable}`}>
			<body>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				<Analytics />
			</body>
		</html>
	);
}
