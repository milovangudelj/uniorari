import React, { useEffect } from "react";
import Prism from "prismjs";

export const Code = ({ code, language }) => {
	useEffect(() => {
		Prism.highlightAll();
	}, [code, language]);

	return (
		<div>
			<pre className="rounded-lg">
				<code className={`language-${language}`}>{code}</code>
			</pre>
		</div>
	);
};
