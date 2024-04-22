import { type FC, useReducer } from "react";
import { LuPlusCircle } from "react-icons/lu";

import { todosApi } from "./api/todos";
import { Filters, List } from "./components";
import { CreateModal, CreateProvider } from "./providers/create-todo";
import type { Action, Filter, State, Todo, TodoDto } from "./types/core";

/** @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed */
declare global {
	interface Array<T> {
		toReversed(): T[];
	}
}

const filters: Filter[] = [
	{ label: "All", value: "all" },
	{ label: "Todo", value: "todo" },
	{ label: "Completed", value: "completed" }
];

const initialState: State = {
	filter: "all",
	todos: todosApi.getAll()
};

const reducer = (state: State, action: Action) => {
	switch (action.type) {
		case "filter/update": {
			return { ...state, filter: action.payload };
		}
		case "todo/create": {
			const createdTodo = todosApi.create(action.payload);

			return {
				...state,
				todos: [...state.todos, createdTodo]
			};
		}
		case "todo/complete": {
			const updatedTodo = todosApi.completeById(action.payload);

			if (!updatedTodo) return state;

			const todos = todosApi.getAll();

			return { ...state, todos };
		}
		case "todo/remove": {
			const removedTodo = todosApi.removeById(action.payload);

			if (!removedTodo) return state;

			const todos = todosApi.getAll();

			return { ...state, todos };
		}
		default: {
			return state;
		}
	}
};

const App: FC = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const handleFiltersChange = (value: Filter["value"]) => {
		dispatch({ type: "filter/update", payload: value });
	};

	const handleTodoCreate = (dto: TodoDto) => {
		dispatch({ type: "todo/create", payload: dto });
	};

	const handleTodoComplete = (id: Todo["id"]) => {
		dispatch({ type: "todo/complete", payload: id });
	};

	const handleTodoRemove = (id: Todo["id"]) => {
		dispatch({ type: "todo/remove", payload: id });
	};

	const displayedTodos =
		state.filter === "all"
			? state.todos.toReversed()
			: state.todos.filter((t) => t.status === state.filter).toReversed();

	return (
		<CreateProvider onCreate={handleTodoCreate}>
			<div className="container space-y-2 p-2 md:w-[max(40vw,768px)]">
				<div className="rounded-3xl bg-white px-4 py-3">
					<div className="flex items-center justify-between border-b border-black">
						<h1 className="text-2xl font-bold xl:text-3xl">Todos</h1>
						<CreateModal>
							<button className="duration-150 ease-out hover:text-sky-500">
								<LuPlusCircle className="h-7 w-7" />
							</button>
						</CreateModal>
					</div>
					<Filters filters={filters} onChange={handleFiltersChange} selected={state.filter} />
				</div>
				<List onTodoComplete={handleTodoComplete} onTodoRemove={handleTodoRemove} todos={displayedTodos} />
			</div>
		</CreateProvider>
	);
};

export default App;
