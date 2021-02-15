import React from 'react';
import '../../sass/main.scss';
import Task from '../component/task';
import { getIconById } from '../constants/categories';
import { Consumer } from '../store/appContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router';

const Posted = (props) => {
	return (
		<div className="w-70">
			<Consumer>
				{({ store, actions }) => {
					let { allTasks, pastTasks, account, users, candidates } = store;
					let tasks = allTasks;
					let user = users.filter((user) => user.username === account.username);

					return (
						<main>
							<div className="history__title">
								<h2>Tareas activas</h2>
							</div>
							{tasks
								.filter(
									(task) =>
										task.id === candidates[0].taskId ||
										task.id === candidates[candidates.length > 4 ? 4 : 1].taskId
								)
								.map((task) => {
									return (
										<article className="history__task-holder row" key={task.id}>
											<Task
												id={task.id}
												title={task.title}
												description={task.description}
												category={task.category}
												location={task.location}
												date={task.date}
												onClick={() => props.history.push(`/tasks/${task.id}`)}
												categoryIcon={getIconById(store.categories, task.category)}
											/>
											<aside>
												<Link to={`/tasks/${task.id}`}>
													{task.asignedTo === candidates[0].taskId ? (
														<h3 className="history__task-holder__text--completed">
															<FontAwesomeIcon icon="star" /> Asignada
														</h3>
													) : (
														<h3 className="history__task-holder__text--inactive">
															<FontAwesomeIcon icon="hourglass-half" /> Pendiente
														</h3>
													)}
												</Link>
											</aside>
										</article>
									);
								})}
							<div className="history__title--inactive">
								<h2>Tareas pasadas</h2>
							</div>
							{pastTasks.filter((task) => task.userId === user[0].id).map((task) => {
								return (
									<article className="history__task-holder row" key={task.id}>
										<p className="wrapper">No tienes tareas pasadas</p>
									</article>
								);
							})}
						</main>
					);
				}}
			</Consumer>
		</div>
	);
};

export default withRouter(Posted);
