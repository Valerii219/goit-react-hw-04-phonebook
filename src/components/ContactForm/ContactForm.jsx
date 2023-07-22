import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";
const { Component } = require("react");


class ContactForm extends Component{
    state = {
        name: '',
        number: ''
    }
   
    
   
    handleChange = (e)=>{    
        this.setState({
          name:e.target.value,
        })
      }
    
      handleChangeNumber = (e)=>{
        this.setState({
          number:e.target.value,
          
        })
      }
     
     
      handleSubmit = (e)=>{
        e.preventDefault()
        const {name, number} = this.state;
        if(name === "" || number === ""){return
        }
    
        const newContact = {
          id:nanoid(),
          name:name,
          number:number,
        }
        this.setState((prevState)=>{
          return{
            newContact,
            name:"",
            number:"",
          }}) 
          this.props.addContact(newContact);
      }
      
render()
{const { name, number } = this.state;
    return(
    <form action="" onSubmit={this.handleSubmit}>
    <div className={css.formInp}>
      <label className={css.label}>Name</label>
    <input
    type="text"
    name="name"
    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required
    onChange={this.handleChange}
    value={name}
/>

<label className={css.label}>Number</label>
<input type="tel"
  name="number"
  
  pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
  onChange={this.handleChangeNumber}
    value={number}>
  </input>
  <button className={css.btn}> Add contact</button>
  </div>

</form>
    )
}



}









export default ContactForm;