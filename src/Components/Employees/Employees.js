import React from 'react';
import EmployeesRow from './EmployeesRow';

const Employees = props => {
    return (
        props.employees.map((employeeRow, index) =>
            <EmployeesRow
                key={index}
                row={employeeRow.rowContent}
                rowIndex={index}
                clicked={props.clicked} />)
    );
}

export default Employees;