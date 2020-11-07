import table from "../../../images/table.jpeg"
import styled from "styled-components"

export const BadgeWrapper = styled.div`
    height: 650px;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${table});
    text-align: center;
    @media (max-width: 630px) {
      height: auto;
      background-image: none;
      background-color: #8d8d92;
  
    },
    .title {
      font-size: 35px;
      color: white;
      font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; ;
      color: white;
    },
  `

export const ProjectWrapper = styled.div`
    display: flex;
    justify-content: center;
    @media (max-width: 630px) {
      display: grid;
    },
  `
