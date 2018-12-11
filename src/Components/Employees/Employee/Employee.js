import React from 'react';
import './Employee.css';

const imagePath = '/images/Assets/[ID].PNG';

const Employee = props => {
    const menuId = 'menu' + props.id;
    const imageAlt = props.name;
    return (
        <div id={props.id} className='employee col-sm-10 col-md-4 col-lg-3'>
            <div className='top'>
                <div className='edit'>
                    <i className='material-icons dp48'>edit</i>
                </div>
                <div className='avatar'>
                    <img src={imagePath.replace('[ID]', props.id)} alt={imageAlt}></img>
                </div>
                <div className='delete'>
                    <i className='material-icons dp48'>delete_sweep</i>
                </div>
            </div>

            <div className='middle'>
                <div className='top-middle'>
                    <div className='h3 name'>{props.name}</div>
                    <div className='id'>
                        <span>{props.id}</span>
                    </div>
                </div>
                <div className='down-middle'>
                    <span>{props.position}</span>
                    <span>{props.project}</span>
                    <span>{props.employedTime}</span>
                </div>
            </div>
            <div className='floor'>
                <div className='more-details'>
                    <label htmlFor={menuId} onClick={event => props.clicked(event, props.id)}>
                        More details
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Employee;