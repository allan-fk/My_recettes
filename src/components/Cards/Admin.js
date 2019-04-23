import React from 'react';
import styled from 'styled-components';
import AjouterRecette from './AjouterRecette';
import AdminForm from './AdminForm';
import WrapCard from './WrapCard';

const Admin = props => {
    const { recettes, ajouterRecette, modifierRecette, chargerExemple, supprimerRecette} = props;
    return (
      <WrapCard>
        <AjouterRecette ajouterRecette={ajouterRecette} />
        {Object.keys(recettes).map(key => (
          <AdminForm
            key={key}
            id={key}
            modifierRecette={modifierRecette}
            supprimerRecette={supprimerRecette}
            recettes={recettes}
          />
        ))}
        <Footer>
          <Button onClick={chargerExemple}>Remplir</Button>
        </Footer>
      </WrapCard>
    );
  },
  Footer = styled.footer`
    display: flex;
    justify-content: space-around;
    background-color: #eceff1;
    padding: 0 0 10px 0;
    box-shadow: 0px -3px 5px rgba(0, 0, 0, 0.2);
    width: 100%;
  `,
  Button = styled.button``;

export default Admin;
