import { Card, Link as ChakraLink } from "@chakra-ui/react";

import Link from "next/link";

export default function Projects() {
	const projects = [
		{
			name: "calculator",
			desc: "Simple calculator app",
			image: "",
			link: "/calculator",
		},
	];

	return (
		<div>
			{projects.map((project) => (
				<Card.Root width="420px" key="name">
					<Card.Body gap="2">
						<Card.Title>{project.name}</Card.Title>
						<Card.Description>{project.desc}</Card.Description>
						<ChakraLink asChild>
							<Link href={project.link}>Go to project</Link>
						</ChakraLink>
					</Card.Body>
				</Card.Root>
			))}
		</div>
	);
}
