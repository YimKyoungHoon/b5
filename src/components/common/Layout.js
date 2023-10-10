import React from 'react'
import { useEffect, useRef } from 'react';
function Layout({children, name}) {
  const frame = useRef(null);
  // console.log(frame); //current : null

  //useEffect를 사용해서 컴포넌트가 마운트 될 때 한번만 frame에 on을 붙여줍니다
  useEffect(()=>{
    frame.current.classList.add("on");
  },[])
  return (
    <section className={`content ${name}`} ref={frame}>
        <img src={process.env.PUBLIC_URL + '/img/layout.jpg'} alt="너바나 스마일" />
        <div className="inner">
          {children}
        </div>
    </section>
    
  )
}

export default Layout