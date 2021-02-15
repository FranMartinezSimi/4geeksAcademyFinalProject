import React from 'react';
import { withRouter } from 'react-router';
import '../../sass/main.scss';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Offer extends React.Component {
	state = {
		payment: this.props.payment
	};

	render() {
		return (
			<form
				autoComplete="off"
				onSubmit={(e) => {
					e.preventDefault();
					this.props.handleSubmit(this.props.id);
					this.props.history.push('/applied');
				}}
			>
				<legend>
					<h3>Postula a esta tarea</h3>
				</legend>
				<label>Explica por qué eres la persona indicada para completar esta tarea</label>
				<textarea
					name="description"
					minLength="20"
					maxLength="200"
					rows="5"
					placeholder="Detalla todas las razones que te hacen la persona ideal (experiencia, cercanía, gustos, entre otros)"
					onChange={(e) => this.props.handleOffer(e)}
					required
				/>

				<label>Pago propuesto</label>

				<div>
					<div className="row">
						$
						<input
							id="recievedPayment"
							name="payment"
							className="payment"
							placeholder={this.state.payment}
							onChange={(e) => this.props.handleOffer(e)}
							required
						/>
					</div>
					<small className="sm-text">Puedes aceptar el pago ofrecido o sugerir uno diferente</small>
				</div>

				<button className="small-btn" type="submit">
					Enviar
				</button>
			</form>
		);
	}
}

export default withRouter(Offer);
