import React from 'react';
import '../../sass/main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Consumer } from '../store/appContext';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { ChosenUserMessage } from './messages';

class Applied extends React.Component {
	state = {
		order: 'asc',
		selected: ''
	};

	handleSort = () => {
		let { order } = this.state;

		if (order === 'asc') {
			this.setState({ order: 'desc' });
		} else {
			this.setState({ order: 'asc' });
		}
	};

	handleSelect = (item) => {
		this.setState({ selected: item });
		console.log(this.state);
	};

	render() {
		return (
			<Consumer>
				{({ store, actions }) => {
					let { allTasks, candidates, users } = store;
					let task = allTasks.find((task) => task.id === parseInt(this.props.match.params.id));
					let applicants = candidates.filter((candidate) => candidate.taskId === task.id);
					let desc = [ ...applicants ];

					let asc = applicants.sort((a, b) => {
						if (a.payment > b.payment) {
							return 1;
						}
						if (a.payment < b.payment) {
							return -1;
						}
						return 0;
					});

					let sorted = this.state.order === 'asc' ? asc : desc;

					return (
						<div className="w-70">
							<nav>
								<h3>
									Postulaciones recibidas para
									<Link to={`/tasks/${task.id}`}> {task.title}</Link>
								</h3>
							</nav>
							<table className="application">
								<thead>
									<tr>
										<th>
											<h6>Postulaciones</h6>
										</th>
										<th onClick={() => this.handleSort()}>
											<h6>
												Pago
												<FontAwesomeIcon
													icon={this.state.order !== 'asc' ? 'sort-up' : 'sort-down'}
												/>
											</h6>
										</th>
										<th />
									</tr>
								</thead>
								<tbody>
									{sorted.map((applicant) => {
										return (
											<tr key={applicant.userId}>
												<td className="user">
													<div className="user__thumbnail" />
													<div className="user__text">
														<h5>
															{users.find((user) => user.id === applicant.userId).name}
														</h5>
														<blockquote>"{applicant.description}"</blockquote>
													</div>
												</td>
												<td>
													<h5>${applicant.payment}</h5>
												</td>
												<td>
													{this.state.selected === '' ? (
														<button onClick={() => this.handleSelect(applicant.userId)}>
															Elegir
														</button>
													) : this.state.selected === applicant.userId ? (
														<h3 className="history__task-holder__text--completed">
															<FontAwesomeIcon icon="star" /> Elegido
														</h3>
													) : (
														<h3 className="history__task-holder__text--inactive">
															Descartado
														</h3>
													)}
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
							{this.state.selected === '' ? (
								''
							) : (
								<ChosenUserMessage user={users.find((user) => user.id === this.state.selected)} />
							)}
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default withRouter(Applied);
