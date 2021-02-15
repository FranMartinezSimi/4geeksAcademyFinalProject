import React from 'react';
import '../../sass/main.scss';

import { Consumer } from '../store/appContext';
import { withRouter } from 'react-router';
/* import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { facebookID } from '../store/data/apiID'; */

import Logo from '../component/logo';
import Input from '../component/input';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { Animated } from 'react-animated-css';

class Login extends Input {
	/* componentDidMount() {
		let username = localStorage.getItem('username');
		let password = localStorage.getItem('password');
		console.log(username, password);
		this.setState({ username, password });
	} */

	/* responseFacebook = (response) => {
		console.log(response);
	};

	responseGoogle = (response) => {
		console.log(response);
	}; */

	render() {
		return (
			<Consumer>
				{({ store, actions }) => {
					this.store = store;
					this.actions = actions;
					return (
						<div className="container alpha-bg">
							<main>
								<header className="full-logo">
									<FontAwesomeIcon
										className="animated swing delay-5s	slower"
										icon="thumbtack"
										size="lg"
									/>

									<Logo />
								</header>

								<form
									autoComplete="off"
									className="login"
									onSubmit={(e) => {
										e.preventDefault();
										actions.handleLogin(this.state.data);
										this.props.history.push('/tasks');
										/* localStorage.setItem('username', this.state.data.username);
										localStorage.setItem('password', this.state.data.password); */
									}}
								>
									<label>Usuario:</label>
									<input name="username" onChange={this.handleChange} />

									<label>Contraseña:</label>
									<input name="password" type="password" onChange={this.handleChange} />

									{this.renderButton('Ingresar')}
								</form>
								<div className="login__outro swing">
									<small>
										¿No tienes cuenta?
										<Link to="/register">
											<span className="link"> Crea una aquí</span>
										</Link>
									</small>
								</div>
								{/* <SocialMedia /> */}
								{/* <FacebookLogin
									appId={facebookID}
									autoLoad
									callback={this.responseFacebook}
									render={(renderProps) => (
										<button onClick={renderProps.onClick}>This is my custom FB button</button>
									)}
								/>

								<GoogleLogin
									clientId="" //CLIENTID NOT CREATED YET
									buttonText="LOGIN WITH GOOGLE"
									onSuccess={this.responseGoogle}
									onFailure={this.responseGoogle}
								/> */}
							</main>
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default withRouter(Login);
