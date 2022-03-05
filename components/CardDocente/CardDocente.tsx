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
		<div className="bg-grey-50 shadow rounded-lg overflow-hidden">
			<div className="flex items-center p-4">
				<span className="inline-block relative aspect-square h-16 rounded-full overflow-hidden mr-4 bg-gray-300">
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
				<div>
					<h2 className="text-2xl text-gray-900 mr-4">{`${docente.nome} ${docente.cognome}`}</h2>
					<a
						href={`mailto:${docente.email}`}
						target="_blank"
						rel="noreferrer"
						className="text-sm text-accent-600"
					>
						{docente.email}
					</a>
				</div>
			</div>
			<div className="p-4 text-gray-900 bg-gray-100">
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
						<span className="text-gray-500">Nessun corso seguito</span>
					)}
				</div>
			</div>
		</div>
	);
};
