"use client";

import { AbsoluteCenter, Box, Heading } from "@chakra-ui/react";

import ButtonPanel from "@/features/calculator/components/ButtonPanel";
import Display from "@/features/calculator/components/Display";
import { Expression } from "@/features/calculator/types/expression";
import { useState } from "react";

export default function Calculator() {
	const [expression, setExpression] = useState<Expression>({ expression: "" });
	const [error, setError] = useState<string>("");

	return (
		<>
			<Heading size="3xl">Calculator</Heading>
			<AbsoluteCenter>
				<Box p="5" borderWidth="1px" rounded="md" minW="350px">
					<Display
						expression={expression}
						setExpression={setExpression}
						error={error}
						setError={setError}
					/>
					<ButtonPanel
						expression={expression}
						setExpression={setExpression}
						error={error}
						setError={setError}
					/>
				</Box>
			</AbsoluteCenter>
		</>
	);
}
