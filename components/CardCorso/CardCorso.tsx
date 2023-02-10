import { MinusCircleIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { Button, ChipGroup, TabellaOrario } from "..";
import { Corso } from "../../graphql/types/ts";

export const CardCorso = ({ data, removable, handleRemove, ...props }) => {
	const [corso, setCorso] = useState<Corso>(data);
	const [removingCourse, setRemovingCourse] = useState(false);

	useEffect(() => {
		setCorso(data);
	}, [data]);

	const removeCourse = async () => {
		setRemovingCourse(true);

		const success = await handleRemove(corso.id);
	};

	return (
		<div className={`flex flex-col ${props.className}`}>
			<div className="min-w-60 h-min bg-grey-50 dark:bg-grey-800 shadow rounded-lg p-4 flex-1">
				<div className="flex items-start justify-between mb-2">
					<h2 className="text-2xl text-on-surface-he dark:text-on-primary-he mr-4">
						<span>{corso.nome}</span>
						<span className="text-xl text-on-surface-me dark:text-on-ry-me">{` - ${corso.insegnamento.semestre}° Semestre`}</span>
					</h2>
					{removable && (
						<Button
							onClick={removeCourse}
							loading={removingCourse}
							variant="text"
							color="error"
							startIcon={
								<MinusCircleIcon
									className="w-5 h-5"
									aria-hidden={true}
								/>
							}
							size="small"
						>
							Rimuovi
						</Button>
					)}
				</div>
				<div className="text-on-surface-me dark:text-on-primary-me text-sm">
					<span className="mr-2">Responsabile: </span>
					<span>
						{corso.responsabile.nome +
							" " +
							corso.responsabile.cognome +
							" · "}
						<a
							className="text-accent-600 dark:text-accent-500"
							href={`mailto:${corso.responsabile.email}`}
							target="_blank"
							rel="noreferrer"
						>
							{corso.responsabile.email}
						</a>
					</span>
				</div>
				<ChipGroup
					label="Canale"
					emptyMessage="Nessun partizionamento"
					chips={[data]}
				/>
				<div className="mt-8">
					<span className="text-label-l font-medium text-on-surface-he dark:text-on-primary-he">
						Orario
					</span>
					<TabellaOrario data={corso.lezioni} />
				</div>
			</div>
		</div>
	);
};
