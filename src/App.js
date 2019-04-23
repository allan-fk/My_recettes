import React, { Component } from 'react';
import styled from 'styled-components';
// CSS
import './App.css';
import Header from './components/Header';
import recettes from './recettes';
import Admin from './components/Cards/Admin';
import Recettes from './components/Cards/Recettes';
import base from './base';

class App extends Component {
  state = {
    // eslint-disable-next-line react/destructuring-assignment
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  };

  componentDidMount() {
    const { pseudo } = this.state;
    this.ref = base.syncState(`/${pseudo}/recettes`, {
      context: this,
      state: 'recettes'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

    /* eslint-disable no-shadow */
  // Components/Cards/AjouterRecette 
  ajouterRecette = recette => {
    // const { recettes: recettesAlt } = { ...this.state };
    const recettes = {...this.state.recettes }
    recettes[`recette-${Date.now()}`] = recette;
    this.setState({ recettes });
  };

  modifierRecette = (key, newRecette) => {
    const recettes = {...this.state.recettes }
    recettes[key] = newRecette;
    this.setState({ recettes });
  }

  supprimerRecette = key => {
    const recettes = {...this.state.recettes }
    recettes[key] = null;
    this.setState({ recettes });
  }
  /* eslint-enable no-shadow */



  chargerExemple = () => this.setState({ recettes });

  render() {
    // eslint-disable-next-line no-shadow
    const { pseudo, recettes } = this.state,
      cards = Object.keys(recettes).map(key => (
        <Recettes key={key} details={recettes[key]} />
      ));
    // console.log(cards);
    return (
      <Body>
        <Header pseudo={pseudo} />
        <Wrap>{cards}</Wrap>
        <Wrap>
          <Admin
            recettes={recettes}
            ajouterRecette={this.ajouterRecette}
            modifierRecette={this.modifierRecette}
            supprimerRecette={this.supprimerRecette}
            chargerExemple={this.chargerExemple}
          />
        </Wrap>
      </Body>
    );
  }
}

function headingStyling() {
  let styles = '';
  for (let i = 1; i < 6; i += 1) {
    styles += `
       h${i} {
         font-weight: lighter;
       }
     `;
  }
  return styles;
}

const Body = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-family: 'Roboto', sans-serif;
    color: #212121;
    /*border: 5px solid purple;*/
    & > * {
      flex: 1 1 100vw;
      ${headingStyling()}
    }
  `,
  Wrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `;

export default App;
