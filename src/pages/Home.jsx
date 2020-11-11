import React, { Component } from "react";

import API from '../api'

class Home extends Component {

  async componentDidMount() {
    const res = await API.getData()
    console.log(res)
  }

  render() {
    return (
      <div>
        home
      </div>
    );
  }
}

export default Home;
