import React from "react"
import table from '../images/table.jpg';
import styled from 'styled-components';
import NavBar from '../containers/App/NavBar';
import Badge from '../containers/App/Badge';
import Container from '@material-ui/core/Container';
import FantasyWzrd from '../images/bballwzrd.jpg';
import Website from '../images/website.png';
import Blast from '../images/blast.png';
import Boardgame from '../images/boardgame.jpg';
import Classroom from '../images/class.jpg';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 500,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const BadgeWrapper = styled.div`
  height: 850px;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-image: url(${table});
  text-align: center;
  @media (max-width: 630px) {
    height: auto;
  },
  .title {
    font-size: 40px;
    color: white;
    font-family: Cambria;
    color: antiquewhite;
    margin-bottom: 100px;
  },
`;

const ProjectWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 630px) {
    display: grid;
  },
`;

export default function Projects() {
  document.body.style.margin = 0;
  return (
    <section id='projects'>
      <BadgeWrapper style={{paddingTop:'50px'}}>
      <font className='title'>PROJECTS</font>
      <ProjectWrapper style={{marginTop: '80px'}}> 
        <Badge projectURL='https://github.com/theewl/fantasyBasketballWizard' projectPic={FantasyWzrd} projectName='Fantasy Basketball Wzrd'/>
        <Badge projectURL='https://github.com/theewl/BlastWebClient' projectPic={Blast} projectName='Blast Web Client' />
        <Badge projectURL='https://github.com/theewl/eric-site' projectPic={Website} projectName='Website' />
      </ProjectWrapper>
      <ProjectWrapper>
          <Badge projectURL='https://github.com/theewl/GameEnviro' projectPic={Boardgame} projectName='GameEnviro' />
          <Badge projectURL='https://github.com/theewl/CodepathProject' projectPic={Classroom} projectName='ZotCourse' />
      </ProjectWrapper>
      </BadgeWrapper>
    </section>    
  )
}
