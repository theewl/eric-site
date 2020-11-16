import styled from "styled-components"

export const ErrorWrapper = styled.div`
  height: 100vh;
  min-height: 500px;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  @media (max-width: 400px) {
    background-size: contain;
  }
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
