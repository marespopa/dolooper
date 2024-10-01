import { RefObject } from 'react'
import useIsomorphicLayoutEffect from './use-isomorphic-layout-effect'

const MIN_HEIGHT = 400 //px

// Updates the height of a <textarea> when the value changes.
const useAutoResizeTextArea = (
  textAreaRef: RefObject<HTMLTextAreaElement> | null,
  value: string,
) => {
  useIsomorphicLayoutEffect(() => {
    if (textAreaRef?.current) {
      resize(textAreaRef.current)
    }
  }, [textAreaRef, value])

  function resize(textAreaRef: HTMLTextAreaElement) {
    textAreaRef.style.height = "";
    textAreaRef.style.height = textAreaRef.scrollHeight + 4 + "px";

    if (textAreaRef.scrollHeight < MIN_HEIGHT) {
      textAreaRef.style.height = `${textAreaRef.scrollHeight}px`
    }
  }
}

export default useAutoResizeTextArea
