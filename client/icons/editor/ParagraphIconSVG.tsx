import { SVGProps } from 'react'

const ParagraphIconSVG = (props: SVGProps<SVGSVGElement>) => {
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
      viewBox="0 0 64 65"
      fill="currentColor"
      {...props}
    >
      <path
        d="M0 0h64v64H0z"
        style={{
          fill: 'none',
        }}
        transform="translate(0 .972)"
      />
      <path
        d="M.001.224A.185.185 0 0 1-.004.171c0-.027.013-.101.039-.221.026-.119.039-.211.039-.276a.109.109 0 0 0-.009-.041A.125.125 0 0 0 .046-.4L.037-.411l.001-.013a.623.623 0 0 1 .166-.015.165.165 0 0 1 .014.059c.051-.042.094-.063.128-.063A.1.1 0 0 1 .43-.4a.213.213 0 0 1 .031.126c0 .097-.018.168-.053.215a.161.161 0 0 1-.134.071A.18.18 0 0 1 .204 0l-.01-.004.007-.039a.125.125 0 0 0 .021.002.059.059 0 0 0 .046-.024.165.165 0 0 0 .029-.061.54.54 0 0 0 .02-.137c0-.06-.012-.09-.037-.09a.114.114 0 0 0-.062.023 1.932 1.932 0 0 1-.041.245A1.414 1.414 0 0 0 .14.197a.422.422 0 0 1-.139.027Z"
        style={{
          fillRule: 'nonzero',
        }}
        transform="matrix(59.44469 0 0 59.44469 18.417 39.481)"
      />
    </svg>
  )
}

export default ParagraphIconSVG
