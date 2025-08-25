import React from 'react'
import './MoreProjectStyles.css'

import carshineX1 from '../../assets/carshineX1.png'
// import carshineX2 from '../../assets/carshineX2.png'
import staff1 from '../../assets/staff1.png'
// import staff2 from '../../assets/staff2.png'
import manag1 from '../../assets/manag1.png'
// import manag2 from '../../assets/manag2.png'
import chillcake1 from '../../assets/ChillCake.png'
// import chillcake2 from '../../assets/ChillCake3.png'
import Khayalanforest1 from '../../assets/Khayalan Forest.png'
// import Khayalanforest2 from '../../assets/Khayalan Foreest 2.png'
import fypAdmin1 from '../../assets/AdminHomePage.png'
// import fypAdmin2 from '../../assets/AdminStudentName.png'
// import msm1 from '../../assets/msm web 1.png'
// import msm2 from '../../assets/msm web 2.png'
import msmMobile1 from '../../assets/msmMob1.png'
// import msmMobile2 from '../../assets/msmMob2.png'
import fypMobile1 from '../../assets/fypMob1.png'
// import fypMobile2 from '../../assets/fypMob2.png'
import fresh1 from '../../assets/Fresh1.png'
// import fresh2 from '../../assets/Fresh2.png'

function MoreProject() {
  return (
    <div name='gallery' className='moreProject'>
        <div className="container">
            <h1>Gallery</h1>
            <img src={carshineX1} alt="/" />
            <img src={staff1} alt="/" />
            <img src={manag1} alt="/" />

            <img src={chillcake1} alt="/" />
            <img src={Khayalanforest1} alt="/" />
            <img src={fypAdmin1} alt="/" />

            <img src={msmMobile1} alt="/" />
            <img src={fypMobile1} alt="/" />
            <img src={fresh1} alt="/" />

        </div>
    </div>
  )
}

export default MoreProject