import React from 'react';
import '../../sass/main.scss';
import Task from '../component/task';
import { Consumer } from '../store/appContext';
import CategoryList from '../component/categoryList';

import { getIconById } from '../constants/categories';

const Home = (props) => {
	return (
		<div className="w-70">
			<CategoryList />
			<Consumer>
				{({ store, actions }) => {
					return store.tasks.map((task) => {
						return (
							<article className="task-holder" key={task.id}>
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
									<h5>$ {task.payment}</h5>
								</aside>
							</article>
						);
					});
				}}
			</Consumer>
		</div>
	);
};

export default Home;
