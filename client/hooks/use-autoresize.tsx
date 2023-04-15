import { MutableRefObject, useLayoutEffect } from 'react'

// Updates the height of a <textarea> when the value changes.
const useAutoResizeTextArea = (
  textAreaRef: MutableRefObject<HTMLTextAreaElement>,
  value: string,
) => {
  function resize(textAreaRef: HTMLTextAreaElement) {
    textAreaRef.style.height = '64px'
    textAreaRef.style.height = `${textAreaRef.scrollHeight}px`
  }

  useLayoutEffect(() => {
    if (textAreaRef?.current) {
      resize(textAreaRef.current)
    }
  }, [textAreaRef, value])
}

export default useAutoResizeTextArea
