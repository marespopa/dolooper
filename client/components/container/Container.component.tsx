import React, { ReactNode } from 'react'

const Container = ({ children }: { children: ReactNode }) => {
  const style = `w-full max-w-5xl px-2 mx-auto md:px-4`

  return <div className={style}>{children}</div>
}

export default Container
