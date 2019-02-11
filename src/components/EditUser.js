import React, { Component } from "react";
import { connect } from "react-redux";
import CurrentUser from "./CurrentUser";
export class EditUser extends Component {
  render() {
    return <div />;
  }
}
const mapStateToProps = state => {
  return {
    name: state.user.name,
    age: state.user.age
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setName: name => {
      dispatch({
        type: "SET_NAME",
        payload: name
      });
    },
    setAge: age => {
      dispatch({
        type: "SET_AGE",
        payload: age
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentUser);
