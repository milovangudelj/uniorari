import { useEffect, useState } from "react";
import { Insegnamento } from "../../graphql/types/ts";

export const useInsegnamento = (data: Insegnamento) => {
	const [insegnamento, setInsegnamento] = useState(data);

	// Scalars
	const [id, setId] = useState(insegnamento.id);
	const [createdAt, setCreatedAt] = useState(insegnamento.createdAt);
	const [updatedAt, setUpdatedAt] = useState(insegnamento.updatedAt);
	const [nome, setNome] = useState(insegnamento.nome);
	const [obbligatorio, setObbligatorio] = useState(insegnamento.obbligatorio);
	const [cfu, setCfu] = useState(insegnamento.cfu);
	const [adc, setAdc] = useState(insegnamento.adc);
	const [semestre, setSemestre] = useState(insegnamento.semestre);
	const [lingua, setLingua] = useState(insegnamento.lingua);
	const [curriculum, setCurriculum] = useState(insegnamento.curriculum);
	// Relations
	const [lauree, setLauree] = useState(insegnamento.lauree);
	const [corsi, setCorsi] = useState(insegnamento.corsi);

	useEffect(() => {
		setId(insegnamento.id);
		setCreatedAt(insegnamento.createdAt);
		setUpdatedAt(insegnamento.updatedAt);
		setNome(insegnamento.nome);
		setObbligatorio(insegnamento.obbligatorio);
		setCfu(insegnamento.cfu);
		setAdc(insegnamento.adc);
		setSemestre(insegnamento.semestre);
		setLingua(insegnamento.lingua);
		setCurriculum(insegnamento.curriculum);
		setLauree(insegnamento.lauree);
		setCorsi(insegnamento.corsi);
	}, [insegnamento]);

	return {
		setInsegnamento,
		id,
		createdAt,
		updatedAt,
		nome,
		obbligatorio,
		cfu,
		adc,
		semestre,
		lingua,
		curriculum,
		lauree,
		corsi,
	};
};
