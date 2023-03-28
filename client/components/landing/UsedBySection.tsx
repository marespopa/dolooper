import Image from 'next/image'
import React from 'react'

const myLoader = () => {
  return `https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=377056&theme=dark`
}

const ProductHuntImage = () => {
  return (
    <Image
      loader={myLoader}
      src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=377056&theme=dark"
      alt="Doloper - Plan&#0046;&#0032;Focus&#0046;&#0032;Execute&#0046; | Product Hunt"
      width={250}
      height={54}
    />
  )
}

const UsedBySection = () => {
  return (
    <section className={sectionStyles}>
      <div className={containerStyles}>
        <a
          href="https://www.producthunt.com/posts/doloper?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-doloper"
          target="_blank"
          rel="noreferrer"
        >
          <ProductHuntImage />
        </a>
      </div>
    </section>
  )
}

const sectionStyles = `border-t my-4 py-4`
const containerStyles = `flex justify-center`

export default UsedBySection
