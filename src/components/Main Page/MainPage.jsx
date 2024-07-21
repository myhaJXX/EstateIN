import React from 'react'
import PreviewSec from './previewSec/PreviewSec'
import FeaturedSec from './featuredSec/FeaturedSec'
import ReviewsSec from './ReviewsSec/ReviewsSec'

function MainPage() {
  return (
    <main>
      <PreviewSec/>
      <FeaturedSec/>
      <ReviewsSec/>
    </main>
  )
}

export default MainPage