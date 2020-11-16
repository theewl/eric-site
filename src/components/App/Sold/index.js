import React, { useState, useEffect } from "react"
import Badge from "../Badge"
import shoe from "../../../images/tempShoe.png"
import { ProjectWrapper, SoldWrapper } from "./sold.style"
import axios from "axios"

export default function Projects() {
  const [sold, setSolds] = useState([])

  useEffect(() => {
    axios
      .get("https://ewl-shop.vercel.app/api/mongo/getSold")
      .then(function (response) {
        const tmp = JSON.stringify(response.data)
        const newData = JSON.parse(tmp)
        console.log(newData)
        setSolds(newData.sold)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
  }, [])
  return (
    <section id="sold">
      <SoldWrapper style={{ paddingTop: "75px" }}>
        <font className="title">SOLD</font>
        <ProjectWrapper style={{ marginTop: "80px",     display: 'flex',
        flexWrap: 'wrap'}}>
        {sold.map((product, i) => (
          <Badge projectPic={shoe} projectName={product["name"]} />
        ))}
        </ProjectWrapper>
      </SoldWrapper>
    </section>
  )
}
