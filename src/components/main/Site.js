import React from 'react'
import { NavLink } from 'react-router-dom'

function Site() {
  return (
    <section id="news">
        <div class="inner">
            <h1>Music Site</h1>
            <strong>클릭하면 이동됩니다</strong>
            <div class="wrap">
                <article>
                        <img src={process.env.PUBLIC_URL + "/img/spotify.png"} alt="스포티파이"/>
                    <h2>
                        <NavLink to="/https://open.spotify.com/artist/6olE6TJLqED3rqDCT0FyPh">
                            Spotify
                        </NavLink>
                    </h2>
                </article>
                <article>
                        <img src={process.env.PUBLIC_URL + "/img/apple.png"} alt="애플뮤직"/>
                    <h2>
                      <NavLink to="https://music.apple.com/us/artist/nirvana/112018">Apple Music</NavLink>
                    </h2>
                </article>
                <article>
                        <img src={process.env.PUBLIC_URL + "./img/melon.png"} alt="멜론뮤직"/>
                    <h2>
                        <NavLink to="https://www.melon.com/artist/song.htm?artistId=104355">
                            Melon Music
                        </NavLink>
                    </h2>
                </article>
                <article>
                        <img src={process.env.PUBLIC_URL + "/img/Soundcloud.png"} alt="사운드클라우드"/>
                    <h2>
                        <NavLink to="https://soundcloud.com/nirvana">
                            SoundCloud
                        </NavLink>
                    </h2>
                </article>
            </div>
        </div>
    </section>
  )
}

export default Site