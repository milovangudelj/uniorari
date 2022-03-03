import { Laurea, Scuola } from ".";

export type Dipartimento = {
	// Scalars
	id?: string;
	createdAt?: string;
	updatedAt?: string;
	nome?: string;
	acronimo?: string;
	direttore?: string;
	sede?: string;
	sito?: string;
	telefono?: string;
	email?: string;
	// Relations
	scuola?: Scuola;
	lauree?: Laurea[];
};
