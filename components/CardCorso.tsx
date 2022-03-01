import { PlusCircleIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { Button, Chip, ChipGroup } from ".";

export const CardCorso = ({ data, className = "" }) => {
	const [insegnamento, setInsegnamento] = useState(data);
	const [corsi, setCorsi] = useState(data.corsi);
	const [selectedChannel, setSelectedChannel] = useState(0);
	const [lectures, setLectures] = useState(
		data.corsi[selectedChannel]?.lezioni
	);

	// useEffect(() => {
	// 	console.log(corsi);
	// }, []);

	useEffect(() => {
		setLectures(data.corsi[selectedChannel]?.lezioni);
	}, [selectedChannel]);

	const handleSave = () => {
		console.log("Saving course to user");
	};

	const handleChange = (channelIdx) => {
		setSelectedChannel(channelIdx);
	};

	return (
		<div className={`flex flex-col ${className}`}>
			<div className="min-w-60 h-min bg-grey-50 shadow rounded-lg p-4 flex-1">
				<div className="flex items-start justify-between mb-2">
					<h2 className="text-headline-m text-on-surface-he mr-4">
						<span>{insegnamento.nome}</span>
						<span className="text-xl text-on-surface-me">{` - ${insegnamento.semestre}° Semestre`}</span>
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
				<div className="text-grey-500 text-sm">
					<span className="mr-2">Responsabile: </span>
					<span>
						{insegnamento.corsi[selectedChannel]?.responsabile.nome +
							" " +
							insegnamento.corsi[selectedChannel]?.responsabile.cognome +
							" · "}
						<a
							className="text-accent-600"
							href={`mailto:${insegnamento.corsi[selectedChannel]?.responsabile.email}`}
							target="_blank"
							rel="noreferrer"
						>
							{insegnamento.corsi[selectedChannel]?.responsabile.email}
						</a>
					</span>
				</div>
				<ChipGroup
					label="Canale"
					emptyMessage="Nessun partizionamento"
					chips={insegnamento.corsi}
					onChange={handleChange}
				/>
				<div className="mt-8">
					<span className="text-label-l font-medium text-on-surface-he">
						Orario
					</span>
					<table className="w-full mt-2 table-fixed overflow-hidden border-separate border-spacing-0 border border-primary-900 rounded-lg">
						<thead className="text-left bg-primary-50 text-primary-900">
							<tr>
								<th className="py-1 px-2 border-r border-b w-1/5 border-primary-900 font-normal">
									Giorno
								</th>
								<th className="py-1 px-2 border-r border-b w-1/5 border-primary-900 font-normal">
									Ora
								</th>
								<th className="py-1 px-2 border-b border-primary-900 font-normal">
									Aula
								</th>
							</tr>
						</thead>
						<tbody className="align-top text-on-surface-he">
							{lectures?.length !== 0 ? (
								lectures?.map((lezione, idx) => (
									<Lezione
										key={idx}
										lezione={lezione}
										last={idx === lectures.length - 1 ? true : false}
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
