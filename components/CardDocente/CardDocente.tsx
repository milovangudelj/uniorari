import { useEffect, useState } from "react";
import Image from "next/image";

import { Chip } from "..";
import { Docente } from "../../graphql/types/ts";

export const CardDocente = ({ data, ...props }) => {
	const [docente, setDocente] = useState<Docente>(data);

	useEffect(() => {
		setDocente(data);
	}, [data]);

	return (
		<div className="bg-grey-50 dark:bg-grey-700 shadow rounded-lg overflow-hidden">
			<div className="flex items-center p-4 gap-4">
				<span className="block relative w-16 aspect-square rounded-full overflow-hidden bg-grey-300 dark:bg-grey-700">
					<Image
						src={
							docente.immagine ||
							"/assets/images/profile-placeholder.webp"
						}
						alt={`${docente.nome} ${docente.cognome}`}
						layout="fill"
						objectFit="cover"
					/>
				</span>
				<div className="w-min md:w-max">
					<h2 className="text-2xl text-on-surface-he dark:text-on-primary-he">{`${docente.nome} ${docente.cognome}`}</h2>
					<a
						href={`mailto:${docente.email}`}
						target="_blank"
						rel="noreferrer"
						className="text-sm text-accent-600 dark:text-accent-500"
					>
						{docente.email}
					</a>
				</div>
			</div>
			<div className="p-4 text-on-surface-he dark:text-on-primary-he h-full bg-grey-100 dark:bg-grey-800">
				<span className="text-sm font-medium">Corsi</span>
				<div className="mt-2 flex gap-1">
					{docente.corsi.length !== 0 ? (
						docente.corsi.map((corso) => {
							return (
								<Chip key={corso.id} size="small">
									{corso.nome}
								</Chip>
							);
						})
					) : (
						<span className="text-on-surface-me dark:text-on-primary-me">
							Nessun corso seguito
						</span>
					)}
				</div>
			</div>
		</div>
	);
};
