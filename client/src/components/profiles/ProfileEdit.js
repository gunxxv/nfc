import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProfile, editProfile } from "../../actions";
import ProfileForm from "./ProfileForm";

class ProfileEdit extends Component {
  componentDidMount() {
    this.props.fetchProfile(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editProfile(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.profiles) {
      return <div>Loading...</div>;
    }
    // return <div>{this.props.profiles.profile_title}</div>;
    return (
      <div>
        <h5>Edit a Profiles</h5>
        <ProfileForm
          initialValues={this.props.profiles}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ profiles }) => {
  return {
    profiles,
  };
};

export default connect(mapStateToProps, { fetchProfile, editProfile })(
  ProfileEdit
);
