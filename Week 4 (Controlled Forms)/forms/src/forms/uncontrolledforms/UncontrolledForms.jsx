import React, { useRef } from 'react'

const UncontrolledForms = () => {

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    console.log(nameRef)

    const submitForm = (event) => {
        event.preventDefault();
        const formData = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        }

        console.log(formData)
    }

  return (
    <form onSubmit={submitForm}>
    <h1>Signup Form</h1>
    <div className='form-control'>
        <label>Name</label>
        <input ref={nameRef} type="text" />
    </div> 

    <div className='form-control'>
        <label>Email</label>
        <input ref={emailRef}  type="email" />
    </div> 

    
    <div className='form-control'>
        <label>password</label>
        <input ref={passwordRef} placeholder='Enter Password'  type="password"  />
    </div> 

    <div className='form-control'>
        <label>Confirm password</label>
        <input placeholder='Enter Password'  type="password"  />
    </div>

    <button type='submit'>Submit</button>

</form>
  )
}

export default UncontrolledForms