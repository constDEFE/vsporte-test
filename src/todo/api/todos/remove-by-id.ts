import type { Todo } from "@/todo/types/core";

import { getAll } from "./get-all";

export const removeById = (id: Todo["id"]) => {
	const todos = getAll();
	const toRemove = todos.find((t) => t.id === id);

	if (!toRemove) return null;

	const filtered = todos.filter((t) => t.id !== id);

	localStorage.setItem("todos", JSON.stringify(filtered));

	return toRemove;
};
