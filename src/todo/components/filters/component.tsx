import { type FC, useId } from "react";

import type { Filter } from "@/todo/types/core";
import type { EventFor } from "@/todo/types/util";

import { StatusField } from "./blocks";

type Props = {
	filters: Filter[];
	selected: Filter["value"];
	onChange: (value: Filter["value"]) => void;
};

const Filters: FC<Props> = ({ filters, onChange, selected }) => {
	const formId = useId();

	const handleSubmit = (e: EventFor<"form", "submit">) => {
		e.preventDefault();
	};

	return (
		<form onSubmit={handleSubmit} className="">
			<div className="mt-2 flex gap-3">
				{filters.map((filter) => (
					<StatusField
						checked={selected === filter.value}
						key={filter.value}
						value={filter.value}
						formId={formId}
						name="status"
						onChange={onChange}
					>
						{filter.label}
					</StatusField>
				))}
			</div>
		</form>
	);
};

export default Filters;
