import useIsomorphicLayoutEffect from './use-isomorphic-layout-effect'
const IS_SERVER = typeof window === 'undefined'

export function useScrollIntoViewWithOffset(selector = 'body', offset: number) {
  useIsomorphicLayoutEffect(() => {
    if (IS_SERVER) return
    if (!selector) return

    const element = document?.querySelector(selector)

    if (!element) return

    window.scrollTo({
      behavior: 'smooth',
      top:
        element.getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        offset,
    })
  })
}

export default useScrollIntoViewWithOffset
