import { useState } from 'react';
import ContactList from './components/contacts/ContactList';
import ContactForm from './components/contacts/ContactForm';
const App = ({}) => {
  const [contacts, setContacts] = useState([
    {id: 1, firstName: "Tyler", phone: "123-123-1234"},
    {id: 2, firstName: "Jerry", phone: "123-321-4321"},
    {id: 3, firstName: "Patrick", phone: "123-231-1324"},
  ])

  const getId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  const addContact = (incommingContact) => {
    let newContact = { id: getId(), ...incommingContact }
    setContacts([...contacts, newContact])
  }

  const removeContact = (id) => {
    setContacts(contacts.filter( c => c.id !== id))
  }

  const updateContact = (id, incommingContact) => {
    const updatedContacts = contacts.map( c => {
      if (c.id === id) {
        return incommingContact
      }
      return c
    })
    setContacts(updatedContacts)
  }

  return(
    <>
      <ContactForm addContact={addContact} />
      <ContactList 
        contacts={contacts} 
        removeContact={removeContact} 
        updateContact={updateContact}
      />
    </>
  )
}
export default App;