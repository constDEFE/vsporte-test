import type { AnimationProps } from "framer-motion";
import { motion } from "framer-motion";
import type { FC } from "react";
import { LuCheckCircle2, LuTrash2 } from "react-icons/lu";

import type { Todo as TTodo } from "@/todo/types/core";

type Props = {
	todo: TTodo;
	onComplete: (id: TTodo["id"]) => void;
	onRemove: (id: TTodo["id"]) => void;
};

const animation: AnimationProps = {
	initial: { height: 0, opacity: 0 },
	animate: {
		height: "auto",
		opacity: 1,
		transition: {
			type: "spring",
			bounce: 0.2,
			opacity: { delay: 0.1 }
		}
	},
	exit: { height: 0, opacity: 0 },
	transition: {
		ease: "easeOut",
		duration: 0.3,
		opacity: { duration: 0.1 }
	}
};

const Todo: FC<Props> = ({ todo, onComplete, onRemove }) => {
	const handleRemove = () => {
		onRemove(todo.id);
	};

	const handleComplete = () => {
		onComplete(todo.id);
	};

	return (
		<motion.li {...animation}>
			<div className="flex items-center justify-between py-2 ">
				<span className="grow truncate text-lg font-medium">{todo.title}</span>
				<div className="flex items-center gap-2">
					{!todo.completedAt && (
						<button className="duration-150 ease-out hover:text-green-500" onClick={handleComplete}>
							<LuCheckCircle2 className="h-6 w-6" />
						</button>
					)}
					<button className="duration-150 ease-out hover:text-red-500" onClick={handleRemove}>
						<LuTrash2 className="h-6 w-6" />
					</button>
				</div>
			</div>
		</motion.li>
	);
};

export default Todo;
