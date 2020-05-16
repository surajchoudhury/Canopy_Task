import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchHoldings } from "../actions";
import Loader from "./Loader";

//holdings table

import HoldingsTable from "./table&chart/HoldingsTable";

class Holdings extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchHoldings());
  }

  render() {
    return (
      <div>
        {this.props.holdings ? (
          <div className="main">
            <HoldingsTable data={this.props.holdings} />
          </div>
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ holdings }) => {
  return holdings;
};

export default connect(mapStateToProps)(Holdings);
