import { AnimatePresence } from "framer-motion";
import { type FC } from "react";

import type { Todo as TTodo } from "@/todo/types/core";

import { Todo } from "./blocks";

type Props = {
	todos: TTodo[];
	onTodoComplete: (id: TTodo["id"]) => void;
	onTodoRemove: (id: TTodo["id"]) => void;
};

const List: FC<Props> = ({ todos, onTodoComplete, onTodoRemove }) => {
	return (
		<div className="rounded-3xl bg-white px-4 py-3">
			{!!todos.length && (
				<ul>
					<AnimatePresence initial={false}>
						{todos.map((todo) => (
							<Todo key={todo.id} onComplete={onTodoComplete} onRemove={onTodoRemove} todo={todo} />
						))}
					</AnimatePresence>
				</ul>
			)}
			{!todos.length && <p className="text-center text-lg font-bold">No todos</p>}
		</div>
	);
};

export default List;
