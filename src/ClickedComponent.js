import React from "react";

/*
 * Ce composant permet incrementer la valeur du state du composant App 
 */
class ClickedComponent extends React.Component {
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
      padding: "5px 10px",
      margin: "0 30px",
      fontWeight: "bold",
      fontSize: 13
    },
    hint: {
      color: "grey"
    }
  };

  /*
   * Autre manieres qui permet d'executer une fonction qui est passer
   * en props, mais qui attend un parametre
   */
  increaseCounter = () => {
    const { onPlus } = this.props;

    return onPlus(1);
  };

  render() {
    /*
     * Ici on recupere les props qui sont passer a notre composant par son parent.
     * Voir les PropTypes pour le Typages des props, cela permet de savoir quelles 
     * les props attendues par le composant
     */
    const { countClick, onMinus, otherStyles } = this.props;

    const {
      text,
      count,
      containerButtons,
      button,
      hint
    } = ClickedComponent.STYLES;

    return (
      <div style={otherStyles}>
        <p style={text}>
          Vous avez cliquer <span style={count}>{countClick}</span>.
          <br />
          <span style={hint}>(State du composant App)</span>
        </p>
        <div style={containerButtons}>
          {
            // Ici on passe directement la props onMinus a
            // onClick car elle n'attent pas de parametres
          }
          <button style={button} onClick={onMinus}>
            -
          </button>
          <button style={button} onClick={this.increaseCounter}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default ClickedComponent;
