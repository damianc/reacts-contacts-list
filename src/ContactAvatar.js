import React from 'react';

import get_gravatar from './md5';

class ContactAvatar extends React.Component {

    render() {
        var imgUrl;

        if (/^[a-z\d._]+@[a-z\d._]+\.[a-z\d._]+$/i.test(this.props.login)) {
            imgUrl = get_gravatar(this.props.login);
        } else {
            imgUrl = `https://api.adorable.io/avatars/55/${this.props.login}.png`;
        }

        return <img src={imgUrl} className="ui mini rounded image" />;
    }

}

export default ContactAvatar;
