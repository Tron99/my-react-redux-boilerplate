import React, { Component } from 'react';

import './App.css';
import {
	BrowserRouter as Router,
	Link,
	Route
} from 'react-router-dom'

class App extends Component {
	render() {
		return (
			<Router>
					<div className="App">
						<ul>
							<li><Link to="/link1">Link1</Link></li>
							<li><Link to="/link2">Link2</Link></li>
							<li><Link to="/link3">Link3</Link></li>
						</ul>
						<Router exact path="/home" commponent={}>
					</div>
			</Router>
		);
	}
}

export default App;
