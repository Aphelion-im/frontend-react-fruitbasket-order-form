// !!! Nog niet gelukt om een select component te maken

import './Select.css';

const Select = (props) => {
  const options = [
    { value: '' },
    { value: 'Iedere week' },
    { value: 'Iedere maan' },
  ];

  return (
    <>
      <label htmlFor={props.id}>{props.label}:</label>
      <select
        options={options}
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={props.changeHandler}
      >
        {/* <option value="" selected>
          --Selecteer een optie--
        </option>
        <option value="Iedere week">Iedere week</option>
        <option value="Iedere maand">Iedere maand</option> */}
      </select>
    </>
  );
};

export default Select;

{
  /* <option value="" selected>
--Selecteer een optie--
</option>
<option value="Iedere week">Iedere week</option>
<option value="Iedere maand">Iedere maand</option> */
}
