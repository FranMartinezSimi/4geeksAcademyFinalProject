import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialMedia = () => {
	return (
		<section className="social-media">
			<p>o inicia sesión con:</p>
			<div className="row social-media__buttons">
				<button className="social-media-btn facebook" type="submit">
					<FontAwesomeIcon icon={[ 'fab', 'facebook-f' ]} />
				</button>
				<button className="social-media-btn google" type="submit">
					<FontAwesomeIcon icon={[ 'fab', 'google' ]} />
				</button>
			</div>
			<div className="login__outro">
				<small>
					¿No tienes cuenta?{' '}
					<Link to="/register">
						<span className="link">Crea una aquí</span>
					</Link>
				</small>
			</div>
		</section>
	);
};

export default SocialMedia;
