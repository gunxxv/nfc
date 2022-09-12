import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProfiles } from '../../actions'

class ProfileList extends Component {
  componentDidMount() {
    this.props.fetchProfiles();
  }

  renderProfiles() {
    return this.props.profiles.map((profile) => {
      return (
        <div className="card darken-1" key={profile._id}>
          <div className="card-content">
            <span className="card-title">{profile.profile_title}</span>
            <p>
              {profile.body}
            </p>
            <p className='right'>
              TEST
            </p>
          </div>
          <div className='card-action'>
            <a>Edit</a>
            <a>Remove</a>
          </div>
        </div>
      );
    });

    // return (
    //   <div>
    //     renderProfiles
    //   </div>
    // )

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
}

export default connect(mapStateToProps, { fetchProfiles })(ProfileList);