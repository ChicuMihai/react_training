import React, { Component } from "react";

export default class CurrentUser extends Component {
  render() {
    return (
      <div>
        <p>User name:{this.props.name}</p>
        <p>User age:{this.props.age}</p>
        <button
          className="btn btn-default"
          onClick={() => this.props.setName("Maria")}
        >
          Edit User
        </button>
        <button
          className="btn btn-default"
          onClick={() => this.props.setAge(20)}
        >
          Set Age
        </button>
      </div>
    );
  }
}
