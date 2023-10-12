import { NavLink, Link } from "react-router-dom";
import { useState,useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React from "react";


export default function Header() {
  // // const btnRef = useRef(null);
  // const [clickBtn, setclickBtn] = useState();
  // // const menuMobileRef = useRef(null);
  // const [clickMenuMobile, setClickMenuMobile] = useState();
  
  // function setclickBtn(e) {
  //   e.preventDefault();
  //   clickBtn.classList.toggle("on");
  // }
  // function setClickMenuMobile(e) {
  //   e.preventDefault();
  //   clickMenuMobile.classList.toggle("on");
  // }
  // useEffect(() => {
  //   // e.preventDefault();
  //   btn.current.classList.toggle("on");
  // })
//   useEffect(() => {
//     // e.preventDefault();
//     menuMobile.current.classList.toggle("on");
//   })
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


 

  // function clickBtn(e) {
  //   setBtn(e.preventDefault())
  // }
  // useEffect(() => {
    
  // })
  // const [btn, setBtn] = useState()
 

  // function toggleBtn(e) {
  //   setBtn(e.preventDefault())
  // }
  // function toggleMenuMobile(e) {
  //   setmenuMobile(e.preventDefault())
  // }

  // useEffect(() => {
  //   btn.classList.toggle("on");
  // })
  // useEffect(() => {
  //   menuMobile.classList.toggle("on");
  // })
  // const [clickBtn, setClickBtn] = useState("")

  // useEffect(() => {
  //   // e.preventDefault();
    
  // },[clickBtn])
  // function toggleBtn(e) {
  //   setBtn(e.preventDefault())
  //   setmenuMobile(e.preventDefault())
  // }
  // useEffect(() => {
  //   btn.classList.toggle("on");
  //   menuMobile.classList.toggle("on");
  // },)

  
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
        <FontAwesomeIcon icon={faBars} /*onClick={{toggleBtn, toggleMenuMobile}}*/
        // onClick={
        //   function (e) {
        //     e.preventDefault();
        //     btn.classList.toggle("on");
        //     menuMobile.classList.toggle("on");
        //   }
        // }
        // onClick={() => {setclickBtn(); setClickMenuMobile();}}
        />
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