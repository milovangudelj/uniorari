import Head from "next/head";
import Link from "next/link";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

import { supabase } from "../../lib/supabase";
import { useAuth } from "../../lib/auth";
import { useSavedCourses } from "../../lib/hooks";
import { CardCorso, CardInsegnamentoSkeleton, Layout } from "../../components";

export const getServerSideProps = async (ctx) => {
	const refreshToken = ctx.req.cookies["uo-refresh-token"];
	const accessToken = ctx.req.cookies["uo-access-token"];

	if (refreshToken && accessToken) {
		await supabase.auth.setSession({
			refresh_token: refreshToken,
			access_token: accessToken,
		});
	}

	const {
		data: { user },
		error,
	} = await supabase.auth.getUser(accessToken);

	if (error) console.log(error);

	if (!user) {
		return {
			redirect: {
				destination: "/accedi",
				permanent: false,
			},
		};
	}

	return {
		props: {
			profileId: user.id,
		},
	};
};

const Salvati = () => {
	const { user } = useAuth();
	const { savedCourses, isLoading, isError, removeCourse } = useSavedCourses(
		user?.id
	);

	const handleRemove = async (idCorso: string): Promise<boolean> => {
		return await removeCourse(idCorso);
	};

	return (
		<Layout>
			<Head>
				<title>I miei corsi – UniOrari</title>
				<meta name="description" content="Orari delle lezioni" />
			</Head>
			<h1 className="text-4xl font-bold mb-6">I miei corsi</h1>
			<section className="">
				{isError && (
					<span className="inline-flex gap-3 items-center px-4 py-2 h-min bg-red-50 text-red-900 border border-red-900 rounded-lg dark:bg-red-500/10 dark:text-red-400 dark:border-red-400">
						<span>
							<ExclamationTriangleIcon className="h-5 w-5" />
						</span>
						<span>
							C&apos;è stato un errore durante il recupero dei tuoi
							corsi. Riprova più tardi.
						</span>
					</span>
				)}
				<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
					{isLoading && (
						<>
							<CardInsegnamentoSkeleton />
							<CardInsegnamentoSkeleton />
							<CardInsegnamentoSkeleton />
						</>
					)}
					{savedCourses &&
						savedCourses.map((course) => {
							return (
								<CardCorso
									key={course.id}
									data={course}
									removable
									handleRemove={handleRemove}
								/>
							);
						})}
					{savedCourses?.length === 0 && (
						<span className="text-on-surface-me dark:text-on-primary-me">
							Non hai ancora salvato nessun corso. Puoi farlo dalla
							pagina dei{" "}
							<Link
								href="/corsi"
								className="text-primary-500 dark:text-primary-400"
							>
								corsi
							</Link>
							.
						</span>
					)}
				</div>
			</section>
		</Layout>
	);
};

export default Salvati;
