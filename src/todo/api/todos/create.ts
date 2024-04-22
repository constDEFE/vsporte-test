import type { Todo, TodoDto } from "@/todo/types/core";

import { getAll } from "./get-all";

export const create = (dto: TodoDto) => {
	const todo: Todo = {
		...dto,
		id: crypto.randomUUID(),
		createdAt: Date.now(),
		completedAt: 0,
		status: "todo"
	};

	const todos = getAll();

	localStorage.setItem("todos", JSON.stringify([...todos, todo]));

	return todo;
};
