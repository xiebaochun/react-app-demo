import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Form from './form'
import Demo from './Demo'

class Test extends React.Component{
	componentDidMount() {
		
	}
	render() {
		const match = this.props.match

		return <div>
					<div>
						test
					</div>
	                <Switch>
	                    <Route path={`${match.url}/form`} name="Login Page" component={Form}/>
	                    <Route path={`${match.url}/demo`} name="Login Page" component={Demo}/>
	                </Switch>
				</div>
	}
}


export default Test