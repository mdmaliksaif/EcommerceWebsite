import React from 'react'
import MainCarosel from '../../components/HomeCarosel/MainCarosel'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'
import Footer from '../../components/Footer/Footer'
import { kurtaPage1 } from '../../../Data/woman/kurta'
import { mens_kurta } from '../../../Data/mens/kurta'
const HomePage = () => {
  return (
    <div><MainCarosel/>
    <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarosel data={mens_kurta} sectionName={"Mens Kurta"}/>
        <HomeSectionCarosel data={kurtaPage1} sectionName={"Mens Shoes"}/>
        <HomeSectionCarosel data={kurtaPage1} sectionName={"Mens Shirt"}/>
        <HomeSectionCarosel data={kurtaPage1} sectionName={"Women kurta"}/>
        <HomeSectionCarosel data={kurtaPage1}/>
    </div>
    <div>
      <Footer/>
    </div>
    </div>
  )
}

export default HomePage