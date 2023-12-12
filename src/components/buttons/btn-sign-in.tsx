import { BtnProps } from '@/types'
import { IconUser } from '../icons/icon-user'

export const BtnSignIn = (props: BtnProps) => {
  return (
    <button type='button' className={`bg-purple ${props.className}`}>
      <IconUser className='w-[14px] h-[14px] md:w-[21px] md:h-[21px]' />
      <span className='text-[12px] font-medium ml-[6px] md:ml-0 md:text-[14px] md:leading-[110%]  '>
        Увійти
      </span>
    </button>
  )
}
