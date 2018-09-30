import React, { Component } from 'react'

export class Help extends Component {
	render() {
		return (
			<div>
				<h1>Help</h1>
				<section>
					<p>
						- <a href="https://reactjs.org/docs/getting-started.html" rel="noopener noreferrer" target="_blank">
							React Doc
						</a>
					</p>
					<p>
						- <a href="https://github.com/ArmandDu/shortcut-react-club/tree/master/documentation" rel="noopener noreferrer" target="_blank">
							Repository's Doc
						</a>
					</p>
					<p>
						- <a href="https://github.com/ArmandDu/shortcut-react-club/wiki" rel="noopener noreferrer" target="_blank">
							Repository's Wiki
						</a>
					</p>
					<p>
						- <a href="https://github.com/ArmandDu/shortcut-react-club/issues" rel="noopener noreferrer" target="_blank">
							Ask Question on the Repository
						</a>
					</p>
					<p>
						- Ask questions in the slack channel
					</p>
					<p>
						- Ask questions during the live sessions
					</p>
				</section>
			</div>
		)
	}
}

export default Help
