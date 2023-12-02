import { BtnProps } from '@/types'
import { IconFacebook } from '../icons/icon-facebook'

export const BtnFacebook = (props: BtnProps) => {
  return (
    <a
      href='https://www.facebook.com/ilonmask_oficial'
      target='_blank'
      rel='noopener noreferrer'
      className={` ${props.className}`}
    >
      <IconFacebook />
    </a>
  )
}
