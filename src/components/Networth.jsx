import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchNetworth } from "../actions";
import Loader from "./Loader";

//line chart

import LineChart from "./table&chart/LineChart";

class Networth extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchNetworth());
  }
  render() {
    const { networth } = this.props;
    return (
      <div>
        {networth ? (
          <div className="main">
            <LineChart data={networth} />
          </div>
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ networth }) => {
  return networth;
};

export default connect(mapStateToProps)(Networth);
