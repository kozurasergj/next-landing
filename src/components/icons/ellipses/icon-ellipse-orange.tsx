import { TypeIconProps } from '@/types'

export const IconEllipseOrange = (props: TypeIconProps) => {
  return (
    <svg
      width='320'
      height='498'
      viewBox='0 0 320 498'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g id='Ellipse 72' filter='url(#filter0_f_1_14970)'>
        <ellipse
          cx='136.076'
          cy='248.572'
          rx='200'
          ry='200'
          fill='url(#paint0_radial_1_14970)'
        />
      </g>
      <defs>
        <filter
          id='filter0_f_1_14970'
          x='-112.512'
          y='0.077179'
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
            result='effect1_foregroundBlur_1_14970'
          />
        </filter>
        <radialGradient
          id='paint0_radial_1_14970'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(136.076 248.572) rotate(90) scale(100.428 100.521)'
        >
          <stop stop-color='#EB807D' />
          <stop offset='1' stop-color='#BE3F3B' />
        </radialGradient>
      </defs>
    </svg>
  )
}
