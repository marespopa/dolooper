import { SVGProps } from 'react'

const TitleIconSVG = (props: SVGProps<SVGSVGElement>) => {
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
      <path
        d="m.136-.71.334.011.094-.002a.315.315 0 0 1 .003.044.057.057 0 0 1-.008.033c-.005.007-.015.01-.029.01L.389-.627a1.42 1.42 0 0 1-.03.154 6.15 6.15 0 0 0-.05.233 1.287 1.287 0 0 0-.025.223.417.417 0 0 1-.16.02H.117c0-.035.019-.138.057-.31.038-.172.057-.277.057-.314L.229-.635h-.04a.253.253 0 0 0-.126.025.166.166 0 0 1-.028-.088.321.321 0 0 1 .101-.012Z"
        style={{
          fillRule: 'nonzero',
        }}
        transform="matrix(59.44469 0 0 59.44469 14.107 53.014)"
      />
    </svg>
  )
}

export default TitleIconSVG
