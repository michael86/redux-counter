import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "./components/Button";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <h1>Counter: {this.props.count}</h1>
        <Button />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { count: state.count };
};

export default connect(mapStateToProps)(App);
