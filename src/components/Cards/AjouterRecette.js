import React, { Component } from 'react';
import styled from 'styled-components';
import WrapCard from './WrapCard';

export default class AjouterRecette extends Component {
  state = {
    nom: '',
    image: '',
    ingredients: '',
    instructions: ''
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  
  handleSubmit = event => {
    event.preventDefault()
    const recette = {...this.state},
    { ajouterRecette } = this.props;
    // {ajouterRecette} = this.props;
    ajouterRecette(recette);
    // Reset
    Object.keys(recette).forEach(item => {recette[item] = ''});
    this.setState({...recette})
  }

  render() {
    const { nom, image, ingredients, instructions } = this.state;
    return (
      <WrapCardM as={WrapCard}>
        <Form onSubmit={this.handleSubmit}>
          <input
            value={nom}
            name="nom"
            onChange={this.handleChange}
            type="text"
            placeholder="Nom de la recette"
          />
          <input
            value={image}
            name="image"
            onChange={this.handleChange}
            type="text"
            placeholder="Nom de l'image"
          />
          <textarea
            value={ingredients}
            onChange={this.handleChange}
            name="ingredients"
            rows="3"
            placeholder="Liste des ingrédients"
          />
          <textarea
            value={instructions}
            onChange={this.handleChange}
            name="instructions"
            rows="15"
            placeholder="Liste des instructions"
          />
          <Button type='submit'>+ Ajouter une recette</Button>
        </Form>
      </WrapCardM>
    );
  }
}

const Form = styled.form`
  & > * {
    width: 100%;
    font-size: 18px;
    padding: 5px;
    border: 5px solid #69f0ae;
    border-width: 1px 1px 5px 1px;
    outline: none;
    margin-bottom: 5px;
    font-family: 'Roboto', sans-serif;
    border: 5px solid #f44336;
    border-width: 1px 1px 5px 1px;
  }
`,
Button = styled.button`
  font-size: 20px;
	border: none;
	color: white;
	background-color: #F44336;
	margin-top: 10px;
	padding: 10px;
	cursor: pointer;
	border-radius: 2px;
`,
WrapCardM = styled.div`
box-shadow:none;
`;
