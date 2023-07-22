import css from "./Filter.module.css"
const Filter= ({onChangeFilter, filter}) =>(
<div className={css.input}>
    <label>Find contacts by name </label>
<input type="text" 

name="filter"
onChange={onChangeFilter}
value={filter}
/>

</div>)



export default Filter;

