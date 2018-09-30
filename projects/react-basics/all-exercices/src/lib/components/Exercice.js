import React, { Component } from 'react'
import Highlight from 'react-highlight'
import "highlight.js/styles/agate.css";

export class Exercice extends Component {

	state = {
		values: {}
	}

	componentDidMount() {
		const { mod } = this.props;

		if (mod) {
			mod.then(values => this.setState({ values }))
		}
	}

	render() {
		const { name } = this.props;
		const { values } = this.state;

		return (
			<div>
				<h1>{name}</h1>
				<div>
					{Object.entries(values).map(([name, value], i) => (
						<div key={name} className="exercice-row">
							{i + 1}.&nbsp;<strong>{name}</strong> ({React.isValidElement(value) ? "React Element" : typeof value})
							{React.isValidElement(value) ? (
								<div className="jsx">
									{value}
								</div>
							) : (
									<Highlight className="javascript">
										{value.toString()}
									</Highlight>
								)}
						</div>
					))}
				</div>
			</div>
		)
	}
}

export default Exercice
