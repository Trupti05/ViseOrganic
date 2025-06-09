import React from 'react'
import HeroSection from './components/HeroSection'
import Header from './components/header'
import HeaderSection from './components/HeaderSection'
import ProductSection from './components/ProductSection'
import FeaturedSection from './components/FeaturedSection'
import InterestSection from './components/InterestSection'
import HarvestSection from './components/HarvestSection'
import DownloadSection from './components/DownloadSection'
import BestsellingSection from './components/BestSellingSection'
import TalkSection from './components/TalkSection'
import Footer from './components/Footer'
import BackToTopButton from './components/BackToTopButton'
export default function App() {
  return (
    <>
      <HeaderSection />
      <Header />
      <HeroSection />
      <ProductSection />
      <FeaturedSection />
      <InterestSection />
      <HarvestSection />
      <DownloadSection />
      <BestsellingSection />
      <TalkSection />
      <Footer />
      <BackToTopButton />
      <div className='font-bold bg-blue-100'>
      </div>
    </>
  )
}
