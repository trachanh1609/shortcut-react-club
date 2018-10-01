import React, { Component } from 'react'
import Highlight from 'react-highlight'
import "highlight.js/styles/agate.css";

export class Home extends Component {
	render() {
		return (
			<div>
				<h1>Home</h1>

				<div>
					<h3>How to work with this project ?</h3>
					<p>
						1/ Clone this repository from Github:&nbsp;
							<a href="https://github.com/ArmandDu/shortcut-react-club">ArmandDu/shortcut-react-club</a>
					</p>
					<p>
						2/ Navigate to <b>~shortcut-react-club/projects/react-basics</b>.
					</p>
					<p>
						3/ create a new branch <b>[YOUR_USERNAME]/react-basics</b>.
					</p>
					<p>
						4/ Navigate to your <b>all-exercices</b>, run <b>npm install</b>.
					</p>
					<p>
						5/ run <b>npm test</b> to test your exercices. Run <b>npm start</b> to see your exercices in the browser.
						</p>
					<p>
						6/ The exercices are located in the <b>src/exercices/</b> folder.
					</p>
					<p>
						7. open one file a file, read the instructions and start coding!
					</p>
					<Highlight className="bash">
						{`
#example in the terminal

# Clone the project

git clone https://github.com/ArmandDu/shortcut-react-club.git
cd shortcut-react-club/projects/react-basics

git checkout -b [YOUR_USERNAME]/react-basics
# example: git checkout -b armanddu/react-basics

cd all-exercices
npm install

#open visual studio code
code .

# Start coding in src/exercices

#Run the test suite
npm test

#Run the wepapp
npm start

#To run both, open a second terminal
# (inside vs code: "Terminal>New Terminal", then "Terminal>Split Terminal")
`}
					</Highlight>

					<h3>How to check if my code work ?</h3>

					<p>Run <b>npm test</b> in a terminal, it will start the test suites written to validate your code.</p>

					<p>Everytime you save your file, the tests will run again.</p>

					<p>In the beginning, a lot tests will fail. In the terminal, scroll and focus on the exercices you are working on.</p>

					<p>For example, working on the file <b>00-intro.js</b> you will find a line with <b>src/__tests_/00-intro.test.js</b> and below, each exercice with a list of different tests.</p>

					<p>One exercice is validated when all its tests passes. Once you complete all the exercies for one file, this file will be 'passed' and you can move to the next one.</p>


					<h3>How to see my components in the browser ?</h3>

					<p>Run <b>npm start</b>. A page will prompt. Locate the side menu and under "Exercices" you will see all the exercices files.</p>

					<p>Select the one you are working on. Every component you write will render in this page. Whenever you save a file, the page will refresh itself.</p>

					<p><i>Note</i>: For exercices asking you to export something by default, you will find it as the last item, under "default"</p>

					<h3>How to get the latest exercices ?</h3>

					<p>1/ make sure you are in your own branch <b>git branch</b></p>
					<p>&nbsp;&nbsp;&nbsp;&nbsp;- if not: <b>git checkout [YOUR_USERNAME]/react-basics</b></p>
					<p>2. save your changes <b>git add . && git commit -m "message"</b></p>
					<p>3. run <b>git pull origin master --rebase</b></p>
					<p>4. You should have the latest code</p>
				</div>

			</div>
		)
	}
}

export default Home
