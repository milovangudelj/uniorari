import { Placeholder } from "..";

export const CardInsegnamentoSkeleton = () => {
	return (
		<div className={`flex flex-col`}>
			<div className="min-w-60 h-min bg-grey-50 dark:bg-grey-800 shadow rounded-lg p-4 flex-1">
				<div className="flex items-start justify-between mb-2">
					<h2 className="text-2xl text-on-surface-he dark:text-on-primary-he mr-4">
						<Placeholder size="2xl" className="w-48" />
						<span className="text-xl text-on-surface-me dark:text-on-primary-me">
							{" - "}
						</span>
						<Placeholder size="xl" />
					</h2>
				</div>
				<div className="text-on-surface-me dark:text-on-primary-me text-sm">
					<span className="mr-2">Responsabile: </span>
					<span>
						<Placeholder size="sm" />
						<span>{" · "}</span>
						<Placeholder size="sm" />
					</span>
				</div>
				<div className="text-on-surface-me dark:text-on-primary-me text-sm">
					<span className="mr-2">Canali: </span>
					<Placeholder size="sm" />
				</div>
				<div className="mt-8">
					<span className="text-label-l font-medium text-on-surface-he dark:text-on-primary-he">
						Orario
					</span>
					<table className="w-full mt-2 table-fixed overflow-hidden border-separate border-spacing-0 border border-primary-900 dark:border-primary-400 rounded-lg">
						<thead className="text-left bg-primary-50 dark:bg-primary-900 text-primary-900 dark:text-primary-50">
							<tr>
								<th className="py-1 px-2 border-r border-b w-1/5 border-primary-900 dark:border-primary-400 font-normal">
									Giorno
								</th>
								<th className="py-1 px-2 border-r border-b w-1/5 border-primary-900 dark:border-primary-400 font-normal">
									Ora
								</th>
								<th className="py-1 px-2 border-b border-primary-900 dark:border-primary-400 font-normal">
									Aula
								</th>
							</tr>
						</thead>
						<tbody className="align-top text-on-surface-he dark:text-on-primary-he">
							<tr>
								<td
									className={`py-3 px-2 border-r border-grey-300 dark:border-grey-600`}
								>
									<Placeholder className="w-24" />
								</td>
								<td
									className={`py-3 px-2 border-r border-grey-300 dark:border-grey-600`}
								>
									<Placeholder className="w-24" />
								</td>
								<td
									className={`py-3 px-2 border-grey-300 dark:border-grey-600 flex flex-col`}
								>
									<Placeholder className="w-full" />
									<Placeholder size="xs" className="w-full" />
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};
