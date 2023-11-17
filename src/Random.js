import React, { Component } from "react";

class Random extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNum: 0,
    };
  }

  handleClick = () => {
    const newRandomNum = Math.floor(Math.random() * 100) + 1;

    this.setState((prevState) => ({
      randomNum: newRandomNum,
    }));
  };

  render() {
    return (
      <div className="random">
        <center><h1>Random Number Generator</h1></center>
        <center><p>{this.state.randomNum}</p></center>
       <center><button onClick={this.handleClick}>Generate</button></center>
      </div>
    );
  }
}

export default Random;
