import React from 'react'

const EmployeeTable = ({ employeeList }) => {
  return (
    <table>
      <th>
        Name
      </th>
      <th>
        Email
      </th>
      <th>
        Employement Type
      </th>

      {
        employeeList.map((employee) => {
          return <tr>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.employmentType}</td>
          </tr>
        })
      }
    </table>
  )
}

export default EmployeeTable