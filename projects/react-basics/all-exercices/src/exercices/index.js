
const get = (name) => ({
	[name]: import(`./${name}`)
})


export default {
	...get("00-intro"),
	...get("01-elements"),
}

