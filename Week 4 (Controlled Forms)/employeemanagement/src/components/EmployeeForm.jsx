import React, { useState } from 'react'

const EmployeeForm = (props) => {

    const [employeeData, setEmployeeData] = useState({
        name: '',
        email: '',
        employmentType: ''
    });

    const submitData = (event) => {
        event.preventDefault();
        props.addEmployeeData(employeeData)
    }


    return (
        <form onSubmit={submitData}>
            <h1>Employee Form Entry</h1>

            <div className='form-control'>
                <label>Name</label>
                <input value={employeeData.name} type="text" onChange={e => setEmployeeData({ ...employeeData, name: e.target.value })} />
            </div>

            <div className='form-control'>
                <label>Email</label>
                <input value={employeeData.email} type="email" onChange={e => setEmployeeData({ ...employeeData, email: e.target.value })} />
            </div>

            <div className='form-control'>
                <label>Type</label>
                <select value={employeeData.employmentType} onChange={e => setEmployeeData({ ...employeeData, employmentType: e.target.value })}>
                    <option value="contract">Contract</option>
                    <option value="fullTime">Full Time</option>
                </select>
            </div>

            <button type='submit'>Submit</button>

        </form>
    )
}

export default EmployeeForm