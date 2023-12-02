import { BtnProps } from '@/types'

export const BtnDropDown = (props: BtnProps) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='36'
        height='36'
        viewBox='0 0 36 36'
        fill='none'
      >
        <circle
          cx='18'
          cy='18'
          r='17.5'
          transform='rotate(90 18 18)'
          stroke='white'
        />
        <path
          d='M18 27L18 9M18 9L9 18M18 9L27 18'
          stroke='white'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </button>
  )
}
