export const itHasProperty = (obj, name) => it(`has property '${name}'`, () => {
	expect(name in obj).toEqual(true)
})

export const itHasValue = (obj, name, value) => it(`has property '${name}' with value ${value}`, () => {
	expect(obj[name]).toEqual(value)
})

export const itHasType = (obj, name, type) => it(`has property '${name}' with type '${type}'`, () => {
	expect(typeof obj[name]).toEqual(type)
})