
import { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";

import Filter from "./Filter/Filter";
import ContactList from "./ListContact/ContatcList";



export class App extends Component  {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  
  }
  componentDidMount() {
    const localContacts = localStorage.getItem("contacts");
  
    if (localContacts) {
      this.setState({ contacts: JSON.parse(localContacts) });
    }
   
  }

  componentDidUpdate(prevProps, prevState ){
    if(prevState.contacts !== this.state.contacts)
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
  }
  
  handleChangeFilter = e => {
    this.setState({ filter:e.currentTarget.value });
  };
  deleteContact = (contactId)=>{
    this.setState(prevState =>(
      {contacts:prevState.contacts.filter(contact=> contact.id !== contactId)

      }
    ))
  } 
  handleAddContact = (newContact) => {
    const sameContact = this.state.contacts.find(
      (contact) => contact.name === newContact.name
    );
  
    if (sameContact) {
      alert(`${sameContact.name}  is already in contacts`);
      return;
    }
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact]

    }));
  
  }

  render(){ 
    const { contacts, filter } = this.state;
    const newFilter =contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

    return (
<div style={{padding: "35px"}}>
<h2>Phonebook</h2>
<ContactForm addContact ={this.handleAddContact}/>
<h2>Contacts </h2>
<Filter onChangeFilter={this.handleChangeFilter} filter={filter} />
<ContactList contacts={newFilter} onDeleteContact={this.deleteContact} />
    </div>
    );
  }
  
};
