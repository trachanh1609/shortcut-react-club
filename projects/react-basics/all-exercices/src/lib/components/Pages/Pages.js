import React, { Component, Fragment } from 'react'
import { Route } from "react-router-dom"
import Home from './Home';
import Help from './Help';

export class Pages extends Component {
	render() {
		return (
			<Fragment>
				<Route exact path="/" component={Home} />
				<Route exact path="/help" component={Help} />
			</Fragment>
		)
	}
}

export default Pages
