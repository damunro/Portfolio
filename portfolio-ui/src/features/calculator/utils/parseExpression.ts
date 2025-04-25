import { Expression, expressionSchema } from "../types/expression";

export default function parseExpression(expression: Expression) {
	return expressionSchema.safeParse(expression);
}
export function parseError(expression: Expression) {
	const res = parseExpression(expression);
	console.log(res);
	return res.error ? res.error.issues[0].message : "";
}
