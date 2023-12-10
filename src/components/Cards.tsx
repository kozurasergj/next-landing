'use client'
import { ComponentProps } from '@/types'
import { useState } from 'react'
import { BtnDropDown } from './buttons/btn-drop-down'
import { BtnTryIt } from './buttons/btn-try-it'
import { IconVolume } from './icons/icon-volume'
import { BtnBig } from './buttons/btn-big'

export const Cards = (props: ComponentProps) => {
  // 1 section cards
  const [isState1, setState1] = useState(false)
  const [isState2, setState2] = useState(false)
  const [isState3, setState3] = useState(false)
  const [isState4, setState4] = useState(false)

  return (
    <section className={props.className}>
      {/* 1 section ready */}
      <div className='w-full flex justify-center md:justify-start md:w-[624px] lg:w-[800px] 2xl:w-[1005px] mx-auto '>
        <div className='flex flex-col md:flex-row md:w-[527px] md:justify-between items-center justify-center mb-8 md:mb-0  w-[279px]  3xl:w-[1092px]'>
          <div>
            <h3 className='text-gradient text-[32px] font-bold leading-[110%]  text-center mb-5 md:text-left  md:text-[28px]  lg:text-5xl 3xl:text-8xl uppercase relative  3xl:mb-8'>
              unity робить ВСЕ доступним{' '}
            </h3>
            <p className='text-[#D9D9D9] mb-8 md:mb-0 text-center text-lg leading-[120%]  md:text-left md:text-[16px] lg:text-xl 3xl:text-2xl '>
              Новітні технології для покращення вашого повсякденного життя,
              ведення бізнесу та вирішення будь-яких питань{' '}
            </p>
          </div>
          <div className='lg:hidden'>
            <BtnBig className='w-[93px] h-[93px] turquoiseBg gap-1'>
              <IconVolume className='' />
              <span className='text-[14px] font-bold leading-[130%] capitalize text-center '>
                інструкції
              </span>
            </BtnBig>
          </div>
        </div>
      </div>
      <div className=' w-full target-cardsBg md:mb-[99px]'>
        <div className='flex flex-col mb-[30px] md:mb-16  md:flex-row  md:w-[624px] lg:w-[800px] 2xl:w-[1005px] md:mx-auto items-center md:items-start cardsBg md:bg-none gap-8 md:gap-4 lg:gap-8  md:pt-16 '>
          <div className='flex flex-col gap-[30px] md:gap-4'>
            {/* 1 */}
            <div className='relative w-[280px] md:w-[304px] lg:w-[491px]  rounded-[20px] bg-cardBgGray'>
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
                  className={`mx-5 pt-5 mb-[11px] text-[14px] leading-[120%] lg:text-lg ${
                    isState1
                      ? 'opacity-100 min-h-[175px]'
                      : 'opacity-0 h-auto max-h-0 hidden'
                  } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden`}
                >
                  Юніті зберігає результати ваших діалогів і на основі них
                  генерує більш персоналізовану інформацію, яка відповідає вашим
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
            {/* 2 */}
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
                  className={`mx-5 pt-5 mb-[11px] text-[14px] leading-[120%] lg:text-lg  ${
                    isState2
                      ? 'opacity-100 min-h-[175px]'
                      : 'opacity-0 h-auto max-h-0 hidden'
                  } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden`}
                >
                  Юніті допоможе вам покращити виконання щоденних задач,
                  розпланує ваш день, і зробить робочий процес більш
                  ефективним. 
                </p>
                <BtnDropDown
                  className={`mt-[14px] mb-[14px] transition-all duration-500 ease-in-out ${
                    isState2 ? '' : 'rotate-180'
                  }`}
                  onClick={() => setState2(!isState2)}
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-[30px] md:gap-4'>
            {/* 3 */}
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
                  className={`mx-5 pt-5 mb-[11px] text-[14px] leading-[120%] lg:text-lg  ${
                    isState3
                      ? 'opacity-100 min-h-[175px]'
                      : 'opacity-0 h-auto max-h-0 hidden'
                  } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden`}
                >
                  Юніті надасть вам кваліфіковану інформацію, швидкі
                  консультації та ефективні поради для вирішення будь-яких
                  питань у юридичній сфері.
                </p>
                <BtnDropDown
                  className={`mt-[14px] mb-[14px] transition-all duration-500 ease-in-out ${
                    isState3 ? '' : 'rotate-180'
                  }`}
                  onClick={() => setState3(!isState3)}
                />
              </div>
            </div>
            {/* 4 */}
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
                  className={`mx-5 pt-5 mb-[11px] text-[14px] leading-[120%] lg:text-lg ${
                    isState4
                      ? 'opacity-100 min-h-[175px]'
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
            </div>
          </div>
        </div>
        <div className='w-full flex justify-center items-center md:justify-start md:w-[624px] mx-auto'>
          <BtnTryIt className='w-[182px] h-[39px] py-1 text-[18px] leading-[130%] font-bold capitalize '>
            спробувати{' '}
          </BtnTryIt>
        </div>
      </div>
      {/* end 1 section ready */}
    </section>
  )
}
