import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className="inner">
        <h1>
          <Link to="/">
            <img src={process.env.PUBLIC_URL + '/img/logo2.png'} alt="너바나 스마일 로고" />
          </Link>
        </h1>
        <nav>
          <ul className="menu">
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
          <ul className="sns">
            <li>
              <FontAwesomeIcon icon={faYoutube}/>
            </li>
            <li>
              <FontAwesomeIcon icon={faApple}/>
            </li>
            <li>
              <FontAwesomeIcon icon={faSpotify}/>
            </li>
            <li>
              <FontAwesomeIcon icon={faSoundcloud}/>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer