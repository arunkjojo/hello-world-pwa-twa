import React from 'react'
import { DrawBasicInfo } from '../interfaceTypes'
type ResultCardProps = {
  result: DrawBasicInfo
}
const MainResultCard = ({result}:ResultCardProps) => {
  return (
    <div className="col">
      <div className="card shadow-sm">
          
          <div className={`bd-placeholder-img card-img-top card-heading p-1 ${result.isNewResult?'newDrawResult':''}`} id={result.id}>
            <h2 className='drawNumber mt-2'>{result.draw}</h2>
            <h3 className='drawName mt-2 mb-2'>{result.name}</h3>
            <h3 className='drawDate mb-2'>{result.drawDate}</h3>
            <h2>{result.isNewResult}</h2>
          </div>

          {/* <div className="card-body">
          <p className="card-text"></p>
          <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
              <button type="button" className="btn btn-md btn-outline-primary">View Result</button>
              </div>
              <small className="text-muted">9 mins ago</small>
          </div>
          </div> */}
      </div>
    </div>
  )
}

export default MainResultCard