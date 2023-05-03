import { MutableRefObject } from 'react'
import useIsomorphicLayoutEffect from './use-isomorphic-layout-effect'

const minHeight = 150

// Updates the height of a <textarea> when the value changes.
const useAutoResizeTextArea = (
  textAreaRef: MutableRefObject<HTMLTextAreaElement>,
  value: string,
) => {
  function resize(textAreaRef: HTMLTextAreaElement) {
    if (textAreaRef.scrollHeight > minHeight) {
      textAreaRef.style.height = `${textAreaRef.scrollHeight}px`
    }
  }

  useIsomorphicLayoutEffect(() => {
    if (textAreaRef?.current) {
      resize(textAreaRef.current)
    }
  }, [textAreaRef, value])
}

export default useAutoResizeTextArea
