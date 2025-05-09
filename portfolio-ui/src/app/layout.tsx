import "./globals.css";

import { Container } from "@chakra-ui/react";
import Header from "@/components/layout/header";
import type { Metadata } from "next";
import { Provider } from "./provider";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html suppressHydrationWarning lang="en">
			<body>
				<Provider>
					<Header />
					<Container minH="2xl">{children}</Container>
				</Provider>
			</body>
		</html>
	);
}
