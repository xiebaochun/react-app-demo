import React from 'react'
import {Field, reduxForm} from "redux-form"

class testForm extends React.Component {
	componentDidMount() {
		
	}


	render() {
		let { handleSubmit } = this.props
		return (
			<form onSubmit={handleSubmit}>
				<div>
			        <label htmlFor="firstName">First Name</label>
			        <Field name="firstName" component="input" type="text" />
			      </div>
			      <div>
			        <label htmlFor="lastName">Last Name</label>
			        <Field name="lastName" component="input" type="text" />
			      </div>
			      <div>
			        <label htmlFor="email">Email</label>
			        <Field name="email" component="input" type="email" />
			      </div>
			      <button type="submit">Submit</button>
			</form>)
	}
}

let MyForm = reduxForm({
    form: 'homeForm'
})(testForm)

class Form extends React.Component {
	handleSubmit = values => {
		console.log(values)
	}

	render() {
		return (
			<MyForm onSubmit={this.handleSubmit} />
			)
	}
}

export default Form