import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchProfiles, deleteProfile, editProfile } from '../../actions'


class ProfileList extends Component {
  componentDidMount() {
    this.props.fetchProfiles();
  }


  handleClickEdit() {
    this.props.editProfile()
  }

  handleClickRemove(id, history) {
    this.props.deleteProfile(id, history)
  }

  renderProfiles() {
    return this.props.profiles.map(profile => {
      return (
        <div className="card darken-1" key={profile._id}>
          <div className="card-content">
            <span className="card-title">{profile.profile_title}</span>
            <p>
              {profile._id}
            </p>
            <p className='right'>
              Created On: {new Date(profile.createOn).toLocaleDateString()}
            </p>
          </div>
          <div className='card-action'>
            {/* <a href={() => deleteProfile(profile._id)}>Remove</a> */}
            <button 
              onClick={() => this.handleClickEdit()}
              className='yellow darken-3 btn-flat white-text'
            >
              Edit
            </button>
            <button 
              onClick={() => this.handleClickRemove(profile._id, this.props.history)}
              className='yellow darken-3 btn-flat white-text'
            >
              Remove
            </button>
          </div>
        </div>
      );
    });    

  }

  render() {
    return (
      <div>
        {this.renderProfiles()}
      </div>
    )
  }
}

function mapStateToProps({ profiles }) {
  return { profiles };
};


export default connect(mapStateToProps, { fetchProfiles, deleteProfile, editProfile })(withRouter(ProfileList));