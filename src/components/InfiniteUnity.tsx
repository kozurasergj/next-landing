export const InfiniteUnity = (props: any) => {
  return (
    <section className={props.className}>
      <div className='w-full lg:ml-[150px]'>
        <div className='lg:mt-20 md:mb-3 sm:mt-5 3xl:mb-8 text-left lg:max-w-[1100px]'>
          <h2 className='sm:leading-none sm:text-center lg:text-left sm:text-3xl md:leading-1 text-gradient text-2xl md:text-[64px] 3xl:text-[90px] font-bold uppercase relative  text-left'>
            Можливості Unity безмежні
          </h2>
        </div>
      </div>
      <div className='md:block lg:flex sm:w-[100%] w-[80%] lg:mt-10 '>
        <div className='w-[90%] lg:max-w-[1000px] ml-[20px] mr-[20px] md:ml-[40px]'>
          <div className='flex flex-col w-full h-full md:ml-[30px] md:mt-[30px]'>
            <div className='cardp flex lg:justify-between lg:flex-row lg:flex-start sm:flex-col-reverse '>
              <div className='lg:max-w-[350px] text-xl sm:m-1'>
                <h3 className='sm:leading-none md:leading-1 text-white text-3xl md:text-[24px] lg:text-[50px] font-bold uppercase '>
                  Unity
                </h3>
                <p className=' mt-3'>
                  Весь спектр можливостей ШІ для зростання вашого бізнесу
                </p>
                <button className='lg:px-20 lg:py-4 sm:px-20 bg-[#9463FE] rounded-full	lg:mt-4 sm:mt-4'>
                  детальніше
                </button>
              </div>
              <div className=''>
                <img width={500} src='./opportunity.png' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
