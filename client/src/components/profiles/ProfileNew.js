//Profile Shows ProfileForm and ProfileFormReview
import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import ProfileForm from "./ProfileForm";
import ProfileFormReview from "./ProfileFormReview";
import { submitProfile } from "../../actions";

class ProfileNew extends Component {
  state = { showFormReview: false };

  // renderContent() {
  //   if (this.state.showFormReview) {
  //     return <ProfileFormReview
  //       onCancle={() => this.setState({ showFormReview:false })}
  //     />
  //   }

  //   return <ProfileForm onProfileSubmit={() => this.setState({ showFormReview: true })}/>
  // }

  onSubmit = (formValues) => {
    this.props.submitProfile(formValues);
  };

  render() {
    return (
      <div>
        <ProfileForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { submitProfile })(ProfileNew);

// export default reduxForm({
//   form: "profileForm",
// })(ProfileNew);
