import type { FC } from "react";
import { useEffect, useId, useRef } from "react";
import { LuXCircle } from "react-icons/lu";

import type { TodoDto } from "@/todo/types/core";
import type { EventFor } from "@/todo/types/util";

type Props = {
	onClose: () => void;
	onSubmit: (dto: TodoDto) => void;
};

const Modal: FC<Props> = ({ onSubmit, onClose }) => {
	const formId = useId();
	const dialogRef = useRef<HTMLDialogElement>(null);

	const handleSubmit = (e: EventFor<"dialog", "submit">) => {
		e.preventDefault();

		const data = new FormData(e.target as HTMLFormElement);
		const title = data.get("title") as string;

		onSubmit({ title });
		onClose();
	};

	const handleClose = () => {
		onClose();
	};

	useEffect(() => {
		dialogRef.current?.showModal();
	}, []);

	return (
		<dialog
			ref={dialogRef}
			onSubmit={handleSubmit}
			className="container w-[max(30vw,480px)] rounded-3xl bg-white px-4 py-3 backdrop:bg-black/40"
		>
			<div className="flex items-center justify-between border-b border-black">
				<h2 className="block text-2xl font-bold">Create Todo</h2>
				<button className="duration-150 ease-out hover:text-red-500" onClick={handleClose}>
					<LuXCircle className="h-7 w-7" />
				</button>
			</div>
			<form className="mt-2 space-y-2">
				<div>
					<label className="font-medium" htmlFor={`${formId}--title`}>
						Title
					</label>
					<input
						id={`${formId}--title`}
						className="w-full rounded-xl border bg-gray-50 p-2 outline-none focus:bg-white focus-visible:border-gray-500"
						type="text"
						name="title"
						required
					/>
				</div>
				<button className="w-full rounded-xl bg-sky-500 p-2 font-medium text-white duration-150 ease-out hover:bg-sky-600">
					Create
				</button>
			</form>
		</dialog>
	);
};

export default Modal;
