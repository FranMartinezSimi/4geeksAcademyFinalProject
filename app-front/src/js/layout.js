import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Login from './views/login';
import Home from './views/home';
import Details from './views/details';
import Register from './views/register';
import Post from './views/post';
import Posted from './views/posted';
import Account from './views/account';
import Applied from './views/appliedTasks';
import Applications from './component/applications';

// Layouts
import DashboardLayoutRoute from './templates/dashboard';
import PublicLayoutRoute from './templates/public';

// Context
import injectContext from './store/appContext';
import PostedTasks from './views/postedTasks';

class Layout extends React.Component {
	render() {
		return (
			<div className="d-flex flex-column h-100">
				<div>
					<BrowserRouter>
						<Switch>
							<PublicLayoutRoute exact path="/" component={Login} />
							<PublicLayoutRoute exact path="/register" component={Register} />
							<DashboardLayoutRoute path="/tasks/:id" component={Details} />
							<DashboardLayoutRoute path="/posted" component={PostedTasks} />
							<DashboardLayoutRoute path="/applied" component={Applied} />
							<DashboardLayoutRoute path="/tasks" component={Home} />
							<DashboardLayoutRoute path="/new" component={Post} />
							<DashboardLayoutRoute path="/account" component={Account} />
							<DashboardLayoutRoute path="/posted/:id" component={Posted} />
							<DashboardLayoutRoute path="/applications/:id" component={Applications} />
							<DashboardLayoutRoute path="/mytasks/applied/:id" component={Applied} />

							<Route render={() => <h1>Esta página no existe :(</h1>} />
						</Switch>
					</BrowserRouter>
				</div>
			</div>
		);
	}
}

export default injectContext(Layout);
