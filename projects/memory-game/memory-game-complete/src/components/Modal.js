import React from "react";
import classnames from "classnames";

function Modal(props) {
	const { children, open } = props;

	return <div className={classnames("modal", { open })}>{children}</div>;
}

Modal.defaultProps = {
	open: false,
};

export default Modal;
