import { Dipartimento } from ".";

export type Scuola = {
	// Scalars
	id?: string;
	createdAt?: string;
	updatedAt?: string;
	nome?: string;
	presidente?: string;
	sede?: string;
	sito?: string;
	telefono?: string;
	email?: string;
	// Relations
	dipartimenti?: Dipartimento[];
};
