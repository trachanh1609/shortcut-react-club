# React Basics

This project consist of a list of exercices to train your react skills.


## How to work with this project ?

1. Clone this repository from Github: [ArmandDu/shortcut-react-club](https://github.com/ArmandDu/shortcut-react-club)

2. Navigate to `~shortcut-react-club/projects/react-basics`.

3. Create a new branch `[YOUR_USERNAME]/react-basics`. 

4. Navigate to your `all-exercices`, run `npm install`.

5. run `npm test` to test your exercices. Run `npm start` to see your exercices in the browser.

6. The exercices are located in the `src/exercices/` folder.

7. open one file a file, read the instructions and start coding!


```bash
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
#(inside vs code: "Terminal>New Terminal", then "Terminal>Split Terminal")

``` 

## How to check if my code work ?

Run `npm test` in a terminal, it will start the test suites written to validate your code.

Everytime you save your file, the tests will run again.

In the beginning, a lot tests will fail. In the terminal, scroll and focus on the exercices you are working on.

For example, working on the file `00-intro.js` you will find a line with `src/__tests_/00-intro.test.js` and below, each exercice with a list of different tests.

One exercice is validated when all its tests passes.
Once you complete all the exercies for one file, this file will be 'passed' and you can move to the next one.


## How to see my components in the browser ?

Run `npm start`. A page will prompt. Locate the side menu and under "Exercices" you will see all the exercices files.

Select the one you are working on. Every component you write will render in this page.

Whenever you save a file, the page will refresh itself.

*Note*: For exercices asking you to export something by default, you will find it as the last item, under "default"


## How to get the latest exercices ?

1. make sure you are in your own branch `git branch`
   - if not: `git checkout [YOUR_USERNAME]/react-basics`
2. save your changes `git add . && git commit -m "message"`
3. run `git pull origin master --rebase`
4. You should have the latest code