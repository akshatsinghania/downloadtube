import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Download } from './routes/download/Download';

const App = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route path='/' component={Download} />
				</Switch>
			</div>
		</Router>
	);
};
export default App;
