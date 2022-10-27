import React from "react"
export default function Services() {
  return (
    <section>
      <div className="inner">
        <h1>● OUR<br/>SERVICES</h1>
        <img src={process.env.PUBLIC_URL + '/img/giphy.gif'} alt="main image" />
      </div>
    </section>
  )
}