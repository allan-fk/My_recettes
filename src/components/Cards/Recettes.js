import React from 'react';
import styled from 'styled-components';
import WrapCard from './WrapCard';

const Recettes = ({ details }) => {
    const ingredients = details.ingredients
        .split(',')
        .map(item => <li key={item}>{item}</li>),
      instructions = details.instructions
        .split('\n')
        .map(item => <li key={item}>{item}</li>),
      /* eslint-disable global-require */
      requireImage = chemin => {
        try {
          // eslint-disable-next-line import/no-dynamic-require
          return require(`../../img/${chemin}`);
        } catch (err) {
          return require(`../../img/default.jpeg`);
        }
      };
    /* eslint-enable global-require */

    return (
      <WrapCard>
        <Image>
          <img src={requireImage(details.image)} alt={details.nom} />
        </Image>
        <Recette>
          <h2>{details.nom}</h2>
          <ListIngredients>{ingredients}</ListIngredients>
          <ListInstructions>{instructions}</ListInstructions>
        </Recette>
      </WrapCard>
    );
  },

  Recette = styled.div`
    padding: 0 20px;
  `,
  Image = styled.div`
    width: 100%;
    height: 150px;
    overflow: hidden;
    border-radius: 2px 2px 0 0;
    & img {
      width: 100%;
      transform: translateY(-25%);
    }
  `,
  ListIngredients = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 5px 20px;
    background-color: #f5f5f5;
    transform: scale(1.12);
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
    & li {
      margin-left: 20px;
      margin-right: 5px;
    }
  `,
  ListInstructions = styled.ol`
    padding: 10px 0px 10px 20px;
    & li {
      margin-bottom: 10px;
    }
  `;

export default Recettes;
