import { BtnProps } from '@/types'
import { useEffect, useRef, useState } from 'react'
import { FlagDE } from '../icons/flags/flag-de'
import { FlagDK } from '../icons/flags/flag-dk'
import { FlagES } from '../icons/flags/flag-es'
import { FlagGB } from '../icons/flags/flag-gb'
import { FlagNL } from '../icons/flags/flag-nl'
import { FlagPL } from '../icons/flags/flag-pl'
import { FlagRU } from '../icons/flags/flag-ru'
import { FlagUA } from '../icons/flags/flag-ua'


export const languages = [
  {
    value: 'en_GB',
    name: 'English',
    icon: <FlagDE />,
  },
  {
    value: 'es_ES',
    name: 'Spanish',
    icon: <FlagDK />,
  },
  {
    value: 'sv_SE',
    name: 'Swedish',
    icon: <FlagES />,
  },
  {
    value: 'uk_UA',
    name: 'Ukrainian',
    icon: <FlagGB />,
  },
  {
    value: 'nl_NL',
    name: 'Dutch',
    icon: <FlagNL />,
  },
  {
    value: 'da_DK',
    name: 'Danish',
    icon: <FlagDK />,
  },
  {
    value: 'de_DE',
    name: 'German',
    icon: <FlagDE />,
  },
  {
    value: 'pl_PL',
    name: 'Polish',
    icon: <FlagPL />,
  },
  {
    value: 'ru_RU',
    name: 'Russian',
    icon: <FlagRU />,
  },
  {
    value: 'ua_UA',
    name: 'Ukraine',
    icon: <FlagUA />,
  },
]

export const BtnLanguage = (props: BtnProps) => {
  const [currentLanguage, setCurrentLanguage] = useState<string>('ua_UA')
  const [isDropDownListOpen, setIsDropDownListOpen] = useState<boolean>(false)

  const wrapRef = useRef<HTMLButtonElement | null>(null)

  const handleClick = (event: MouseEvent) => {
    if (
      wrapRef.current &&
      !wrapRef.current.contains(event.target as HTMLElement)
    ) {
      setIsDropDownListOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])
  return (
    <>
      <button
        onClick={() => setIsDropDownListOpen(!isDropDownListOpen)}
        className={
          'flex-center flex-col gap-[6px] rounded-full w-[20px] h-[20px] md:w-[28px] md:h-[28px] '
        }
        ref={wrapRef}
      >
        <div
          className={'flex-center h-[20px] w-[20px] md:w-[28px] md:h-[28px]'}
        >
          <div className={`overflow-hidden rounded-full outline outline-1`}>
            {languages.find((item) => item.value === currentLanguage)!.icon}
          </div>
        </div>
        <div className='absolute z-10	sm:h-[250px] sm:overflow-scroll	sm:translate-x-0 bg-dark'>
          {isDropDownListOpen &&
            languages
              .filter((item) => item.value !== currentLanguage)
              .map((item) => (
                <div
                  className='h-8 w-8 overflow-hidden rounded-full mt-2'
                  key={item.value}
                  onClick={() => setCurrentLanguage(item.value)}
                >
                  {item.icon}
                </div>
              ))}
        </div>
      </button>
    </>
  )
}
