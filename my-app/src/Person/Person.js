import React from 'react';
import './Person.css'
const person = (props) => {
    return (
        <div className='Person'>
            <p onClick={props.myclick}>hhh{props.name}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} defaultValue={props.name}/>
        </div>
    )
}

//kkS

//ooooooooo==ooooooooo
//ohou
export default person;