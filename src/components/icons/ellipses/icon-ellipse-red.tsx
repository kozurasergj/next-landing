import { TypeIconProps } from '@/types'

export const IconEllipseRed = (props: TypeIconProps) => {
  return (
    <svg
      width='320'
      height='498'
      viewBox='0 0 320 498'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g id='Ellipse 68' filter='url(#filter0_f_1_14967)'>
        <ellipse
          cx='100.521'
          cy='249.178'
          rx='200'
          ry='200'
          fill='url(#paint0_radial_1_14967)'
        />
      </g>
      <defs>
        <filter
          id='filter0_f_1_14967'
          x='-148.066'
          y='0.683136'
          width='497.175'
          height='496.989'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='BackgroundImageFix'
            result='shape'
          />
          <feGaussianBlur
            stdDeviation='74.0332'
            result='effect1_foregroundBlur_1_14967'
          />
        </filter>
        <radialGradient
          id='paint0_radial_1_14967'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(100.521 249.178) rotate(90) scale(100.428 100.521)'
        >
          <stop stop-color='#E58CB0' />
          <stop offset='1' stop-color='#C80451' />
        </radialGradient>
      </defs>
    </svg>
  )
}
