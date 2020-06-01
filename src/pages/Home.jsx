import React, { Component, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const Holdings = lazy(() => import("../components/Holdings"));
const Networth = lazy(() => import("../components/Networth"));
const LandingPage = lazy(() => import("../components/LandingPage"));

class Home extends Component {
  render() {
    return (
      <main>
        <Header />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/networth" component={Networth} />
            <Route path="/holdings" component={Holdings} />
          </Switch>
        </Suspense>
        <Footer />
      </main>
    );
  }
}

export default Home;
