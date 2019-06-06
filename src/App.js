import React from 'react';

import AppHeader from './AppHeader';
import ContactsList from './ContactsList';
import Resource from './Resource';

class App extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        Resource.getContacts().then(res => {
            this.setState({
                contacts: res
            });
        });
    }

    render() {
        return (
            <div>
                <AppHeader />
                <main className="ui main text container">
                    {this.state.contacts ? <ContactsList contacts={this.state.contacts} /> : 'Ładowanie...'}
                </main>
            </div>
        );
    }

}

export default App;
