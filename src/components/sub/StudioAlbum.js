import React from 'react'
import Layout from '../common/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStop } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

// const panels = document.querySelectorAll("#visual article");
// const btns = document.querySelectorAll(".btns li");
// const btnPlay = document.querySelector(".fa-play");
// const btnStop = document.querySelector(".fa-stop");
// const bar = document.querySelector(".bar");

// const len = panels.length - 1;
// let num = 0;
// let timer = null;
// const interval = 5000;

// startRolling();

// btns.forEach((el, index) => {
//     el.addEventListener("click", () => {
//         active(index);
//         stopRolling();
//     })
// });

// btnPlay.addEventListener("click", (e) => {
//     if (e.target.classList.contains("on")) {
//         return;
//     } else{
//         startRolling();
//     }
// });

// btnStop.addEventListener("click", stopRolling);

// function startRolling() {
//     bar.style.display = "block";
//     setTimeout(progress, 0);
//     active(num);
//     timer = setInterval(rolling, interval);
//     btnPlay.classList.add("on");
//     btnStop.classList.remove("on");
// }

// function stopRolling() {
//     bar.style.display = "none";
//     clearInterval(timer);
//     btnStop.classList.add("on");
//     btnPlay.classList.remove("on");
// }

// function active(index) {
//     for(let el of panels) el.classList.remove("on");
//     for(let el of btns) el.classList.remove("on");
//     panels[index].classList.add("on");
//     btns[index].classList.add("on");
//     num = index;
//     bar.style.width = "0%";
// }

// function rolling() {
//     if (num < len) {
//         num++;
//     } else {
//         num = 0;
//     }
//     active(num);
//     progress();
// }

// function progress() {
//     const init = parseInt(bar.style.width) || 0;
//     const unit = "%";
//     const startTime = performance.now();
//     function animate(time) {
//         const realTime = time - startTime;
//         const prog = realTime / interval;
//         const currentValue = init + 100 * prog;
//         bar.style.width = `${currentValue}${unit}`;
//         if (prog < 1) {
//             requestAnimationFrame(animate)
//         } else if (prog >= 1) {
//             bar.style.width = "0%"
//         }
//     }
//     requestAnimationFrame(animate);
// }
function StudioAlbum() {

  return (
    <Layout>
      <section id="visual">
        <article class="on">
          <div class="pic">
            <img src={process.env.PUBLIC_URL + "/img/bleach.jpg"} alt="너바나 정규1집 앨범커버"/>
          </div>
          <div class="wrap">
            <h2>Bleach</h2>
            <strong>트랙리스트</strong>
            <ul>
              <li>1. Blew</li>
              <li>2. Floyd the Barber</li>
              <li>3. About a Girl</li>
              <li>4. School</li>
              <li>5. Love Buzz</li>
              <li>6. Paper Cuts</li>
              <li>7. Negative Creep</li>
              <li>8. Scoff</li>
              <li>9. Swap Meet</li>
              <li>10. Mr. Moustache</li>
              <li>11. Sifting</li>
              <li>12. Big Cheese</li>
              <li>13. Downer</li>
            </ul>
            <p>발매일: 1989년 6월 15일, 재생시간: 37:19 <br/> 클릭 시 유튜브 이동</p>
          </div>    
        </article>
        <article>
          <div class="pic">
            <img src={process.env.PUBLIC_URL + "/img/Nevermind.jpg"} alt="너바나 정규2집 앨범커버"/>
          </div>
            <div class="wrap">
              <h2>Nevermind</h2>
              <strong>트랙리스트</strong>
              <ul>
                <li>1. Smells Like Teen Spirit</li>
                <li>2. In Bloom</li>
                <li>3. Come as You Are</li>
                <li>4. Breed</li>
                <li>5. Lithium</li>
                <li>6. Polly</li>
                <li>7. Territorial Pissings</li>
                <li>8. Drain You</li>
                <li>9. Lounge Act</li>
                <li>10. Stay Away</li>
                <li>11. On a Plain</li>
                <li>12. Something in the Way</li>
                <li>13. Endless, Nameless</li>
              </ul>
              <p>발매일: 1991년 9월 24일, 재생시간: 59:27 <br/> 클릭 시 유튜브 이동</p>
            </div>    
        </article>
        <article>
          <div className="pic">
            <img src={process.env.PUBLIC_URL + "/img/InUtero.jpg"} alt="너바나 정규3집 앨범커버" />
          </div>
          <div className="wrap">
            <h2>In Utero</h2>
            <strong>트랙리스트</strong>
            <ul>
              <li>1. Serve the Servants</li>
              <li>2. Scentless Apprentice</li>
              <li>3. Heart-Shaped Box</li>
              <li>4. Rape Me</li>
              <li>5. Frances Farmer Will Have Her Revenge on Seattle</li>
              <li>6. Dumb</li>
              <li>7. Very Ape</li>
              <li>8. Milk It</li>
              <li>9. Pennyroyal Tea</li>
              <li>10. Radio Friendly Unit Shifter</li>
              <li>11. Tourette's</li>
              <li>12. All Apologies</li>
              <li>13. Gallons of Rubbing Alcohol Flow Through the Strip</li>
            </ul>
            <p>발매일: 1993년 9월 21일, 재생시간: 41:21</p>
          </div>
        </article>
        <ul class="btns">
          <li class="on"></li>
          <li></li>
          <li></li>
        </ul>
        <nav className='rolling'>
          <FontAwesomeIcon icon={faPlay}/>
          <FontAwesomeIcon icon={faStop}/>
        </nav>
        <div class="bar"></div>
      </section>
    </Layout>
  )
}

export default StudioAlbum