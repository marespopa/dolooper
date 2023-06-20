import { RefObject } from 'react'
import useIsomorphicLayoutEffect from './use-isomorphic-layout-effect'

const minHeight = 150
const maxHeight = 500

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
    if (textAreaRef.scrollHeight > minHeight) {
      textAreaRef.style.height = `${textAreaRef.scrollHeight}px`
    }

    if (textAreaRef.scrollHeight > maxHeight) {
      textAreaRef.style.height = `${maxHeight}px`
    }
  }
}

export default useAutoResizeTextArea
