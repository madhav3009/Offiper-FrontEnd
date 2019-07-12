import React from 'react';
import InputField from '../inputField/inputField';
import './address.scss';

export default function address() {
 return (
  <div class="address">
  <div class="row">
<div class="col">
   <InputField label="Name"/></div>

<div class="col">
   <InputField label="Address"/></div>

<div class="col">
   <InputField label="Pincode"/></div>
  </div><div class="row">
  <div class="col">
   <InputField label="Number"/></div>
 
  <div class="col">
   <InputField label="State"/></div>
  
  <div class="col">
   <InputField label="Landmark"/></div>
  </div>
  <button>Submit</button>
  </div>
 )
}
