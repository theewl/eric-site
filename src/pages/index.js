import React from "react"
import sf from '../images/sf.jpg';
import styled from 'styled-components';
import NavBar from '../containers/App/NavBar';
import InfoCard from '../containers/App/InfoCard';
import Container from '@material-ui/core/Container';
import Projects from '../pages/projects';
import Home from '../pages/home';
import Resume from '../pages/resume';

const HomeWrapper = styled.div`
  background-image: url(${sf});
  height: 100%; 
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .container {
    margin-top: 8%;
    @media (max-width: 400px) {
      margin-top: 15%;
    }
  }
`;

export default function Page() {
  document.body.style.margin = 0;
  return (
    <div>
      <NavBar/>
      <Home/>
      <Resume/>
      <Projects/>
    </div>
  )
}
