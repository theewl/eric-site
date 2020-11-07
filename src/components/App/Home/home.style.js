import sf from "../../../images/sf.jpg"
import styled from "styled-components"

export const HomeWrapper = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${sf});
  height: 100vh;
  min-height: 500px;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  .container {
    padding-top: 10%;
    @media (max-width: 400px) {
      padding-top: 15%;
    }
  }
`
