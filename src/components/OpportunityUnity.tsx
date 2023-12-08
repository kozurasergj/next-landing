import { IconArrowCard } from "./icons/icon-arrow"


export const OpportunityUnity = () => {
  const mocks = [
    {
      title: ' Lorem ipsum dolor sit',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      title: ' Lorem ipsum dolor sit',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      title: ' Lorem ipsum dolor sit',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      title: ' Lorem ipsum dolor sit',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      title: ' Lorem ipsum dolor sit',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
  ]

  return (
    <div className='flex flex-col items-center bg-skills overflow-hidden mx-auto'>
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

      <div className='lg:w-full'>
        <div className='lg:mt-20 md:mb-3 sm:mt-5 3xl:mb-8 text-left lg:max-w-[1100px] lg:ml-[60px]'>
          <h2 className='sm:leading-none sm:text-center lg:text-left sm:text-3xl md:leading-1 text-gradient text-2xl md:text-[64px] 3xl:text-[90px] font-bold uppercase relative  text-left'>
            знайомтесь з можливостями юніті
          </h2>
        </div>
        <div className='ml-[20px]  mr-[20px] flex flex-wrap justify-around lg:max-w-[1100px]  hover:bg-sky-700'>
          {mocks.map((cardItem: any) => {
            return (
              <>
                <div className='relative mainCard border-t-2 rounded-3xl border-current max-h-[320px] mt-3 max-w-[300px] h-[360px] group '>
                  <div className='flex justify-around flex-col w-full h-full  '>
                    <div className='flex flex-col justify-space-around '>
                      <h3 className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block font-extrabold sm:text-3xl text-xl m-3 flex '>
                        {cardItem.title}
                      </h3>
                      <p className='text-base ml-3'>{cardItem.desc}</p>
                    </div>
                    <div className=''>
                      <p className='text-base ml-3'>{cardItem.desc}</p>
                    </div>
                    <div className='absolute text-center top-0 left-0 w-full h-0 flex flex-col justify-center items-center  opacity-0 group-hover:h-full group-hover:opacity-100 duration-500 bg-[#9463FE] '>
                      <p className='text-2xl text-white text-left pl-10'>
                        Більше можливостей Юніті 
                      </p>
                      <IconArrowCard />
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
      {/* end */}
    </div>
  )
}

