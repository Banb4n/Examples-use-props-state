import React from "react";
import { render } from "react-dom";
import ClickedComponent from "./ClickedComponent";
import TurnLights from "./TurnLights";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countClick: 0
    };
  }

  static STYLES = {
    card: {
      textAlign: "center",
      backgroundColor: "lightgrey",
      padding: 25,
      borderRadius: 2,
      margin: 30,
      border: "1px solid grey",
      boxShadow: "0 0 10px rgba(20,20,20,0.2)"
    },
    mainContainer: {
      fontFamily: "sans-serif",
      textAlign: "center"
    }
  };

  addClickToState = value =>
    this.setState({ countClick: this.state.countClick + (value ? value : 1) });

  delClickToState = () =>
    this.setState({ countClick: this.state.countClick - 1 });

  render() {
    const { title, mainContainer, card } = App.STYLES;

    return (
      <section style={mainContainer}>
        <h1 style={title}>Examples props et states</h1>
        <ClickedComponent
          countClick={this.state.countClick}
          onPlus={this.addClickToState}
          onMinus={this.delClickToState}
          otherStyles={card}
        />
        <TurnLights otherStyles={card} />
      </section>
    );
  }
}

render(<App />, document.getElementById("root"));
