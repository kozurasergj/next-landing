'use client'
import { getGradientClass, getTitleText } from '@/helpers'
import parse from 'html-react-parser'
import { useEffect, useState } from 'react'
import { UnityWindow } from './UnityWindow'
import { BtnBigPurple } from './buttons/big-purple-btn'
import { Icon1AI } from './icons/icon-1-ai'
import { Icon2AI } from './icons/icon-2-ai'

export const Hello = ({ page }: { page: string }) => {
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
    <section className=' mt-[60px] md:mt-[50px] relative lg:flex lg:justify-center lg:gap-3 3xl:gap-96'>
      <div className='flex flex-col items-center lg:w-[70%]'>
        <div className='px-5 md:mb-5 3xl:mb-8'>
          <h2
            className={`${getGradientClass(
              page
            )} text-[48px] tracking-wide mb-5 leading-[120%] font-bold uppercase relative text-center md:text-[64px] lg:text-[80px] 2xl:text-[128px] `}
          >
            {/* Вітаю _) <br /> я юніті */}
            {parse(getTitleText(page))}
          </h2>
        </div>
        <span className='text-gray2 tracking-widest leading-[120%] font-medium text-[24px] lg:text-2xl mb-[360px] md:mb-[20px] 3xl:mb-16'>
          Унікальний AI
        </span>
        {/* Icon1AI */}

        <div className=' absolute top-[30px] left-[50%] translate-x-[-50%] flex items-center justify-center w-full md:top-[50px] md:left-[-300px] md:w-[768px] md:h-[602px] md:translate-x-[0] lg:top-[480px] lg:left-[-200px] 3xl:w-[729px] 3xl:h-[672px] 3xl:left-[-200px] 3xl:top-[500px]'>
          {page === '' && <Icon1AI className='' />}
          {page === 'ukrainians' && <Icon2AI className='' />}
          {page === 'business' && <Icon2AI className='' />}
          {page === 'users' && <Icon2AI className='' />}
        </div>
        {/* end */}
        <p className='text-purple text-left text-[24px]  leading-[110%] font-bold mx-8  md:w-full md:mb-5 md:text-base md:font-medium lg:text-3xl lg:mb-8  lg:font-semibold'>
          Кількість людей, що користуються Unity
        </p>
        <div className='flex flex-col w-[200px] md:w-0 items-center justify-center mb-8 mt-8 md:mt-0 md:flex-row md:gap-8 3xl:gap-20 '>
          <div className='flex flex-col mb-8 md:mb-0 items-center '>
            <span className='text-white text-3xl  tracking-wider h-[35px] my-[23px] font-sans 3xl:text-5xl'>
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
          <div className='flex flex-col items-center'>
            <span className='text-white text-3xl tracking-wider h-[35px] my-[23px] font-sans 3xl:text-5xl'>
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
        <BtnBigPurple className='bg-purple h-[139px] w-[139px] 1xl:h-[158px] 1xl:w-[158px] 2xl:h-[216px] 2xl:w-[216px] lg:h-[142px] lg:w-[142px] xl:h-[145px] xl:w-[145px] relative z-10'>
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
          <span className='text-[16px] leading-[130%] tracking-widest uppercase  3xl:text-2xl'>
            спробувати
          </span>
        </BtnBigPurple>
      </div>
      <UnityWindow className='lg:self-end' />
    </section>
  )
}
