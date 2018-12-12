import React from 'react';
import axios from 'axios';
import './Employee.css';

let imagePath = '/images/Assets/[ID].PNG';

class Employee extends React.Component {
    constructor(props) {
        super();
        axios.get(imagePath.replace('[ID]', props.id)).then(response => {
            this.setState({ imagePath: imagePath.replace('[ID]', props.id) });
        }).catch(error => {
            this.setState({ imagePath: imagePath.replace('[ID]', 'NO_ID') });
        });
    }

    render() {
        if (this.state && this.state.imagePath) {
            const menuId = 'menu' + this.props.id;
            const imageAlt = this.props.name;

            return (
                <div id={this.props.id} className='employee col-sm-10 col-md-4 col-lg-3'>
                    <div className='top'>
                        <div className='edit'>
                            <i className='material-icons dp48'>edit</i>
                        </div>
                        <div className='avatar'>
                            <img src={this.state.imagePath} alt={imageAlt}></img>
                        </div>
                        <div className='delete'>
                            <i className='material-icons dp48'>delete_sweep</i>
                        </div>
                    </div>

                    <div className='middle'>
                        <div className='top-middle'>
                            <div className='h3 name'>{this.props.name}</div>
                            <div className='id'>
                                <span>{this.props.id}</span>
                            </div>
                        </div>
                        <div className='down-middle'>
                            <span>{this.props.position}</span>
                            <span>{this.props.project}</span>
                            <span>{this.props.employedTime}</span>
                        </div>
                    </div>
                    <div className='floor'>
                        <div className='more-details'>
                            <label htmlFor={menuId} onClick={event => this.props.clicked(this.props, this.state.imagePath)}>More details</label>
                        </div>
                    </div>
                </div>
            );
        } else {
            return null;
        }


    }
}

export default Employee;