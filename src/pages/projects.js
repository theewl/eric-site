import React from "react"
import table from '../images/table.jpg';
import styled from 'styled-components';
import NavBar from '../containers/App/NavBar';
import Badge from '../containers/App/Badge';
import Container from '@material-ui/core/Container';

const BadgeWrapper = styled.div`
  min-height: 500px;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-image: url(${table});
`;

const ProjectWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Projects() {
  document.body.style.margin = 0;
  return (
    <section id='projects'>
      <BadgeWrapper style={{paddingTop:'50px'}}>
      <ProjectWrapper> 
        <Badge projectName='Fantasy Basketball Wzrd'/>
        <Badge projectName='Blast Web Client' />
      </ProjectWrapper>
      <ProjectWrapper>
          <Badge projectName='Website' />
          <Badge projectName='GameEnviro' />
      </ProjectWrapper>
      </BadgeWrapper>
    </section>    
  )
}
