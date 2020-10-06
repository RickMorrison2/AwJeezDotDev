import React from 'react';

const Input = props => {
    let inputElement = null;
    const inputClasses = [];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push('invalid');
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed}/>;
            break;
        case ('textarea'):
            inputElement = <textarea className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed}/>;
            break;
        default:
            inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed}/>;
            
    }
    
    return (
        <div>
            {inputElement}
        </div>
    )
};

export default Input;