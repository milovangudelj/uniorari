import { Aula, Corso, Docente } from ".";

export type Lezione = {
	// Scalars
	id?: string;
	createdAt?: string;
	updatedAt?: string;
	giorno?: number;
	inizio?: string;
	fine?: string;
	durata?: number;
	// Relations
	corso?: Corso[];
	docenti?: Docente[];
	aule?: Aula;
};
