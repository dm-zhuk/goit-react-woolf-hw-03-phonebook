import React from 'react';
import { FindResults, OnDeleteButton } from './index';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <FindResults key={contact.id}>
          {contact.name} - {contact.number}
          <OnDeleteButton onClick={() => onDeleteContact(contact.id)}>
            Delete
          </OnDeleteButton>
        </FindResults>
      ))}
    </ul>
  );
};

export default ContactList;
