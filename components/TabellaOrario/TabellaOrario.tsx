import { useEffect, useState } from "react";
import { Lezione } from ".";

export const TabellaOrario = ({ data, ...props }) => {
	const [lezioni, setLezioni] = useState(data || []);

	useEffect(() => {
		setLezioni(data || []);
	}, [data]);

	return (
		<table className="w-full mt-2 table-fixed overflow-hidden border-separate border-spacing-0 border border-primary-900 dark:border-primary-400 rounded-lg">
			<thead className="text-left bg-primary-50 dark:bg-primary-900 text-primary-900 dark:text-primary-50">
				<tr>
					<th className="py-1 px-2 border-r border-b w-1/5 border-primary-900 dark:border-primary-400 font-normal">
						Giorno
					</th>
					<th className="py-1 px-2 border-r border-b w-1/5 border-primary-900 dark:border-primary-400 font-normal">
						Ora
					</th>
					<th className="py-1 px-2 border-b border-primary-900 dark:border-primary-400 font-normal">
						Aula
					</th>
				</tr>
			</thead>
			<tbody className="align-top text-on-surface-he dark:text-on-primary-he">
				{lezioni.length !== 0 ? (
					lezioni.map((lezione, idx) => (
						<Lezione
							key={idx}
							lezione={lezione}
							last={idx === lezioni.length - 1 ? true : false}
						/>
					))
				) : (
					<Lezione lezione={null} last />
				)}
			</tbody>
		</table>
	);
};
