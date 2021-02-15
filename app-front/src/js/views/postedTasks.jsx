import React from 'react';
import '../../sass/main.scss';
import { NavLink } from 'react-router-dom';
import Posted from './posted';

const PostedTasks = (props) => {
	return (
		<div className="w-70">
			<nav className="row justify-evenly task-navigation">
				<NavLink to="/posted" activeClassName="selectedLink">
					Tareas Publicadas
				</NavLink>
				<span className="gray-text">|</span>
				<NavLink to="/applied" className="inactive-link">
					Tareas Solicitadas
				</NavLink>
			</nav>
			<Posted />
		</div>
	);
};

export default PostedTasks;
