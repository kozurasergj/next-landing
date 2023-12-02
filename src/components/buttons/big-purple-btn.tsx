import { BtnProps } from '@/types'

export const BtnBigPurple = (props: BtnProps) => {
  return (
    <button
      type='button'
      className={`hover:scale-90 flex flex-col items-center justify-center
    gap-3 rounded-full text-center text-sm font-semibold uppercase text-light
    transition-all before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full 
    before:w-full before:rounded-full before:bg-main before:transition-all
    before:content-[''] xl:px-2 xl:text-base md:hover:before:scale-[0.8] 
    disabled:xl:hover:before:scale-100 disabled:before:bg-middleGrey  ${props.className} `}
    >
      {props.children}
    </button>
  )
}
