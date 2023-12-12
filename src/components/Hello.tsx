'use client'
import { getGradientClass, getTitleText } from '@/helpers'
import parse from 'html-react-parser'
import { useEffect, useState } from 'react'
import { UnityWindow } from './UnityWindow'
import { BtnBig } from './buttons/btn-big'
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
    <section className='relative mt-[60px] md:mt-[40px] lg:flex lg:justify-between  lg:items-start lg:mt-[69px] lg:ml-[250px] lg:mr-[105px] '>
      <div className='flex flex-col items-center lg:w-[734px]'>
        <div className='px-5 lg:px-0'>
          <h2
            className={`${getGradientClass(
              page
            )} relative  text-[48px] mb-5 md:mb-[10px]  leading-[120%] font-bold uppercase text-center  md:leading-[110%] md:text-[64px]  lg:mb-0 lg:mt-[29px] lg:text-[128px] `}
          >
            {/* Вітаю _) <br /> я юніті */}
            {parse(getTitleText(page))}
          </h2>
        </div>
        <span className='text-gray2  leading-[120%] font-medium text-[20px] md:text-[20px] md:leading-[110%] lg:text-2xl mb-[365px] md:mb-[20px] 2xl:mb-[63px]'>
          Унікальний ШI-помічник{' '}
        </span>

        {/* Icon1AI */}
        <div className=' absolute top-[30px] left-[50%] translate-x-[-50%] flex items-center justify-center w-full md:top-[70px] md:left-[-350px] md:w-[768px] md:h-[602px] md:translate-x-[0] lg:top-[700px] lg:left-[-400px]'>
          {page === '' && <Icon1AI className='' />}
          {page === 'ukrainians' && <Icon2AI className='' />}
          {page === 'business' && <Icon2AI className='' />}
          {page === 'users' && <Icon2AI className='' />}
        </div>
        {/* end */}

        <p className='text-purple text-center text-[24px] leading-[110%] font-bold  md:w-full md:text-center md:mb-5 md:text-base md:font-medium md:leading-[120%] md:text-[16px] lg:text-[32px] lg:mb-8  lg:font-semibold'>
          Кількість людей, що користуються Unity
        </p>
        <div className='flex flex-col w-[200px] md:w-0 items-center justify-center mb-8 mt-8 md:mt-0 md:mb-[30px] md:flex-row md:gap-8 lg:mb-[33px] 3xl:gap-20 '>
          <div className='flex flex-col mb-[30px] md:mb-0 items-center lg:max-w-[219px]'>
            <span className='text-white text-3xl  tracking-wider  my-[23px]   lg:leading-[110%] lg:font-medium  lg:text-[48px]'>
              {usersCount}
            </span>
            <p className='text-[#B8B8B8] mt-[7px] mb-[6px] text-base lg:mt-[8px] lg:mb-[7px] lg:text-[20px] '>
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
            <span className='text-white text-3xl tracking-wider  my-[23px] lg:leading-[110%] lg:font-medium lg:text-[48px]'>
              {businessCount}
            </span>
            <p className='text-[#B8B8B8] mt-[7px] mb-[6px] text-base lg:mt-[8px] lg:mb-[7px] lg:text-[20px] '>
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
        <BtnBig className='flex flex-col items-center justify-center bg-purple h-[139px] w-[139px]  gap-[10px]  2xl:h-[216px] 2xl:w-[216px] lg:gap-[12px] relative z-10'>
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
          <span className='text-[16px] leading-[130%] uppercase lg:capitalize  font-semibold  lg:text-[26px] lg:leading-[110%]'>
            спробувати
          </span>
        </BtnBig>
      </div>
      <UnityWindow className='hidden fixed z-10 top-[145px] right-[107px] lg:flex flex-col items-center gap-8 ' />
    </section>
  )
}
