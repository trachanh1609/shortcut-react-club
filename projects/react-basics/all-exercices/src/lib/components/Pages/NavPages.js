import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

export class NavPages extends Component {
	render() {
		return (
			<Fragment>
				<h2>Pages</h2>
				<nav>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/help">Help</Link></li>
						<li>
							<a
								href="https://github.com/ArmandDu/shortcut-react-club"
								rel="noopener noreferrer"
								target="_blank"
							>
								Github
							</a>
						</li>
					</ul>
				</nav>
			</Fragment>
		)
	}
}

export default NavPages
