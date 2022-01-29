import React, { Component } from "react";
import "../Meditation/styles.css";

class App extends Component {
  state = {
    text: "Halten",
    count: 0,
    grow: false,
    shrink: false,
  };

  breathIn = () => {
    this.setState({
      text: "Einatmen",
      count: this.state.count + 1,
      grow: true,
      shrink: false,
    });
  };

  breathOut = () => {
    this.setState({
      text: "Ausatmen",
      count: this.state.count - 1,
      grow: false,
      shrink: true,
    });
  };

  render() {
    return (
      <div id="Universal">
        <div
          className={`moon-container ${this.state.grow ? "grow" : ""} ${
            this.state.shrink ? "shrink" : ""
          }`}
          id="animation"
          onAnimationIteration={
            this.state.count === 1 ? this.breathOut : this.breathIn
          }
        >
          <div className="text-area">
            <h2>
              {this.state.count} : {this.state.text}
            </h2>
          </div>
          <div className="moon"></div>

          <div className="star-container">
            <span className="star"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
