import React from 'react'
import { connect } from 'react-redux'
import './styles/login.scss'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Row, Col } from 'antd';
import { login } from '../../actions/login'


function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class LoginForm extends React.Component{

	componentDidMount() {
	    // To disabled submit button at the beginning.
	    this.props.form.validateFields();
	}

	handleSubmit = e => {
    	e.preventDefault();
	    this.props.form.validateFields((err, values) => {
	      	if (!err) {
	        	console.log('Received values of form: ', values);
	        	this.props.dispatch(login(values.username, values.password)).then((res) => {
	        		//console.log(res)
	        		sessionStorage.setItem('accessToken', res.data)
	        		this.props.history.push('/')
	        	})
	      	}
	    });
	};

  	render() {
	    const { getFieldDecorator } = this.props.form;
	    return (
	    <Row type="flex" justify="center" style={{height: '100%', alignItems: 'center'}}>
	    	<Col >
		      <Form onSubmit={this.handleSubmit} className="login-form">
		        <Form.Item>
		          {getFieldDecorator('username', {
		            rules: [{ required: true, message: 'Please input your username!' }],
		          })(
		            <Input
		              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
		              placeholder="Username"
		            />,
		          )}
		        </Form.Item>
		        <Form.Item>
		          {getFieldDecorator('password', {
		            rules: [{ required: true, message: 'Please input your Password!' }],
		          })(
		            <Input
		              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
		              type="password"
		              placeholder="Password"
		            />,
		          )}
		        </Form.Item>
		        <Form.Item>
		          {getFieldDecorator('remember', {
		            valuePropName: 'checked',
		            initialValue: true,
		          })(<Checkbox>Remember me</Checkbox>)}
		          <a className="login-form-forgot" href="">
		            Forgot password
		          </a>
		          <Button type="primary" htmlType="submit" className="login-form-button">
		            Log in
		          </Button>
		          Or <a href="">register now!</a>
		        </Form.Item>
		      </Form>
		     </Col>
	     </Row>
	    );
  	}
}

const Login = Form.create({ name: 'normal_login' })(LoginForm);

export default connect(state => {
	return {
		account: state.account
	}
})(Login)