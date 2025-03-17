import React, { useEffect, useState } from 'react'
import './ControlledForm.css';

const ControlledForm = () => {

//  const [name, setName] = useState('John Doe');
//  const [email, setEmail] = useState('john@gmail.com');
//  const [password, setPassword] = useState('');

 const [formData, setFormData]= useState({
    name: 'John',
    email: '',
    password: '',
    confirmPassword: ''
 })

 const [formSubmitted, setFormSubmitted] = useState(false);


  // If your dependency array is empty , your useEffect will be called only when it is mounted
 useEffect(() => {
    console.log('Only called on mounting');
 }, []);

  // If your dependency array has value , your useEffect will be called  when it is mounted + When it is updated
 useEffect(() => {
   console.log('Is Form Submitted : ' + formSubmitted);
   console.log('Will also be  called on mounting + Updating');

   return () => {
        console.log('Componet Destroyed')
   }
 }, [formSubmitted])


 
 const submitData = (e) => {
    e.preventDefault();
    setFormSubmitted(!formSubmitted);
 }

  return (
    <>
        <form  onSubmit={submitData}>
            <h1>Signup Form</h1>
            <div className='form-control'>
                <label>Name</label>
                <input value={formData.name} type="text" onChange={e => setFormData({ ...formData, name: e.target.value})} />
            </div> 

            <div className='form-control'>
                <label>Email</label>
                <input value={formData.email} type="email" onChange={e => setFormData({ ...formData, email: e.target.value})} />
            </div> 

            
            <div className='form-control'>
                <label>password</label>
                <input placeholder='Enter Password'  value={formData.password} type="password" onChange={e => setFormData({ ...formData, password: e.target.value})}  />
            </div> 

            <div className='form-control'>
                <label>Confirm password</label>
                <input placeholder='Enter Password'  value={formData.confirmPassword} type="password" onChange={e => setFormData({ ...formData, confirmPassword: e.target.value})}  />
            </div>

            <button disabled={
                formData.confirmPassword === '' && formData.password === '' || formData.confirmPassword !== formData.password
            } type='submit'>Submit</button>

        </form>
    </>

  )
}


// Why we use default here ControlledForm
export default ControlledForm;