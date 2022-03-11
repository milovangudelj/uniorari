import React, { useEffect, useState } from "react";

import jsxToString from "../lib/jsxToString";
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
				singleLineProps: true,
				ignoreTags,
			})
		).join("\n")
	);

	useEffect(() => {
		setCode(
			React.Children.map(children, (child) =>
				jsxToString(child, {
					shortBooleanSyntax: true,
					singleLineProps: true,
					ignoreTags,
				})
			).join("\n")
		);
	}, [children, ignoreTags]);

	return (
		<>
			<div
				className={`flex gap-2 border border-grey-200 dark:border-grey-800 p-4 items-center justify-center rounded-lg ${className}`}
			>
				{children}
			</div>
			{showCode && <Code code={code} language={language} />}
		</>
	);
};
