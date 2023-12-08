import { BtnTryIt } from './buttons/btn-try-it'

export const Form = () => {
  return (
    <section>
      <div className='w-full flex justify-center md:justify-start mt-[65px] md:mt-0 md:mx-auto md:w-[624px]'>
        <div className='flex flex-col items-center justify-center mb-8 md:mb-8 w-[279px] md:items-start  3xl:w-[1092px]'>
          <h3 className='text-[32px] leading-[110%] tracking-wider font-bold md:text-left text-gradient text-3xl md:text-2xl lg:text-5xl 3xl:text-8xl uppercase relative text-center mb-1 3xl:mb-8'>
            підтримати проект
          </h3>
          <p className='text-center md:text-left tracking-wider  text-[18px] leading-[120%] md:text-base  lg:text-2xl'>
            Дайте рекомендації
          </p>
        </div>
      </div>
      <form className='flex flex-col gap-3 w-[246px] md:w-[624px] lg:w-[666px] md:items-start mx-auto mb-5 text-[#909090] text-[8px]'>
        <input
          type='text'
          placeholder='Your name?*'
          className='bg-[#161616] py-2 px-5 custom-border-input rounded-[20px] w-[246px] h-[32px] md:w-[304px] md:h-[32px] lg:w-[420px] lg:h-[50px] lg:text-base'
        />
        <input
          type='text'
          placeholder='Your e-mail?*'
          className='bg-[#161616] py-2 px-5 custom-border-input w-[246px] h-[32px] md:w-[304px] md:h-[32px] lg:w-[420px] lg:h-[50px] lg:text-base'
        />
        <textarea
          placeholder='Share your thoughts'
          className='bg-[#161616] py-2 px-5 custom-border-textarea w-[246px] h-[64px] md:w-[304px] md:h-[64px] lg:w-[500px] lg:h-[164px] lg:text-base'
        ></textarea>
      </form>
      <div className='w-full flex justify-center items-center md:justify-start   md:w-[624px] mx-auto'>
        <BtnTryIt className='mb-8 text-[18px] leading-[130%] font-bold  w-[182px] h-[39px] py-1 capitalize tracking-wider'>
          Підтримати{' '}
        </BtnTryIt>
      </div>
      {/* info */}
      <div className=' w-[279px] mx-auto mb-[61px] md:mb-[100px] md:w-[624px] lg:w-[666px] flex flex-col'>
        <div className='flex justify-between gap-[38px] mb-[13px] lg:mb-8 md:w-[279px]'>
          <div>
            <p className='text-[14px] font-semibold whitespace-nowrap leading-[110%] lg:text-3xl'>
              info@uwp.digital
            </p>
            <a
              href='mailto:info@uwp.digital'
              className='text-[10px] font-medium whitespace-nowrap text-[#909090] lg:text-base'
            >
              Shoot us a message
            </a>
          </div>
          <div>
            <p className='text-[14px] font-semibold leading-[110%] whitespace-nowrap lg:text-3xl'>
              +32 3244 547 78
            </p>
            <a
              href='tel:+32324454778'
              className='text-[10px] font-medium whitespace-nowrap text-[#909090] lg:text-base'
            >
              Call us
            </a>
          </div>
        </div>
        <div>
          <p className='text-[14px] leading-[110%] md:w-[270px] lg:text-lg lg:w-full'>
            Onnekop Per Bings vag 13B, 242 98 Horby, Sweden
          </p>
        </div>
      </div>
      {/*  */}
    </section>
  )
}
