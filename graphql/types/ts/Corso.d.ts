import { Canale, Docente, Insegnamento, Lezione, Profilo } from ".";

export type Corso = {
	// Scalars
	id?: string;
	createdAt?: string;
	updatedAt?: string;
	nome?: string;
	moodle?: string;
	// Relations
	insegnamento?: Insegnamento;
	responsabile?: Docente;
	docenti?: Docente[];
	canale?: Canale;
	lezioni?: Lezione[];
	studenti?: Profilo[];
};
