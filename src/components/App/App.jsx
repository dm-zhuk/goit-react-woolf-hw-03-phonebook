import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container, Title, SubTitle } from './index';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import data from 'data/data.json';

class App extends Component {
  state = {
    contacts: data, // hard-code [data], on purpose of having the Initial State //
    filter: '',
  };

  handleAddContact = (name, number) => {
    const { contacts } = this.state;
    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isExist) {
      alert(`🚫 ${name} is already in contacts!`);
      return;
    }
    const newContact = { id: nanoid(), name, number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilterChange = evt => {
    this.setState({ filter: evt.target.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );

    return (
      <Container>
        <Title>✆ Phonebook ✆</Title>
        <ContactForm onAddContact={this.handleAddContact} />
        <SubTitle>Contacts</SubTitle>
        <Filter value={filter} onChange={this.handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </Container>
    );
  }
}

export default App;
