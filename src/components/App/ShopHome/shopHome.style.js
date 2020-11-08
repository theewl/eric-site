import sneakers from "../../../images/sneakers.png"
import styled from "styled-components"

export const ShopHomeWrapper = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${sneakers});
  height: 100vh;
  min-height: 500px;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  .title {
    text-align: center;
    padding-top: 150px;
  }
  ,
  .titleText {
    color: white;
    font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;
    font-size: 60px;
  }
  .container {
    padding-top: 10%;
    @media (max-width: 400px) {
      padding-top: 15%;
    }
  }
`
