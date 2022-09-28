import React from 'react'
import { DrawBasicInfo } from '../interfaceTypes'
type ResultCardProps = {
  result: DrawBasicInfo
}
const MainResultCard = ({ result }: ResultCardProps) => {
  return (
    <div className="col">
      <div className="card shadow-sm">

        <div className={`bd-placeholder-img card-img-top card-heading p-1 ${result.isNewResult ? 'newDrawResult' : ''}`} id={result.id}>
          <h4 className='drawNumber'>{result.draw}</h4>
          <h4 className='drawName'>{result.name}</h4>
          <h4 className='drawDate'>{result.drawDate}</h4>
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