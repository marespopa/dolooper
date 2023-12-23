import Image from 'next/image'
import profilePic from 'public/assets/workflow.png'

export default function HeroImage() {
  return (
    <Image
      src={profilePic}
      alt="Your Workflow in your workspace"
      priority
      // width={500} automatically provided
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
  )
}
