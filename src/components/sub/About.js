import React from "react"
export default function About() {
  return (
    // 최상단 영역
    <>
      <section className="sub-visual">
        <div className="inner">
          <h2>● CRAFTING DIGITAL EXPERIENCES</h2>
        </div>
        <div className="coworker-pic">
          <img src={process.env.PUBLIC_URL + '/img/coworker.jpg'} alt="coworker picture" />
        </div>
      </section>
      {/* about 영역 */}
      <section id="about">
        <div className="inner">
          <h2>● ABOUT</h2>
            <div className="about-content">
              <div className="about-content-left">
                <p>CERING</p>
                <p>C</p>
              </div>
              <div className="about-content-right">
                <p>
                  Cering was founded in 2006 by Jamie Stephen who still runs the agency today. A former new business director for a global advertising network with connections throughout the industry, he created an agency designed around the needs of clients across the world. Now representing over 50 artists and with a team of 15 Australioa
                </p>
                <button>LEARN MORE</button>
              </div>
            </div>
        </div>
      </section>
      {/* team 영역 */}
      <section id="team"></section>
    </>
  )
}