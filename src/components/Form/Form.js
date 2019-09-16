import React from 'react';
import { Field, reduxForm } from 'redux-form';

const aol = value =>
    value && /.+@aol\.com/.test(value) ?
    'Really? You still use AOL for your email?' : undefined;
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;

const maxValue = max => value =>
    value && value < max ? `should not be grater then ${max}` : undefined;

const maxValue20 = maxValue(20);

// const inputField =

//     class inputField extends React.Component {


//     }

// class DropDown extends React.Component {

// }

// export { inputField, DropDown };