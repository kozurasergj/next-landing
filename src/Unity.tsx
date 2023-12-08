import { Icon2AI } from "./components/icons/icon-2-ai"
import { UnityWindow } from "./components/UnityWindow"


export const Unity = () => {
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

  const mock2 = [
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
    <div className='flex flex-col items-center bg-skills overflow-hidden'>
      <div className='px-5 md:mb-5 3xl:mb-8 text-center'>
        <span className='text-gray2 font-extrabold text-base mt-5 mb-5 sm:block md:hidden'>
          Унікальний AI
        </span>
        <h2 className='sm:leading-none	 md:leading-1 text-gradient text-2xl md:text-[64px] 3xl:text-[128px] font-bold uppercase relative '>
          Знайомтесь з навичками юніті
        </h2>
      </div>

      {/* Icon1AI */}
      <ul className='hidden md:flex lg:flex bg-[#9463FE] rounded-s-xl rounded-e-xl w-[90%] lg:w-[50%] justify-around p-2 mb-4'>
        <li>Для українців</li>
        <li>Для бізнесу</li>
        <li>Для користувачів</li>
        <li>Перекладач</li>
        <li>Контакти</li>
      </ul>
      <div className='md:block lg:flex sm:w-[100%] w-[80%] lg:justify-center lg:mt-10'>
        <div className='w-[90%] lg:w-[60%] ml-[20px] mr-[20px] bg-[#1D1D1D] md:ml-[30px]'>
          <div className='relative mainCard border-t-2 rounded-3xl border-current sm:max-h-[320px] lg:max-h-full mt-3 overflow-hidden h-full'>
            <div className='flex flex-col w-full h-full md:ml-[30px] md:mt-[30px] lg:ml-[64px] lg:mt-[64px]'>
              <div className='md:w-[420px] lg:w-full z-20'>
                <h3 className='leading-none font-bold  text-2xl lg:text-[64px] m-3 flex lg:mb-10'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h3>
              </div>
              <div className='mb-5 z-10'>
                <p className='text-base lg:text-xl m-3 flex self-end sm:block lg:hidden'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className='sm:hidden lg:block text-base lg:text-lg	 m-3 flex self-end max-w-[500px]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  vel feugiat felis. Praesent suscipit fringilla nulla at
                  tempor. Nunc ac vestibulum mauris. Donec libero nisl, suscipit
                  at efficitur nec, semper nec mi. In ornare odio lectus.
                  Maecenas a orci vel sapien facilisis venenatis nec id sem.
                </p>
              </div>
              <div className='hidden md:flex md:mt-15 md:max-w-[400px] lg:max-w-[600px]'>
                <div className=' lg:border-t-2 lg:border-t-white lg:border-b-2 lg:border-b-gray lg:rounded-3xl lg:border-current ml-3 lg:w-[50%] lg:w-[50%] lg:h-[300px] lg:mr-5'>
                  <h3 className='font-extrabold text-base m-3 flex'>
                    Lorem ipsum dolor sit
                  </h3>
                  <p className='text-base ml-3'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className='lg:border-t-2 lg:border-t-white lg:border-b-2 lg:border-b-gray lg:rounded-3xl lg:border-current mr-3 lg:w-[50%] lg:h-[300px]'>
                  <h3 className='font-extrabold text-base m-3 flex'>
                    Lorem ipsum dolor sit
                  </h3>
                  <p className='text-base ml-3'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className='sm:w-full sm:h-full md:w-[290px] lg:w-[60%] sm:translate-x-[10%]  md:translate-x-[160%] translate-y-[-50%] md:translate-y-[-90%] lg:hidden  lg:translate-x-[80%] lg:translate-y-[-30%] flex items-center justify-center w-full lg:absolute lg:top-[40px]'>
              <Icon2AI className='' />
            </div>
            <img
              className='sm:hidden lg:block lg:absolute right-0 top-0'
              src='./skills.png'
              alt=''
            />
          </div>
        </div>
        <UnityWindow />
      </div>

      <div className='ml-5 mr-5 mt-20 mb-10 text-left md:w-[80%]'>
        <h3 className='leading-none font-bold  text-2xl lg:text-[64px]  flex lg:mb-10 max-w-[1100px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h3>
        <p className='md:max-w-[400px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
          feugiat felis. Praesent suscipit fringilla nulla at tempor. Nunc ac
          vestibulum mauris. Donec libero nisl, suscipit at efficitur nec,
          semper nec mi. In ornare odio lectus. Maecenas a orci vel sapien
          facilisis venenatis nec id sem.
        </p>
      </div>
      <div className='lg:w-full lg:ml-[135px]'>
        <div className='ml-[20px] lg:ml-[60px] mr-[20px] flex flex-wrap justify-around lg:max-w-[1100px]'>
          {mocks.map((cardItem: any) => {
            return (
              <>
                <div className='relative mainCard border-t-2 rounded-3xl border-current max-h-[320px] mt-3 max-w-[300px] h-[280px]'>
                  <div className='flex justify-around flex-col w-full'>
                    <div className=''>
                      <h3 className='font-extrabold sm:text-3xl text-xl m-3 flex '>
                        {cardItem.title}
                      </h3>
                      <p className='text-base ml-3'>{cardItem.desc}</p>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
      <div className='ml-5 mr-5 mt-20 mb-10 text-left md:w-[80%]'>
        <h3 className='leading-none font-bold  text-2xl lg:text-[64px]  flex lg:mb-10 max-w-[1100px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h3>
        <p className='md:max-w-[400px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
          feugiat felis. Praesent suscipit fringilla nulla at tempor. Nunc ac
          vestibulum mauris. Donec libero nisl, suscipit at efficitur nec,
          semper nec mi. In ornare odio lectus. Maecenas a orci vel sapien
          facilisis venenatis nec id sem.
        </p>
      </div>
      <div className='lg:w-full lg:ml-[135px]'>
        <div className='ml-[20px] lg:ml-[60px] mr-[20px] flex flex-wrap justify-around lg:max-w-[1100px]'>
          {mocks.map((cardItem: any) => {
            return (
              <>
                <div className='relative mainCard border-t-2 rounded-3xl border-current max-h-[341px] mt-3 max-w-[300px] h-[280px]'>
                  <div className='flex justify-around flex-col w-full'>
                    <div className=''>
                      <h3 className='font-extrabold sm:text-3xl text-xl m-3 flex'>
                        {cardItem.title}
                      </h3>
                      <p className='text-base ml-3'>{cardItem.desc}</p>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
      <div className='ml-5 mr-5 mt-20 mb-10 text-left md:w-[80%]'>
        <h3 className='leading-none font-bold  text-2xl lg:text-[64px]  flex lg:mb-10 max-w-[1100px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h3>
        <p className='md:max-w-[400px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
          feugiat felis. Praesent suscipit fringilla nulla at tempor. Nunc ac
          vestibulum mauris. Donec libero nisl, suscipit at efficitur nec,
          semper nec mi. In ornare odio lectus. Maecenas a orci vel sapien
          facilisis venenatis nec id sem.
        </p>
      </div>
      <div className='lg:w-full lg:ml-[135px]'>
        <div className='ml-[20px] lg:ml-[60px] mr-[20px] flex flex-wrap justify-around lg:max-w-[1100px]'>
          {mock2.map((cardItem: any) => {
            return (
              <>
                <div className='relative mainCard border-t-2 rounded-3xl border-current max-h-[320px] mt-3 max-w-[300px] h-[280px]'>
                  <div className='flex justify-around flex-col w-full'>
                    <div className=''>
                      <h3 className='font-extrabold sm:text-3xl text-xl m-3 flex'>
                        {cardItem.title}
                      </h3>
                      <p className='text-base ml-3'>{cardItem.desc}</p>
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

