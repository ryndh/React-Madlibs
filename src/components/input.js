import React from 'react';

const Input = (props) => {
    return (
    <div className='input-wrap'>   
        <label className={props.state == '' ? "num empty" : "num filled"} >{props.index}</label>
        <input placeholder={props.placeholder} value={props.state} onChange={props.onChange} name={props.name}/>
        <label className='label'>{props.label}</label>        
    </div>
    )
}

export default Input;