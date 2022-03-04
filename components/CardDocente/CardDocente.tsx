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
		<div className="bg-grey-50 shadow rounded-lg overflow-hidden flex">
			<span className="inline-block relative aspect-[3/4] h-full bg-gray-300">
				<Image
					src={
						docente.immagine || "/assets/images/profile-placeholder.webp"
					}
					alt={`${docente.nome} ${docente.cognome}`}
					layout="fill"
					objectFit="cover"
				/>
			</span>
			<div className="p-8">
				<div className="mb-8">
					<h2 className="text-2xl text-on-surface-he mr-4">{`${docente.nome} ${docente.cognome}`}</h2>
					<span className="text-sm text-accent-600">{docente.email}</span>
				</div>
				<div>
					<span className="text-sm font-medium">Corsi</span>
					<div className="mt-2">
						{docente.corsi.map((corso) => {
							return (
								<Chip key={corso.id} size="normal">
									{corso.insegnamento.nome}
								</Chip>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
