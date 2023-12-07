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
        className='flex justify-between items-center mx-[20px] my-[20px] md:mx-[72px] md:my-[16px] 2xl:mx-[135px] 2xl:my-[12px]'
      >
        <Link href='/'>
          <IconLogo
            fill={'#9463FE'}
            className='w-[78px] h-[9px] md:w-[113px] md:h-[13px] xl:w-[170px] xl:h-[20px]'
          />
        </Link>
        <div className='flex justify-between items-center'>
          {/* desktop */}
          <nav className='hidden xl:block '>
            <ul className='text-base gap-7 2xl:gap-14 transition-all xl:flex xl:justify-between'>
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
          <div className='flex justify-between items-stretch'>
            <BtnSignIn className='mx-7 2xl:mx-14 order-2 xl:order-1 md:flex' />
            <BtnLanguage className='order-1 xl:order-2' />
            <BtnBurger
              open={open}
              setOpen={setOpen}
              className='order-3 ml-3 md:ml-0'
            />
          </div>
        </div>
      </div>
    </header>
  )
}
