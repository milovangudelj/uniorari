import { useEffect, useState } from "react";
import { Insegnamento } from "../../graphql/types/ts";

type Order = "initial" | "az" | "za";
type OrderMapType = {
	[key: string]: Order;
};
const OrderMap: OrderMapType = {
	initial: "az",
	az: "za",
	za: "initial",
};

type PropTypes = {
	type?: Order;
	items: any[];
	compareFn: (a: any, b: any, ordering: Order) => number;
};

export const useSorting = ({
	items,
	compareFn,
	type = "initial",
}: PropTypes) => {
	const [ordering, setOrdering] = useState(type);
	const [sortedItems, setSortedItems] = useState(items);

	useEffect(() => {
		setSortedItems((current) => {
			if (!items || !current) return;

			return [...current].sort((a, b) => {
				return compareFn(a, b, ordering);
			});
		});
	}, [ordering, compareFn, items]);

	const changeOrdering = () => {
		setOrdering((current) => OrderMap[current]);
	};

	return {
		ordering,
		sortedItems,
		setOrdering,
		changeOrdering,
		setSortedItems,
	};
};

export const sortTeachings = (
	a: Insegnamento,
	b: Insegnamento,
	ordering: Order = "initial"
): number => {
	switch (ordering) {
		case "initial":
			return a.createdAt.localeCompare(b.createdAt);

		case "az":
			return a.nome.localeCompare(b.nome);

		case "za":
			return -a.nome.localeCompare(b.nome);
	}
};
