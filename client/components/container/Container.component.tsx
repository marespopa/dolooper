import React, { ReactNode } from 'react'

const Container = ({ children }: { children: ReactNode }) => (
  <div className="w-full max-w-5xl px-2 mx-auto md:px-4">{children}</div>
)

export default Container
