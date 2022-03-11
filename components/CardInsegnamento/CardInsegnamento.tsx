import { CheckIcon, PlusCircleIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";

import { Button, ChipGroup, Lezione, TabellaOrario } from "..";
import { Insegnamento } from "../../graphql/types/ts";
import { useAuth } from "../../lib/auth";
import { useInsegnamento } from "../../lib/hooks/useInsegnamento";

type CardInsegnamentoProps = {
	data: Insegnamento;
	className?: string;
	handleSave?: (idCorso: string) => Promise<boolean>;
};

export const CardInsegnamento = ({
	data,
	className = "",
	handleSave = async (idCorso) => {
		console.log(idCorso);
		return false;
	},
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
		setSavedCourses(user?.corsi.map((corso) => corso.id));
	}, [corsi, selectedChannel]);

	const saveCourse = async () => {
		setSavingCourse(true);

		const idCorso = corsi[selectedChannel].id;
		const success = await handleSave(idCorso);

		if (success)
			setSavedCourses((current) => {
				if (!current.includes(idCorso)) {
					current.push(idCorso);
				}

				return current;
			});
		setSavingCourse(false);
	};

	const handleChange = (channelIdx) => {
		setSelectedChannel(channelIdx);
	};

	return (
		<div className={`flex flex-col ${className}`}>
			<div className="min-w-60 h-min bg-grey-50 dark:bg-grey-800 shadow rounded-lg p-4 flex-1">
				<div className="flex items-start justify-between mb-2">
					<h2 className="text-2xl text-on-surface-he dark:text-on-primary-he mr-4">
						<span>{nome}</span>
						<span className="text-xl text-on-surface-me dark:text-on-primary-me">{` - ${semestre}° Semestre`}</span>
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
				<div className="text-on-surface-me dark:text-on-primary-me text-sm">
					<span className="mr-2">Responsabile: </span>
					<span>
						{corsi[selectedChannel]?.responsabile.nome +
							" " +
							corsi[selectedChannel]?.responsabile.cognome +
							" · "}
						<a
							className="text-accent-600 dark:text-accent-500"
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
					<span className="text-label-l font-medium text-on-surface-he dark:text-on-primary-he">
						Orario
					</span>
					<TabellaOrario data={lectures} />
				</div>
			</div>
		</div>
	);
};
