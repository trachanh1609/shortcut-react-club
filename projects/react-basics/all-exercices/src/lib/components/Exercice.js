import React, { Component } from 'react'
import Highlight from 'react-highlight'
import "highlight.js/styles/agate.css";

const dict = {
	// elementFactory: (factory) => factory("John", 33),
	UserCardComponent: (Component) =>  <Component name={"John"} age={35} />
}

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
					{Object.entries(values).map(([name, value], i) => {
						const data = name in dict ? dict[name](value) : value;

						return (
							<div key={name} className="exercice-row">
								<strong>{name}</strong> ({React.isValidElement(data) ? "React Element" : typeof data})
							{React.isValidElement(data) ? (
									<div className="jsx">
										{data}
									</div>
								) : (
										<Highlight className="javascript">
											{typeof data === "object" ? JSON.stringify(data, null, 2) : data.toString()}
										</Highlight>
									)}
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}

export default Exercice
