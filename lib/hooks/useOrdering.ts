import { useEffect, useState } from "react";
import { Insegnamento } from "../../graphql/types/ts";

export enum order {
	initial,
	az,
	za,
}

type PropTypes = {
	type?: order;
	items: any[];
	compareFn: (a: any, b: any, ordering: order) => number;
};

export const useSorting = ({
	items,
	compareFn,
	type = order.initial,
}: PropTypes) => {
	const [ordering, setOrdering] = useState(type);
	const [sortedItems, setSortedItems] = useState(items);

	useEffect(() => {
		if (!sortedItems) return;

		setSortedItems((current) => {
			return [...current].sort((a, b) => {
				return compareFn(a, b, ordering);
			});
		});
	}, [ordering]);

	const changeOrdering = () => {
		setOrdering((current) => {
			switch (current) {
				case order.initial:
					return order.az;
				case order.az:
					return order.za;
				case order.za:
					return order.initial;
			}
		});
	};

	return {
		ordering,
		sortedItems,
		setOrdering,
		changeOrdering,
		setSortedItems,
	};
};

export const sortInsegnamenti = (
	a: Insegnamento,
	b: Insegnamento,
	ordering: order = order.initial
): number => {
	switch (ordering) {
		case order.initial:
			return a.createdAt.localeCompare(b.createdAt);
			break;
		case order.az:
			return a.nome.localeCompare(b.nome);
			break;
		case order.za:
			return -a.nome.localeCompare(b.nome);
			break;
	}
};
