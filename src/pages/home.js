import React from "react"
import sf from '../images/sf.jpg';
import styled from 'styled-components';
import NavBar from '../containers/App/NavBar';
import InfoCard from '../containers/App/InfoCard';
import Container from '@material-ui/core/Container';
import Projects from '../pages/projects';

const HomeWrapper = styled.div`
  background-image: url(${sf});
  height: 100vh;
  min-height: 500px;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  .container {
    margin-top: 8%;
    @media (max-width: 400px) {
      margin-top: 15%;
    }
  }
`;

export default function Home() {
  document.body.style.margin = 0;
  return (
    <section id='#home'>
        <HomeWrapper>
        <NavBar/>
        <Container className='container' maxWidth="sm" >
            <InfoCard/>
        </Container>
        </HomeWrapper>
    </section>
  )
}
