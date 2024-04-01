import Image from 'next/image'
import profilePic from 'public/assets/workflow.png'

export default function HeroImage() {
  const imageSize = 743

  return (
    <Image
      src={profilePic}
      alt="Your Workflow in your workspace"
      priority
      width={imageSize}
      height={imageSize}
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
  )
}
