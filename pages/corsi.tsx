import Head from "next/head";
import useSWR, { useSWRConfig } from "swr";

const Corsi = ({ fallback }) => {
	const { fetcher } = useSWRConfig();
	const { data } = useSWR("/api/corsi", fetcher);

	return (
		<div className="min-h-screen bg-grey-50 font-sans">
			<Head>
				<title>Corsi | UniOrari</title>
				<meta name="description" content="Orari delle lezioni" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link
					rel="mask-icon"
					href="/safari-pinned-tab.svg"
					color="#5bbad5"
				/>
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
			</Head>
			<section className="flex justify-center py-4">
				<div className="w-full max-w-7xl m-4 grid grid-cols-2 gap-14">
					{data?.corsi.map((corso, idx) => (
						<Corso key={idx} corso={corso} />
					))}
				</div>
			</section>
		</div>
	);
};

const Corso = ({ corso }) => {
	return (
		<div>
			<div className="min-w-60 h-min bg-white shadow rounded-lg p-4">
				<h2 className="text-headline-m text-on-surface-he mb-2">
					{corso.nome}
				</h2>
				<span className="text-body-m text-on-surface-me">
					{corso.docenti.length !== 0
						? corso.docenti[0].nome + " " + corso.docenti[0].cognome
						: "-"}{" "}
					·{" "}
					<a
						className="text-accent-600"
						href={
							corso.docenti.length !== 0
								? `mailto:${corso.docenti[0].email}`
								: "#"
						}
						target="_blank"
						rel="noreferrer"
					>
						{corso.docenti.length !== 0 ? corso.docenti[0].email : "-"}
					</a>
				</span>
				<div className="mt-8">
					<span className="text-label-l font-medium text-on-surface-he">
						Orario
					</span>
					<table className="w-full mt-2 table-auto overflow-hidden border-separate border-spacing-0 border border-primary-900 rounded-lg">
						<thead className="text-left bg-primary-50 text-primary-900">
							<tr>
								<th className="py-1 px-2 border-r border-b border-primary-900 font-normal">
									Giorno
								</th>
								<th className="py-1 px-2 border-r border-b border-primary-900 font-normal">
									Ora
								</th>
								<th className="py-1 px-2 border-b border-primary-900 font-normal">
									Aula
								</th>
							</tr>
						</thead>
						<tbody className="align-top text-on-surface-he">
							{corso.gruppi.length !== 0 &&
								corso.gruppi.map((gruppo) => {
									return gruppo.lezioni.length !== 0 ? (
										gruppo.lezioni.map((lezione, idx) => (
											<Lezione
												key={idx}
												lezione={lezione}
												last={
													idx === gruppo.lezioni.length - 1
														? true
														: false
												}
											/>
										))
									) : (
										<Lezione lezione={null} last />
									);
								})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

const Lezione = ({ lezione, last = false }) => {
	return (
		<tr>
			<td
				className={`py-3 px-2 border-r ${
					!last && "border-b"
				} border-grey-300`}
			>
				{lezione ? days[lezione.giorno] : "-"}
			</td>
			<td
				className={`py-3 px-2 border-r ${
					!last && "border-b"
				} border-grey-300`}
			>
				{lezione ? lezione.inizio + " - " + lezione.fine : "-"}
			</td>
			<td
				className={`py-3 px-2 ${
					!last && "border-b"
				} border-grey-300 flex flex-col`}
			>
				<span>{lezione ? lezione.aule[0].nome : "-"}</span>
				<a
					href={lezione?.aule[0].link || "#"}
					target="_blank"
					rel="noreferrer"
					className="text-xs text-primary-700 mt-1"
				>
					{lezione ? lezione.aule[0].indirizzo : "-"}
				</a>
			</td>
		</tr>
	);
};

const days = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì"];

export default Corsi;
