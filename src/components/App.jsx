import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ListContact/ContatcList";


export const App = () => {
  const storedContacts = JSON.parse(localStorage.getItem("contacts"));

  const [contacts, setContacts] = useState(storedContacts || [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleChangeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const handleAddContact = (newContact) => {
    const sameContact = contacts.find((contact) => contact.name === newContact.name);

    if (sameContact) {
      alert(`${sameContact.name} is already in contacts`);
      return;
    }

    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const newFilter = filter
    ? contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
    : contacts;

  return (
    <div style={{ padding: "35px" }}>
      <h2>Phonebook</h2>
      <ContactForm addContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter onChangeFilter={handleChangeFilter} filter={filter} />
      <ContactList contacts={newFilter} onDeleteContact={deleteContact} />
    </div>
  );
};