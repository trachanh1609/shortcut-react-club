import React from "react";
import classnames from "classnames";

export function Card(props) {
	const { hidden, suite, value, onClick } = props;
	return (
		<div className={classnames("card", { hidden }, suite)} onClick={onClick}>
			<p>{value}</p>
		</div>
	);
}

Card.defaultProps = {
	hidden: true,
	suite: "diamonds",
	value: "A",
	onClick: () => {},
};

export default Card;
