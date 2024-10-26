
import './NameBoard.css';
import data from '../../assets/data.json';  // Adjust the path as necessary
import { NameCard } from '../NameCard/NameCard';

export const NameBoard = () => {
  const employeeList = data[0].data;  // Accessing the data assuming data.json is structured with an array at root

  return (
    <div className="id-nameboard">
      {employeeList.map(employee => (
        <NameCard 
          key={employee.id}
          imgUrl={employee.avatar}
          fName={employee.first_name}
          lName={employee.last_name}
          email={employee.email}
        />
      ))}
    </div>
  );
};
