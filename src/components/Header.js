import React from 'react';
import s from 'styled-components';

const Header = ({ pseudo }) => {
    // 'de' ou 'd'' en fonction de la premier lettre du prénom
    const formatPseudo = str =>
      /[aeiouy]/i.test(str[0]) ? `d'${str}` : `de ${str}`;

    return (
      <Wrap>
        <H1>La boite à recettes {formatPseudo(pseudo)}</H1>
      </Wrap>
    );
  },
  H1 = s.h1`
    text-align: center;
    background-color: #f44336;
    color: white;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
    margin: 0px 0px 5px 0px;
    padding: 10px 20px;
  `,
  Wrap = s.header`
    margin: 0;
    text-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
  `;

export default Header;
