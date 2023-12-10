import { IconLogo } from './icons/icon-logo'

import Link from 'next/link'
import { BtnFacebook } from './buttons/btn-facebook'
import { BtnInstagram } from './buttons/btn-instagram'
import { BtnSignIn } from './buttons/btn-sign-in'
import { BtnTelegram } from './buttons/btn-telegram'

export const Footer = () => {
  return (
    <footer className='relative'>
      {/* arrow to top  */}
      <a
        className='absolute bottom-[20px] right-0 my-8 px-[20px] md:px-0 md:top-2 md:right-[70px] lg:w-[20px] lg:h-[20px]'
        href='#header'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='23'
          height='23'
          viewBox='0 0 21 21'
          fill='none'
          className='md:w-[16px] md:h-[16px] lg:w-[20px] lg:h-[20px]'
        >
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M11.6387 5.27734L19.091 12.4985L20.8641 10.7254L10 0.138672L0.111328 10.6387L2.11133 12.4985L8.63867 5.29299V20.7773L11.6387 20.7773L11.6387 5.27734Z'
            fill='#9463FE'
          />
        </svg>
      </a>
      {/* arrow end */}
      <div className='px-[20px] py-7 flex flex-col items-center  md:gap-0  md:pt-10 md:pb-2 md:mr-[16px] '>
        <IconLogo
          fill={'#656565'}
          className='w-[280px] h-[33px] md:w-[588px] md:h-[71px] mb-[30px] md:mb-[14px]'
        />
        <ul className='mb-[30px] text-base gap-[5px] h-[138px] md:gap-[16px] flex flex-col justify-start  md:mb-[15px]  md:h-auto md:flex-row items-center '>
          <li className='text-center'>
            <Link
              href='/ukrainians'
              className='text-gray whitespace-nowrap leading-[110%] text-base md:text-[12px]'
            >
              Для Українців
            </Link>
          </li>
          <li className='text-center'>
            <Link
              href='/business'
              className='whitespace-nowrap text-[#C9C9C9] leading-[110%] text-base md:text-[12px]'
            >
              Для Бізнесу
            </Link>
          </li>
          <li className='text-center'>
            <Link
              href='/users'
              className='whitespace-nowrap text-[#C9C9C9] leading-[110%] text-base md:text-[12px]'
            >
              Для користувачів
            </Link>
          </li>
          <li className='text-center'>
            <Link
              href='/translator'
              className='whitespace-nowrap text-[#C9C9C9] leading-[110%] text-base md:text-[12px]'
            >
              Про нас
            </Link>
          </li>
          <li className='text-center'>
            <Link
              href='/contacts'
              className='whitespace-nowrap text-[#C9C9C9] leading-[110%] text-base md:text-[12px]'
            >
              Контакти
            </Link>
          </li>
          {/* <li className='text-center ml-[48px] hidden md:block'>
            <button className='bg-purple py-1 px-[10px] rounded-[4px] md:w-[88px] md:h-[29px] '>
              Увійти
            </button>
          </li> */}
          <BtnSignIn className=' hidden md:flex ml-[40px] md:ml-[55px] items-center p-1 md:px-[6px] md:gap-[6px] rounded-md md:w-[88px] md:h-[29px]' />
        </ul>
        <div className='flex w-[136px] gap-5 mb-[14px] md:items-center md:justify-center'>
          <BtnTelegram />
          <BtnInstagram />
          <BtnFacebook />
        </div>
        <div className='flex flex-col items-center text-[10px]  md:flex-row md:gap-3'>
          <p className='md:text-[7px] text-gray2'>
            © 2024 Unity Care. All rights reserved
          </p>
          <div className='flex justify-between  text-gray2 w-[185px] flex-wrap '>
            <a
              href='/'
              className='text-gray2  md:text-[7px] whitespace-nowrap w-full md:w-fit text-center'
            >
              Terms & policies
            </a>
            <a
              href='/'
              className='text-gray2  md:text-[7px] whitespace-nowrap text-center'
            >
              Terms & Conditions
            </a>
            <a
              href='/'
              className='text-gray2  md:text-[7px] whitespace-nowrap text-center'
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
