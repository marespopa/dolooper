import TwitterSVG from 'icons/TwitterSVG'
import React from 'react'

const TwitterButton = () => {
  const twitterLink = `https://twitter.com/intent/tweet?text=Get%20productive%20with%20dolooper!%20%20&url=
                       https%3A%2F%2Fdolooper.netlify.com%2F`

  return (
    <a
      href={twitterLink}
      target="_blank"
      rel="noreferrer"
      className="flex items-center hover:underline"
    >
      <TwitterSVG /> <span className="ml-2">Share on Twitter</span>
    </a>
  )
}

export default TwitterButton
