import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";
import Collapse from "@material-ui/core/Collapse";
import CardActions from "@material-ui/core/CardActions";
import { MdExpandMore } from "react-icons/md";

const styles = (theme) => ({
  expand: {
    fontSize: "20px",
    transform: "rotate(0deg)",
    backgroundColor: "#F2F5FA",
    color: "#ABBDD6",
    borderRadius: "50%",
    cursor: "pointer",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
    borderRadius: "50%",
    color: "#fff",
    backgroundColor: "#6658FC",
    fontSize: "20px",
    cursor: "pointer",
  },
});

class TableGroup extends Component {
  constructor(props) {
    super(props);
    this.state = { holdings: this.props.data, expanded: {} };
  }
  handleExpandClick = (key) => {
    let state = { ...this.state };
    state.expanded[key] = !!!state.expanded[key];
    this.setState(state);
  };

  assignClassName = (data) => {
    let val = data && JSON.stringify(data);
    return val && !val.startsWith("-") && !val.startsWith("+")
      ? ""
      : val && val.startsWith("-")
      ? "dec"
      : val && val.startsWith("+")
      ? "inc"
      : "no_data";
  };

  assignName = (name) => {
    return name ? name : "Not Available";
  };

  render() {
    const props = this.props;
    const { groupProperty } = props;
    const { holdings } = this.state;
    const groups = holdings.reduce((acc, row) => {
      acc[row[groupProperty]] = acc[row[groupProperty]] || [];
      acc[row[groupProperty]].push(row);
      return acc;
    }, {});

    const keys = Object.keys(groups);
    return keys.map((key) => (
      <tbody className="table_body" key={key}>
        <tr>
          <TableCell colSpan="7">
            <CardActions disableactionspacing="true">
              <b />
              <MdExpandMore
                className={
                  this.state.expanded[key]
                    ? props.classes.expandOpen
                    : props.classes.expand
                }
                onClick={() => this.handleExpandClick(key)}
              />

              <h2
                className="group_title"
                onClick={() => this.handleExpandClick(key)}
              >
                {key} ({groups[key].length})
              </h2>
            </CardActions>
            <Collapse
              in={this.state.expanded[key]}
              timeout="auto"
              unmountOnExit
            >
              <table id="holdings_table_small">
                <thead className="table_head">
                  <tr>
                    <th>Name of the holding</th>
                    <th>Ticker</th>
                    <th>Average price</th>
                    <th>Market price</th>
                    <th>Latest change percentage</th>
                    <th>Market Value in Base CCY</th>
                  </tr>
                </thead>
                <tbody>
                  {groups[key].map((row) => (
                    <tr className="table_row" key={row.ticker}>
                      <td>{row.name}</td>
                      <td>{row.ticker}</td>
                      <td className={this.assignClassName(row.avg_price)}>
                        {this.assignName(row.avg_price)}
                      </td>
                      <td className={this.assignClassName(row.market_price)}>
                        {this.assignName(row.market_price)}
                      </td>
                      <td className={this.assignClassName(row.latest_chg_pct)}>
                        {this.assignName(row.latest_chg_pct)}
                      </td>
                      <td
                        className={this.assignClassName(row.market_value_ccy)}
                      >
                        {this.assignName(row.market_value_ccy)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Collapse>
          </TableCell>
        </tr>
      </tbody>
    ));
  }
}

function HoldingsTable(props) {
  const { classes, data } = props;

  return (
    <Paper className="root">
      <table id="holdings_table">
        <TableGroup classes={classes} groupProperty="asset_class" data={data} />
      </table>
    </Paper>
  );
}

export default withStyles(styles)(HoldingsTable);
