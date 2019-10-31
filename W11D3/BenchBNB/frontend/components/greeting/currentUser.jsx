import React, { Component } from 'react'

class currentUser extends Component {

  // items = this.props.user ? "yes": "no"

  render() {
    return (
      <div>
        <h3>Welcome {this.props.user.username}</h3>
        <button onClick={this.props.logoutUser}>Log Out</button>
      </div>
    )
  }
}
export default currentUser;