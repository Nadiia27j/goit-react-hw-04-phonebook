import { useState } from 'react';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import  useLocalStorage  from 'hooks/useLocalStorage';




export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');



  const formSubmit = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    }; 
    
   if (contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
    toast.error(`${newContact.name} is already in contacts`);
    return;
   }

   setContacts(contacts => [newContact, ...contacts]);
  };

  const changeFilter = e => {
    setFilter( e.currentTarget.value );
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };


  const handlerRemoveButton = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };


  return (
    <>
      <Section title="Phonebook">
        <ContactForm onSubmit={formSubmit} />
      </Section>

      <Section title="Contacts">
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={getVisibleContacts()}
          onClick={handlerRemoveButton}
        />
      </Section>
    </>
  );
};
