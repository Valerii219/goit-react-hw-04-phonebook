import React from 'react';
import css from "./ContactList.module.css"
const ContactList = ({ contacts, onDeleteContact}) => {
  
  return (
    <ul>
      {contacts.map(({name,id, number}) => (
        <li key={id} className={css.itemList}>
          {name}: {number}
          <button onClick={()=> onDeleteContact(id)} className={css.btn}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
