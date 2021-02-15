import React from 'react';
import '../../sass/main.scss';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from '../component/input';

/* const Account = () => {
	const [ phonenumber, setPhonenumber ] = useState({
		text: '56 9 657 477 55'
	});

	const [ email, setEmail ] = useState({
		text: 'cflastra@uc.cl'
	});

	const [ password, setPassword ] = useState({
		text: '*******'
	});

	const [ display, setDisplay ] = useState(true);

	const handleDisplay = () => {
		console.log(display);
		if (display === false) return setDisplay(true);
		else setDisplay(false);
	};

	const handleOnChange = (e) => {
		let name = e.target.name;
		let value = e.target.value;

		switch (name) {
			case 'phonenumber':
				setPhonenumber({ value });
				break;
		}
	};

	return (
		<div className="w-70">
			<Consumer>
				{({ store, actions }) => {
					return (
						<div className="user">
							<header className="user__card">
								<img
									className="thumbnail"
									src="https://avatars1.githubusercontent.com/u/49383737?s=460&v=4"
									alt=""
								/>
								<h2>Constanza Lastra</h2>
								<h3>@conilastra</h3>
							</header>

							<main className="user__data">
								<div className="user__data__container">
									<h5>Teléfono:</h5>
									<div className="user__data__container__edit">
										<span className={display ? 'show' : 'hide'}>{`+${phonenumber.text}`}</span>
										<input
											className={!display ? 'show' : 'hide'}
											type="text"
											placeholder={`+${phonenumber.text}`}
											name="phonenumber"
											onChange={(e) => handleOnChange(e)}
										/>
									</div>
								</div>
								<div className="user__data__container">
									<h5>Email:</h5>
									<div className="user__data__container__edit">
										<span className={display ? 'show' : 'hide'}>{email.text}</span>
										<input
											className={!display ? 'show' : 'hide'}
											type="text"
											placeholder={email.text}
											name="email"
										/>
									</div>
								</div>
								<div className="user__data__container">
									<h5>Contraseña:</h5>
									<div className="user__data__container__edit">
										<span className={display ? 'show' : 'hide'}>********</span>
										<input
											className={!display ? 'show' : 'hide'}
											type="password"
											placeholder="******"
											name="password"
										/>
									</div>
								</div>
								<button className={display ? 'show' : 'hide'}>
									Editar <FontAwesomeIcon onClick={() => handleDisplay()} icon="pencil-alt" />
								</button>
								<button className={!display ? 'show' : 'hide'}>Guardar</button>
							</main>
						</div>
					);
				}}
			</Consumer>
		</div>
	);
}; */

class Account extends Input {
	constructor() {
		super();
		this.state = {
			data: {
				phone: '965747755',
				email: 'cflastra@uc.cl',
				password: 'algo'
			},
			errors: {}
		};
		this.handleSubmit = (e) => {
			e.preventDefault();
			let data = this.state.data;
			this.setState({ data });
		};
	}

	render() {
		return (
			<div className="user">
				<header className="user__card">
					<img
						className="thumbnail"
						src="https://avatars1.githubusercontent.com/u/49383737?s=460&v=4"
						alt=""
					/>
					<h2>Constanza Lastra</h2>
					<h3>@conilastra</h3>
				</header>

				<form className="user__data" onSubmit={(e) => this.handleSubmit(e)}>
					<div className="user__data__container">
						<h5>Teléfono:</h5>
						<div className="user__data__container__edit">
							<input
								type="text"
								value={this.state.data.phone}
								name="phone"
								onChange={this.handleChange}
								onBlur={this.validation}
							/>
						</div>
						{this.renderError('phone')}
					</div>
					<div className="user__data__container">
						<h5>Email:</h5>
						<div className="user__data__container__edit">
							<input
								type="text"
								value={this.state.data.email}
								name="email"
								onChange={this.handleChange}
								onBlur={this.validation}
							/>
						</div>
						{this.renderError('email')}
					</div>
					<div className="user__data__container">
						<h5>Contraseña:</h5>
						<div className="user__data__container__edit row">
							<input
								type="password"
								value={this.state.data.password}
								name="password"
								onChange={this.handleChange}
								onBlur={this.validation}
							/>
						</div>
						{this.renderError('password')}
					</div>

					{this.renderButton('Guardar cambios')}
				</form>
			</div>
		);
	}
}

export default Account;
