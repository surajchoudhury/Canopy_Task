import React, { Component } from "react";
import LandingPage from "../components/LandingPage";
import Holdings from "../components/Holdings";
import Networth from "../components/Networth";
import { Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Home extends Component {
  render() {
    return (
      <main>
        <Header />
        <Route exact path="/" component={LandingPage} />
        <Route path="/networth" component={Networth} />
        <Route path="/holdings" component={Holdings} />
        <Footer />
      </main>
    );
  }
}

export default Home;
