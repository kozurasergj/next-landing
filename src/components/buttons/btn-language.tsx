import { BtnProps } from '@/types'
import { IconSwitch } from '../icons/icon-switch'

export const BtnLanguage = (props: BtnProps) => {
  return (
    <button
      type='button'
      className={`flex items-center  px-2 py-1 ${props.className}`}
    >
      <span className='text-base text-gray xl:text-xl'>UA</span>
      <IconSwitch />
    </button>
  )
}
