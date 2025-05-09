"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import {
	ColorModeProvider,
	type ColorModeProviderProps,
} from "../components/ui/color-mode";

export function Provider(props: Readonly<ColorModeProviderProps>) {
	return (
		<ChakraProvider value={defaultSystem}>
			<ColorModeProvider {...props} />
		</ChakraProvider>
	);
}
