import { BtnProps } from '@/types'
import { IconUser } from '../icons/icon-user'

export const BtnSignIn = (props: BtnProps) => {
  return (
    <button
      type='button'
      className={`bg-purple hidden items-center  gap-2 px-2 py-1 rounded-md ${props.className}`}
    >
      <IconUser />
      <span>Увійти</span>
    </button>
  )
}
