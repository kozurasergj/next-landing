'use client'
import { ComponentProps } from '@/types'
import { useEffect, useState } from 'react'
import { BtnBig } from './buttons/btn-big'
import { BtnDropDown } from './buttons/btn-drop-down'
import { BtnTryIt } from './buttons/btn-try-it'
import { IconVolume } from './icons/icon-volume'
import Image from 'next/image'

export const Cards = (props: ComponentProps) => {
  const [isState1, setState1] = useState(false)
  const [isState2, setState2] = useState(false)
  const [isState3, setState3] = useState(false)
  const [isState4, setState4] = useState(false)

//   const [cards, setCards] = useState([])

//   useEffect(() => {
//     const fetchCards = async () => {
//       try {
//         const response = await fetch(
//           'https://strapi.uwp.digital/api/cards?populate=*'
//         )
//         if (!response.ok) {
//           throw new Error('Failed to fetch cards')
//         }
//         const data = await response.json()
//         setCards(data.data)
//         // console.log(data.data)
//       } catch (error:any) {
//         console.error('Error fetching cards:', error.message)
//       }
//     }

//     fetchCards()
//   }, [])

//  console.log(cards)

  return (
    <section className={props.className}>
      <div className='w-full flex justify-center md:justify-start md:w-[624px] lg:w-[800px] 2xl:w-[1014px] mx-auto lg:ml-[135px]'>
        <div className='flex flex-col items-center justify-center mb-8 w-[279px] md:w-[527px] md:flex-row  md:justify-between  md:mb-0  3xl:w-[1092px]'>
          <div>
            <h3 className='uppercase relative text-gradient text-[32px] font-bold leading-[110%] text-center mb-5 md:text-left md:text-[28px] lg:text-5xl lg:ml-2 3xl:text-[90px] 3xl:leading-[115%] 3xl:mb-[29px] '>
              unity робить ВСЕ доступним{' '}
            </h3>
            <p className='text-[#D9D9D9] mb-8 md:mb-0 text-center text-lg leading-[120%]  md:text-left md:text-[16px] md:w-[336px] lg:w-[721px] lg:text-[24px] lg:leading-[110%] lg:ml-[5px]'>
              Інноваційна платформа для спрощення повсякденних завдань та
              ефективного управління бізнесом
            </p>
          </div>
          <div className='lg:hidden'>
            <BtnBig className='w-[93px] h-[93px] md:w-[85px] md:h-[85px] turquoiseBg gap-1'>
              <IconVolume className='md:w-[18px] md:h-[18px]' />
              <span className='text-[14px] font-bold leading-[130%] md:text-[10px] md:font-semibold md:uppercase capitalize text-center '>
                інструкції
              </span>
            </BtnBig>
          </div>
        </div>
      </div>
      <div className=' w-full target-cardsBg md:mb-[99px]'>
        <div className='flex flex-col mb-[30px] gap-[30px] md:gap-4 lg:gap-8 md:flex-row md:flex-wrap  md:w-[624px] lg:w-[1041px] md:mx-auto items-center md:items-start cardsBg md:bg-none   md:pt-16 lg:ml-[135px] lg:mb-8'>
          {/* {cards?.map((card: any) => (
            <div className='relative w-[280px] md:w-[304px] lg:w-[491px]  rounded-[20px] bg-cardBgGray'>
              <div className='absolute top-0 left-0 p-5 text-white font-bold leading-[120%] text-base 3xl:font-bold 3xl:text-2xl'>
                {card.attributes.title}
              </div>
              <Image
                src={`https://strapi.uwp.digital/${card.attributes.image.data.attributes.url}`}
                alt='Image'
                width={100}
                height={100}
                className={`w-full h-[280px] lg:h-[420px] rounded-[20px]`}
              />
              <div className='flex flex-col items-center'>
                <p
                  className={`mx-5 pt-5 mb-[11px] text-[14px] leading-[120%] md:leading-[108%] lg:text-lg  ${
                    isState2
                      ? 'opacity-100 min-h-[175px] md:min-h-[159px]'
                      : 'opacity-0 h-auto max-h-0 hidden'
                  } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden`}
                >
                  {card.attributes.description}
                </p>
                <BtnDropDown
                  className={`mt-[14px] mb-[14px] transition-all duration-500 ease-in-out ${
                    isState2 ? '' : 'rotate-180'
                  }`}
                  onClick={() => setState2(!isState2)}
                />
              </div>
            </div>
          ))} */}

          {/* <div className='relative w-[280px] md:w-[304px] lg:w-[491px]  rounded-[20px] bg-cardBgGray'>
            <div className='absolute top-0 left-0 p-5 text-white font-bold leading-[120%] text-base 3xl:font-bold 3xl:text-2xl'>
              Персональний підхід{' '}
            </div>
            <img
              src='/777.png'
              alt='Image'
              width={100}
              height={100}
              className={`w-full h-[280px] lg:h-[420px] rounded-[20px]`}
            />
            <div className='flex flex-col items-center'>
              <p
                className={`mx-5 pt-5 mb-[11px] text-[14px] leading-[120%] md:leading-[108%] lg:text-lg ${
                  isState1
                    ? 'opacity-100 min-h-[175px] md:min-h-[159px]'
                    : 'opacity-0 h-auto max-h-0 hidden'
                } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden`}
              >
                Юніті зберігає результати ваших діалогів і на основі них генерує
                більш персоналізовану інформацію, яка відповідає вашим
                конкретним запитам
              </p>
              <BtnDropDown
                className={`mt-[14px] mb-[14px] transition-all duration-500 ease-in-out ${
                  isState1 ? '' : 'rotate-180'
                }`}
                onClick={() => setState1(!isState1)}
              />
            </div>
          </div>
          <div className='relative w-[280px] md:w-[304px] lg:w-[491px]  rounded-[20px] bg-cardBgGray'>
            <div className='absolute top-0 left-0 p-5 text-white font-bold leading-[120%] text-base 3xl:font-bold 3xl:text-2xl'>
              Допоможу у виріщенні повсякденних питань{' '}
            </div>
            <img
              src='/777.png'
              alt='Image'
              width={100}
              height={100}
              className={`w-full h-[280px] lg:h-[420px] rounded-[20px]`}
            />
            <div className='flex flex-col items-center'>
              <p
                className={`mx-5 pt-5 mb-[11px] text-[14px] leading-[120%] md:leading-[108%] lg:text-lg  ${
                  isState2
                    ? 'opacity-100 min-h-[175px] md:min-h-[159px]'
                    : 'opacity-0 h-auto max-h-0 hidden'
                } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden`}
              >
                Юніті допоможе вам покращити виконання щоденних задач, розпланує
                ваш день, і зробить робочий процес більш ефективним. 
              </p>
              <BtnDropDown
                className={`mt-[14px] mb-[14px] transition-all duration-500 ease-in-out ${
                  isState2 ? '' : 'rotate-180'
                }`}
                onClick={() => setState2(!isState2)}
              />
            </div>
          </div>
          <div className='relative w-[280px] md:w-[304px] lg:w-[491px]  rounded-[20px] bg-cardBgGray'>
            <div className='absolute top-0 left-0 p-5 text-white font-bold leading-[120%]  text-base 3xl:font-bold 3xl:text-2xl'>
              Вирішу юридичні питання{' '}
            </div>
            <img
              src='/777.png'
              alt='Image'
              width={100}
              height={100}
              className={`w-full h-[280px] lg:h-[420px] rounded-[20px]`}
            />
            <div className='flex flex-col items-center'>
              <p
                className={`mx-5 pt-5 mb-[11px] text-[14px] leading-[120%] md:leading-[108%] lg:text-lg  ${
                  isState3
                    ? 'opacity-100 min-h-[175px] md:min-h-[159px]'
                    : 'opacity-0 h-auto max-h-0 hidden'
                } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden`}
              >
                Юніті надасть вам кваліфіковану інформацію, швидкі консультації
                та ефективні поради для вирішення будь-яких питань у юридичній
                сфері.
              </p>
              <BtnDropDown
                className={`mt-[14px] mb-[14px] transition-all duration-500 ease-in-out ${
                  isState3 ? '' : 'rotate-180'
                }`}
                onClick={() => setState3(!isState3)}
              />
            </div>
          </div>
          <div className='relative w-[280px] md:w-[304px] lg:w-[491px]  rounded-[20px] bg-cardBgGray'>
            <div className='absolute top-0 left-0 p-5 text-white font-bold leading-[120%]  text-base 3xl:font-bold 3xl:text-2xl'>
              Голосовий помічник{' '}
            </div>
            <img
              src='/777.png'
              alt='Image'
              width={100}
              height={100}
              className={`w-full h-[280px] lg:h-[420px] rounded-[20px]`}
            />
            <div className='flex flex-col items-center'>
              <p
                className={`mx-5 pt-5 mb-[11px] text-[14px] leading-[120%] md:leading-[108%] lg:text-lg ${
                  isState4
                    ? 'opacity-100 min-h-[175px] md:min-h-[159px]'
                    : 'opacity-0 h-auto max-h-0 hidden'
                } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden`}
              >
                Взаємодійте з Юніті за допомогою голосу, будуйте ефективну
                комунікацію, і отримуйте швидкий доступ до інформації та
                виконання завдань.
              </p>
              <BtnDropDown
                className={`mt-[14px] mb-[14px] transition-all duration-500 ease-in-out ${
                  isState4 ? '' : 'rotate-180'
                }`}
                onClick={() => setState4(!isState4)}
              />
            </div>
          </div> */}
        </div>
        <div className='w-full flex justify-center items-center md:justify-start md:w-[624px] lg:w-[1014px] lg:ml-[135px] lg:justify-center  mx-auto'>
          <BtnTryIt className='lg:hidden w-[182px] h-[39px] py-1 text-[18px] leading-[130%] font-bold capitalize '>
            спробувати{' '}
          </BtnTryIt>
          <BtnBig className='hidden lg:flex flex-col items-center justify-center bg-purple h-[139px] w-[139px]  gap-[10px]  2xl:h-[216px] 2xl:w-[216px] lg:gap-[12px] relative z-10'>
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
      </div>
    </section>
  )
}
