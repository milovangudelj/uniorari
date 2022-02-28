import { useEffect, useState } from "react";
import { Chip } from ".";

export const ChipGroup = ({ label = "Chip group", ...props }) => {
	const [chips, setChips] = useState(
		props.chips.map((chip, idx) => {
			return { ...chip, selected: idx === 0 ? true : false };
		})
	);
	const [selected, setSelected] = useState(0);

	const handleSelection = (selectedIdx) => {
		if (selectedIdx === selected) return;

		chips[selected].selected = false;
		chips[selectedIdx].selected = true;
		setSelected(selectedIdx);
	};

	return (
		<div className="text-grey-500 text-sm flex">
			<span className="mr-2">{label}:</span>
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
