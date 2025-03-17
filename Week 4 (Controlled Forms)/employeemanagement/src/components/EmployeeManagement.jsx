import React, { useEffect, useState } from 'react'
import EmployeeTable from './EmployeeTable'
import EmployeeForm from './EmployeeForm';

const EmployeeManagement = () => {


    const [employeeList, setEmployeeList] = useState([]);
    
    const handleNewEmployee = (newEmployee) => {
        console.log(newEmployee, 'new Employee')
        setEmployeeList((prevVal) => {
            return [...prevVal, newEmployee]
        });
    }

    // Parent -> Child
    // Child -> Parent

    return (
        <div>
            <EmployeeForm addEmployeeData = {(incomingData) => handleNewEmployee(incomingData)} />
            <EmployeeTable employeeList={employeeList} />
        </div>
    )
}

export default EmployeeManagement