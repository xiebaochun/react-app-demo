import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'antd'


class Home extends React.Component {
	componentDidMount() {
		let { dispatch } = this.props
		dispatch({type: 'LOGIN'})
	}
	render() {
		return <div>
			{/*this.props.account.name*/}
			<div>Home</div>
			<Row>
			    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
			      Col
			    </Col>
			    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
			      Col
			    </Col>
			    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
			      Col
			    </Col>
			</Row>
		</div>
	}
}


export default connect((state) => { return {account: state.account} })(Home)