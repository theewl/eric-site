import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import avatar from "../../../images/avatar.png"
import styled from "styled-components"
import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 400,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})

const Info = styled.div`
  border-radius: 10%;
  background: #4e463c;
  text-align: -webkit-center;
  height: 450px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  animation: $fadein 1s;
  opacity: 95%;
  .headshot {
    width: 150px;
    border-radius: 50%;
  }
  ,
  @media (max-width: 400px) {
    margin-top: 50px;
  }
`

export default function SimpleCard() {
  return (
    <Info>
      <br />
      <br />
      <div>
        <font>Eric Liang</font>
        <br />
        <img className="headshot" src={avatar} alt="pic" />
        <br />
        <br />
        <font>
          Software Engineer
          <font style={{ fontFamily: "Cambria", color: "slategray" }}>
            <font> | </font>
          </font>{" "}
          San Francisco{" "}
          <font style={{ fontFamily: "Cambria", color: "slategray" }}></font>
        </font>
      </div>
    </Info>
  )
}
