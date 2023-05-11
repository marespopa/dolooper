import React, { ReactNode } from 'react'

const Container = ({ children }: { children: ReactNode }) => {
  const style = `w-full max-w-5xl px-4 mx-auto md:px-8`

  return <div className={style}>{children}</div>
}

export default Container
