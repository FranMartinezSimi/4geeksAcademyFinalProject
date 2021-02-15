import React from 'react';
import '../../sass/main.scss';
import { Consumer } from '../store/appContext';
import Logo from '../component/logo';
import Input from '../component/input';

class Register extends Input {
	render() {
		return (
			<Consumer>
				{({ actions }) => {
					return (
						<div>
							<form className="register" onSubmit={this.handleRegister} method="post">
								<Logo />

								{this.renderInput('name', 'Nombre:')}
								{this.renderError('name')}
								{this.renderInput('lastname', 'Apellido:')}
								{this.renderError('lastname')}
								{this.renderInput('rut', 'RUT:')}
								{this.renderError('rut')}
								{this.renderInput('email', 'Mail:', 'email')}
								{this.renderError('email')}
								{this.renderInput('phone', 'Teléfono:', 'number')}
								{this.renderError('phone')}
								{this.renderInput('username', 'Nombre de usuario:')}
								{this.renderError('username')}
								{this.renderInput('password', 'Contraseña:', 'password')}
								{this.renderError('password')}
								{this.renderInput('thumbnail', 'Foto de perfil:', 'file')}
								{this.renderError('thumbnail')}

								{Object.keys(this.state.data).length >= 6 &&
								Object.keys(this.state.errors).length === 0 ? (
									this.renderButton('Crear cuenta')
								) : (
									this.renderDisabledButton('Crear cuenta')
								)}
							</form>
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default Register;
