import React, { useState } from 'react';
import { Form, Label, Input, SubmitButton } from './index';

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    onAddContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>Name:</Label>
      <Input
        type="text"
        name="name"
        pattern="^[a-zєіїA-Zа-яА-ЯІ]+(([' \-][a-zA-Zа-яєіїА-ЯІ ])?[a-zA-Zа-яєіїА-ЯІ]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={name}
        onChange={evt => setName(evt.target.value)}
        required
      />
      <Label>Number:</Label>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses, and can start with +"
        value={number}
        onChange={evt => setNumber(evt.target.value)}
        required
      />
      <SubmitButton type="submit">Add Contact</SubmitButton>
    </Form>
  );
};

export default ContactForm;
