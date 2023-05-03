import { SVGProps } from 'react'

const ListIconSVG = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      style={{
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        strokeLinejoin: 'round',
        strokeMiterlimit: 2,
        fill: 'currentcolor',
      }}
      viewBox="0 0 64 64"
      {...props}
    >
      <path
        d="M0 0h64v64H0z"
        style={{
          fill: 'none',
        }}
      />
      <circle cx={17.057} cy={24.426} r={2.926} />
      <path d="M23.204 22.397h26.665v4.058H23.204z" />
      <circle cx={17.057} cy={32} r={2.926} />
      <path d="M23.204 29.971h26.665v4.058H23.204z" />
      <circle cx={17.057} cy={39.574} r={2.926} />
      <path d="M23.204 37.545h26.665v4.058H23.204z" />
    </svg>
  )
}

export default ListIconSVG
