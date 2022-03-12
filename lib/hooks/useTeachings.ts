import { useEffect, useState } from "react";
import useSWR from "swr";
import { Insegnamento } from "../../graphql/types/ts";

const API = "/api/insegnamenti";

interface TeachingsData {
	teachings: Insegnamento[];
	isLoading: boolean;
	isError: boolean;
	error: Error;
}

export const useTeachings = (): TeachingsData => {
	const { data, error } = useSWR(API);
	const [teachings, setTeachings] = useState(data?.insegnamenti || []);

	useEffect(() => {
		setTeachings(data?.insegnamenti || []);
	}, [data]);

	return {
		teachings,
		isLoading: !data && !error,
		isError: error ? true : false,
		error: error,
	};
};
