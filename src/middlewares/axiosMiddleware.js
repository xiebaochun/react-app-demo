export default () => {
	return (config) => (next) => (action) => {
		//console.log(action)
		next(action)
	}
}