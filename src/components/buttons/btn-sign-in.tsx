import { BtnProps } from '@/types'
import { IconUser } from '../icons/icon-user'

export const BtnSignIn = (props: BtnProps) => {
  return (
    <button type='button' className={`bg-purple ${props.className}`}>
      <IconUser className='w-[14px] h-[14px]' />
      <span className='text-[12px] font-medium ml-[6px]'>Увійти</span>
    </button>
  )
}
