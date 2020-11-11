import React, { Component } from "react";

import API from '../api'

class Home extends Component {

  async componentDidMount() {
    const res = await API.getData()
    console.log(res)
    const postRes = await API.postData()
    console.log(postRes)
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
