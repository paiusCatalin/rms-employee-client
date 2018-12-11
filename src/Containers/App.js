import React, { Component } from 'react';
import axios from 'axios';

import Search from '../Components/Search/Search';
import Employees from '../Components/Employees/Employees';
import EmployeeInfo from '../Components/Employees/Employee/EmployeeInfo';

import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            initEmployees: null,
            employees: null,
            displayEmployeeInfo: false,
            displayedEmployeeOnPopup: null
        };
        axios.get('/Files/employees.json').then(response => {
            this.setState({
                initEmployees: response.data,
                employees: this.createRows(response.data, 6),
                displayEmployeeInfo: false,
                displayedEmployeeOnPopup: null
            });
        });
    }

    handleMoreDetailsPopup = (event, id) => {
        if (this.state.displayEmployeeInfo) {
            this.setState({
                displayEmployeeInfo: false,
                displayedEmployeeOnPopup: null
            });
            return null;
        }

        const employeeIndex = this.state.initEmployees.findIndex(emp => emp.id === id);
        if (employeeIndex === -1) return null;

        const employee = { ...this.state.initEmployees[employeeIndex] };
        this.setState({
            displayEmployeeInfo: true,
            displayedEmployeeOnPopup: employee,
            top: event.clientY,
            left: event.clientX
        });
    }

    createRows = (jsonData, elementsPerRow) => {
        const rows = [];
        let row = [];
        for (let index = 0; index < jsonData.length; ++index) {
            row.push({ ...jsonData[index] });
            if (row.length === elementsPerRow || index + 1 === jsonData.length) {
                rows.push({ rowContent: [...row] });
                row = [];
            };
        }
        return rows;
    }

    searchHandler = event => {
        const searchName = event.target.value.toLowerCase();
        axios.get('/Files/employees.json').then(response => {
            const matchedEmployees = response.data.filter(el => el.name.toLowerCase().includes(searchName));
            this.setState({
                employees: this.createRows(matchedEmployees, 6)
            });
        });
    }

    render() {
        let employees = null;
        if (this.state) {
            if (this.state.employees) {
                employees = (
                    <Employees employees={this.state.employees}
                        clicked={this.handleMoreDetailsPopup} />
                );
            }
        }

        return (
            <div className="container">
                <Search changed={this.searchHandler} />
                <EmployeeInfo
                    employee={this.state.displayedEmployeeOnPopup}
                    displaye={this.state.displayEmployeeInfo}
                    clicked={this.handleMoreDetailsPopup} />
                {employees}
            </div>
        );
    }
}

export default App;
