import React from 'react'
import { NavLink } from 'react-router-dom';

function Discography() {
  const root = document.getElementById('root')
  const btnDiscography = root.querySelectorAll("#discography nav a");
const boxDiscography = root.querySelectorAll("#discography section");

btnDiscography.forEach((el, index) => {
    el.addEventListener("click", (e) => {
        e.preventDefault();
        // for(let el of btnDiscography) el.classList.remove("on");
        document.querySelector("nav a.on").classList.remove("on");
        btnDiscography[index].classList.add("on");
        // for(let el of boxDiscography) el.classList.remove("on");
        document.querySelector("section.on").classList.remove("on");
        boxDiscography[index].classList.add("on");

        setTimeout(() => {
            for(let el of boxDiscography) el.classList.remove("active");
            boxDiscography[index].classList.add("active");
        })
    })
})
  return (
    <main id="discography">
        <h1>Discography</h1>
        <nav>
            <NavLink to="#;" class="on">전체</NavLink>
            <NavLink to="#;">정규앨범</NavLink>
            <NavLink to="#;">라이브앨범</NavLink>
            <NavLink to="#;">컴필앨범</NavLink>
        </nav>
        <section id="All" class="on active">
            <article>
                <img src={process.env.PUBLIC_URL + "/img/bleach.jpg"} alt="정규1집 bleach"/>
            </article>
            <article>
                <img src={process.env.PUBLIC_URL + "/img/hormoaning.jpg"} alt="컴필앨범 hormoaning"/>
            </article>
            <article>
                <img src={process.env.PUBLIC_URL + "/img/Incesticide.jpg"} alt="컴필앨범 Incesticide"/>
            </article>
            <article>
                <img src={process.env.PUBLIC_URL + "/img/InUtero.jpg"} alt="정규3집 In Utero"/>
            </article>    
            <article>
                <img src={process.env.PUBLIC_URL + "/img/Live-at-Reading.jpg"} alt="라이브앨범 Live at Reading"/>
            </article>
            <article>
                <img src={process.env.PUBLIC_URL + "/img/MuddyBanks.jpg"} alt="라이브앨범 From The Muddy Banks of The Wishkah"/>
            </article>
            <article>
                <img src={process.env.PUBLIC_URL + "/img/Nevermind.jpg"} alt="정규2집 Nevermind"/>
            </article>    
            <article>
                <img src={process.env.PUBLIC_URL + "/img/nirvana.jpg"} alt="컴필앨범 nirvana"/>
            </article>    
            <article>
                <img src={process.env.PUBLIC_URL + "/img/sliver.jpg"} alt="컴필앨범 Sliver: The Best of the Box"/>
            </article>    
            <article>
                <img src={process.env.PUBLIC_URL + "/img/Unplugged.jpg"} alt="라이브앨범 MTV Unplugged in New York"/>
            </article>    
            <article>
                <img src={process.env.PUBLIC_URL + "/img/WithTheLightsOut.jpg"} alt="컴필앨범 With The LightsOut"/>
            </article> 
        </section>
        <section id="Studio">
            <article>
                <img src={process.env.PUBLIC_URL + "/img/bleach.jpg"} alt="정규1집 bleach"/>
            </article>
            <article>
                <img src={process.env.PUBLIC_URL + "/img/Nevermind.jpg"} alt="정규2집 Nevermind"/>
            </article>
            <article>
                <img src={process.env.PUBLIC_URL + "/img/InUtero.jpg"} alt="정규3집 In Utero"/>
            </article>
        </section>
        <section id="Live">
            <article>
                <img src={process.env.PUBLIC_URL + "/img/Unplugged.jpg"} alt="라이브앨범 MTV Unplugged in New York"/>
            </article>
            <article>
                <img src={process.env.PUBLIC_URL + "/img/MuddyBanks.jpg"} alt="라이브앨범 From The Muddy Banks of The Wishkah"/>
            </article>
            <article>
                <img src={process.env.PUBLIC_URL + "/img/Live-at-Reading.jpg"} alt="라이브앨범 Live at Reading"/>
            </article>
        </section>
        <section id="Compil">
            <article>
                <img src={process.env.PUBLIC_URL + "/img/hormoaning.jpg"} alt="컴필앨범 hormoaning"/>
            </article>
            <article>
                <img src={process.env.PUBLIC_URL + "/img/Incesticide.jpg"} alt="컴필앨범 Incesticide"/>
            </article>
            <article>
                <img src={process.env.PUBLIC_URL + "/img/nirvana.jpg"} alt="컴필앨범 nirvana"/>
            </article>
            <article>
                <img src={process.env.PUBLIC_URL + "/img/WithTheLightsOut.jpg"} alt="컴필앨범 With The LightsOut"/>
            </article>    
            <article>
                <img src={process.env.PUBLIC_URL + "/img/sliver.jpg"} alt="컴필앨범 Sliver: The Best of the Box"/>
            </article>
        </section>
    </main>
  )
}

export default Discography