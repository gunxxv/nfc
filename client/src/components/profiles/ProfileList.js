import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchProfiles, deleteProfile } from '../../actions'


class ProfileList extends Component {
  async componentDidMount() {
    try {
      await this.props.fetchProfiles();
    } catch (e) {
      console.log(e)
    }
  }

  renderProfiles() {
      return this.props.profiles.map((profile) => {
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
                onClick={() => deleteProfile(profile._id)}
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


export default connect(mapStateToProps, { fetchProfiles, deleteProfile })(withRouter(ProfileList));