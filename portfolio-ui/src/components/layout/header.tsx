import { Link as ChakraLink, HStack } from "@chakra-ui/react";

import { FaFish } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
	return (
		<HStack textStyle="4xl" px="10" py="5" bg="lightblue">
			<FaFish />
			<ChakraLink asChild>
				<Link href="/">Home</Link>
			</ChakraLink>
			<ChakraLink asChild>
				<Link href="/about">About</Link>
			</ChakraLink>
		</HStack>
	);
}
