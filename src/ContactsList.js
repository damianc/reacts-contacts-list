import React from 'react';

import ContactItem from './ContactItem';

class ContactsList extends React.Component {
	render() {
		var contacts = this.props.contacts.map((contact, idx) => {
			return (
				<ContactItem
					key={idx}
					login={contact.login}
					name={contact.name}
					department={contact.department}
				/>
			);
		});

		return (
			<ul className="ui relaxed divided list selection">
				{contacts}
			</ul>
		);
	}

}

export default ContactsList;
