import { BtnProps } from '@/types'

export const BtnTryIt = (props: BtnProps) => {
  return (
    <button
      type='button'
      className={`bg-purple rounded-[10px] font-bold text-[18px] ${props.className}`}
    >
      {props.children}
    </button>
  )
}
