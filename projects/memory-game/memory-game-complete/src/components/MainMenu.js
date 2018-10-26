import React from "react";

function MainMenu(props) {
	const { onSelect } = props;

	return (
		<div className={"menu"}>
			<h2 className={"white"}>Play Memory Game!</h2>

			<div className="menuItem" onClick={() => onSelect("easy")}>
				Classic Mode
			</div>
			<div className="menuItem" onClick={() => onSelect("hard")}>
				Hard hard
			</div>
		</div>
	);
}

MainMenu.defaultProps = {
	onSelect: difficulty => {},
};

export default MainMenu;
