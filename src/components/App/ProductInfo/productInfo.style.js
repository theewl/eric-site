import sf from "../../../images/sf.jpg"
import styled from "styled-components"

export const ProductInfoWrapper = styled.div`
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
