import React from 'react'

function Member() {
  return (
    <section id="member">
        <div class="inner">
            <h1>NIRVANA</h1>
            <div class="wrap">
                <article>
                    <div class="pic">
                        <img src={process.env.PUBLIC_URL + '/img/Krist Novoselic.jpg'} alt="크리스 노보셀릭" />
                    </div>
                    <h2>크리스 노보셀릭<span>(Krist Novoselic)</span></h2>
                    <p>1965.05.16 (58세)</p>
                    <b>(베이스 기타)</b>
                </article>
                <article>
                    <div class="pic">
                        <img src={process.env.PUBLIC_URL + '/img/KurtCobain.webp'} alt="커트코베인"/>
                    </div>
                    <h2>커트코베인<span>(Kurt Cobain)</span></h2>
                    <p>1967.02.20 ~ 1994.04.05 (향년 27세)</p>
                    <b>(리더, 보컬, 기타)</b>
                </article>
                <article>
                    <div class="pic">
                        <img src={process.env.PUBLIC_URL + '/img/Dave Grohl.jpg'} alt="데이브 그롤"/>
                    </div>
                    <h2>데이브 그롤<span>(Dave Grohl)</span></h2>
                    <p>1969.01.14 (54세)</p>
                    <b>(드럼, 백킹 보컬)</b>
                </article>
            </div>
        </div>
    </section>
  )
}

export default Member