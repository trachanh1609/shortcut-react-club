import { itHasProperty, itHasValue, itHasType } from "lib/testUtils";

import * as ex from "exercices/00-intro"

/**
 * 00-1 - Example 
 * 
 * export a variable named 'myAnswer' and assign it the value 42
 * 
 */
describe("00-1 - Example", () => {

	itHasProperty(ex, "myAnswer");
	itHasValue(ex, "myAnswer", 42);
})

/**
 * 00-2 - Example 2
 * 
 * export a variable named 'myName' as default and assign it the value <your name>
 * 
 */
describe("00-2 - Example 2", () => {
	itHasProperty(ex, "default")
	itHasType(ex, "default", "string")
})

/**
 * 00-3 - Example 3
 * 
 * export a function named 'add'. The fuction takes two parameters and returns the sum of the two values
 * 
 */

describe("00-3 - Example 3", () => {
	itHasProperty(ex, "add")
	itHasType(ex, "add", "function")

	it("accepts two arguments", () => {
		expect(ex.add.length).toEqual(2)
	})
	it("returns the sum of two values", () => {
		expect(ex.add(2,3)).toEqual(5)
	})
})

  /**
 * 00-4 - Example 4
 * 
 * export a variabled named "helloWorld" and assign it a jsx markup of a div with content 'Hello World!'
 * 
 */