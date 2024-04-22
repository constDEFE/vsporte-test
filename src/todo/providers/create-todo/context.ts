import { createContext } from "react";

import type { TodoDto } from "@/todo/types/core";

type State = {
	isOpen: boolean;
	toggle: () => void;
	onCreate: (dto: TodoDto) => void;
};

const initialState: State = {
	isOpen: false,
	toggle: () => {},
	onCreate: () => {}
};

export const context = createContext(initialState);
