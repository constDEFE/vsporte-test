import type { Todo } from "@/todo/types/core";

export const getAll = () => {
	const todos = localStorage.getItem("todos");

	return (todos ? JSON.parse(todos) : []) as Todo[];
};
