import { ComponentProps } from '@/types'
import { BtnBigPurple } from './buttons/big-purple-btn'
import { IconVolume } from './icons/icon-volume'
import { IconWindow } from './icons/icon-window'

export const UnityWindow = (props: ComponentProps) => {
  return (
    <section className='hidden flex-col items-center gap-8 3xl:flex '>
      <BtnBigPurple className='w-[139px] h-[139px] turquoiseBg'>
        <IconVolume />
        інструкції
      </BtnBigPurple>
      <IconWindow />
    </section>
  )
}
