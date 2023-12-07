import { IconLogo } from './icons/icon-logo'

import Link from 'next/link'
import { BtnFacebook } from './buttons/btn-facebook'
import { BtnInstagram } from './buttons/btn-instagram'
import { BtnTelegram } from './buttons/btn-telegram'

export const Footer = () => {
  return (
    <footer className='relative'>
      {/* arrow to top  */}
      <a
        className='absolute bottom-0 right-0 py-8  px-[20px] md:px-0 md:top-2 md:right-[100px] '
        href='#header'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          viewBox='0 0 21 21'
          fill='none'
          className='md:w-[8px] md:h-[8px] lg:w-[20px] lg:h-[20px]'
        >
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M11.6387 5.27734L19.091 12.4985L20.8641 10.7254L10 0.138672L0.111328 10.6387L2.11133 12.4985L8.63867 5.29299V20.7773L11.6387 20.7773L11.6387 5.27734Z'
            fill='#9463FE'
          />
        </svg>
      </a>
      {/* end */}
      <div className='px-[20px] py-7 flex flex-col items-center gap-8 md:gap-4 md:pt-10 md:pb-2'>
        <IconLogo
          fill={'#656565'}
          className='w-[280px] h-[33px] md:w-[588px] md:h-[70px]'
        />
        <ul className='text-base gap-4 flex flex-col md:flex-row items-center md:w-[599px]'>
          <li className='text-center'>
            <Link
              href='/ukrainians'
              className='text-gray whitespace-nowrap text-base'
            >
              Для Українців
            </Link>
          </li>
          <li className='text-center'>
            <Link
              href='/business'
              className='whitespace-nowrap text-[#C9C9C9] text-base'
            >
              Для Бізнесу
            </Link>
          </li>
          <li className='text-center'>
            <Link
              href='/users'
              className='whitespace-nowrap text-[#C9C9C9] text-base'
            >
              Для користувачів
            </Link>
          </li>
          <li className='text-center'>
            <Link
              href='/translator'
              className='whitespace-nowrap text-[#C9C9C9] text-base'
            >
              Про нас
            </Link>
          </li>
          <li className='text-center'>
            <Link
              href='/contacts'
              className='whitespace-nowrap text-[#C9C9C9] text-base'
            >
              Контакти
            </Link>
          </li>
          <li className='text-center ml-[48px] hidden md:block'>
            <button className='bg-purple py-1 px-[10px] rounded-[4px]'>
              Увійти
            </button>
          </li>
        </ul>
        <div className='flex w-[136px] gap-5'>
          <BtnTelegram />
          <BtnInstagram />
          <BtnFacebook />
        </div>
        <div className='flex flex-col items-center text-[#909090] text-[10px]'>
          <p className='mb-3'>© 2024 Unity Care. All rights reserved</p>
          <div className='flex justify-between gap-3'>
            <a href='/'>Terms & Conditions</a>
            <a href='/'>Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
