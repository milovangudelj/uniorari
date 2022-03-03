import { Corso } from ".";

export type Canale = {
	// Scalars
	id?: string;
	createdAt?: string;
	updatedAt?: string;
	nome?: string;
	// Relations
	corsi?: Corso[];
};
