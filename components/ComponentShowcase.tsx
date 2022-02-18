import jsxToString from "jsx-to-string";
import React, { useEffect, useState } from "react";

import { Code } from ".";

type Props = {
	children: React.ReactNode;
	className?: string;
	language?: string;
	showCode?: boolean;
	ignoreTags?: string[];
};

export const ComponentShowcase = ({
	children,
	className = "",
	language = "html",
	showCode = false,
	ignoreTags = [],
}: Props) => {
	const [code, setCode] = useState(
		React.Children.map(children, (child) =>
			jsxToString(child, {
				shortBooleanSyntax: true,
				ignoreTags,
			})
		).join("\n")
	);

	useEffect(() => {
		setCode(
			React.Children.map(children, (child) =>
				jsxToString(child, {
					shortBooleanSyntax: true,
					ignoreTags,
				})
			).join("\n")
		);
	}, [children]);

	return (
		<>
			<div
				className={`flex gap-2 border border-gray-200 p-4 items-center justify-center rounded-lg ${className}`}
			>
				{children}
			</div>
			{showCode && <Code code={code} language={language} />}
		</>
	);
};
