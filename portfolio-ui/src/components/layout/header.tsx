import { Link as ChakraLink, HStack } from "@chakra-ui/react";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
	return (
		<HStack>
			<Image
				className="dark:invert"
				src="/next.svg"
				alt="Next.js logo"
				width={180}
				height={38}
				priority
			/>
			<ChakraLink asChild>
				<Link href="/">Home</Link>
			</ChakraLink>
			<ChakraLink>
				<Link href="/projects">Projects</Link>
			</ChakraLink>
		</HStack>
	);
}
