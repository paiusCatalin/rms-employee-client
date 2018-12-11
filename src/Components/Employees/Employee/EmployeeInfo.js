import React from 'react';
const imagePath = '/images/Assets/[ID].PNG';

class EmployeeInfo extends React.Component {
    render() {

        if (!this.props.employee) {
            return null;
        }
        const menuId = 'menu' + this.props.employee.id;
        const imageAlt = this.props.employee.name;

        return (
            <div>
                <div className='popup-container'
                    id={this.props.employee.id + '_info'}
                    onClick={event => this.props.clicked(this.props.employee.id)} >

                </div>
                <div className='popup show'>
                    <div className='top'>
                        <div className='avatar'>
                            <img src={imagePath.replace('[ID]', this.props.employee.id)} alt={imageAlt}></img>
                        </div>
                    </div>

                    <div className='middle'>
                        <div className='top-middle'>
                            <div className='h3 name'>{this.props.employee.name}</div>
                            <div className='id'>
                                <span>{this.props.employee.id}</span>
                            </div>
                        </div>
                        <div className='down-middle'>
                            <span>{this.props.employee.position}</span>
                            <span>{this.props.employee.project}</span>
                            <span>{this.props.employee.employedTime}</span>
                        </div>
                    </div>

                    <div className='floor'>
                        <div className='contact'>
                            <label htmlFor={menuId}>Contact info</label>
                            <div className='info'>
                                <div className='h6'>
                                    <span className='left'>Date and place of Birth: </span>
                                    <span className='right'>{this.props.employee.dateOfBirt} - {this.props.employee.placeOfBirt}</span>
                                </div>
                                <div className='h6'>
                                    <span className='left'>Phone number: </span>
                                    <span className='right'>{this.props.employee.phone ? ('+40' + this.props.employee.phone) : ' - '}</span>
                                </div>
                                <div className='h6'>
                                    <span className='left'>E-mail: </span>
                                    <span className='right'>{this.props.employee.email ? this.props.employee.email : ' - '}</span>
                                </div>
                                <div className='h6'>
                                    <span className='left'>Teams E-mail: </span>
                                    <span className='right'>{this.props.employee.MSteamsID ? this.props.employee.MSteamsID : ' - '}</span>
                                </div>
                                <div className='motto'>
                                    <p>{this.props.employee.motto}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EmployeeInfo;