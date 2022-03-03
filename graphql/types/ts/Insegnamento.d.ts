import { Corso, Laurea } from ".";

export type Insegnamento = {
	// Scalars
	id?: string;
	createdAt?: string;
	updatedAt?: string;
	nome?: string;
	obbligatorio?: boolean;
	cfu?: number;
	adc?: number;
	semestre?: number;
	lingua?: string;
	curriculum?: string;
	// Relations
	lauree?: Laurea[];
	corsi?: Corso[];
};
