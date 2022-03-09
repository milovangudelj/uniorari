export const Lezione = ({ lezione, last = false }) => {
	return (
		<tr>
			<td
				className={`py-3 px-2 border-r ${
					!last && "border-b"
				} border-grey-300 dark:border-grey-600`}
			>
				{lezione ? days[lezione.giorno] : "-"}
			</td>
			<td
				className={`py-3 px-2 border-r ${
					!last && "border-b"
				} border-grey-300 dark:border-grey-600`}
			>
				{lezione ? lezione.inizio + " - " + lezione.fine : "-"}
			</td>
			<td
				className={`py-3 px-2 ${
					!last && "border-b"
				} border-grey-300 dark:border-grey-600 flex flex-col`}
			>
				<span>{lezione ? lezione.aule[0].nome : "-"}</span>
				<a
					href={lezione?.aule[0].link || "#"}
					target="_blank"
					rel="noreferrer"
					className="text-xs text-primary-700 dark:text-primary-300 mt-1"
				>
					{lezione ? lezione.aule[0].indirizzo : "-"}
				</a>
			</td>
		</tr>
	);
};

const days = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì"];
