import React, { Component } from "react";
import { connect } from "react-redux";
import { INCREMENT, DECREMENT, RESET } from "../redux/types";

class Button extends Component {
  onClick = (type) => {
    this.props.dispatch({ type });
  };

  render() {
    return (
      <>
        <button
          onClick={() => {
            this.onClick(INCREMENT);
          }}
        >
          Increase
        </button>
        <button
          onClick={() => {
            this.onClick(DECREMENT);
          }}
        >
          Decrease
        </button>
        <button
          onClick={() => {
            this.onClick(RESET);
          }}
        >
          Reset
        </button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { count: state.count };
};

export default connect(mapStateToProps)(Button);
