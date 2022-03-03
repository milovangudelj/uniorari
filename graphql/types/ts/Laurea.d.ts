import { Dipartimento, Insegnamento } from ".";

export type Laurea = {
	// Scalars
	id?: string;
	createdAt?: string;
	updatedAt?: string;
	codice?: string;
	nome?: string;
	presidente?: string;
	email?: string;
	// Relations
	dipartimento?: Dipartimento;
	insegnamenti?: Insegnamento[];
};
