import { Corso, Lezione } from ".";

export type Docente = {
	// Scalars
	id?: string;
	createdAt?: string;
	updatedAt?: string;
	nome?: string;
	cognome?: string;
	email?: string;
	immagine?: string;
	// Relations
	corsi?: Corso[];
	lezioni?: Lezione[];
};
