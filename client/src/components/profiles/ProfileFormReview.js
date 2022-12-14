import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import formFields from './formFields'
import { withRouter } from 'react-router-dom'
import * as actions from '../../actions'

const ProfileFormReview = ({ onCancle, formValues, submitProfile, history }) => {
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
        onClick={() => submitProfile(formValues, history)}
        className='green btn-flat right white-text'
      >
        Submit
      </button>
    </div>
  )
}

function mapStateToProps (state) {
  console.log(state)
  return {
    formValues: state.form.profileForm.values
  }
}

export default connect(mapStateToProps, actions)(withRouter(ProfileFormReview))