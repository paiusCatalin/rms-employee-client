import React from 'react';
import './Search.css';

const Search = props => {
    return (
        <div className='search'>
            <div className="input-group md-form form-sm form-1 pl-0">
                <div className="input-group-prepend">
                    <span className="input-group-text cyan lighten-2" id="basic-text1">
                        <i className="material-icons dp48">search</i>
                    </span>
                </div>
                <input className="form-control my-0 py-1" type="text" placeholder="Search for a RMS employee" aria-label="Search" onChange={props.changed}/>
            </div>
        </div>
    );
}

export default Search;