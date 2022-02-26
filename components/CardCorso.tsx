import { PlusCircleIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { Button } from ".";

export const CardCorso = ({ data }) => {
	const [corso, setCorso] = useState(data);

	const handleSave = () => {
		console.log("Saving course to user");
	};

	return (
		<div>
			<div className="min-w-60 h-min bg-grey-50 shadow rounded-lg p-4">
				<div className="flex items-center">
					<h2 className="text-headline-m text-on-surface-he mb-2 mr-4">
						{corso.insegnamento.nome}
					</h2>
					<Button
						onClick={handleSave}
						variant="text"
						startIcon={<PlusCircleIcon className="w-5 h-5" />}
						size="small"
					>
						Save
					</Button>
				</div>
				<span className="text-body-m text-on-surface-me">
					{corso.responsabile
						? corso.responsabile.nome + " " + corso.responsabile.cognome
						: "-"}{" "}
					·{" "}
					<a
						className="text-accent-600"
						href={
							corso.responsabile
								? `mailto:${corso.responsabile.email}`
								: "#"
						}
						target="_blank"
						rel="noreferrer"
					>
						{corso.responsabile ? corso.responsabile.email : "-"}
					</a>
				</span>
				<br />
				<span className="text-grey-500 text-sm">
					Canale{" "}
					<span className="text-primary-500">{corso.canale.nome}</span>
				</span>
				<div className="mt-8">
					<span className="text-label-l font-medium text-on-surface-he">
						Orario
					</span>
					<table className="w-full mt-2 table-auto overflow-hidden border-separate border-spacing-0 border border-primary-900 rounded-lg">
						<thead className="text-left bg-primary-50 text-primary-900">
							<tr>
								<th className="py-1 px-2 border-r border-b border-primary-900 font-normal">
									Giorno
								</th>
								<th className="py-1 px-2 border-r border-b border-primary-900 font-normal">
									Ora
								</th>
								<th className="py-1 px-2 border-b border-primary-900 font-normal">
									Aula
								</th>
							</tr>
						</thead>
						<tbody className="align-top text-on-surface-he">
							{corso.responsabile.lezioni.length !== 0 ? (
								corso.responsabile.lezioni.map((lezione, idx) => (
									<Lezione
										key={idx}
										lezione={lezione}
										last={
											idx === corso.responsabile.lezioni.length - 1
												? true
												: false
										}
									/>
								))
							) : (
								<Lezione lezione={null} last />
							)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

const Lezione = ({ lezione, last = false }) => {
	return (
		<tr>
			<td
				className={`py-3 px-2 border-r ${
					!last && "border-b"
				} border-grey-300`}
			>
				{lezione ? days[lezione.giorno] : "-"}
			</td>
			<td
				className={`py-3 px-2 border-r ${
					!last && "border-b"
				} border-grey-300`}
			>
				{lezione ? lezione.inizio + " - " + lezione.fine : "-"}
			</td>
			<td
				className={`py-3 px-2 ${
					!last && "border-b"
				} border-grey-300 flex flex-col`}
			>
				<span>{lezione ? lezione.aule[0].nome : "-"}</span>
				<a
					href={lezione?.aule[0].link || "#"}
					target="_blank"
					rel="noreferrer"
					className="text-xs text-primary-700 mt-1"
				>
					{lezione ? lezione.aule[0].indirizzo : "-"}
				</a>
			</td>
		</tr>
	);
};

const days = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì"];
