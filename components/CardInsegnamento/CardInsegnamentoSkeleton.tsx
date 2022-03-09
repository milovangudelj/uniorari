export const CardInsegnamentoSkeleton = () => {
	return (
		<div className={`flex flex-col`}>
			<div className="min-w-60 h-min bg-grey-50 dark:bg-grey-800 shadow rounded-lg p-4 flex-1">
				<div className="flex items-start justify-between mb-2">
					<h2 className="text-2xl text-on-surface-he dark:text-on-primary-he mr-4">
						<span className="inline-block rounded-lg w-48 h-6 bg-grey-200 dark:bg-grey-700"></span>
						<span className="text-xl text-on-surface-me dark:text-on-primary-me">
							{" - "}
						</span>
						<span className="inline-block rounded-lg w-32 h-5 bg-grey-200 dark:bg-grey-700"></span>
					</h2>
				</div>
				<div className="text-on-surface-me dark:text-on-primary-me text-sm">
					<span className="mr-2">Responsabile: </span>
					<span>
						<span className="inline-block rounded-lg w-32 h-[0.875rem] bg-grey-200 dark:bg-grey-700"></span>
						<span>{" · "}</span>
						<span className="inline-block rounded-lg w-32 h-[0.875rem] bg-grey-200 dark:bg-grey-700"></span>
					</span>
				</div>
				<div className="text-on-surface-me dark:text-on-primary-me text-sm">
					<span className="mr-2">Canali: </span>
					<span className="inline-block rounded-lg w-32 h-[0.875rem] bg-grey-200 dark:bg-grey-700"></span>
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
									<span className="inline-block rounded-lg w-16 h-4 bg-grey-200 dark:bg-grey-700"></span>
								</td>
								<td
									className={`py-3 px-2 border-r border-grey-300 dark:border-grey-600`}
								>
									<span className="inline-block rounded-lg w-16 h-4 bg-grey-200 dark:bg-grey-700"></span>
								</td>
								<td
									className={`py-3 px-2 border-grey-300 dark:border-grey-600 flex flex-col`}
								>
									<span className="inline-block rounded-lg w-auto h-4 bg-grey-200 dark:bg-grey-700"></span>
									<span className="inline-block rounded-lg w-auto h-3 bg-grey-200 dark:bg-grey-700 mt-1"></span>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};
