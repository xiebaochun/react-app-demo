import React from 'react'
import { connect } from 'react-redux'


class Home extends React.Component {
	componentDidMount() {
		let { dispatch } = this.props
		dispatch({type: 'LOGIN'})
	}
	render() {
		return <div>
			{this.props.account.name}
			<div>hello</div>
		</div>
	}
}


export default connect((state) => { return {account: state.account} })(Home)