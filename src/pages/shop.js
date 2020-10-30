import React from "react"
import sf from '../images/sf.jpg';
import styled from 'styled-components';
import NavBar from '../containers/App/NavBar';

const ShopWrapper = styled.div`
  background-image: url(${sf});
  height: 100%; 
  position: fixed;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default function Shop() {
  document.body.style.margin = 0;
  return (
    <ShopWrapper>
      <NavBar login={true}/>
    </ShopWrapper>
  )
}