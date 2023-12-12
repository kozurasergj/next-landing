import { ComponentProps } from '@/types'
import { BtnBig } from './buttons/btn-big'
import { IconVolume } from './icons/icon-volume'
import { IconWindow } from './icons/icon-window'

export const UnityWindow = (props: ComponentProps) => {
  return (
    <section className={`${props.className}`}>
      <BtnBig className='w-[139px] h-[139px] turquoiseBg flex flex-col justify-center items-center lg:gap-2'>
        <IconVolume className='lg:w-[30px] lg:h-[30px]' />
        <span className='lg:text-[16px] lg:font-semibold lg:leading-[130%] lg:uppercase'>
          інструкції
        </span>
      </BtnBig>
      <IconWindow />
    </section>
  )
}
