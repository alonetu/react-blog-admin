import React, { Component } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SearchBlog from "./SearchBlog";
import { Route, HashRouter } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Sidebar />
        <HashRouter>
          <Route path="/search-blog" component={SearchBlog}></Route>
        </HashRouter>
      </div>
    );
  }
}

export default Home;
