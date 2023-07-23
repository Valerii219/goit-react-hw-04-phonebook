import { useState } from "react";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";



const ContactForm =(props) =>{
  
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const handleChange = (e)=>{    
    setName ( e.target.value
            )}

    const handleChangeNumber = (e)=>{
      setNumber( e.target.value)
                    }

  const handleSubmit = (e)=>{
     e.preventDefault()
      if(name === "" || number === "")
      {return
      }
  
    const newContact = {
    id:nanoid(),
    name:name,
    number:number,
      };
     
     props.addContact(newContact);
     
         setName('');
         setNumber('');
                            }      

  return(
    <form action="" onSubmit={handleSubmit}>
    <div className={css.formInp}>       
    <label className={css.label}>Name</label>
    <input
    type="text"
    name="name"
    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required
    onChange={handleChange}
    value={name}
/>

<label className={css.label}>Number</label>
<input type="tel"
  name="number"
  
  pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
  onChange={handleChangeNumber}
    value={number}>
  </input>
  <button className={css.btn}> Add contact</button>
  </div>

</form>
  )
}

export default ContactForm;