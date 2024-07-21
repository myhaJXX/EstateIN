import React from 'react'
import OurJourneySec from './OurJourneySec/OurJourneySec'
import OurValuesSec from './OurValuesSec/OurValuesSec'
import OurAchSec from './OurAchievementsSec/OurAchSec'
import OurNavSec from './OurNavSec/OurNavSec'

function AboutPage() {
  return (
    <main>
      <OurJourneySec/>
      <OurValuesSec/>
      <OurAchSec/>
      <OurNavSec/>
    </main>
  )
}

export default AboutPage