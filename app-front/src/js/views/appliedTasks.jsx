import React from 'react';
import '../../sass/main.scss';
import { NavLink } from 'react-router-dom';
import Aplied from './aplied';

const Applied = (props) => {
	return (
		<div className="w-70">
			<nav className="row justify-evenly">
				<NavLink to="/posted" className="inactive-link">
					Tareas Publicadas
				</NavLink>
				<span className="gray-text">|</span>
				<NavLink to="/applied" activeClassName="selectedLink">
					Tareas Solicitadas
				</NavLink>
			</nav>
			<Aplied />
		</div>
	);
};

export default Applied;
