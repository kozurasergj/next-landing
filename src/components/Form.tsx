import { BtnTryIt } from './buttons/btn-try-it'

export const Form = () => {
  return (
    <section>
      <div className='w-full flex justify-center md:justify-start mt-[65px] md:mt-0 md:mx-auto md:w-[624px]'>
        <div className='flex flex-col items-center justify-center mb-8 md:mb-8 w-[279px] md:items-start  3xl:w-[1092px]'>
          <h3 className='md:text-left text-gradient text-3xl md:text-2xl lg:text-5xl 3xl:text-8xl font-bold uppercase relative text-center mb-5 3xl:mb-8'>
            підтримати проект
          </h3>
          <p className='text-center md:text-left text-lg md:text-base  lg:text-2xl'>
            Дайте рекомендації
          </p>
        </div>
      </div>
      <form className='flex flex-col gap-3 w-[246px] md:w-[624px] lg:w-[666px] md:items-start mx-auto mb-8 text-[#909090] text-[8px]'>
        <input
          type='text'
          placeholder='Your name?*'
          className='bg-[#161616] py-2 px-5 custom-border-input md:w-[304px] md:h-[32px] lg:w-[420px] lg:h-[50px] lg:text-base'
        />
        <input
          type='text'
          placeholder='Your e-mail?*'
          className='bg-[#161616] py-2 px-5 custom-border-input md:w-[304px] md:h-[32px] lg:w-[420px] lg:h-[50px] lg:text-base'
        />
        <textarea
          placeholder='Розкажіть вашу думку'
          className='bg-[#161616] py-2 px-5 custom-border-textarea h-[50px] md:w-[304px] md:h-[64px] lg:w-[500px] lg:h-[164px] lg:text-base'
        ></textarea>
        <div className='w-full flex justify-center items-center lg:hidden mt-8 md:mt-5 md:w-[624px] md:justify-start md:mx-auto'>
          <BtnTryIt className='px-8 py-2 text-[#fff]'>Підтримати</BtnTryIt>
        </div>
      </form>
      {/* info */}
      <div className=' w-[279px] mx-auto mb-14 md:mb-[100px] md:w-[624px] lg:w-[666px] flex flex-col'>
        <div className='flex justify-between gap-9 mb-3 lg:mb-8 md:w-[279px]'>
          <div>
            <p className='text-sm font-semibold whitespace-nowrap lg:text-3xl'>
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
            <p className='text-sm font-semibold whitespace-nowrap lg:text-3xl'>
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
          <p className='text-sm md:w-[270px] lg:text-lg lg:w-full'>
            Onnekop Per Bings vag 13B, 242 98 Horby, Sweden
          </p>
        </div>
      </div>
      {/*  */}
    </section>
  )
}
