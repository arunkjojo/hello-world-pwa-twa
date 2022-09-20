import React from 'react'
import { DrawBasicInfo } from '../interfaceTypes'
import Footer from './Footer'
import Header from './Header'
import MainResultCard from './MainResultCard'
import MainSlider from './MainSlider'
import Greeting from './Greeting'

import axios from 'axios';
// import { getDraw } from '../api/getDraw'

const ResultApp: React.FC = () => {
  const defaultDraw:DrawBasicInfo[]=[{
    id:'18092022',
    draw: "BR87",
    name: "Onam Bumber",
    drawDate: "18-September-2022",
    isNewResult: false
  },
  {
    id:'18092022',
    draw: "BR87",
    name: "Onam Bumber",
    drawDate: "18-September-2022",
    isNewResult: false
  }];

  const [resultDraw, setResultDraw]: [DrawBasicInfo[], (resultDraw: DrawBasicInfo[]) => void] = React.useState(defaultDraw);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = React.useState('');

  const getDrawData = () => {
    axios.get<DrawBasicInfo[]>(
      'https://api.inluxi.com/get_draw.php?limit=15'
      ,{
        params:{
          limit:15
        },
        headers: {
          "Content-Type": "application/json"
        },
      }
    )
    .then(response => {
      // console.log(response.data);
      setResultDraw(response.data);
      setLoading(false);
    })
    .catch(ex => {
      const error =
      ex.response.status === 404
        ? "Resource Not found"
        : "An unexpected error has occurred";
      setError(error);
      setLoading(false);
    });
  }

  React.useEffect(() => {
    getDrawData();
  }, [])

  return (
    <>
      {!loading ? (
        <>
          <Header />

          {error==='' ? (
            <main>

              <MainSlider />

              <div className="album py-5 "> 
              {/* // bg-light */}
                <div className="container">

                  <div className="row row-cols-2 row-cols-sm-3 row-cols-md-3 g-3">
                    {resultDraw?.map((draw: DrawBasicInfo)=>(
                      <MainResultCard key={draw.id} result={draw}/>
                    ))}
                  </div>

                </div>
              </div>

            </main>
          ): (
            <main>
              <div className="album py-5 container">
                  <b className='error'>{error}</b>
              </div>
            </main>
          )}

          <Footer />
        </>
      ) : (
        <Greeting />
      )}
    </>
  )
}

export default ResultApp