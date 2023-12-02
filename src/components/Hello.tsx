'use client'
import { ReactNode, useEffect, useState } from 'react'
import { UnityWindow } from './UnityWindow'
import { BtnBigPurple } from './buttons/big-purple-btn'
import { Icon1AI } from './icons/icon-1-ai'

export const Hello = ({ children }: { children?: ReactNode }) => {
  const [usersCount, setUsersCount] = useState<number>(1010011)
  const [businessCount, setBusinessCount] = useState<number>(999189)

  useEffect(() => {
    const usersIntervalId = setInterval(() => {
      setUsersCount((prevCount) => prevCount + 2)
    }, 2000)

    const businessIntervalId = setInterval(() => {
      setBusinessCount((prevCount) => prevCount + 3)
    }, 1500)

    return () => {
      clearInterval(usersIntervalId)
      clearInterval(businessIntervalId)
    }
  }, [])
  return (
    <section className=' mt-[75px] md:mt-[50px] relative 3xl:flex 3xl:justify-center 3xl:gap-96'>
      <div className='flex flex-col items-center '>
        <div className='px-5 md:mb-5 3xl:mb-8'>
          <h2 className='text-gradient text-5xl md:text-[64px] 3xl:text-[128px] font-bold uppercase relative '>
            {/* Вітаю _) */}
            {/* {t('title')} */}
            {children}
          </h2>
          <h2 className='text-gradient text-5xl md:text-[64px] 3xl:text-[128px] font-bold	uppercase text-right mt-2 3xl:mt-3 mb-8 md:mb-0'>
            {/* я юніті */}
          </h2>
        </div>
        <span className='text-gray2 font-medium text-xl 3xl:text-2xl mb-[340px] md:mb-[20px] 3xl:mb-16'>
          Унікальний AI
        </span>
        {/* Icon1AI */}
        <div className='3xl:w-[729px] 3xl:h-[672px] 3xl:left-[-200px] 3xl:top-[500px] absolute top-[30px] md:top-[50px] left-[50%] md:left-[-300px] md:w-[768px] md:h-[602px] md:translate-x-[0] translate-x-[-50%] flex items-center justify-center w-full'>
          <Icon1AI className='' />
        </div>
        {/* end */}
        <p className='text-purple text-center 3xl:text-3xl 3xl:mb-8 text-2xl md:text-base md:font-medium font-bold 3xl:font-semibold	px-5 w-[320px] md:w-full md:mb-5'>
          Кількість людей, що користуються Unity
        </p>
        <div className='flex flex-col w-[200px] md:w-0 items-center justify-center mb-8 mt-8 md:mt-0 md:flex-row md:gap-8 3xl:gap-20 '>
          <div className='flex flex-col mb-8 md:mb-0 items-center'>
            <span className='text-white text-3xl 3xl:text-5xl tracking-wider'>
              {usersCount}
            </span>
            <p className='text-[#B8B8B8] my-2 3xl:mb-3 text-base 3xl:text-xl'>
              Користувачів
            </p>
            <div
              className='w-[140px] h-[3px] rounded-[59px]'
              style={{
                backgroundImage:
                  'linear-gradient(90deg, rgba(19, 19, 19, 0.00) -0.53%, #9266FC 99.98%)',
              }}
            ></div>
          </div>
          <div className='flex flex-col items-center md:'>
            <span className='text-white text-3xl 3xl:text-5xl tracking-wider'>
              {businessCount}
            </span>
            <p className='text-[#B8B8B8] my-2 text-base 3xl:text-xl 3xl:mb-3'>
              Для бізнесу
            </p>
            <div
              className='w-[140px] h-[3px] rounded-[59px]'
              style={{
                backgroundImage:
                  'linear-gradient(90deg, rgba(19, 19, 19, 0.00) -0.53%, #9266FC 99.98%)',
              }}
            ></div>
          </div>
        </div>
        <BtnBigPurple className='bg-purple h-[139px] w-[139px] 1xl:h-[158px] 1xl:w-[158px] 2xl:h-[216px] 2xl:w-[216px] lg:h-[142px] lg:w-[142px] xl:h-[145px] xl:w-[145px]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='15'
            height='14'
            viewBox='0 0 24 24'
            enable-background='new 0 0 24 24'
            className='3xl:w-[22px] 3xl:h-[22px]'
          >
            <path
              fill='currentColor'
              d='M15.8545 4.0082H2.20003V0.408203H22V20.2082H18.4V6.55379L3.47283 21.481L0.927246 18.9354L15.8545 4.0082Z'
            />
          </svg>
          <span className='text-base 3xl:text-2xl'>спробувати</span>
        </BtnBigPurple>
      </div>
      <UnityWindow />
    </section>
  )
}
