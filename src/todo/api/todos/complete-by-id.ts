import type { Todo } from "@/todo/types/core";

import { getAll } from "./get-all";

export const completeById = (id: Todo["id"]) => {
	const todos = getAll();
	const idx = todos.findIndex((t) => t.id === id);

	if (idx === -1) return null;

	const updatedTodo = (todos[idx] = { ...todos[idx], completedAt: Date.now(), status: "completed" });

	localStorage.setItem("todos", JSON.stringify(todos));

	return updatedTodo;
};
