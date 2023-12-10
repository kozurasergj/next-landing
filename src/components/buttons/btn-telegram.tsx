import { BtnProps } from '@/types'
import { IconTelegram } from '../icons/icon-telegram'

export const BtnTelegram = (props: BtnProps) => {
  return (
    <a
      href='https://t.me/'
      className={` ${props.className}`}
      target='_blank'
      rel='noopener noreferrer'
    >
      <IconTelegram className='md:w-[24px] md:h-[24px]' />
    </a>
  )
}
