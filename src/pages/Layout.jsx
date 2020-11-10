import React, { Component } from 'react';
import Navbar from "../components/Navbar";

class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar history={this.props.history} />
      </div>
    );
  }
}

export default Layout;