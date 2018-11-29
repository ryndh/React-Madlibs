import React from 'react';

const Input = (props) => {
    return (
    <div className='input-wrap'>   
        <label className="num" >{props.index}</label>
        <input placeholder={props.placeholder} value={props.state} onChange={props.onChange} name={props.name}/>
        <label className='label'>{props.label}</label>        
    </div>
    )
}

export default Input;