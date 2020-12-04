import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Movies from './schenes/Movies';
import People from './schenes/People';
import PeopleDetail from './schenes/People-Detail';

class Routes extends Component {
render() {
    return(
			<div>
				<Switch>
					<Route exact path="/" component={Movies}/>
					<Route path="/people/:id" component={PeopleDetail} />
					<Route path="/people" component={People}/>
					<Redirect to="/" />
				</Switch>
			</div>
    );
	}
}

export default Routes;