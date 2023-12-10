export const Info = () => {
  return (
    <div className=' w-[279px] mx-auto mb-[61px] md:mb-[100px] md:w-[624px] lg:w-[666px] flex flex-col'>
      <div className='flex justify-between gap-[38px] mb-[13px] lg:mb-8 md:w-[279px]'>
        <div>
          <p className='text-[14px] font-semibold whitespace-nowrap leading-[110%] lg:text-3xl'>
            info@uwp.digital
          </p>
          <a
            href='mailto:info@uwp.digital'
            className='text-[10px] font-medium leading-[24px] tracking-wide whitespace-nowrap text-[#909090] lg:text-base'
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
  )
}
