import { Dispatch, SetStateAction } from "react";

import { FieldError } from "react-hook-form";
import { z } from "zod";

export const expressionSchema = z.object({
	expression: z
		.string()
		.regex(/^[\d+-.*()]+$/, { message: "Invalid expression characters" })
		.refine(
			(val) => {
				let open = 0;
				for (const char of val) {
					if (char === "(") open++;
					else if (char === ")") open--;
					if (open < 0) return false;
				}
				return true;
			},
			{ message: "parenthesis prematurely closed" }
		)
		.refine(
			(val) => {
				let open = 0;
				for (const char of val) {
					if (char === "(") open++;
					else if (char === ")") open--;
				}
				return open === 0;
			},
			{ message: "parenthesis must be closed" }
		),
});

export type Expression = z.infer<typeof expressionSchema>;
export type Props = {
	expression: Expression;
	setExpression: Dispatch<SetStateAction<Expression>>;
	error: string;
	setError: Dispatch<SetStateAction<string>>;
};
