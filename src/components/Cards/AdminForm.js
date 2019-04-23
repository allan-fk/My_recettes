import React from 'react';
import styled from 'styled-components';
import WrapCard from './WrapCard';

const AdminForm = ({ id: key, modifierRecette, recettes, supprimerRecette }) => {
    const recette = recettes[key],
      handleChange = (event, key) => {
        const { name, value } = event.target,
          recette = recettes[key];
        recette[name] = value;
        modifierRecette(key, recette);
      };
    return (
      <WrapCardM as={WrapCard}>
        <Form /*onSubmit={this.handleSubmit}*/>
          <input
            value={recette.nom}
            name="nom"
            onChange={e => handleChange(e, key)}
            type="text"
            placeholder="Nom de la recette"
          />
          <input
            value={recette.image}
            name="image"
            onChange={e => handleChange(e, key)}
            type="text"
            placeholder="Nom de l'image"
          />
          <textarea
            value={recette.ingredients}
            onChange={e => handleChange(e, key)}
            name="ingredients"
            rows="3"
            placeholder="Liste des ingrédients"
          />
          <textarea
            value={recette.instructions}
            onChange={e => handleChange(e, key)}
            name="instructions"
            rows="15"
            placeholder="Liste des instructions"
          />
          <Button onClick={() => supprimerRecette(key)} type="submit">Supprimer</Button>
        </Form>
      </WrapCardM>
    );
  },
  Form = styled.form`
    & > * {
      width: 100%;
      font-size: 18px;
      padding: 5px;
      border-width: 1px 1px 5px 1px;
      outline: none;
      margin-bottom: 5px;
      font-family: 'Roboto', sans-serif;
      border: 5px solid #69F0AE;
      border-width: 1px 1px 5px 1px;
    }
  `,
  Button = styled.button`
    font-size: 20px;
    border: none;
    color: white;
    background-color: #f44336;
    margin-top: 10px;
    padding: 10px;
    cursor: pointer;
    border-radius: 2px;
  `,
  WrapCardM = styled.div`
    box-shadow: none;
  `;

export default AdminForm;
