import { CheckIcon, PlusCircleIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { Button, Chip, ChipGroup } from "..";
import { Insegnamento } from "../../graphql/types/ts";
import { useAuth } from "../../lib/auth";
import { useInsegnamento } from "../../lib/hooks/useInsegnamento";

type CardInsegnamentoProps = {
	data: Insegnamento;
	className?: string;
	handleSave: (idCorso: string) => Promise<boolean>;
};

export const CardInsegnamento = ({
	data,
	className = "",
	handleSave,
}: CardInsegnamentoProps) => {
	const { user } = useAuth();
	const { nome, semestre, corsi } = useInsegnamento(data);

	const [selectedChannel, setSelectedChannel] = useState(0);
	const [lectures, setLectures] = useState(corsi[selectedChannel]?.lezioni);
	const [savingCourse, setSavingCourse] = useState(false);
	const [savedCourses, setSavedCourses] = useState<string[]>(
		user?.corsi.map((corso) => corso.id) || []
	);

	useEffect(() => {
		setLectures(corsi[selectedChannel]?.lezioni);
	}, [selectedChannel]);

	const saveCourse = async () => {
		setSavingCourse(true);

		const idCorso = corsi[selectedChannel].id;
		const success = await handleSave(idCorso);

		if (success)
			setSavedCourses((current) => {
				if (!current.includes(idCorso)) {
					current.push(idCorso);
				}
				console.log(current);
				return current;
			});
		setSavingCourse(false);
	};

	const handleChange = (channelIdx) => {
		setSelectedChannel(channelIdx);
	};

	return (
		<div className={`flex flex-col ${className}`}>
			<div className="min-w-60 h-min bg-grey-50 shadow rounded-lg p-4 flex-1">
				<div className="flex items-start justify-between mb-2">
					<h2 className="text-2xl text-on-surface-he mr-4">
						<span>{nome}</span>
						<span className="text-xl text-on-surface-me">{` - ${semestre}° Semestre`}</span>
					</h2>
					{user &&
						(savedCourses.includes(corsi[selectedChannel]?.id) ? (
							<Button
								as="span"
								color="success"
								variant="text"
								size="small"
								startIcon={
									<CheckIcon className="w-5 h-5" aria-hidden={true} />
								}
							>
								Salvato
							</Button>
						) : (
							<Button
								onClick={saveCourse}
								loading={savingCourse}
								variant="text"
								startIcon={
									<PlusCircleIcon
										className="w-5 h-5"
										aria-hidden={true}
									/>
								}
								size="small"
							>
								Salva
							</Button>
						))}
				</div>
				<div className="text-grey-500 text-sm">
					<span className="mr-2">Responsabile: </span>
					<span>
						{corsi[selectedChannel]?.responsabile.nome +
							" " +
							corsi[selectedChannel]?.responsabile.cognome +
							" · "}
						<a
							className="text-accent-600"
							href={`mailto:${corsi[selectedChannel]?.responsabile.email}`}
							target="_blank"
							rel="noreferrer"
						>
							{corsi[selectedChannel]?.responsabile.email}
						</a>
					</span>
				</div>
				<ChipGroup
					label="Canale"
					emptyMessage="Nessun partizionamento"
					chips={corsi}
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
