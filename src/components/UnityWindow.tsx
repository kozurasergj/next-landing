import { ComponentProps } from '@/types'
import { BtnBig } from './buttons/btn-big'
import { IconVolume } from './icons/icon-volume'
import { IconWindow } from './icons/icon-window'

export const UnityWindow = (props: ComponentProps) => {
  return (
    <section className='hidden flex-col items-center gap-8 lg:flex '>
      <BtnBig className='w-[139px] h-[139px] turquoiseBg'>
        <IconVolume />
        інструкції
      </BtnBig>
      <IconWindow />
    </section>
  )
}
