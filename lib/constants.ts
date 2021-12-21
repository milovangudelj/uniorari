export const NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
export const NEXT_PUBLIC_SUPABASE_ANON_KEY =
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const DEFAULT_AVATARS_BUCKET = "avatars";

export type Profile = {
	id: string;
	createdAt?: string;
	updatedAt?: string;
	name: string;
	email: string;
	username: string;
	image?: string;
	corsi?: string[];
};
