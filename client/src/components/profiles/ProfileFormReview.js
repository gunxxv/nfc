import _ from 'lodash'
import React from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
// import { formValues } from 'redux-form'
import formFields from './formFields'
import * as actions from '../../actions'

const ProfileFormReview = ({ onCancle, formValues, submitProfile }) => {
  const reviewFileds = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    )
  })

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFileds}
      <button
        className='yellow darken-3 btn-flat white-text'
        onClick={onCancle}
      >
        Back
      </button>
      <button 
        onClick={() => submitProfile(formValues)}
        className='green btn-flat right white-text'
      >
        Submit
      </button>
    </div>
  )
}

function mepStateToProps (state) {
  console.log(state)
  return {
    formValues: state.form.profileForm.values
  }
}

export default connect(mepStateToProps, actions)(ProfileFormReview)