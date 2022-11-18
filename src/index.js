import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


    
//   formSubmitHandler = data => {
//     const contact = {
//       id: nanoid(),
//       name: data.name,
//       number: data.number,
//     };


//     let contacts = this.state.contacts;

//     let arrayName = contacts.map(contact => contact.name);
//     arrayName.includes(contact.name)
//       ? window.alert(`${contact.name} is already in contacts`)
//       : this.setState(({ contacts }) => ({
//       contacts: [contact, ...contacts],
//     }));
//   };
 

//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

  
//   handlerRemoveButton = name => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.name !== name),
//     }));

//     this.setState({ filter: '' });
//   };

 

//   render() {
//     const { filter, contacts } = this.state;

//     const normalizedFilter = filter.toLocaleLowerCase();
//     const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

//     return (
//       <>
//         <Section title="Phonebook">
//           <ContactForm onSubmit={this.formSubmitHandler} />
//         </Section>
        
//         <Section title='Contacts'>
//           <Filter
//             value={this.state.filter}
//             onChange={this.changeFilter}
//           />
//           <ContactList
//             contacts={visibleContacts}
//             onClick={this.handlerRemoveButton}
//           />
//         </Section>
//       </>
//     )
//   }
// }