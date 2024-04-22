import type { FC } from "react";

import type { Filter } from "@/todo/types/core";
import type { EventFor } from "@/todo/types/util";

type Props = {
	checked: boolean;
	value: Filter["value"];
	formId: string;
	children: string;
	name: string;
	onChange: (value: Filter["value"]) => void;
};

const StatusField: FC<Props> = ({ children, formId, onChange, value, name, checked }) => {
	const id = `${formId}--${name}--${value}`;

	const handleChange = (e: EventFor<"input", "change">) => {
		onChange(e.target.value as Filter["value"]);
	};

	return (
		<>
			<input
				onChange={handleChange}
				className="hidden [&:checked+label]:border-b-sky-500 [&:checked+label]:text-sky-500"
				checked={checked}
				type="radio"
				id={id}
				name={name}
				value={value}
			/>
			<label
				className="cursor-pointer border-b-2 border-transparent px-1 text-lg font-medium leading-tight duration-150 ease-out hover:border-b-sky-500 hover:text-sky-500 xl:text-xl"
				htmlFor={id}
			>
				{children}
			</label>
		</>
	);
};

export default StatusField;
