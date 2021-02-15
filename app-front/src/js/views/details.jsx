import React from 'react';
import Offer from '../component/offer';
import { Consumer } from '../store/appContext';
import '../../sass/main.scss';
import { ChosenMessage, PendingMessage } from '../component/messages';
import { withRouter } from 'react-router';

class Details extends React.Component {
	constructor() {
		super();
		this.store = null;
		this.actions = null;
		this.state = {};
	}

	async componentDidMount() {
		let id = parseInt(this.props.match.params.id);
		if (this.actions !== null) {
			await this.actions.getTasks();
			await this.actions.getTask(id);
		}
	}

	render() {
		return (
			<Consumer>
				{({ store, actions }) => {
					this.actions = actions;
					this.store = store;
					let { candidates, currentTask, users } = store;
					let task = currentTask[0];
					let id = parseInt(this.props.match.params.id);

					if (task !== undefined) {
						let poster = users.find((user) => user.id === task.userId);
						let posterFullName = `${poster.name} ${poster.lastname}`;

						return (
							<main className="w-70">
								<header className="header">
									<h2 className="white-text">{task.title}</h2>
								</header>
								<div className="row details">
									<div className="details__header">
										<h3>¿Cuándo?</h3>
										<p>{task.date}</p>
									</div>
									<div className="details__header details__header--middle">
										<h3>¿Dónde?</h3>
										<p>{task.location}</p>
									</div>
									<div className="details__header">
										<h3>Pago:</h3>
										<p>$ {task.payment}</p>
									</div>
								</div>

								<div className="details__description">
									<h3>Descripción</h3>
									<p className="details__text">{task.description}</p>
								</div>

								{candidates.find((candidates) => candidates.taskId === task.id) ? candidates.find(
									(candidates) => candidates.userId === task.asignedTo
								) ? (
									<ChosenMessage user={posterFullName} email={poster.email} phone={poster.phone} />
								) : (
									<PendingMessage />
								) : (
									<Offer
										id={id}
										handleOffer={actions.handleOffer}
										handleSubmit={actions.handleOfferSubmit}
										payment={task.payment}
									/>
								)}
							</main>
						);
					}

					return <h1>La tarea que buscas no existe :( </h1>;
				}}
			</Consumer>
		);
	}
}

export default withRouter(Details);
