import React from 'react';
import { Route } from 'react-router-dom';

const PublicLayout = ({ children }) => <main className="container">{children}</main>;

const PublicLayoutRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(matchProps) => (
				<PublicLayout>
					<Component {...matchProps} />
				</PublicLayout>
			)}
		/>
	);
};

export default PublicLayoutRoute;
