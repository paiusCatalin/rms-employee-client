import React from 'react';
import Employee from './Employee/Employee';

const EmployeesRow = props => {
    let employees = (
        props.row.map((employee, index) =>
            <Employee
                index={props.rowIndex * props.row.length + index}
                id={employee.id ? employee.id : 'no-id-' + props.rowIndex * props.row.length + index}
                key={employee.id ? employee.id : 'no-id-' + props.rowIndex * props.row.length + index}
                name={employee.name}
                email={employee.email}
                motto={employee.motto}
                phone={employee.phone}
                project={employee.project}
                position={employee.position}
                MSteamsID={employee.MSteamsID}
                dateOfBirt={employee.dateOfBirt}
                placeOfBirt={employee.placeOfBirt}
                employedTime={employee.employedTime} 
                clicked={props.clicked}/>)
    );

    return (
        <div className='row'>
            {employees}
        </div>
    );
}

export default EmployeesRow;