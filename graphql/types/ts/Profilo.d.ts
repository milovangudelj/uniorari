import { Corso } from ".";

export type Profilo = {
	// Scalars
	id?: string;
	createdAt?: string;
	updatedAt?: string;
	nome?: string;
	email?: string;
	username?: string;
	immagine?: string;
	// Relations
	corsi?: Corso[];
};
