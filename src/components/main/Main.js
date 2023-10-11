import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
function Main() {
//   const root = document.getElementById('root')
//   const ul = root.querySelector("#slider ul");
// const prev = root.querySelector(".prev");
// const next = root.querySelector(".next");
// const lis = ul.querySelectorAll("li img");
// let len = lis.length
// let enableClick = true;
// init();
// next.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (enableClick) {
//         nextSlide();
//         enableClick = false;
//     }
// })

// prev.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (enableClick) {
//         prevSlide();
//         enableClick = false;
//     }
// })

// function prevSlide() {
//     const duration = 500;
//     const initialValue = parseInt(ul.style.left) || -100;
//     const targetValue = 0;
//     const unit = "%";

//     const startTime = performance.now();
//     function animate(time) {
//         const timeReal = time - startTime;
//         const progress = timeReal / duration;
//         const currentValue = initialValue + (targetValue - initialValue) * progress;
//         ul.style.left = `${currentValue}${unit}`;

//         if (progress < 1) {
//             requestAnimationFrame(animate);
//         } else if (progress >= 1) {
//             ul.style.left = "-100%";
//             ul.prepend(ul.lastElementChild);
//             enableClick = true;
//         }
//     }

//     requestAnimationFrame(animate);
// }

// function nextSlide() {
//     const duration = 500;
//     const initialValue = parseInt(ul.style.left) || -100;
//     const targetValue = -200;
//     const unit = "%";
//     const startTime = performance.now();

//     function animate(time) {
//         const timeReal = time - startTime;
//         const progress = timeReal / duration;
//         const currentValue = initialValue + (targetValue - initialValue) * progress;
//         ul.style.left = `${currentValue}${unit}`;

//         if (progress < 1) {
//             requestAnimationFrame(animate);
//         } else if (progress >= 1) {
//             ul.style.left = "-100%";
//             ul.append(ul.firstElementChild);
//             enableClick = true;
//         }
//     }
//     requestAnimationFrame(animate);
// }

// function init() {
//     ul.style.width = `${100 * len}%`;
//     lis.forEach((el) => {
//         el.style.width = `${100 / len}%`;
//     })
//     ul.style.left = "-100%";
//     ul.prepend(ul.lastElementChild);
// }
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