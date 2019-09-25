import React from 'react';
const aol = value =>
    value && /.+@aol\.com/.test(value) ?
    'Really? You still use AOL for your email?' : undefined;
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;

const maxValue = max => value =>
    value && value < max ? `should not be grater then ${max}` : undefined;

const maxValue20 = maxValue(20);

const inputField = ({ input, label, type, meta: { touched, error, warning } }) => ( 
    <>
        <label className="sr-only">{label}</label>
        <input className="form-control form-control-sm"
        {...input }
        placeholder = { label }
        type = { type }
        /> 
        { touched && ((error && <span> { error } </span> ) || (warning && <span> { warning } </span> )) } 
    </>
)
const selectField = ({ input, type, label, options, optionName, optionValue, defaultValue, meta: { touched, error }, ...custom }) => ( 
    <div>
        <label id = { label } > { label } </label> 
        <select native input = { <input id = { label }/>} error = { touched && !!error } {...input } {...custom } >
            <option value = "" > </option> 
            {options.map(d => {
                return ( 
                    <option key = { d[optionValue] } value = { d[optionValue] } > { d[optionName] } </option>
                    )
                })
            } 
        </select> 
        {/* {(touched && error) ? <FormHelperText error > { error } </FormHelperText>: ''}  */}
    </div>    
)
export { inputField, selectField };