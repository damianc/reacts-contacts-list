import React from 'react';

import ContactAvatar from './ContactAvatar';

class ContactItem extends React.Component {

	constructor(props) {
		super(props);
	}

	handleItemClick = (prefix, suffix, e) => {
		console.log(prefix + this.props.login + suffix + ' // ' + e.type);
	}

	render() {
		var {login, name, department} = this.props;
		return (
			<li className="item" onClick={e => this.handleItemClick('<', '>', e)}>
				<ContactAvatar login={login} />
				<div className="content">
					<h4 className="header">{name}</h4>
					<div className="description">{department}</div>
				</div>
			</li>
		);
	}

}

export default ContactItem;
