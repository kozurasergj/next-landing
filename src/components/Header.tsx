'use client'
import Link from 'next/link'
import { useState } from 'react'
import { BtnLanguage } from './buttons/btn-language'
import { BtnSignIn } from './buttons/btn-sign-in'
import { BtnBurger } from './buttons/burger/btn-burger'
import styles from './buttons/burger/burger.module.css'
import { IconLogo } from './icons/icon-logo'
export const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <div
        id='header'
        className='flex justify-between items-center px-[20px] py-[10px] md:mx-[74px] md:my-[4px] md:p-0 md:justify-between  2xl:mx-[135px] 2xl:my-[12px]'
      >
        <Link href='/' className='md:mr-[295px]'>
          <IconLogo
            fill={'#9463FE'}
            className='w-[78px] h-[9px] md:w-[113px] md:h-[13px] xl:w-[170px] xl:h-[20px]'
          />
        </Link>
        <div className='flex justify-between items-center'>
          {/* desktop */}
          <nav className='hidden lg:block '>
            <ul className='text-base gap-7 2xl:gap-14 transition-all lg:flex lg:justify-between'>
              <li>
                <Link
                  href='/ukrainians'
                  className='text-gray whitespace-nowrap'
                  aria-label='cases page'
                >
                  Для Українців
                </Link>
              </li>
              <li>
                <Link href='/business' className='whitespace-nowrap text-gray'>
                  Для Бізнесу
                </Link>
              </li>
              <li>
                <Link href='/users' className='whitespace-nowrap text-gray'>
                  Для користувачів
                </Link>
              </li>
              <li>
                <Link
                  href='/translator'
                  className='whitespace-nowrap text-gray'
                >
                  Перекладач
                </Link>
              </li>
              <li>
                <Link href='/unity' className='whitespace-nowrap text-gray'>
                  Можливості Юніті
                </Link>
              </li>
              <li>
                <Link href='/contacts' className='whitespace-nowrap text-gray'>
                  Контакти
                </Link>
              </li>
            </ul>
          </nav>
          {/* end */}
          {/* mobile */}
          <nav>
            <ul
              className={`text-3xl   ${styles.nav} ${
                open ? styles.active : ''
              }`}
            >
              <li>
                <Link
                  href='/ukrainians'
                  className='text-purple whitespace-nowrap'
                  aria-label='cases page'
                >
                  Для Українців
                </Link>
              </li>
              <li>
                <Link
                  href='/business'
                  className='whitespace-nowrap text-purple'
                >
                  Для Бізнесу
                </Link>
              </li>
              <li>
                <Link href='/users' className='whitespace-nowrap text-purple'>
                  Для користувачів
                </Link>
              </li>
              <li>
                <Link
                  href='/translator'
                  className='whitespace-nowrap text-purple'
                >
                  Перекладач
                </Link>
              </li>
              <li>
                <Link
                  href='/translator'
                  className='whitespace-nowrap text-purple'
                >
                  Можливості Юніті
                </Link>
              </li>
              <li>
                <Link
                  href='/contacts'
                  className='whitespace-nowrap text-purple'
                >
                  Контакти
                </Link>
              </li>
            </ul>
          </nav>
          {/* end */}
          <div className='flex justify-between items-center w-[146px] h-[22px] md:w-fit md:h-fit md:gap-8'>
            <BtnLanguage className='' />
            <BtnSignIn className='w-[70px] h-[22px] flex items-center md:justify-between p-1 md:px-[6px] md:gap-[6px] rounded-md md:w-[88px] md:h-[29px] ' />
            <BtnBurger open={open} setOpen={setOpen} className='' />
          </div>
        </div>
      </div>
    </header>
  )
}
