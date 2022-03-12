import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import useSWR from "swr";

import { Corso } from "../../graphql/types/ts";
import {
	addCourseToProfile,
	removeCourseFromProfile,
} from "../../graphql/queries";

const API = "/api/corsi-salvati";

interface UseSCoursesResponse {
	savedCourses: Corso[];
	savedCoursesIds: string[];
	saveCourse: (string) => Promise<boolean>;
	removeCourse: (string) => Promise<boolean>;
	isLoading: boolean;
	isError: boolean;
	error: Error;
}

export const useSavedCourses = (profileId: string): UseSCoursesResponse => {
	const { data, error } = useSWR(() =>
		profileId ? `${API}?idProfilo=${profileId}` : null
	);
	const [courses, setCourses] = useState(data?.profilo?.corsi || []);
	const [coursesIds, setCoursesIds] = useState(
		data?.profilo?.corsi?.map((course) => course.id) || []
	);

	useEffect(() => {
		setCourses(data?.profilo?.corsi || []);
		setCoursesIds(data?.profilo?.corsi?.map((course) => course.id) || []);
	}, [data]);

	// Save course mutation hook
	const [saveCourseToProfile, saveMutationInfo] =
		useMutation(addCourseToProfile);

	// Un-save course mutation hook
	const [unsaveCourseFromProfile, unsaveMutationInfo] = useMutation(
		removeCourseFromProfile
	);

	/**
	 * Save course mutation helper. Saves the course and updates state immediately without waiting for revalidation.
	 */
	const saveCourse = async (courseId: string) => {
		await saveCourseToProfile({
			variables: { idProfilo: profileId, idCorso: courseId },
		});

		const success = saveMutationInfo.error ? false : true;

		if (success) setCoursesIds((current) => [...current, courseId]);

		return success;
	};

	/**
	 * Un-save course mutation helper. Removes the course and updates state immediately without waiting for revalidation.
	 */
	const removeCourse = async (courseId: string) => {
		await unsaveCourseFromProfile({
			variables: { idProfilo: profileId, idCorso: courseId },
		});

		const success = unsaveMutationInfo.error ? false : true;

		if (success)
			setCoursesIds((current) => courses.filter((id) => id !== courseId));

		return success;
	};

	return {
		savedCourses: courses,
		savedCoursesIds: coursesIds,
		saveCourse,
		removeCourse,
		isLoading: !data && !error,
		isError: error ? true : false,
		error: error,
	};
};
