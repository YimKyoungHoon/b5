import React from 'react'
import { NavLink } from 'react-router-dom'
function Main() {

  return (
    <figure>
        <div id="slider">
            <ul>
                <li data-index="1">
                  <img src={process.env.PUBLIC_URL + '/img/너바나1.jpg'} alt="너바나사진" />
                </li>
                <li data-index="2">
                    <img src={process.env.PUBLIC_URL + '/img/너바나2.jpg'} alt="너바나사진" />
                </li>
                <li data-index="3">
                  <img src={process.env.PUBLIC_URL + '/img/너바나3.jpg'} alt="너바나사진" />
                </li>
                <li data-index="4">
                  <img src={process.env.PUBLIC_URL + '/img/너바나4.webp'} alt="너바나사진" />
                </li>
            </ul>
        </div>
        <NavLink to="/" class="prev">
          <img src={process.env.PUBLIC_URL + '/img/btnPrev.png'} alt="이전버튼" />
        </NavLink>
        <NavLink to="/" class="next">
          <img src={process.env.PUBLIC_URL + '/img/btnNext.png'} alt="다음버튼" />
        </NavLink>
    </figure>
  )
}

export default Main