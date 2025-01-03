import React from 'react'
import ResponsiveComponent from './ResponsiveComponent'
// import CardSlider from '../common/Slider1'


function SectionA() {
  return (
    <>
        <div className="section-a">
            <div className="titleWrapper">
                <h2 className='fw500'>Découvrez nos différents <br /> établissements</h2>
            </div>
            {/* <CardSlider></CardSlider> */}
            <ResponsiveComponent></ResponsiveComponent>
        </div>
  
    </>
    
  )
}

export default SectionA