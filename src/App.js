import React from "react";
import {useState} from "react";

export default function Form (){
  const [form, setForm] = useState({
    firstName: 'Artem',
    lastName: 'Aleks',
    email: 'artem1234@gmail.com'
  })

  return(
      <>
        <label>
          Last Name:
          <input value={form.firstName} onChange={e => {setForm({...form, firstName: e.target.value})}}/>
        </label>
        <label>
          last Name:
          <input value={form.lastName} onChange={e => {setForm({...form, lastName: e.target.value})}}/>
        </label>
        <label>
          email:
          <input value={form.email} onChange={e => {setForm({...form, email: e.target.value})}}/>
        </label>
        <label>
            <p>
                {form.firstName} {""}
                {form.lastName} {""}({form.email})
            </p>
        </label>
      </>
  )
}