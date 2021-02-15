import React from 'react';
import '../../sass/main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Category extends React.Component {
	render() {
		return (
			<div className="category-icon">
				{this.props.icon === null || this.props.icon === undefined ? null : (
					<FontAwesomeIcon icon={this.props.icon} size="lg" />
				)}
			</div>
		);
	}
}

export default Category;
