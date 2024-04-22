import { type FC, type PropsWithChildren, useState } from "react";

import type { TodoDto } from "@/todo/types/core";

import { context } from "./context";

type Props = {
	onCreate: (dto: TodoDto) => void;
};

const Provider: FC<PropsWithChildren<Props>> = ({ onCreate, children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleCreate = (dto: TodoDto) => {
		onCreate(dto);
		setIsOpen(false);
	};

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return <context.Provider value={{ isOpen, toggle, onCreate: handleCreate }}>{children}</context.Provider>;
};

export default Provider;
