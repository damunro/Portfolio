import { Field, Input } from "@chakra-ui/react";

import { Props } from "../types/expression";
import { parseError } from "../utils/parseExpression";

export default function Display({
	expression,
	setExpression,
	error,
	setError,
}: Readonly<Props>) {
	const handleBlur = () => {
		setError(parseError(expression));
	};
	return (
		<Field.Root invalid={!!error}>
			<Input
				placeholder="Enter a mathematical expression..."
				onBlur={handleBlur}
				onChange={(e) => setExpression({ expression: e.target.value })}
			/>
			<Field.ErrorText>{error}</Field.ErrorText>
		</Field.Root>
	);
}
