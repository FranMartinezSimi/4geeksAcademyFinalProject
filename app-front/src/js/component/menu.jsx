import React from 'react';
import '../../sass/main.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Menu extends React.Component {
	render() {
		return (
			<ul className={this.props.className}>
				<Link to="/tasks">
					<li>
						<FontAwesomeIcon icon="home" /> Inicio
					</li>
				</Link>

				<Link to="/posted">
					<li>
						<FontAwesomeIcon icon="tasks" /> Mis tareas
					</li>
				</Link>
				<Link to="/account">
					<li>
						<FontAwesomeIcon icon="user" /> Mi cuenta
					</li>
				</Link>
				<Link to="/">
					<li className="bottom">
						<FontAwesomeIcon icon="sign-out-alt" /> Cerrar sesión
					</li>
				</Link>
			</ul>
		);
	}
}

export default Menu;
