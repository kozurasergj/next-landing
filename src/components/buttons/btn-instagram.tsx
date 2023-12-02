import { BtnProps } from '@/types'
import { IconInstagram } from '../icons/icon-instagram'

export const BtnInstagram = (props: BtnProps) => {
  return (
    <a
      href='https://www.instagram.com/ilonmask_oficial'
      className={` ${props.className}`}
      target='_blank'
      rel='noopener noreferrer'
    >
      <IconInstagram />
    </a>
  )
}
