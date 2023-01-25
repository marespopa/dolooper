import { useEffect, useState } from 'react'

const FADE_INTERVAL_MS = 1.75 * 1000 //seconds
const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2

type FadeProp = { fade: 'opacity-100' | 'opacity-0' }

export type WordToAnimate = {
  text: string
}

interface Props {
  words: WordToAnimate[]
}

export const AnimatedText = ({ words }: Props) => {
  const [fadeProp, setFadeProp] = useState<FadeProp>({ fade: 'opacity-100' })
  const [wordOrder, setWordOrder] = useState(0)
  const wordsToAnimate = words.map((word) => word.text)
  const animationDuration = `duration-${FADE_INTERVAL_MS - 250}`
  const spanStyle = `text-blue-700 ease ${animationDuration} transition-opacity
                motion-reduce:transition-none ${fadeProp.fade}`

  useEffect(() => {
    const fadeTimeout = setInterval(() => {
      fadeProp.fade === 'opacity-100'
        ? setFadeProp({ fade: 'opacity-0' })
        : setFadeProp({ fade: 'opacity-100' })
    }, FADE_INTERVAL_MS)

    return () => clearInterval(fadeTimeout)
  }, [fadeProp])

  useEffect(() => {
    const wordTimeout = setInterval(() => {
      setWordOrder((prevWordOrder) => (prevWordOrder + 1) % words.length)
    }, WORD_CHANGE_INTERVAL_MS)

    return () => clearInterval(wordTimeout)
  }, [words.length])

  return <span className={spanStyle}>{wordsToAnimate[wordOrder]}</span>
}
