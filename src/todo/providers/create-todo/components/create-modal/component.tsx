import { cloneElement, type FC } from "react";
import { createPortal } from "react-dom";

import { useCreateContext } from "../../hooks";
import { Modal } from "./blocks";

type Props = {
	children: JSX.Element;
};

const CreateModal: FC<Props> = ({ children }) => {
	const { isOpen, onCreate, toggle } = useCreateContext();
	return (
		<>
			{cloneElement(children, { onClick: toggle })}
			{isOpen && createPortal(<Modal onClose={toggle} onSubmit={onCreate} />, document.body)}
		</>
	);
};

export default CreateModal;
