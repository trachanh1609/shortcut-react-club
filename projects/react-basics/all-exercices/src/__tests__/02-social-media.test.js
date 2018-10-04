import React from "react"
import { shallow } from "enzyme"
import each from 'jest-each'
import { itHasProperty, itHasValue, itHasType } from "lib/testUtils"

import * as ex from "exercices/02-social-media"

/**
 * 02-1 - Mini Project Into Components
 *
 *  In this series of exercices, we will build a small Social Media posting platform.
 *  We will reuse what we learned from the previous exercice and add some small new things.
 * 
 * First, export a function named "Author". This functional Component accepts a props object as parameter.
 * 
 * This functionnal component will expect to receive the following properties:
 * - [String] name: the name of the author
 * - [String] picture: The URL of the author's profile picture
 * - [String] bio: a short biography
 * 
 * Your function should return a JSX div with className "so-me author"
 * Inside this div you will have 4 children:
 * - img with className "so-me user-img", img as picture prop and alt as author's name
 * - h4 with the author's name as content
 * - p with className "so-me bio" and the bio as content
 * - a with className "so-me profile-link", href "#/profile" and "View Profile" as content
 *  
 */

describe("02-1 - Mini Project Into Components", () => {

	const Component = ex.Author;
	const props = { name: "name", bio: "bio", picture: "https://placehold.it/400x400" };
	const inject = ex.stephenKing;

	const element = Component ? <Component {...props} /> : null;

	itHasProperty(ex, "Author");

	it("is a valid element", () => {
		expect(React.isValidElement(element)).toEqual(true)
	})

	it("is returns a div element", () => {
		const component = shallow(element);
		expect(component.type()).toEqual("div")
	})

	it("has a className of 'so-me author'", () => {
		const component = shallow(element);
		expect(component.prop("className")).toEqual("so-me author")
	})

	it("has 4 children", () => {
		const component = shallow(element);
		expect(component.children().length).toEqual(4)
	})

	each([[0, "img"], [1, "h4"], [2, "p"], [3, "a"]]).test("children %i is a %s", (index, type) => {
		const component = shallow(element);
		expect(component.childAt(index).type()).toEqual(type)
	})

	each([props, inject]).describe("using props set #%#", (data) => {
		let component;

		beforeEach(() => {
			component = shallow(Component && <Component {...data} />);
		})

		each([["img", "so-me user-img"], ["p", "so-me bio"], ["a", "so-me profile-link"]]).test("%s has className %p", (name, className) => {
			expect(component.find(name).prop("className")).toEqual(className)
		})
		it("h4 has no className", () => {
			expect(component.find("h4").prop("className")).toEqual(undefined)
		})

		it(`img has alt "${data.name}"`, () => {
			expect(component.find("img").prop("alt")).toEqual(data.name)
		})

		it(`img has src "${data.picture}"`, () => {
			expect(component.find("img").prop("src")).toEqual(data.picture)
		})

		each([["h4", data.name], ["p", data.bio], ["a", "View Profile"]]).test("%s has content of %p", (name, content) => {
			expect(component.find(name).text()).toEqual(content)
		})

		it("a has href '#/profile'", () => {
			expect(component.find("a").prop("href")).toEqual("#/profile")
		})
	})
})

/**
 * 02-2 - Using the Author component
 *
 * 
 * Now that we have our first component we are going to create a React Element form it.
 * 
 * But, first, some notes about the previous exercice:
 * 
 * If you know about constructor function and JS conventions, you should have seen some similarities with the Author function.
 * In js with a constructor function, you would have use the "new" keyword to create a new instance.
 * In React, when we want to use a functional component we use JSX and we do it Like so <Author />
 * Because your components expects props, you'll need to pass them: <Author name="John Doe" bio="Lorem Ipsum" picture="htpps://..." />
 * 
 * Now that you know everything, export a variable named "stephenKingCard" and assign it an instance of an Author using the JSX syntax.
 * You will use the data from "stephenKing" object as prop values (use interpolation)
 * 
 * Conventions:
 *  If you want to improve readibility, sometimes you want to display one prop per line (expecially when there is more than 3 props)
 * To do so there is the template
 * 
 * const element = (
 * 	<MyComponent
 *     propA={someLongVariableThatNeedsALotOfSpace}
 *     propB={valueB}
 *     propC={() => {return "some inline function"}}
 *     propD={....}
 *  /> 
 * )
 *
 */

describe("02-2 - Using the Author component", () => {


	const element = ex.stephenKingCard;
	const inject = ex.stephenKing;

	itHasProperty(ex, "stephenKingCard");

	it("is a valid element", () => {
		expect(React.isValidElement(element)).toEqual(true)
	})

	it("is a Author element", () => {
		const component = shallow(<div>{element}</div>);
		expect(component.find(ex.Author).length).toEqual(1)
	})

	each([inject]).describe("using stephenKing object as props", (data) => {
		let component;

		beforeEach(() => {
			component = shallow(element);
		})

		it(`img has alt "${data.name}"`, () => {
			expect(component.find("img").prop("alt")).toEqual(data.name)
		})

		it(`img has src "${data.picture}"`, () => {
			expect(component.find("img").prop("src")).toEqual(data.picture)
		})

		each([["h4", data.name], ["p", data.bio], ["a", "View Profile"]]).test("%s has content of %p", (name, content) => {
			expect(component.find(name).text()).toEqual(content)
		})
	})
})

/**
* 02-3 - a Post component
*
* export a function named "Post". Post is a functionnal Component, so it's expect a "props" argument.
* 
* You will expect the following props:
*  - [Object] author: an object with the keys: "name", "bio" and "picture"
*  - [String] title: the title of the Post
*  - [String] postedOn: the date of the post
*  - [Boolean] liked: if the post has been liked or not
*  - [React.Children] children: the inner elements passed to the component
* 
* Your function will return a div with className "so-me post".
* The div will contain the following children:
*  - Author: your Author component from exercice 1 with the props from the props.author object
*  - div with className "so-me content" and following children:
*    - h3 with className "so-me title" and the following children:
*      - the title of the post
*      - a (<a>) with href "#/ike", className "so-me thumb" and a i (<i>) as children with className:
*        - "fas fa-thumbs-up" if the props.liked is true
*        - "far fa-thumbs-up" if the props.liked is false
*    - div with className "so-me text" and as content your props.children
*    - p with className "so-me metadata" and content "Posted on " + your postedOn prop
*
* 
* Help with the <i> element:
*  With {} you can interpolate most Javascript expressions.
*  You can't evaluata a if else statement but you can evaluate a ternary operator
*  liked ? <truthy statement> : <falsy statement>. I'll let you google "Javascript Ternary Operator"
* 
* Help with the props.children:
*  Props are the parameters you pass to your component. When doing something like <MyButton>Click Me</MyButton>,
*  the text "Click Me" is the inner element of MyButton, it's thent a parameter of MyButton, then it's a props of MyButton.
*  In React, any inner attribute will be stored into your props as "children". It's up to you to pass it down or skip it.
*  Check the react documentation about children for more details.
*/

describe("02-3 - a Post component", () => {

	const Component = ex.Post;
	const props = [
		{ author: ex.stephenKing, title: "title", postedOn: "now", children: "content", liked: true },
		{ author: ex.stephenKing, title: "Lorem Ipsum", postedOn: "21/12/12", children: "This is the end of the world, as we now it!" },
	];

	const element = Component ? <Component author={{}}/> : null;

	itHasProperty(ex, "Post");

	it("is a valid element", () => {
		expect(React.isValidElement(element)).toEqual(true)
	})

	it("is returns a div element", () => {
		const component = shallow(element);
		expect(component.type()).toEqual("div")
	})

	it("has a className of 'so-me post'", () => {
		const component = shallow(element);
		expect(component.prop("className")).toEqual("so-me post")
	})

	it("has 2 children", () => {
		const component = shallow(element);
		expect(component.children().length).toEqual(2)
	})

	each([[0, "Author", ex.Author], [1, "div", "div"]]).test("children %i is a %s", (index, name, type) => {
		const component = shallow(element);
		expect(component.childAt(index).type()).toEqual(type)
	})

	each(props).describe("using prop set #%#", (props) => {

		let component;

		beforeEach(() => {
			component = shallow(Component && <Component {...props} />);
		})

		describe('Author', () => {
			it("has the correct props", () => {
				expect(component.find(ex.Author).props()).toEqual(props.author)
			})
		})

		describe('div', () => {
			let divElement;

			beforeEach(() => {
				divElement = component.childAt(1)
			})

			it("has 3 children", () => {
				expect(divElement.children().length).toEqual(3)
			})

			each([[0, "h3"], [1, "div"], [2, "p"]]).test("children %i is a %s", (index, type) => {
				expect(divElement.childAt(index).type()).toEqual(type)
			})

			each([["h3", "so-me title"], ["div", "so-me text"], ["p", "so-me metadata"]]).test("%s has className %p", (name, className) => {
				expect(divElement.children().find(name).prop("className")).toEqual(className)
			})

			describe("h3 .so-me.title", () => {
				let h3Element;

				beforeEach(() => {
					h3Element = divElement.children().find("h3")
				})

				it("has 2 children", () => {
					expect(h3Element.children().length).toEqual(2)
				})

				it(`has text "${props.title}" as first child`, () => {
					expect(h3Element.childAt(0).text()).toEqual(props.title)
				})

				it(`has an <a> as second child`, () => {
					expect(h3Element.childAt(1).type()).toEqual("a")
				})
				describe("a", () => {
					let aElement;

					beforeEach(() => {
						aElement = h3Element.children().find("a")
					})

					it("has href '#/like'", () => {
						expect(aElement.prop("href")).toEqual("#/like")
					})
					it("has className 'so-me thumb'", () => {
						expect(aElement.prop("className")).toEqual("so-me thumb")
					})

					it("has one child", () => {
						expect(aElement.children().length).toEqual(1)
					})
					it("has <i> as child", () => {
						expect(aElement.children().type()).toEqual("i")
					})
				})
			})

			describe("div .so-me.text", () => {
				let textElement;

				beforeEach(() => {
					textElement = divElement.childAt(1)
				})
				it("has the correct children", () => {
					expect(textElement.text(props.children))
				})
			})

			describe("div .so-me.text", () => {
				let pElement;

				beforeEach(() => {
					pElement = divElement.childAt(2)
				})
				it(`has the text "Posted on ${props.postedOn}"`, () => {
					expect(pElement.text()).toEqual(`Posted on ${props.postedOn}`)
				})
			})
		})
	})


	describe(".so-me.content > h3 > a > i", () => {
		beforeEach(() => {
			expect(Component).toBeTruthy()
		})
		it(`it has className "fas fa-thumbs-up" when the props.liked is true`, () => {
			const component = shallow(Component ? <Component author={{}} liked /> : null);
			expect(component.find(".so-me.thumb i").prop("className")).toEqual("fas fa-thumbs-up")
		})
		it(`it has className "far fa-thumbs-up" when the props.liked is false`, () => {
			const component = shallow(Component ? <Component author={{}} liked={false} /> : null);
			expect(component.find(".so-me.thumb i").prop("className")).toEqual("far fa-thumbs-up")
		})
	})

})

/**
 * 02-4 - Using your Post component
 *
 * Now that your component is created, let's use it:
 * 
 * export a variable named stephenKingPost and assign it an instance of your Post component.
 * Your component will have the following props:
 *  - title: "Trump's Conference"
 *  - postedOn: "26/09/18"
 *  - author: the stephenKing object from exercice 2
 * 
 * Your component will have as children (the inner content):
 *  - p element with the content "Trump’s news conference is like listening to a nut calling in to a radio sports talk show."
 * 
 * Source: https://twitter.com/StephenKing/status/1045064042816180224
 */


describe("02-4 - Using your Post component", () => {

	const inject = {
		title: "Trump's Conference",
		postedOn: "26/09/18",
		author: ex.stephenKing,
		children: <p>Trump’s news conference is like listening to a nut calling in to a radio sports talk show.</p>
	}
	const element = ex.stephenKingPost;

	itHasProperty(ex, "stephenKingPost");

	it("is a valid element", () => {
		expect(React.isValidElement(element)).toEqual(true)
	})

	it("is a Post element", () => {
		const component = shallow(<div>{element}</div>);
		expect(component.find(ex.Post).length).toEqual(1)
	})


	each([inject]).describe("element props", (props) => {

		let component;

		beforeEach(() => {
			component = shallow(element);
		})

		describe('Author', () => {
			it("has the correct props", () => {
				expect(component.find(ex.Author).props()).toEqual(props.author)
			})
		})

		describe('div', () => {
			let divElement;

			beforeEach(() => {
				divElement = component.childAt(1)
			})


			describe("h3 .so-me.title", () => {
				let h3Element;

				beforeEach(() => {
					h3Element = divElement.children().find("h3")
				})

				it(`has text "${props.title}"`, () => {
					expect(h3Element.childAt(0).text()).toEqual(props.title)
				})

			})

			describe("div .so-me.text", () => {
				let textElement;

				beforeEach(() => {
					textElement = divElement.childAt(1)
				})
				it("has the correct children", () => {
					expect(textElement.text(props.children))
				})
			})

			describe("p .so-me.metadata", () => {
				let pElement;

				beforeEach(() => {
					pElement = divElement.childAt(2)
				})
				it(`has the text "Posted on ${props.postedOn}"`, () => {
					expect(pElement.text()).toEqual(`Posted on ${props.postedOn}`)
				})
			})
		})
	})
})


/**
* 02-5 SocialMedia component
* 
* Now that we can create new posts, we are going to create a SocialMedia App !
* 
* export a function named "SocialMedia", it expect the following props:
*  - [String] title: the name of your SocialMedia app!
*  - [Array] posts: a list of posts with id, title, author, date, content and liked
* 
*  Your component should return a div with id "SocialMedia" and the following children:
*  - h1 with id "title" and the prop title as content
*  - div with className "so-me container". 
*    - You will use the Array.prototype.map() to map over the posts array and return an array of Post components
*    - these components will each have the following props:
*      - key required with list of react elements. The key will be the post.id property
*      - author with the post.author property
*      - title with the post.title property
*      - postedOn with the post.date property
*      - liked with the post.liked property
*      - children: the post.content property wrapped inside a p element
* 
*/

describe("02-5 SocialMedia component", () => {

	const Component = ex.SocialMedia;
	const props = [
		{ title: "title", posts: [] },
		{ title: "News Feed", posts: ex.newsPosts }
	]

	const element = Component ? <Component {...props} /> : null;

	itHasProperty(ex, "SocialMedia");

	it("is a valid element", () => {
		expect(React.isValidElement(element)).toEqual(true)
	})

	it("is returns a div element", () => {
		const component = shallow(element);
		expect(component.type()).toEqual("div")
	})

	it("has a id of 'SocialMedia'", () => {
		const component = shallow(element);
		expect(component.prop("id")).toEqual("SocialMedia")
	})

	it("has 2 children", () => {
		const component = shallow(element);
		expect(component.children().length).toEqual(2)
	})

	each([[0, "h1"], [1, "div"]]).test("children %i is a %s", (index, type) => {
		const component = shallow(element);
		expect(component.childAt(index).type()).toEqual(type)
	})

	each(props).describe("using props set #%#", (props) => {
		let component;

		beforeEach(() => {
			component = shallow(Component && <Component {...props} />);
		})

		it("has h1 with id 'title", () => {
			expect(component.find("h1").prop("id")).toEqual("title")
		})
		it(`has h1 with content "${props.title}"`, () => {
			expect(component.find("h1").text()).toEqual(props.title)
		})

		it("has div with className 'so-me container'", () => {
			expect(component.childAt(1).prop("className")).toEqual("so-me container")
		})

		describe("div .so-me.container", () => {
			let divElement;

			beforeEach(() => {
				divElement = component.childAt(1);
			})

			it(`has ${props.posts.length} children`, () => {
				expect(divElement.children().length).toEqual(props.posts.length)
			})

			it("renders Posts elements", () => {
				expect(divElement.find(ex.Post).length).toEqual(props.posts.length)
			})

			each(props.posts.map((p, i) => ([i, p]))).describe("children %i", (index, post) => {
				it("has the correct author prop", () => {
					expect(divElement.childAt(index).prop("author")).toEqual(post.author)
				})
				it(`has title props "${post.title}"`, () => {
					expect(divElement.childAt(index).prop("title")).toEqual(post.title)
				})
				it(`has liked props "${post.liked}"`, () => {
					expect(divElement.childAt(index).prop("liked")).toEqual(post.liked)
				})
				it(`has postedOn props "${post.date}"`, () => {
					expect(divElement.childAt(index).prop("postedOn")).toEqual(post.date)
				})
				it(`has correct children`, () => {
					expect(divElement.childAt(index).prop("children")).toEqual(post.content)
				})
			})
		})
	})
})

 /**
 * 02-6 Using your SocialMedia component
 * 
 * Last exercice, export a variabled named "newsFeed" and assign it your SocialMedia element.
 * 
 * It will expect the following props:
 *  - title: "New's Feed"
 *  - posts: the newsPost array
 * 
 */

describe("02-6 Using your SocialMedia component", () => {

	const props = [ { title: "News Feed", posts: ex.newsPosts } ]

	const element = ex.newsFeed;

	itHasProperty(ex, "newsFeed");

	it("is a valid element", () => {
		expect(React.isValidElement(element)).toEqual(true)
	})

	it("is is a SocialMedia element", () => {
		const component = shallow(<div>{element}</div>);
		expect(component.find(ex.SocialMedia).length).toEqual(1)
	})


	each(props).describe("element props", (props) => {
		let component;

		beforeEach(() => {
			component = shallow(element);
		})

		it(`has h1 with content "${props.title}"`, () => {
			expect(component.find("h1").text()).toEqual(props.title)
		})

		describe("div .so-me.container", () => {
			let divElement;

			beforeEach(() => {
				divElement = component.childAt(1);
			})

			it(`has ${props.posts.length} children`, () => {
				expect(divElement.children().length).toEqual(props.posts.length)
			})

			it("renders Posts elements", () => {
				expect(divElement.find(ex.Post).length).toEqual(props.posts.length)
			})

			each(props.posts.map((p, i) => ([i, p]))).describe("children %i", (index, post) => {
				it("has the correct author prop", () => {
					expect(divElement.childAt(index).prop("author")).toEqual(post.author)
				})
				it(`has title props "${post.title}"`, () => {
					expect(divElement.childAt(index).prop("title")).toEqual(post.title)
				})
				it(`has liked props "${post.liked}"`, () => {
					expect(divElement.childAt(index).prop("liked")).toEqual(post.liked)
				})
				it(`has postedOn props "${post.date}"`, () => {
					expect(divElement.childAt(index).prop("postedOn")).toEqual(post.date)
				})
				it(`has correct children`, () => {
					expect(divElement.childAt(index).prop("children")).toEqual(post.content)
				})
			})
		})
	})
})
