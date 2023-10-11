import { NavLink, Link } from "react-router-dom";
// import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React from "react";


export default function Header() {
  const btnContext = React.createContext

  function toggleBtn() {
  }
  // const root = document.getElementById('root')
  // const btn = root.querySelector(".fa-bars")
  // const menuMobile = root.querySelector(".menuMobile")
  //   btn.onclick = function (e) {
  //       e.preventDefault();
  //       btn.classList.toggle("on");
  //       menuMobile.classList.toggle("on");
  //   }
  // btn.addEventListener("click",(e)=>{
  //   e.preventDefault();
  //   btn.classList.toggle("on");
  //   menuMobile.classList.toggle("on");
  // })


  // const [btn, setBtn] = useState();
  // const [menuMo, setMenuMo] = useState(); 

  // function clickBtn(e) {
  //   setBtn(e.preventDefault())
  // }
  // useEffect(() => {
    
  // })

  
  return (
    <header>
      <div className="inner">
        <h1>
          <Link to="/">
            <img src={process.env.PUBLIC_URL + '/img/logo1.png'} alt="너바나 로고" />
          </Link>
        </h1>
        <nav>
          <ul id="menuWeb">
            <li>
              <NavLink to="/story">
                Story
              </NavLink>
            </li>
            <li>
              <NavLink to="/studioAlbum">
                Studio Album
              </NavLink>
            </li>
            <li>
              <NavLink to="/map">
                Map
              </NavLink>
            </li>
          </ul>
        </nav>
        <FontAwesomeIcon icon={faBars}/>
        <nav className="menuMobile">
          <h1><Link to="/">NIRVANA</Link></h1>
          <ul id="menuMo">
            <li className={""}>
              <NavLink to="/story">
                Story
              </NavLink>
            </li>
            <li>
              <NavLink to="/studioAlbum">
                Studio Album
              </NavLink>
            </li>
            <li>
              <NavLink to="/map">
                Map
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}