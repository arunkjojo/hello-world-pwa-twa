import React from 'react'
import Footer from './Footer'
import Header from './Header'
import MainResultCard from './MainResultCard'
import MainSlider from './MainSlider'

const ResultApp = () => {
  return (
    <>
      <Header />

      <main>

        <MainSlider />

        <div className="album py-5 bg-light">
          <div className="container">

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

              <MainResultCard />
              <MainResultCard />
              <MainResultCard />

              <MainResultCard />
              <MainResultCard />
              <MainResultCard />

              <MainResultCard />
              <MainResultCard />
              <MainResultCard />
              
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </>
  )
}

export default ResultApp