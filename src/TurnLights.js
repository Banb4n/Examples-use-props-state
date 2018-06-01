import React from "react";

class TurnLights extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lightSwitch: false // on = true | off = false
    };
  }
  static STYLES = {
    text: {
      margin: 0,
      paddingBottom: 30
    },
    containerButtons: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    count: {
      color: "grey",
      fontSize: 20
    },
    button: {
      backgroundColor: "dimgrey",
      color: "white",
      borderRadius: 3,
      height: 30,
      margin: "0 30px",
      fontWeight: "bold",
      fontSize: 13
    },
    containerLights: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap"
    },
    light: {
      height: 40,
      width: 40,
      borderRadius: 100,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "5px 20px",
      color: "lightGrey",
      transition: "background 0.3s"
    },
    test: {
      color: "red"
    }
  };

  /*
   * Cette fonction est notre "interupteur", 
   * set le state a true si le prevState est false, et vice versa
   */
  onTurnLights = () => this.setState({ lightSwitch: !this.state.lightSwitch });

  static LIGTHS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  render() {
    // On recupere la valeur du state
    const { lightSwitch } = this.state;
    // Ici les props
    const { countClick, otherStyles } = this.props;
    // Les styles
    const {
      text,
      button,
      containerButtons,
      light,
      containerLights
    } = TurnLights.STYLES;

    // Ici modifie le style des Light en fonction de la value du state
    const lightStyles = {
      backgroundColor: lightSwitch === true ? "gold" : "white",
      boxShadow: `${lightSwitch === true ? "0 0 50px gold" : "none"}`,
      ...light
    };

    return (
      <div style={otherStyles}>
        <div style={containerButtons}>
          <p style={text}>Cliquez pour allumer/eteindre les lumieres.</p>
          <button style={button} onClick={this.onTurnLights}>
            {lightSwitch === true ? "ON" : "OFF"}
          </button>
        </div>
        <div style={containerLights}>
          {// On map sur l'array afin de creer les lumieres
          TurnLights.LIGTHS.map(value => {
            return <div style={lightStyles}>{value}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default TurnLights;
