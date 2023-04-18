import React from 'react'
import Image from 'next/image'

const myLoader = () => {
  return `https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=377056&theme=dark`
}

const ProductHuntImage = () => {
  return (
    <Image
      loader={myLoader}
      src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=386422&theme=neutral"
      alt="Dolooper - Do&#0032;one&#0032;thing&#0032;at&#0032;a&#0032;time&#0044;&#0032;do&#0032;it&#0032;well&#0032;with&#0032;Dolooper&#0046; | Product Hunt"
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
          href="https://www.producthunt.com/posts/dolooper?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-dolooper"
          target="_blank"
          rel="noreferrer"
        >
          <ProductHuntImage />
        </a>
      </div>
    </section>
  )
}

const sectionStyles = `border-t my-4 py-4 dark:border-t-gray-500`
const containerStyles = `flex justify-center`

export default UsedBySection
