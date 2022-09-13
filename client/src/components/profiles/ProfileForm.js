//ProfileForm shows a form for a user to add input
import _ from 'lodash'
import React, { Component } from "react";
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import ProfileField from "./ProfileField";
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields'; 


class ProfileForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name}) => {
      return <Field key={name} component={ProfileField} type="text" label={label} name={name}/>
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onProfileSubmit)}>
          {this.renderFields()}
          <Link to="/profiles" className='red btn-flat white-text'>
            Cancle
          </Link>
          <button type="submit" className='teal btn-flat right white-text'>
            Next
            <i className='material-icons right'>done</i>
          </button>
        </form>
      </div>
    )
  }
}

function validate(values) {
  const errors = null;
  
  // if (!values.email1) {
  //   errors.email1 = 'Required'
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email1)) {
  //   errors.email1 = 'Invalid email address'
  // }


  // _.each(formFields, ({ name }) => {
  //   if (!values[name]) {
  //     errors[name] = 'กรุณากรอกข้อมูล'
  //   } 
  // })

  return errors
}

export default reduxForm({
  validate, 
  form: 'profileForm',
  destroyOnUnmount: false
})(ProfileForm)