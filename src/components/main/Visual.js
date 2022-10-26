import React from "react"
export default function Visual() {
  return (
    <figure>
      <div className="inner">
        {/* visual의 텍스트 부분 */}
        <div className="text-box">
          <div className="text-box-left">
            <h2><p>●</p><p>BRAND<br/>RECOGNITION</p></h2>
            <div className="mini-text-box">
              <p>Photography</p>
              <p>See project</p>
            </div>
          </div>
          <div className="text-box-right">
            <p>2022</p>
            <p>● NEXT</p>
          </div>
        </div>
        {/* visual의 이미지 부분 */}
        <div className="img-box">
          <img src="img/visual.jpg" alt="visual image" />
        </div>
      </div>
    </figure>
  )
}