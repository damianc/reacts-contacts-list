import * as React from 'react';

import AppHeader from './AppHeader';
import ContactsList from './ContactsList';
import Resource from './Resource';

import { connect } from 'react-redux';
import { contactsFetched } from './actions';

export class App extends React.Component {

    componentDidMount() {
        Resource.getContacts().then(res => {
            this.props.contactsFetched(res);
        });
    }

    render() {
        return (
            <div>
                <AppHeader />
                <main className="ui main text container">
                    {this.props.contacts ? <ContactsList contacts={this.props.contacts} /> : 'Ładowanie...'}
                </main>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts
    };
};

const mapDispatchToProps = { contactsFetched };

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
