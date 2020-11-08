import styled from "styled-components"

export const ItemsWrapper = styled.div`
    height: auto;
    background-position: center center;
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
      color: black;
      font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; ;
    },
  `

export const ProductWrapper = styled.div`
    margin: 60px;
    display: flex;
    justify-content: center;
    @media (max-width: 630px) {
      display: grid;
    },
  `
