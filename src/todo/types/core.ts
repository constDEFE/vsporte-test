export type Todo = {
	id: string;
	title: string;
	createdAt: number;
	completedAt: number;
	status: "todo" | "completed";
};

export type TodoDto = Omit<Todo, "id" | "createdAt" | "completedAt" | "status">;

export type Filter = {
	label: Capitalize<Todo["status"] | "all">;
	value: Todo["status"] | "all";
};

export type State = {
	filter: Filter["value"];
	todos: Todo[];
};

/** Reducer Actions */

type UpdateFilterAction = {
	type: "filter/update";
	payload: Filter["value"];
};

type CreateTodoAction = {
	type: "todo/create";
	payload: TodoDto;
};

type CompleteTodoAction = {
	type: "todo/complete";
	payload: Todo["id"];
};

type RemoveTodoAction = {
	type: "todo/remove";
	payload: Todo["id"];
};

export type Action = UpdateFilterAction | CreateTodoAction | CompleteTodoAction | RemoveTodoAction;
