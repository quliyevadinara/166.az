import React from 'react'
import PageContainer from '../Common/PageContainer'
import ServicesBannerHome from '../Components/HomeComps/ServicesBannerHome'
import SponsorSlider from '../Components/HomeComps/SponsorSlider'
import ServicesH from '../Components/HomeComps/ServicesH'
import CarPark from '../Components/HomeComps/CarPark'
import Media from '../Components/HomeComps/Media'
import Review from '../Common/Review'
import Map from '../Components/HomeComps/Map'
import Banner from '../Common/Banner'

const Home = () => {
  return (
    <PageContainer>
        <ServicesBannerHome />
        <SponsorSlider />
        <ServicesH />
        <CarPark />
        <Media />
        <Review />
        <Map />
        <Banner />
    </PageContainer>
    
  )
}

export default Home