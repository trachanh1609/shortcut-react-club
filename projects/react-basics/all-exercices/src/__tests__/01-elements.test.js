import React from "react"
import { shallow } from "enzyme"
import { itHasProperty, itHasValue, itHasType } from "lib/testUtils";

import * as ex from "exercices/01-elements"

/**
 * 01-1 - A first JSX element
 * 
 * 
 * JSX is javascript XML. it let you write HTML-like markup in Javascript.
 * Let's give it a test
 * 
 * export a variable named "helloWorld" and assign it a JSX element.
 * The JSX element must have the text "Hello World!" wrapped in a h1 element
 * 
 * NB: we are not creating components but assiging HTML-like markup into a Javascript variable.
 *  
 */

describe("01-1 - A first JSX element", () => {

	const element = ex.helloWorld;

	itHasProperty(ex, "helloWorld");

	it("is a valid element", () => {
		expect(React.isValidElement(element)).toEqual(true)
	})
	
	it("has the text 'Hello World!'", () => {
		const component = shallow(element);
		expect(component.text()).toEqual("Hello World!")
	})

	it("is wrapped inside a h1 element", () => {
		const component = shallow(element);
		expect(component.type()).toEqual("h1")
	})
})