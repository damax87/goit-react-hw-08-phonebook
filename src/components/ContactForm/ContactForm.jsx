import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/contacts/contacts-operations";
import { selectContacts } from 'redux/contacts/contacts-selectors';
import { FormContact } from "./ContactForm.style";
import { FormInput } from "./ContactForm.style";
import { FormButton } from "./ContactForm.style";
import { ContactFormLabel } from "./ContactForm.style";

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const items = useSelector(selectContacts);

  const handleChange = event => {
      const {name, value} = event.target;

      switch(name) {
        case 'name':
        setName(value);
        break;

        case 'number':
          setNumber(value);
          break;

          default: 
          return;
      }
    };

    const handleFormSubmit = event => {
    event.preventDefault();
    const contactsLists = [...items];
    if (contactsLists.findIndex(contact => name === contact.name) !== -1) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContact({ name, number }));
    }
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

    return (
    <FormContact onSubmit={handleFormSubmit}>
        <ContactFormLabel>
      Name<FormInput
  type="text"
  name="name"
  value={name}
  onChange={handleChange}
  placeholder='Ex: David Guetta'
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
      </ContactFormLabel>
      <ContactFormLabel>
      Number<FormInput
  type="tel"
  name="number"
  value={number}
  onChange={handleChange}
  placeholder='Ex: XXX-XX-XX'
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
      </ContactFormLabel>
      <FormButton type='submit'>Add Contact</FormButton>
    </FormContact>
    )};
