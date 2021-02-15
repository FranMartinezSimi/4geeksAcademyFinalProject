import React from 'react';
import '../../sass/main.scss';
import { Consumer } from '../store/appContext';
import { getCurrentDate, getMaxDate } from '../constants/utils';
import Input from '../component/input';

class Post extends Input {
	hideCalendar = (e) => {
		e.preventDefault();
		return false;
	};

	render() {
		let today = getCurrentDate();
		let maxDate = getMaxDate();

		return (
			<Consumer>
				{({ store, actions }) => {
					return (
						<div className="container">
							<form
								autoComplete="off"
								className="post"
								onSubmit={(e) => {
									e.preventDefault();
									actions.handleTaskSubmit(this.state.data);
									this.props.history.push('/posted');
								}}
							>
								<legend>
									<h2>Crea una nueva tarea</h2>
								</legend>

								{this.renderInput('title', 'Título:', 'text', 'Describe brevemente qué necesitas')}
								{this.renderError('title')}

								<label>Categoría</label>
								<select name="category" onChange={this.handleChange} onBlur={this.validation}>
									<option value="">--Selecciona la categoría correspondiente--</option>
									{store.categories
										.filter((category) => category.name !== 'Todas')
										.map((category, i) => {
											return (
												<option value={category.id} key={category.id}>
													{category.name}
												</option>
											);
										})}}
								</select>
								{this.renderError('category')}

								{this.renderInput(
									'date',
									'Fecha:',
									'date',
									today,
									today,
									maxDate,
									today,
									this.hideCalendar
								)}

								{this.renderError('date')}

								<label>Lugar</label>
								<select onChange={this.handleChange} onBlur={this.validation} name="location">
									<option value="">--Selecciona la comuna donde ocurrirá la tarea--</option>
									{store.cities.map((city) => {
										return (
											<option value={city.name} key={city.id}>
												{city.name}
											</option>
										);
									})}}
								</select>
								{this.renderError('location')}

								<label>Descripción</label>
								<textarea
									name="description"
									minLength="10"
									maxLength="200"
									rows="5"
									placeholder="Explica los detalles de tu tarea: en qué consiste, cuánto tiempo durará, qué esperas que se cumpla"
									onChange={this.handleChange}
									onBlur={this.validation}
								/>
								{this.renderError('description')}

								<label>Pago ofrecido</label>
								<div className="row">
									<span>$ </span>

									<input
										className="payment"
										name="payment"
										placeholder="ej: 10.000"
										onChange={this.handleChange}
										onBlur={this.validation}
									/>
								</div>
								{this.renderError('payment')}

								{Object.keys(this.state.data).length === 6 &&
								Object.keys(this.state.errors).length === 0 ? (
									this.renderButton('Enviar')
								) : (
									this.renderDisabledButton('Enviar')
								)}

								<div className="row go-back">
									<small className="link" onClick={this.props.history.goBack}>
										Volver atrás
									</small>
								</div>
							</form>
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default Post;
