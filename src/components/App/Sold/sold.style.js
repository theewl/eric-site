import table from "../../../images/table.jpeg"
import styled from "styled-components"

export const SoldWrapper = styled.div`
    height: auto;
    background-position: center center;
    margin-bottom: 50px;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    text-align: center;
    @media (max-width: 630px) {
      height: auto;
      background-image: none;
  
    },
    .title {
      font-size: 35px;
      font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; ;
      color: black;
    },
  `

export const ProjectWrapper = styled.div`
    display: flex;
    justify-content: center;
    @media (max-width: 630px) {
      display: grid;
    },
  `
