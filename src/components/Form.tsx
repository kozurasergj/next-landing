import { Info } from './Info'
import { BtnTryIt } from './buttons/btn-try-it'

export const Form = () => {
  return (
    <section>
      <div className='w-full flex justify-center md:justify-start mt-[63px] md:mt-0 md:mx-auto md:w-[624px]'>
        <div className='flex flex-col items-center justify-center mb-8 md:mb-8 w-[279px] md:w-[336px]  md:items-start  3xl:w-[1092px]'>
          <h3 className='uppercase relative text-center mb-[4px] md:mb-[20px] text-[32px] leading-[110%] font-bold text-gradient text-3xl md:text-[28px] md:text-left lg:text-5xl 3xl:text-8xl  3xl:mb-8'>
            підтримати проект
          </h3>
          <p className='text-center md:text-left font-semibold  text-[18px] leading-[120%] md:text-[16px] md:font-normal   lg:text-2xl'>
            Дайте рекомендації
          </p>
        </div>
      </div>
      <form className='flex flex-col gap-3 w-[246px] md:w-[624px] lg:w-[666px] md:items-start mx-auto mb-5 text-[#909090] text-[8px]'>
        <input
          type='text'
          placeholder='Your name?*'
          className='bg-[#161616] placeholder-text-xs py-[12px] px-[18px] custom-border-input rounded-[20px] w-[246px] h-[32px] md:w-[304px] md:h-[32px] lg:w-[420px] lg:h-[50px] lg:text-base'
        />
        <input
          type='text'
          placeholder='Your e-mail?*'
          className='bg-[#161616] py-[12px] px-[18px] custom-border-input w-[246px] h-[32px] md:w-[304px] md:h-[32px] lg:w-[420px] lg:h-[50px] lg:text-base'
        />
        <textarea
          placeholder='Share your thoughts'
          className='bg-[#161616] py-[12px] px-[18px] custom-border-textarea w-[246px] h-[64px] md:w-[304px] md:h-[64px] lg:w-[500px] lg:h-[164px] lg:text-base'
        ></textarea>
      </form>
      <div className='w-full flex justify-center items-center md:justify-start md:w-[624px] mx-auto'>
        <BtnTryIt className='mb-8 text-[18px]  py-1 capitalize leading-[130%] font-bold  w-[182px] h-[39px] md:w-[142px] md:h-[32px] md:text-[12px] md:px-8 md:py-2'>
          Підтримати{' '}
        </BtnTryIt>
      </div>
      <Info />
    </section>
  )
}
