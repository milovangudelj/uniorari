import { useEffect, useState } from "react";
import { Chip } from ".";

export const ChipGroup = ({ label = "Chip group", ...props }) => {
	const [chips, setChips] = useState(
		props.chips.map((chip) => {
			return { ...chip, selected: false };
		})
	);

	const handleSelection = (selectedIdx) => {
		console.log(`Selected chip ${selectedIdx}`);

		setChips((current) =>
			current.map((chip, idx) => {
				console.log(idx === selectedIdx);
				return {
					...chip,
					selected: idx === selectedIdx,
				};
			})
		);
	};

	return (
		<div className="text-grey-500 text-sm">
			<span>{label}</span>
			<ul className="flex space-x-1">
				{chips.map((chip, idx) => {
					return (
						<li key={idx}>
							<Chip
								selected={chip.selected}
								onClick={() => handleSelection(idx)}
							>
								{chip.canale.nome}
							</Chip>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
