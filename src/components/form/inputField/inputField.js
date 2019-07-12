import React from 'react';
import './inputField.scss';

const InputField=props=> {
 return (
  <div>
   <div class="inputField"><label htmlFor={props.label}>{props.label}</label> <input type="text" /></div>
  </div>
 )
}
export default InputField;