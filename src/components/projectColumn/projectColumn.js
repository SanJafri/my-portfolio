import React from 'react'
import './projectColumnStyles.css'

import carshineX2 from '../../assets/carshineX2.png'
import staff2 from '../../assets/staff2.png'
import manag2 from '../../assets/manag2.png'
import chillcake2 from '../../assets/ChillCake3.png'
import Khayalanforest2 from '../../assets/Khayalan Foreest 2.png'

function ProjectColumn() {
  return (
    <div name='project' className='ProjectColumn'>
        <div className="container">
            <h1>List of Projects</h1>
            <div className="img-container">
                <img className='span-3 image-grid-row-2' src={carshineX2} alt="/" />
                {/* <img src={BoraBora} alt="/" /> */}
                <img src={staff2} alt="/" />
                <img src={chillcake2} alt="/" />
                <img src={Khayalanforest2} alt="/" />
                <img src={manag2} alt="/" />
            </div>
        </div>
    </div>
  )
}

export default ProjectColumn