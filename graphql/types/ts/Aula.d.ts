import { Lezione } from ".";

export type Aula = {
	// Scalars
	id?: string;
	createdAt?: string;
	updatedAt?: string;
	nome?: string;
	indirizzo?: string;
	link?: string;
	// Relations
	lezioni?: Lezione[];
};
