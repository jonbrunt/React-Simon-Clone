import React from 'react';
import styled from 'styled-components';

const FooterStyledDiv = styled.div`
  letter-spacing: 1px;
  p {
    max-width: 500px;
    margin: 10px auto;
    line-height: 125%;
    font-size: 1.6em;
    color: #000000 ;
    @media (max-width: 600px) {
      font-size: 1.2em;
    }
  }
  a {
    text-decoration: none;
    color: #060b9b;
  }
`;

const Footer = () => ( // renders static footer
  <FooterStyledDiv>
    <p>Design &amp; Development by Jonathan M. Brunt <span>{(new Date().getFullYear())}</span></p>
    <p>Educational Project Inspired by the Original "Simon", a Registered Trademark of Milton Bradley</p>
  </FooterStyledDiv>
);

export default Footer;
