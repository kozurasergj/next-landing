'use client'
import { BtnBigPurple } from '@/components/buttons/big-purple-btn'
import { BtnDropDown } from '@/components/buttons/btn-drop-down'
import { BtnTryIt } from '@/components/buttons/btn-try-it'
import { Icon1AI } from '@/components/icons/icon-1-ai'
import { Icon2AI } from '@/components/icons/icon-2-ai'
import { IconVolume } from '@/components/icons/icon-volume'
import { ComponentProps } from '@/types'
import { useState } from 'react'

export const Garbage = (props: ComponentProps) => {
  // 1 section cards
  const [isState1, setState1] = useState(false)
  const [isState2, setState2] = useState(false)
  const [isState3, setState3] = useState(false)
  const [isState4, setState4] = useState(false)
  //2 sections cards
  const [isState5, setState5] = useState(false)
  const [isState6, setState6] = useState(false)
  const [isState7, setState7] = useState(false)
  const [isState8, setState8] = useState(false)
  //3 sections cards
  const [isState9, setState9] = useState(false)
  const [isState10, setState10] = useState(false)
  const [isState11, setState11] = useState(false)
  const [isState12, setState12] = useState(false)
  //4 sections cards
  const [isState13, setState13] = useState(false)
  const [isState14, setState14] = useState(false)
  const [isState15, setState15] = useState(false)
  const [isState16, setState16] = useState(false)
  //5 sections cards
  const [isState17, setState17] = useState(false)
  const [isState18, setState18] = useState(false)
  const [isState19, setState19] = useState(false)
  const [isState20, setState20] = useState(false)

  return (
    <section className={props.className}>
      {/* 1 section ready */}
      <div className='w-full flex justify-center md:justify-start md:w-[624px] lg:w-[800px] 2xl:w-[1005px] mx-auto'>
        <div className='flex flex-col md:flex-row md:w-[527px] md:justify-between items-center justify-center mb-8 md:mb-0  w-[279px]  3xl:w-[1092px]'>
          <div>
            <h3 className='md:text-left text-gradient text-[32px] leading-[110%] tracking-wider md:text-2xl  lg:text-5xl 3xl:text-8xl font-bold uppercase relative text-center mb-5 3xl:mb-8'>
              unity робить ВСЕ доступним{' '}
            </h3>
            <p className='mb-8 text-center leading-[120%] tracking-wider md:text-left  text-lg md:text-base  lg:text-xl 3xl:text-2xl text-[#D9D9D9]'>
              Новітні технології для покращення вашого повсякденного життя,
              ведення бізнесу та вирішення будь-яких питань{' '}
            </p>
          </div>
          <div className='lg:hidden'>
            <BtnBigPurple className='w-[93px] h-[93px] turquoiseBg '>
              <IconVolume className='mb-0 font-bold' />
              <span className='text-[14px] font-bold leading-[130%]'>
                інструкції
              </span>
            </BtnBigPurple>
          </div>
        </div>
      </div>
      <div className=' w-full target-cardsBg md:pb-[100px] '>
        <div className='flex flex-col mb-8  md:flex-row  md:w-[624px] lg:w-[800px] 2xl:w-[1005px] md:mx-auto items-center md:items-start cardsBg md:bg-none gap-8 md:gap-4 lg:gap-8  md:pt-16 '>
          {/* !!! mobile tablet */}
          <div className='flex flex-col gap-8 md:gap-4'>
            {/* 1 */}
            <div className='relative w-[280px] md:w-[304px] lg:w-[491px]  rounded-[20px] bg-cardBgGray'>
              <div className='absolute top-0 left-0 p-5 text-white font-bold leading-[120%] tracking-wider text-base 3xl:font-bold 3xl:text-2xl'>
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
                <BtnDropDown
                  className={`mt-[14px] mb-[14px] transition-all duration-500 ease-in-out ${
                    isState1 ? '' : 'rotate-180'
                  }`}
                  onClick={() => setState1(!isState1)}
                />
                <p
                  className={`mx-5 mb-[11px] text-[14px] leading-[120%] lg:text-lg ${
                    isState1
                      ? 'opacity-100 min-h-[175px]'
                      : 'opacity-0 h-auto max-h-0 hidden'
                  } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden`}
                >
                  Юніті зберігає результати ваших діалогів і на основі них
                  генерує більш персоналізовану інформацію, яка відповідає вашим
                  конкретним запитам
                </p>
              </div>
            </div>
            {/* 2 */}
            <div className='relative w-[280px] md:w-[304px] lg:w-[491px]  rounded-[20px] bg-cardBgGray'>
              <div className='absolute top-0 left-0 p-5 text-white font-bold leading-[120%] tracking-wider text-base 3xl:font-bold 3xl:text-2xl'>
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
                <BtnDropDown
                  className={`mt-[14px] mb-[14px] transition-all duration-500 ease-in-out ${
                    isState2 ? '' : 'rotate-180'
                  }`}
                  onClick={() => setState2(!isState2)}
                />
                <p
                  className={`mx-5 mb-[11px] text-base  font-bold lg:text-lg ${
                    isState2
                      ? 'opacity-100 min-h-[175px]'
                      : 'opacity-0 h-auto max-h-0 hidden'
                  } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden`}
                >
                  Юніті допоможе вам покращити виконання щоденних задач,
                  розпланує ваш день, і зробить робочий процес більш
                  ефективним. 
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-8 md:gap-4'>
            {/* 3 */}
            <div className='relative w-[280px] md:w-[304px] lg:w-[491px]  rounded-[20px] bg-cardBgGray'>
              <div className='absolute top-0 left-0 p-5 text-white font-bold leading-[120%] tracking-wider text-base 3xl:font-bold 3xl:text-2xl'>
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
                <BtnDropDown
                  className={`mt-[14px] mb-[14px] transition-all duration-500 ease-in-out ${
                    isState3 ? '' : 'rotate-180'
                  }`}
                  onClick={() => setState3(!isState3)}
                />
                <p
                  className={`mx-5 mb-[11px] text-base  font-bold lg:text-lg ${
                    isState3
                      ? 'opacity-100 min-h-[175px]'
                      : 'opacity-0 h-auto max-h-0 hidden'
                  } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden`}
                >
                  Юніті надасть вам кваліфіковану інформацію, швидкі
                  консультації та ефективні поради для вирішення будь-яких
                  питань у юридичній сфері.
                </p>
              </div>
            </div>
            {/* 4 */}
            <div className='relative w-[280px] md:w-[304px] lg:w-[491px]  rounded-[20px] bg-cardBgGray'>
              <div className='absolute top-0 left-0 p-5 text-white font-bold leading-[120%] tracking-wider text-base 3xl:font-bold 3xl:text-2xl'>
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
                <BtnDropDown
                  className={`mt-[14px] mb-[14px] transition-all duration-500 ease-in-out ${
                    isState4 ? '' : 'rotate-180'
                  }`}
                  onClick={() => setState4(!isState4)}
                />
                <p
                  className={`mx-5 mb-[11px] text-base  font-bold lg:text-lg ${
                    isState4
                      ? 'opacity-100 min-h-[175px]'
                      : 'opacity-0 h-auto max-h-0 hidden'
                  } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden`}
                >
                  Взаємодійте з Юніті за допомогою голосу, будуйте ефективну
                  комунікацію, і отримуйте швидкий доступ до інформації та
                  виконання завдань.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full flex justify-center items-center md:justify-start  mb-[360px] md:mb-0  md:w-[624px] mx-auto'>
          <BtnTryIt className='w-[182px] h-[39px] text-xs py-1 text-[18px] leading-[130%] font-bold capitalize tracking-wider'>
            спробувати{' '}
          </BtnTryIt>
        </div>
      </div>
      {/* end 1 section ready */}

      {/* 








*/}
      {/* 2 section ready */}
      <div className='relative'>
        <div className='md:hidden  absolute top-[-450px] left-[50%]  translate-x-[-50%] flex items-center justify-center w-full'>
          <Icon1AI className='' />
        </div>
      </div>
      <div className='w-full flex justify-center md:justify-start md:w-[624px] lg:w-[800px] 2xl:w-[1005px] mx-auto'>
        <div className='flex flex-col md:flex-row md:w-[527px] md:justify-between items-center justify-center mb-8 md:mb-0  w-[279px]  3xl:w-[1092px]'>
          <div>
            <h3 className='md:text-left text-gradient text-3xl md:text-2xl  lg:text-5xl 3xl:text-8xl font-bold uppercase relative text-center mb-5 3xl:mb-8'>
              Unity для користувача
            </h3>
            <p className='mb-8 text-center md:text-left text-lg md:text-base  lg:text-xl 3xl:text-2xl text-[#D9D9D9]'>
              Допомога у вирішенні будь-яких питань вдома і закордоном
            </p>
          </div>
          <div className='lg:hidden'>
            <BtnBigPurple className='w-[139px] h-[139px] turquoiseBg '>
              <IconVolume />
              інструкції
            </BtnBigPurple>
          </div>
        </div>
      </div>
      <div className=' w-full target-cardsBg4 md:pb-[100px] '>
        <div className='flex flex-col md:flex-row md:flex-wrap md:w-[624px] lg:w-[800px] 2xl:w-[1005px] md:mx-auto items-center md:items-start cardsBg4 md:bg-none gap-8 md:gap-4 lg:gap-8  md:pt-16 mb-[360px] md:mb-0'>
          {/* !!! mobile tablet */}
          <div className='flex flex-col lg:hidden gap-8 md:gap-4'>
            {/* 1 */}
            <div
              className={`relative w-[280px] md:w-[304px] lg:w-[100%] lg:flex rounded-[20px] bg-cardBgGray  ${
                isState5 ? 'lg:items-stretch' : 'lg:items-center'
              }`}
            >
              <div className='absolute top-0 left-0 p-5 text-white font-bold text-base lg:text-2xl w-[240px] md:w-[300px] lg:w-[400px]'>
                Персональний підхід
              </div>
              {!isState5 && (
                <div className='hidden md:block absolute top-[50%] translate-y-[-50%] left-0 p-5 text-white text-sm lg:text-xl  w-[240px] md:w-[300px] lg:w-[400px]'>
                  Юніті зберігає результати ваших діалогів і на основі них
                  генерує більш персоналізовану інформацію, яка відповідає вашим
                  конкретним запитам
                </div>
              )}
              <img
                src='/100.jpeg'
                alt='Image'
                width={100}
                height={100}
                className={`w-full h-[280px] lg:h-[420px] rounded-[20px]`}
              />
              <div
                className={`flex flex-col items-center lg:flex-col-reverse lg:items-center  ${
                  isState5 ? 'lg:justify-between lg:mb-8 lg:mr-8' : ' '
                }`}
              >
                <BtnDropDown
                  className={`mt-[14px] mb-3 transition-all duration-500 ease-in-out 	${
                    isState5
                      ? 'rotate-180 lg:-rotate-90 lg:mb-0 lg:self-end '
                      : 'rotate-right lg:mx-5'
                  }`}
                  onClick={() => setState5(!isState5)}
                />
                <p
                  className={`mx-5 mb-[11px] text-base lg:text-lg ${
                    isState5
                      ? 'opacity-100 max-h-full block'
                      : 'opacity-0 max-h-0 hidden'
                  } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden lg:m-10`}
                >
                  Юніті зберігає результати ваших діалогів і на основі них
                  генерує більш персоналізовану інформацію, яка відповідає вашим
                  конкретним запитам
                </p>
              </div>
            </div>
            {/* 2 */}
            <div className='relative w-[280px] md:w-[304px] lg:w-[48%] rounded-[20px] bg-cardBgGray'>
              <div className='absolute top-0 left-0 p-5 text-white font-medium text-base 3xl:font-bold 3xl:text-2xl'>
                Допоможу у виріщенні повсякденних питань
              </div>
              {!isState6 && (
                <div className='hidden md:block absolute top-[50%] translate-y-[-50%] left-0 p-5 text-white text-sm lg:text-xl w-[240px] md:w-[300px] lg:w-[400px]'>
                  Забудьте про стрес, пов&#x2019;язаний із щоденними завданнями,
                  завдяки нашому ШІ-асистенту, який пропонує рішення для
                  покращення продуктивності та ефективності вашого особистого та
                  професійного життя.
                </div>
              )}
              <img
                src='/100.jpeg'
                alt='Image'
                width={100}
                height={100}
                className={`w-full h-[280px] lg:h-[420px] rounded-[20px]`}
              />
              <div className='flex flex-col items-center'>
                <BtnDropDown
                  className={`mt-[14px] mb-[14px] transition-all duration-500 ease-in-out ${
                    isState6 ? 'rotate-180' : ''
                  }`}
                  onClick={() => setState6(!isState6)}
                />
                <p
                  className={`mx-5 mb-[11px] text-base lg:text-lg ${
                    isState6
                      ? 'opacity-100 max-h-full block'
                      : 'opacity-0 max-h-0 hidden'
                  } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden`}
                >
                  Забудьте про стрес, пов&#x2019;язаний із щоденними завданнями,
                  завдяки нашому ШІ-асистенту, який пропонує рішення для
                  покращення продуктивності та ефективності вашого особистого та
                  професійного життя. Від планування вашого дня до оптимізації
                  робочих процесів, наш інтелектуальний помічник перетворює ваш
                  повсякденний досвід.
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col lg:hidden gap-8 md:gap-4'>
            {/* 3 */}
            <div className='relative w-[280px] md:w-[304px] lg:w-[48%] rounded-[20px] bg-cardBgGray'>
              <div className='absolute top-0 left-0 p-5 text-white font-medium text-base 3xl:font-bold 3xl:text-2xl'>
                Вирішу юридичні питання
              </div>
              {!isState7 && (
                <div className='hidden md:block absolute top-[50%] translate-y-[-50%] left-0 p-5 text-white text-sm lg:text-xl  w-[240px] md:w-[300px] lg:w-[400px]'>
                  Отримайте надійні юридичні консультації на відстані одного
                  кліку з нашим ШІ-помічником, спеціалізованим на наданні
                  стратегічних рекомендацій та інформованих порад.
                </div>
              )}
              <img
                src='/100.jpeg'
                alt='Image'
                width={100}
                height={100}
                className={`w-full h-[280px] lg:h-[420px] rounded-[20px]`}
              />
              <div className='flex flex-col items-center'>
                <BtnDropDown
                  className={`mt-[14px] mb-[14px] transition-all duration-500 ease-in-out ${
                    isState7 ? ' rotate-180' : ''
                  }`}
                  onClick={() => setState7(!isState7)}
                />
                <p
                  className={`mx-5 mb-[11px] text-base lg:text-lg ${
                    isState7
                      ? 'opacity-100 max-h-full block'
                      : 'opacity-0 max-h-0 hidden'
                  } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden`}
                >
                  Отримайте надійні юридичні консультації на відстані одного
                  кліку з нашим ШІ-помічником, спеціалізованим на наданні
                  стратегічних рекомендацій та інформованих порад. Незалежно від
                  складності вашого запиту, наш цифровий консультант пропонує
                  доступні та точні відповіді, забезпечуючи ваш спокій та
                  впевненість у кожному юридичному питанні.
                </p>
              </div>
            </div>
            {/* 4 */}
            <div
              className={`relative w-[280px] md:w-[304px] lg:w-[100%]  lg:flex rounded-[20px] bg-cardBgGray  ${
                isState8 ? 'lg:items-stretch' : 'lg:items-center'
              }`}
            >
              <div className='absolute top-0 left-0 p-5 text-white font-bold text-base lg:text-2xl w-[240px] md:w-[300px] lg:w-[400px]'>
                Персональний підхід
              </div>
              {!isState8 && (
                <div className='hidden md:block absolute top-[50%] translate-y-[-50%] left-0 p-5 text-white text-sm lg:text-xl  w-[240px] md:w-[300px] lg:w-[400px]'>
                  Юніті зберігає результати ваших діалогів і на основі них
                  генерує більш персоналізовану інформацію, яка відповідає вашим
                  конкретним запитам
                </div>
              )}
              <img
                src='/100.jpeg'
                alt='Image'
                width={100}
                height={100}
                className={`w-full h-[280px] lg:h-[420px] rounded-[20px]`}
              />
              <div
                className={`flex flex-col items-center lg:flex-col-reverse lg:items-center  ${
                  isState8 ? 'lg:justify-between lg:mb-8 lg:mr-8' : ' '
                }`}
              >
                <BtnDropDown
                  className={`mt-[14px] mb-3 transition-all duration-500 ease-in-out 	${
                    isState8
                      ? 'rotate-180 lg:-rotate-90 lg:mb-0 lg:self-end '
                      : 'rotate-right lg:mx-5'
                  }`}
                  onClick={() => setState8(!isState8)}
                />
                <p
                  className={`mx-5 mb-[11px] text-base lg:text-lg ${
                    isState8
                      ? 'opacity-100 max-h-full block'
                      : 'opacity-0 max-h-0 hidden'
                  } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden lg:m-10`}
                >
                  Юніті зберігає результати ваших діалогів і на основі них
                  генерує більш персоналізовану інформацію, яка відповідає вашим
                  конкретним запитам
                </p>
              </div>
            </div>
          </div>
          {/* end mobile tablet !!! */}
          {/* desctop!!! */}
          {/* 1 */}
          <div
            className={`relative w-[280px] md:w-[304px] lg:w-[100%] lg:flex rounded-[20px] bg-cardBgGray hidden ${
              isState5 ? 'lg:items-stretch' : 'lg:items-center'
            }`}
          >
            <div className='absolute top-0 left-0 p-5 text-white font-bold text-base lg:text-2xl w-[240px] md:w-[300px] lg:w-[400px]'>
              Персональний підхід
            </div>
            {!isState5 && (
              <div className='hidden md:block absolute top-[50%] translate-y-[-50%] left-0 p-5 text-white text-sm lg:text-xl  w-[240px] md:w-[300px] lg:w-[400px]'>
                Юніті зберігає результати ваших діалогів і на основі них генерує
                більш персоналізовану інформацію, яка відповідає вашим
                конкретним запитам
              </div>
            )}
            <img
              src='/100.jpeg'
              alt='Image'
              width={100}
              height={100}
              className={` h-[280px] lg:h-[420px] rounded-[20px] ${
                isState5 ? 'w-[50%]' : 'w-full'
              }`}
            />
            <div
              className={`flex flex-col items-center lg:flex-col-reverse lg:items-center  ${
                isState5 ? 'lg:justify-between lg:mb-8 lg:mr-8 w-[50%]' : ' '
              }`}
            >
              <BtnDropDown
                className={`mt-[14px] mb-3 transition-all duration-500 ease-in-out 	${
                  isState5
                    ? 'rotate-180 lg:-rotate-90 lg:mb-0 lg:self-end '
                    : 'rotate-right lg:mx-5'
                }`}
                onClick={() => setState5(!isState5)}
              />
              <p
                className={`mx-5 mb-[11px] text-base lg:text-lg ${
                  isState5
                    ? 'opacity-100 max-h-full block'
                    : 'opacity-0 max-h-0 hidden'
                } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden lg:m-10`}
              >
                Юніті зберігає результати ваших діалогів і на основі них генерує
                більш персоналізовану інформацію, яка відповідає вашим
                конкретним запитам
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className='relative w-[280px] md:w-[304px] lg:w-[48%] rounded-[20px] bg-cardBgGray hidden lg:block'>
            <div className='absolute top-0 left-0 p-5 text-white font-medium text-base 3xl:font-bold 3xl:text-2xl'>
              Допоможу у виріщенні повсякденних питань
            </div>
            {!isState6 && (
              <div className='hidden md:block absolute top-[50%] translate-y-[-50%] left-0 p-5 text-white text-sm lg:text-xl w-[240px] md:w-[300px] lg:w-[400px]'>
                Забудьте про стрес, пов&#x2019;язаний із щоденними завданнями,
                завдяки нашому ШІ-асистенту, який пропонує рішення для
                покращення продуктивності та ефективності вашого особистого та
                професійного життя.
              </div>
            )}
            <img
              src='/100.jpeg'
              alt='Image'
              width={100}
              height={100}
              className={`w-full h-[280px] lg:h-[420px] rounded-[20px]`}
            />
            <div className='flex flex-col items-center'>
              <BtnDropDown
                className={`mt-[14px] mb-[14px] transition-all duration-500 ease-in-out ${
                  isState6 ? 'rotate-180' : ''
                }`}
                onClick={() => setState6(!isState6)}
              />
              <p
                className={`mx-5 mb-[11px] text-base lg:text-lg ${
                  isState6
                    ? 'opacity-100 max-h-full block'
                    : 'opacity-0 max-h-0 hidden'
                } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden`}
              >
                Забудьте про стрес, пов&#x2019;язаний із щоденними завданнями,
                завдяки нашому ШІ-асистенту, який пропонує рішення для
                покращення продуктивності та ефективності вашого особистого та
                професійного життя. Від планування вашого дня до оптимізації
                робочих процесів, наш інтелектуальний помічник перетворює ваш
                повсякденний досвід.
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className='relative w-[280px] md:w-[304px] lg:w-[48%] rounded-[20px] bg-cardBgGray hidden lg:block'>
            <div className='absolute top-0 left-0 p-5 text-white font-medium text-base 3xl:font-bold 3xl:text-2xl'>
              Вирішу юридичні питання
            </div>
            {!isState7 && (
              <div className='hidden md:block absolute top-[50%] translate-y-[-50%] left-0 p-5 text-white text-sm lg:text-xl  w-[240px] md:w-[300px] lg:w-[400px]'>
                Отримайте надійні юридичні консультації на відстані одного кліку
                з нашим ШІ-помічником, спеціалізованим на наданні стратегічних
                рекомендацій та інформованих порад.
              </div>
            )}
            <img
              src='/100.jpeg'
              alt='Image'
              width={100}
              height={100}
              className={`w-full h-[280px] lg:h-[420px] rounded-[20px]`}
            />
            <div className='flex flex-col items-center'>
              <BtnDropDown
                className={`mt-[14px] mb-[14px] transition-all duration-500 ease-in-out ${
                  isState7 ? ' rotate-180' : ''
                }`}
                onClick={() => setState7(!isState7)}
              />
              <p
                className={`mx-5 mb-[11px] text-base lg:text-lg ${
                  isState7
                    ? 'opacity-100 max-h-full block'
                    : 'opacity-0 max-h-0 hidden'
                } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden`}
              >
                Отримайте надійні юридичні консультації на відстані одного кліку
                з нашим ШІ-помічником, спеціалізованим на наданні стратегічних
                рекомендацій та інформованих порад. Незалежно від складності
                вашого запиту, наш цифровий консультант пропонує доступні та
                точні відповіді, забезпечуючи ваш спокій та впевненість у
                кожному юридичному питанні.
              </p>
            </div>
          </div>
          {/* 4 */}
          <div
            className={`relative w-[280px] md:w-[304px] lg:w-[100%]  lg:flex rounded-[20px] bg-cardBgGray hidden ${
              isState8 ? 'lg:items-stretch' : 'lg:items-center'
            }`}
          >
            <div className='absolute top-0 left-0 p-5 text-white font-bold text-base lg:text-2xl w-[240px] md:w-[300px] lg:w-[400px]'>
              Персональний підхід
            </div>
            {!isState8 && (
              <div className='hidden md:block absolute top-[50%] translate-y-[-50%] left-0 p-5 text-white text-sm lg:text-xl  w-[240px] md:w-[300px] lg:w-[400px]'>
                Юніті зберігає результати ваших діалогів і на основі них генерує
                більш персоналізовану інформацію, яка відповідає вашим
                конкретним запитам
              </div>
            )}
            <img
              src='/100.jpeg'
              alt='Image'
              width={100}
              height={100}
              className={` h-[280px] lg:h-[420px] rounded-[20px] ${
                isState8 ? 'w-[50%]' : 'w-full'
              }`}
            />
            <div
              className={`flex flex-col items-center lg:flex-col-reverse lg:items-center  ${
                isState8 ? 'lg:justify-between lg:mb-8 lg:mr-8 w-[50%]' : ' '
              }`}
            >
              <BtnDropDown
                className={`mt-[14px] mb-3 transition-all duration-500 ease-in-out 	${
                  isState8
                    ? 'rotate-180 lg:-rotate-90 lg:mb-0 lg:self-end '
                    : 'rotate-right lg:mx-5'
                }`}
                onClick={() => setState8(!isState8)}
              />
              <p
                className={`mx-5 mb-[11px] text-base lg:text-lg ${
                  isState8
                    ? 'opacity-100 max-h-full block'
                    : 'opacity-0 max-h-0 hidden'
                } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden lg:m-10`}
              >
                Юніті зберігає результати ваших діалогів і на основі них генерує
                більш персоналізовану інформацію, яка відповідає вашим
                конкретним запитам
              </p>
            </div>
          </div>
          {/* end desctop !!!*/}
          {/*  */}
          <div className='w-full flex justify-center items-center md:justify-start lg:justify-center md:w-[624px] md:mx-auto mt-8 '>
            <BtnBigPurple className='px-8 py-2 bg-purple h-[139px] w-[139px] 1xl:h-[158px] 1xl:w-[158px] 2xl:h-[216px] 2xl:w-[216px] lg:h-[142px] lg:w-[142px] xl:h-[145px] xl:w-[145px]'>
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
        </div>
      </div>
      {/* end 2 section ready */}

      {/* 3 section ready */}
      <div className='relative'>
        <div className='md:hidden  absolute top-[-450px] left-[50%]  translate-x-[-50%] flex items-center justify-center w-full'>
          <Icon2AI className='' />
        </div>
      </div>
      <div className='w-full flex justify-center md:justify-start md:w-[624px] lg:w-[800px] 2xl:w-[1005px] mx-auto'>
        <div className='flex flex-col md:flex-row md:w-[527px] md:justify-between items-center justify-center mb-8 md:mb-0  w-[279px]  3xl:w-[1092px]'>
          <div>
            <h3 className='md:text-left text-gradient text-3xl md:text-2xl  lg:text-5xl 3xl:text-8xl font-bold uppercase relative text-center mb-5 3xl:mb-8'>
              Unity для бізнесу
            </h3>
            <p className='mb-8 text-center md:text-left text-lg md:text-base  lg:text-xl 3xl:text-2xl text-[#D9D9D9]'>
              Індивідуальний підхід до офлайн та онлайн бізнесів
            </p>
          </div>
          <div className='lg:hidden'>
            <BtnBigPurple className='w-[139px] h-[139px] turquoiseBg '>
              <IconVolume />
              інструкції
            </BtnBigPurple>
          </div>
        </div>
      </div>
      <div className=' w-full target-cardsBg4 md:pb-[100px] '>
        <div className='flex flex-col md:flex-row md:flex-wrap md:w-[624px] lg:w-[800px] 2xl:w-[1005px] md:mx-auto items-center md:items-start cardsBg4 md:bg-none gap-8 md:gap-4 lg:gap-8  md:pt-16 mb-[360px] md:mb-0'>
          {/* !!! mobile tablet */}
          <div className='flex flex-col lg:hidden gap-8 md:gap-4'>
            {/* 1 */}
            <div
              className={`relative w-[280px] md:w-[304px] lg:w-[100%] lg:flex rounded-[20px] bg-cardBgGray  ${
                isState9 ? 'lg:items-stretch' : 'lg:items-center'
              }`}
            >
              <div className='absolute top-0 left-0 p-5 text-white font-bold text-base lg:text-2xl w-[240px] md:w-[300px] lg:w-[400px]'>
                Персональний підхід
              </div>
              {!isState9 && (
                <div className='hidden md:block absolute top-[50%] translate-y-[-50%] left-0 p-5 text-white text-sm lg:text-xl  w-[240px] md:w-[300px] lg:w-[400px]'>
                  Юніті зберігає результати ваших діалогів і на основі них
                  генерує більш персоналізовану інформацію, яка відповідає вашим
                  конкретним запитам
                </div>
              )}
              <img
                src='/333.jpeg'
                alt='Image'
                width={100}
                height={100}
                className={`w-full h-[280px] lg:h-[420px] rounded-[20px]`}
              />
              <div
                className={`flex flex-col items-center lg:flex-col-reverse lg:items-center  ${
                  isState9 ? 'lg:justify-between lg:mb-8 lg:mr-8' : ' '
                }`}
              >
                <BtnDropDown
                  className={`mt-[14px] mb-3 transition-all duration-500 ease-in-out 	${
                    isState9
                      ? 'rotate-180 lg:-rotate-90 lg:mb-0 lg:self-end '
                      : 'rotate-right lg:mx-5'
                  }`}
                  onClick={() => setState9(!isState9)}
                />
                <p
                  className={`mx-5 mb-[11px] text-base lg:text-lg ${
                    isState9
                      ? 'opacity-100 max-h-full block'
                      : 'opacity-0 max-h-0 hidden'
                  } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden lg:m-10`}
                >
                  Юніті зберігає результати ваших діалогів і на основі них
                  генерує більш персоналізовану інформацію, яка відповідає вашим
                  конкретним запитам
                </p>
              </div>
            </div>
            {/* 2 */}
            <div className='relative w-[280px] md:w-[304px] lg:w-[48%] rounded-[20px] bg-cardBgGray'>
              <div className='absolute top-0 left-0 p-5 text-white font-medium text-base 3xl:font-bold 3xl:text-2xl'>
                Допоможу у виріщенні повсякденних питань
              </div>
              {!isState10 && (
                <div className='hidden md:block absolute top-[50%] translate-y-[-50%] left-0 p-5 text-white text-sm lg:text-xl w-[240px] md:w-[300px] lg:w-[400px]'>
                  Забудьте про стрес, пов&#x2019;язаний із щоденними завданнями,
                  завдяки нашому ШІ-асистенту, який пропонує рішення для
                  покращення продуктивності та ефективності вашого особистого та
                  професійного життя.
                </div>
              )}
              <img
                src='/333.jpeg'
                alt='Image'
                width={100}
                height={100}
                className={`w-full h-[280px] lg:h-[420px] rounded-[20px]`}
              />
              <div className='flex flex-col items-center'>
                <BtnDropDown
                  className={`mt-[14px] mb-[14px] transition-all duration-500 ease-in-out ${
                    isState10 ? 'rotate-180' : ''
                  }`}
                  onClick={() => setState10(!isState10)}
                />
                <p
                  className={`mx-5 mb-[11px] text-base lg:text-lg ${
                    isState10
                      ? 'opacity-100 max-h-full block'
                      : 'opacity-0 max-h-0 hidden'
                  } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden`}
                >
                  Забудьте про стрес, пов&#x2019;язаний із щоденними завданнями,
                  завдяки нашому ШІ-асистенту, який пропонує рішення для
                  покращення продуктивності та ефективності вашого особистого та
                  професійного життя. Від планування вашого дня до оптимізації
                  робочих процесів, наш інтелектуальний помічник перетворює ваш
                  повсякденний досвід.
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col lg:hidden gap-8 md:gap-4'>
            {/* 3 */}
            <div className='relative w-[280px] md:w-[304px] lg:w-[48%] rounded-[20px] bg-cardBgGray'>
              <div className='absolute top-0 left-0 p-5 text-white font-medium text-base 3xl:font-bold 3xl:text-2xl'>
                Вирішу юридичні питання
              </div>
              {!isState11 && (
                <div className='hidden md:block absolute top-[50%] translate-y-[-50%] left-0 p-5 text-white text-sm lg:text-xl  w-[240px] md:w-[300px] lg:w-[400px]'>
                  Отримайте надійні юридичні консультації на відстані одного
                  кліку з нашим ШІ-помічником, спеціалізованим на наданні
                  стратегічних рекомендацій та інформованих порад.
                </div>
              )}
              <img
                src='/333.jpeg'
                alt='Image'
                width={100}
                height={100}
                className={`w-full h-[280px] lg:h-[420px] rounded-[20px]`}
              />
              <div className='flex flex-col items-center'>
                <BtnDropDown
                  className={`mt-[14px] mb-[14px] transition-all duration-500 ease-in-out ${
                    isState11 ? ' rotate-180' : ''
                  }`}
                  onClick={() => setState11(!isState11)}
                />
                <p
                  className={`mx-5 mb-[11px] text-base lg:text-lg ${
                    isState11
                      ? 'opacity-100 max-h-full block'
                      : 'opacity-0 max-h-0 hidden'
                  } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden`}
                >
                  Отримайте надійні юридичні консультації на відстані одного
                  кліку з нашим ШІ-помічником, спеціалізованим на наданні
                  стратегічних рекомендацій та інформованих порад. Незалежно від
                  складності вашого запиту, наш цифровий консультант пропонує
                  доступні та точні відповіді, забезпечуючи ваш спокій та
                  впевненість у кожному юридичному питанні.
                </p>
              </div>
            </div>
            {/* 4 */}
            <div
              className={`relative w-[280px] md:w-[304px] lg:w-[100%]  lg:flex rounded-[20px] bg-cardBgGray  ${
                isState12 ? 'lg:items-stretch' : 'lg:items-center'
              }`}
            >
              <div className='absolute top-0 left-0 p-5 text-white font-bold text-base lg:text-2xl w-[240px] md:w-[300px] lg:w-[400px]'>
                Персональний підхід
              </div>
              {!isState12 && (
                <div className='hidden md:block absolute top-[50%] translate-y-[-50%] left-0 p-5 text-white text-sm lg:text-xl  w-[240px] md:w-[300px] lg:w-[400px]'>
                  Юніті зберігає результати ваших діалогів і на основі них
                  генерує більш персоналізовану інформацію, яка відповідає вашим
                  конкретним запитам
                </div>
              )}
              <img
                src='/333.jpeg'
                alt='Image'
                width={100}
                height={100}
                className={`w-full h-[280px] lg:h-[420px] rounded-[20px]`}
              />
              <div
                className={`flex flex-col items-center lg:flex-col-reverse lg:items-center  ${
                  isState12 ? 'lg:justify-between lg:mb-8 lg:mr-8' : ' '
                }`}
              >
                <BtnDropDown
                  className={`mt-[14px] mb-3 transition-all duration-500 ease-in-out 	${
                    isState12
                      ? 'rotate-180 lg:-rotate-90 lg:mb-0 lg:self-end '
                      : 'rotate-right lg:mx-5'
                  }`}
                  onClick={() => setState12(!isState12)}
                />
                <p
                  className={`mx-5 mb-[11px] text-base lg:text-lg ${
                    isState12
                      ? 'opacity-100 max-h-full block'
                      : 'opacity-0 max-h-0 hidden'
                  } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden lg:m-10`}
                >
                  Юніті зберігає результати ваших діалогів і на основі них
                  генерує більш персоналізовану інформацію, яка відповідає вашим
                  конкретним запитам
                </p>
              </div>
            </div>
          </div>
          {/* end mobile tablet !!! */}
          {/* desctop!!! */}
          {/* 1 */}
          <div
            className={`relative w-[280px] md:w-[304px] lg:w-[100%] lg:flex rounded-[20px] bg-cardBgGray hidden ${
              isState9 ? 'lg:items-stretch' : 'lg:items-center'
            }`}
          >
            <div className='absolute top-0 left-0 p-5 text-white font-bold text-base lg:text-2xl w-[240px] md:w-[300px] lg:w-[400px]'>
              Персональний підхід
            </div>
            {!isState9 && (
              <div className='hidden md:block absolute top-[50%] translate-y-[-50%] left-0 p-5 text-white text-sm lg:text-xl  w-[240px] md:w-[300px] lg:w-[400px]'>
                Юніті зберігає результати ваших діалогів і на основі них генерує
                більш персоналізовану інформацію, яка відповідає вашим
                конкретним запитам
              </div>
            )}
            <img
              src='/333.jpeg'
              alt='Image'
              width={100}
              height={100}
              className={`h-[280px] lg:h-[420px] rounded-[20px] ${
                isState9 ? ' w-[50%] ' : 'w-full'
              }`}
            />
            <div
              className={`flex flex-col items-center lg:flex-col-reverse lg:items-center  ${
                isState9 ? 'justify-between lg:mb-8 lg:mr-8 ' : ' '
              }`}
            >
              <BtnDropDown
                className={`mt-[14px] mb-3 transition-all duration-500 ease-in-out 	${
                  isState9
                    ? 'rotate-180 lg:-rotate-90 lg:mb-0 lg:self-end '
                    : 'rotate-right lg:mx-5'
                }`}
                onClick={() => setState9(!isState9)}
              />
              <p
                className={`mx-5 mb-[11px] text-base lg:text-lg ${
                  isState9
                    ? 'opacity-100 max-h-full block  '
                    : 'opacity-0 max-h-0 hidden'
                } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden lg:m-10`}
              >
                Юніті зберігає результати ваших діалогів і на основі них генерує
                більш персоналізовану інформацію, яка відповідає вашим
                конкретним запитам
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className='relative w-[280px] md:w-[304px] lg:w-[48%] rounded-[20px] bg-cardBgGray hidden lg:block'>
            <div className='absolute top-0 left-0 p-5 text-white font-medium text-base 3xl:font-bold 3xl:text-2xl'>
              Допоможу у виріщенні повсякденних питань
            </div>
            {!isState10 && (
              <div className='hidden md:block absolute top-[50%] translate-y-[-50%] left-0 p-5 text-white text-sm lg:text-xl w-[240px] md:w-[300px] lg:w-[400px]'>
                Забудьте про стрес, пов&#x2019;язаний із щоденними завданнями,
                завдяки нашому ШІ-асистенту, який пропонує рішення для
                покращення продуктивності та ефективності вашого особистого та
                професійного життя.
              </div>
            )}
            <img
              src='/333.jpeg'
              alt='Image'
              width={100}
              height={100}
              className={`w-full h-[280px] lg:h-[420px] rounded-[20px]`}
            />
            <div className='flex flex-col items-center'>
              <BtnDropDown
                className={`mt-[14px] mb-[14px] transition-all duration-500 ease-in-out ${
                  isState10 ? 'rotate-180' : ''
                }`}
                onClick={() => setState10(!isState10)}
              />
              <p
                className={`mx-5 mb-[11px] text-base lg:text-lg ${
                  isState10
                    ? 'opacity-100 max-h-full block'
                    : 'opacity-0 max-h-0 hidden'
                } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden`}
              >
                Забудьте про стрес, пов&#x2019;язаний із щоденними завданнями,
                завдяки нашому ШІ-асистенту, який пропонує рішення для
                покращення продуктивності та ефективності вашого особистого та
                професійного життя. Від планування вашого дня до оптимізації
                робочих процесів, наш інтелектуальний помічник перетворює ваш
                повсякденний досвід.
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className='relative w-[280px] md:w-[304px] lg:w-[48%] rounded-[20px] bg-cardBgGray hidden lg:block'>
            <div className='absolute top-0 left-0 p-5 text-white font-medium text-base 3xl:font-bold 3xl:text-2xl'>
              Вирішу юридичні питання
            </div>
            {!isState11 && (
              <div className='hidden md:block absolute top-[50%] translate-y-[-50%] left-0 p-5 text-white text-sm lg:text-xl  w-[240px] md:w-[300px] lg:w-[400px]'>
                Отримайте надійні юридичні консультації на відстані одного кліку
                з нашим ШІ-помічником, спеціалізованим на наданні стратегічних
                рекомендацій та інформованих порад.
              </div>
            )}
            <img
              src='/333.jpeg'
              alt='Image'
              width={100}
              height={100}
              className={`w-full h-[280px] lg:h-[420px] rounded-[20px]`}
            />
            <div className='flex flex-col items-center'>
              <BtnDropDown
                className={`mt-[14px] mb-[14px] transition-all duration-500 ease-in-out ${
                  isState11 ? ' rotate-180' : ''
                }`}
                onClick={() => setState11(!isState11)}
              />
              <p
                className={`mx-5 mb-[11px] text-base lg:text-lg ${
                  isState11
                    ? 'opacity-100 max-h-full block'
                    : 'opacity-0 max-h-0 hidden'
                } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden`}
              >
                Отримайте надійні юридичні консультації на відстані одного кліку
                з нашим ШІ-помічником, спеціалізованим на наданні стратегічних
                рекомендацій та інформованих порад. Незалежно від складності
                вашого запиту, наш цифровий консультант пропонує доступні та
                точні відповіді, забезпечуючи ваш спокій та впевненість у
                кожному юридичному питанні.
              </p>
            </div>
          </div>
          {/* 4 */}
          <div
            className={`relative w-[280px] md:w-[304px] lg:w-[100%]  lg:flex rounded-[20px] bg-cardBgGray hidden ${
              isState12 ? 'lg:items-stretch' : 'lg:items-center'
            }`}
          >
            <div className='absolute top-0 left-0 p-5 text-white font-bold text-base lg:text-2xl w-[240px] md:w-[300px] lg:w-[400px]'>
              Персональний підхід
            </div>
            {!isState12 && (
              <div className='hidden md:block absolute top-[50%] translate-y-[-50%] left-0 p-5 text-white text-sm lg:text-xl  w-[240px] md:w-[300px] lg:w-[400px]'>
                Юніті зберігає результати ваших діалогів і на основі них генерує
                більш персоналізовану інформацію, яка відповідає вашим
                конкретним запитам
              </div>
            )}
            <img
              src='/222.jpeg'
              alt='Image'
              width={100}
              height={100}
              className={`h-[280px] lg:h-[420px] rounded-[20px]${
                isState12 ? ' w-[50%] ' : ' w-full '
              }`}
            />
            <div
              className={`flex flex-col items-center lg:flex-col-reverse lg:items-center  ${
                isState12 ? 'lg:justify-between lg:mb-8 lg:mr-8 w-[50%]' : ' '
              }`}
            >
              <BtnDropDown
                className={`mt-[14px] mb-3 transition-all duration-500 ease-in-out 	${
                  isState12
                    ? 'rotate-180 lg:-rotate-90 lg:mb-0 lg:self-end '
                    : 'rotate-right lg:mx-5'
                }`}
                onClick={() => setState12(!isState12)}
              />
              <p
                className={`mx-5 mb-[11px] text-base lg:text-lg ${
                  isState12
                    ? 'opacity-100 max-h-full block'
                    : 'opacity-0 max-h-0 hidden'
                } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden lg:m-10`}
              >
                Юніті зберігає результати ваших діалогів і на основі них генерує
                більш персоналізовану інформацію, яка відповідає вашим
                конкретним запитам
              </p>
            </div>
          </div>
          {/* end desctop !!!*/}
          {/*  */}
          <div className='w-full flex justify-center items-center md:justify-start lg:justify-center md:w-[624px] md:mx-auto mt-8 '>
            <BtnBigPurple className='px-8 py-2 bg-purple h-[139px] w-[139px] 1xl:h-[158px] 1xl:w-[158px] 2xl:h-[216px] 2xl:w-[216px] lg:h-[142px] lg:w-[142px] xl:h-[145px] xl:w-[145px]'>
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
        </div>
      </div>
      {/* end 3 section ready */}

      {/* 4 section ready */}
      <div className='relative'>
        <div className='md:hidden  absolute top-[-450px] left-[50%]  translate-x-[-50%] flex items-center justify-center w-full'>
          <Icon2AI className='' />
        </div>
      </div>
      <div className='w-full flex justify-center md:justify-start md:w-[624px] lg:w-[800px] 2xl:w-[1005px] mx-auto'>
        <div className='flex flex-col md:flex-row md:w-[527px] md:justify-between items-center justify-center mb-8 md:mb-0  w-[279px]  3xl:w-[1092px]'>
          <div>
            <div className='w-full flex justify-center items-center md:justify-start  md:mt-0 mb-5  md:w-[624px] mx-auto'>
              <BtnTryIt className='w-[215px] text-xs py-1'>
                спеціальна пропозиція{' '}
              </BtnTryIt>
            </div>
            <h3 className='md:text-left text-gradient2 text-3xl md:text-2xl  lg:text-5xl 3xl:text-8xl font-bold uppercase relative text-center mb-5 3xl:mb-8'>
              Unity для українців{' '}
            </h3>
            <p className='mb-8 text-center md:text-left text-lg md:text-base  lg:text-xl 3xl:text-2xl text-[#D9D9D9]'>
              Ваш AI-помічник для полегшення адаптації в новому місці!{' '}
            </p>
          </div>
          <div className='lg:hidden'>
            <BtnBigPurple className='w-[139px] h-[139px] turquoiseBg '>
              <IconVolume />
              інструкції
            </BtnBigPurple>
          </div>
        </div>
      </div>
      <div className=' w-full  md:pb-[100px] target-cardsBg3 '>
        <div className='flex flex-col md:flex-row md:flex-wrap md:w-[624px] lg:w-[800px] 2xl:w-[1005px] md:mx-auto items-center md:items-start cardsBg3 md:bg-none gap-8 md:gap-4 lg:gap-8  md:pt-16 mb-[360px] md:mb-0'>
          {/* !!! mobile tablet */}
          <div className='flex flex-col lg:hidden gap-8 md:gap-4'>
            {/* 1 */}
            <div
              className={`relative w-[280px] md:w-[304px] lg:w-[100%] lg:flex rounded-[20px] bg-cardBgGray  ${
                isState13 ? 'lg:items-stretch' : 'lg:items-center'
              }`}
            >
              <div className='absolute top-0 left-0 p-5 text-white font-bold text-base lg:text-2xl w-[240px] md:w-[300px] lg:w-[400px]'>
                Персональний підхід
              </div>
              {!isState13 && (
                <div className='hidden md:block absolute top-[50%] translate-y-[-50%] left-0 p-5 text-white text-sm lg:text-xl  w-[240px] md:w-[300px] lg:w-[400px]'>
                  Юніті зберігає результати ваших діалогів і на основі них
                  генерує більш персоналізовану інформацію, яка відповідає вашим
                  конкретним запитам
                </div>
              )}
              <img
                src='/uk.jpeg'
                alt='Image'
                width={100}
                height={100}
                className={`w-full h-[280px] lg:h-[420px] rounded-[20px]`}
              />
              <div
                className={`flex flex-col items-center lg:flex-col-reverse lg:items-center  ${
                  isState9 ? 'lg:justify-between lg:mb-8 lg:mr-8' : ' '
                }`}
              >
                <BtnDropDown
                  className={`mt-[14px] mb-3 transition-all duration-500 ease-in-out 	${
                    isState13
                      ? 'rotate-180 lg:-rotate-90 lg:mb-0 lg:self-end '
                      : 'rotate-right lg:mx-5'
                  }`}
                  onClick={() => setState13(!isState13)}
                />
                <p
                  className={`mx-5 mb-[11px] text-base lg:text-lg ${
                    isState13
                      ? 'opacity-100 max-h-full block'
                      : 'opacity-0 max-h-0 hidden'
                  } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden lg:m-10`}
                >
                  Юніті зберігає результати ваших діалогів і на основі них
                  генерує більш персоналізовану інформацію, яка відповідає вашим
                  конкретним запитам
                </p>
              </div>
            </div>
            {/* 2 */}
            <div className='relative w-[280px] md:w-[304px] lg:w-[48%] rounded-[20px] bg-cardBgGray'>
              <div className='absolute top-0 left-0 p-5 text-white font-medium text-base 3xl:font-bold 3xl:text-2xl'>
                Допоможу у виріщенні повсякденних питань
              </div>
              {!isState14 && (
                <div className='hidden md:block absolute top-[50%] translate-y-[-50%] left-0 p-5 text-white text-sm lg:text-xl w-[240px] md:w-[300px] lg:w-[400px]'>
                  Забудьте про стрес, пов&#x2019;язаний із щоденними завданнями,
                  завдяки нашому ШІ-асистенту, який пропонує рішення для
                  покращення продуктивності та ефективності вашого особистого та
                  професійного життя.
                </div>
              )}
              <img
                src='/uk.jpeg'
                alt='Image'
                width={100}
                height={100}
                className={`w-full h-[280px] lg:h-[420px] rounded-[20px]`}
              />
              <div className='flex flex-col items-center'>
                <BtnDropDown
                  className={`mt-[14px] mb-[14px] transition-all duration-500 ease-in-out ${
                    isState14 ? 'rotate-180' : ''
                  }`}
                  onClick={() => setState14(!isState14)}
                />
                <p
                  className={`mx-5 mb-[11px] text-base lg:text-lg ${
                    isState14
                      ? 'opacity-100 max-h-full block'
                      : 'opacity-0 max-h-0 hidden'
                  } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden`}
                >
                  Забудьте про стрес, пов&#x2019;язаний із щоденними завданнями,
                  завдяки нашому ШІ-асистенту, який пропонує рішення для
                  покращення продуктивності та ефективності вашого особистого та
                  професійного життя. Від планування вашого дня до оптимізації
                  робочих процесів, наш інтелектуальний помічник перетворює ваш
                  повсякденний досвід.
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col lg:hidden gap-8 md:gap-4'>
            {/* 3 */}
            <div className='relative w-[280px] md:w-[304px] lg:w-[48%] rounded-[20px] bg-cardBgGray'>
              <div className='absolute top-0 left-0 p-5 text-white font-medium text-base 3xl:font-bold 3xl:text-2xl'>
                Вирішу юридичні питання
              </div>
              {!isState15 && (
                <div className='hidden md:block absolute top-[50%] translate-y-[-50%] left-0 p-5 text-white text-sm lg:text-xl  w-[240px] md:w-[300px] lg:w-[400px]'>
                  Отримайте надійні юридичні консультації на відстані одного
                  кліку з нашим ШІ-помічником, спеціалізованим на наданні
                  стратегічних рекомендацій та інформованих порад.
                </div>
              )}
              <img
                src='/uk.jpeg'
                alt='Image'
                width={100}
                height={100}
                className={`w-full h-[280px] lg:h-[420px] rounded-[20px]`}
              />
              <div className='flex flex-col items-center'>
                <BtnDropDown
                  className={`mt-[14px] mb-[14px] transition-all duration-500 ease-in-out ${
                    isState15 ? ' rotate-180' : ''
                  }`}
                  onClick={() => setState15(!isState15)}
                />
                <p
                  className={`mx-5 mb-[11px] text-base lg:text-lg ${
                    isState15
                      ? 'opacity-100 max-h-full block'
                      : 'opacity-0 max-h-0 hidden'
                  } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden`}
                >
                  Отримайте надійні юридичні консультації на відстані одного
                  кліку з нашим ШІ-помічником, спеціалізованим на наданні
                  стратегічних рекомендацій та інформованих порад. Незалежно від
                  складності вашого запиту, наш цифровий консультант пропонує
                  доступні та точні відповіді, забезпечуючи ваш спокій та
                  впевненість у кожному юридичному питанні.
                </p>
              </div>
            </div>
            {/* 4 */}
            <div
              className={`relative w-[280px] md:w-[304px] lg:w-[100%]  lg:flex rounded-[20px] bg-cardBgGray  ${
                isState16 ? 'lg:items-stretch' : 'lg:items-center'
              }`}
            >
              <div className='absolute top-0 left-0 p-5 text-white font-bold text-base lg:text-2xl w-[240px] md:w-[300px] lg:w-[400px]'>
                Персональний підхід
              </div>
              {!isState16 && (
                <div className='hidden md:block absolute top-[50%] translate-y-[-50%] left-0 p-5 text-white text-sm lg:text-xl  w-[240px] md:w-[300px] lg:w-[400px]'>
                  Юніті зберігає результати ваших діалогів і на основі них
                  генерує більш персоналізовану інформацію, яка відповідає вашим
                  конкретним запитам
                </div>
              )}
              <img
                src='/uk.jpeg'
                alt='Image'
                width={100}
                height={100}
                className={`w-full h-[280px] lg:h-[420px] rounded-[20px]`}
              />
              <div
                className={`flex flex-col items-center lg:flex-col-reverse lg:items-center  ${
                  isState16 ? 'lg:justify-between lg:mb-8 lg:mr-8' : ' '
                }`}
              >
                <BtnDropDown
                  className={`mt-[14px] mb-3 transition-all duration-500 ease-in-out 	${
                    isState16
                      ? 'rotate-180 lg:-rotate-90 lg:mb-0 lg:self-end '
                      : 'rotate-right lg:mx-5'
                  }`}
                  onClick={() => setState16(!isState16)}
                />
                <p
                  className={`mx-5 mb-[11px] text-base lg:text-lg ${
                    isState16
                      ? 'opacity-100 max-h-full block'
                      : 'opacity-0 max-h-0 hidden'
                  } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden lg:m-10`}
                >
                  Юніті зберігає результати ваших діалогів і на основі них
                  генерує більш персоналізовану інформацію, яка відповідає вашим
                  конкретним запитам
                </p>
              </div>
            </div>
          </div>
          {/* end mobile tablet !!! */}
          {/* desctop!!! */}
          {/* 1 */}
          <div
            className={`relative w-[280px] md:w-[304px] lg:w-[100%] lg:flex rounded-[20px] bg-cardBgGray hidden ${
              isState13 ? 'lg:items-stretch' : 'lg:items-center'
            }`}
          >
            <div className='absolute top-0 left-0 p-5 text-white font-bold text-base lg:text-2xl w-[240px] md:w-[300px] lg:w-[400px]'>
              Персональний підхід
            </div>
            {!isState13 && (
              <div className='hidden md:block absolute top-[50%] translate-y-[-50%] left-0 p-5 text-white text-sm lg:text-xl  w-[240px] md:w-[300px] lg:w-[400px]'>
                Юніті зберігає результати ваших діалогів і на основі них генерує
                більш персоналізовану інформацію, яка відповідає вашим
                конкретним запитам111
              </div>
            )}
            <img
              src='/uk.jpeg'
              alt='Image'
              width={100}
              height={100}
              className={`h-[280px] lg:h-[420px] rounded-[20px] ${
                isState9 ? 'w-[50%]' : 'w-full'
              }`}
            />
            <div
              className={`flex flex-col items-center lg:flex-col-reverse lg:items-center  ${
                isState13 ? 'lg:justify-between lg:mb-8 lg:mr-8 w-[50%]' : ' '
              }`}
            >
              <BtnDropDown
                className={`mt-[14px] mb-3 transition-all duration-500 ease-in-out 	${
                  isState13
                    ? 'rotate-180 lg:-rotate-90 lg:mb-0 lg:self-end '
                    : 'rotate-right lg:mx-5'
                }`}
                onClick={() => setState13(!isState13)}
              />
              <p
                className={`mx-5 mb-[11px] text-base lg:text-lg ${
                  isState13
                    ? 'opacity-100 max-h-full block '
                    : 'opacity-0 max-h-0 hidden'
                } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden lg:m-10`}
              >
                Юніті зберігає результати ваших діалогів і на основі них генерує
                більш персоналізовану інформацію, яка відповідає вашим
                конкретним запитам
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className='relative w-[280px] md:w-[304px] lg:w-[48%] rounded-[20px] bg-cardBgGray hidden lg:block'>
            <div className='absolute top-0 left-0 p-5 text-white font-medium text-base 3xl:font-bold 3xl:text-2xl'>
              Допоможу у виріщенні повсякденних питань
            </div>
            {!isState14 && (
              <div className='hidden md:block absolute top-[50%] translate-y-[-50%] left-0 p-5 text-white text-sm lg:text-xl w-[240px] md:w-[300px] lg:w-[400px]'>
                Забудьте про стрес, пов&#x2019;язаний із щоденними завданнями,
                завдяки нашому ШІ-асистенту, який пропонує рішення для
                покращення продуктивності та ефективності вашого особистого та
                професійного життя.
              </div>
            )}
            <img
              src='/uk.jpeg'
              alt='Image'
              width={100}
              height={100}
              className={`w-full h-[280px] lg:h-[420px] rounded-[20px]`}
            />
            <div className='flex flex-col items-center'>
              <BtnDropDown
                className={`mt-[14px] mb-[14px] transition-all duration-500 ease-in-out ${
                  isState14 ? 'rotate-180' : ''
                }`}
                onClick={() => setState14(!isState14)}
              />
              <p
                className={`mx-5 mb-[11px] text-base lg:text-lg ${
                  isState14
                    ? 'opacity-100 max-h-full block'
                    : 'opacity-0 max-h-0 hidden'
                } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden`}
              >
                Забудьте про стрес, пов&#x2019;язаний із щоденними завданнями,
                завдяки нашому ШІ-асистенту, який пропонує рішення для
                покращення продуктивності та ефективності вашого особистого та
                професійного життя. Від планування вашого дня до оптимізації
                робочих процесів, наш інтелектуальний помічник перетворює ваш
                повсякденний досвід.
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className='relative w-[280px] md:w-[304px] lg:w-[48%] rounded-[20px] bg-cardBgGray hidden lg:block'>
            <div className='absolute top-0 left-0 p-5 text-white font-medium text-base 3xl:font-bold 3xl:text-2xl'>
              Вирішу юридичні питання
            </div>
            {!isState15 && (
              <div className='hidden md:block absolute top-[50%] translate-y-[-50%] left-0 p-5 text-white text-sm lg:text-xl  w-[240px] md:w-[300px] lg:w-[400px]'>
                Отримайте надійні юридичні консультації на відстані одного кліку
                з нашим ШІ-помічником, спеціалізованим на наданні стратегічних
                рекомендацій та інформованих порад.
              </div>
            )}
            <img
              src='/uk.jpeg'
              alt='Image'
              width={100}
              height={100}
              className={`w-full h-[280px] lg:h-[420px] rounded-[20px]`}
            />
            <div className='flex flex-col items-center'>
              <BtnDropDown
                className={`mt-[14px] mb-[14px] transition-all duration-500 ease-in-out ${
                  isState15 ? ' rotate-180' : ''
                }`}
                onClick={() => setState15(!isState15)}
              />
              <p
                className={`mx-5 mb-[11px] text-base lg:text-lg ${
                  isState15
                    ? 'opacity-100 max-h-full block'
                    : 'opacity-0 max-h-0 hidden'
                } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden`}
              >
                Отримайте надійні юридичні консультації на відстані одного кліку
                з нашим ШІ-помічником, спеціалізованим на наданні стратегічних
                рекомендацій та інформованих порад. Незалежно від складності
                вашого запиту, наш цифровий консультант пропонує доступні та
                точні відповіді, забезпечуючи ваш спокій та впевненість у
                кожному юридичному питанні.
              </p>
            </div>
          </div>
          {/* 4 */}
          <div
            className={`relative w-[280px] md:w-[304px] lg:w-[100%]  lg:flex rounded-[20px] bg-cardBgGray hidden ${
              isState16 ? 'lg:items-stretch' : 'lg:items-center'
            }`}
          >
            <div className='absolute top-0 left-0 p-5 text-white font-bold text-base lg:text-2xl w-[240px] md:w-[300px] lg:w-[400px]'>
              Персональний підхід
            </div>
            {!isState16 && (
              <div className='hidden md:block absolute top-[50%] translate-y-[-50%] left-0 p-5 text-white text-sm lg:text-xl  w-[240px] md:w-[300px] lg:w-[400px]'>
                Юніті зберігає результати ваших діалогів і на основі них генерує
                більш персоналізовану інформацію, яка відповідає вашим
                конкретним запитам
              </div>
            )}
            <img
              src='/uk.jpeg'
              alt='Image'
              width={100}
              height={100}
              className={`h-[280px] lg:h-[420px] rounded-[20px] ${
                isState16 ? ' w-[50%] ' : 'w-full'
              }`}
            />
            <div
              className={`flex flex-col items-center lg:flex-col-reverse lg:items-center  ${
                isState16 ? 'lg:justify-between lg:mb-8 lg:mr-8 w-[50%]' : ' '
              }`}
            >
              <BtnDropDown
                className={`mt-[14px] mb-3 transition-all duration-500 ease-in-out 	${
                  isState16
                    ? 'rotate-180 lg:-rotate-90 lg:mb-0 lg:self-end '
                    : 'rotate-right lg:mx-5'
                }`}
                onClick={() => setState16(!isState16)}
              />
              <p
                className={`mx-5 mb-[11px] text-base lg:text-lg ${
                  isState16
                    ? 'opacity-100 max-h-full block'
                    : 'opacity-0 max-h-0 hidden'
                } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden lg:m-10`}
              >
                Юніті зберігає результати ваших діалогів і на основі них генерує
                більш персоналізовану інформацію, яка відповідає вашим
                конкретним запитам
              </p>
            </div>
          </div>
          {/* end desctop !!!*/}
          {/*  */}
          <div className='w-full flex justify-center items-center md:justify-start lg:justify-center md:w-[624px] md:mx-auto mt-8 '>
            <BtnBigPurple className='px-8 py-2 bg-purple h-[139px] w-[139px] 1xl:h-[158px] 1xl:w-[158px] 2xl:h-[216px] 2xl:w-[216px] lg:h-[142px] lg:w-[142px] xl:h-[145px] xl:w-[145px]'>
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
        </div>
      </div>
      {/* end 4 section ready */}

      {/* 5 section ready */}
      <div className='w-full flex justify-center md:justify-start md:w-[624px] lg:w-[800px] 2xl:w-[1005px] mx-auto'>
        <div className='flex flex-col md:flex-row md:w-[527px] md:justify-between items-center justify-center mb-8 md:mb-0  w-[279px]  3xl:w-[1092px]'>
          <div>
            <h3 className='md:text-left text-gradient text-3xl md:text-2xl  lg:text-5xl 3xl:text-8xl font-bold uppercase relative text-center mb-5 3xl:mb-8'>
              Unity для українців{' '}
            </h3>
            <p className='mb-8 text-center md:text-left text-lg md:text-base  lg:text-xl 3xl:text-2xl text-[#D9D9D9]'>
              Ваш AI-помічник для полегшення адаптації в новому місці!{' '}
            </p>
          </div>
          <div className='lg:hidden'>
            <BtnBigPurple className='w-[139px] h-[139px] turquoiseBg '>
              <IconVolume />
              інструкції
            </BtnBigPurple>
          </div>
        </div>
      </div>
      <div className=' w-full  md:pb-[100px] target-cardsBg5 '>
        <div className='flex flex-col md:flex-row md:flex-wrap md:w-[624px] lg:w-[800px] 2xl:w-[1005px] md:mx-auto items-center md:items-start cardsBg5 md:bg-none gap-8 md:gap-4 lg:gap-8  md:pt-16 '>
          {/* !!! mobile tablet */}
          <div className='flex flex-col lg:hidden gap-8 md:gap-4'>
            {/* 1 */}
            <div
              className={`relative w-[280px] md:w-[304px] lg:w-[100%] lg:flex rounded-[20px] bg-cardBgGray  ${
                isState17 ? 'lg:items-stretch' : 'lg:items-center'
              }`}
            >
              <div className='absolute top-0 left-0 p-5 text-white font-bold text-base lg:text-2xl w-[240px] md:w-[300px] lg:w-[400px]'>
                Персональний підхід
              </div>
              {!isState17 && (
                <div className='hidden md:block absolute top-[50%] translate-y-[-50%] left-0 p-5 text-white text-sm lg:text-xl  w-[240px] md:w-[300px] lg:w-[400px]'>
                  Юніті зберігає результати ваших діалогів і на основі них
                  генерує більш персоналізовану інформацію, яка відповідає вашим
                  конкретним запитам
                </div>
              )}
              <img
                src='/555.jpeg'
                alt='Image'
                width={100}
                height={100}
                className={`w-full h-[280px] lg:h-[420px] rounded-[20px]`}
              />
              <div
                className={`flex flex-col items-center lg:flex-col-reverse lg:items-center  ${
                  isState17 ? 'lg:justify-between lg:mb-8 lg:mr-8' : ' '
                }`}
              >
                <BtnDropDown
                  className={`mt-[14px] mb-3 transition-all duration-500 ease-in-out 	${
                    isState17
                      ? 'rotate-180 lg:-rotate-90 lg:mb-0 lg:self-end '
                      : 'rotate-right lg:mx-5'
                  }`}
                  onClick={() => setState17(!isState17)}
                />
                <p
                  className={`mx-5 mb-[11px] text-base lg:text-lg ${
                    isState17
                      ? 'opacity-100 max-h-full block'
                      : 'opacity-0 max-h-0 hidden'
                  } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden lg:m-10`}
                >
                  Юніті зберігає результати ваших діалогів і на основі них
                  генерує більш персоналізовану інформацію, яка відповідає вашим
                  конкретним запитам
                </p>
              </div>
            </div>
            {/* 2 */}
            <div className='relative w-[280px] md:w-[304px] lg:w-[48%] rounded-[20px] bg-cardBgGray'>
              <div className='absolute top-0 left-0 p-5 text-white font-medium text-base 3xl:font-bold 3xl:text-2xl'>
                Допоможу у виріщенні повсякденних питань
              </div>
              {!isState18 && (
                <div className='hidden md:block absolute top-[50%] translate-y-[-50%] left-0 p-5 text-white text-sm lg:text-xl w-[240px] md:w-[300px] lg:w-[400px]'>
                  Забудьте про стрес, пов&#x2019;язаний із щоденними завданнями,
                  завдяки нашому ШІ-асистенту, який пропонує рішення для
                  покращення продуктивності та ефективності вашого особистого та
                  професійного життя.
                </div>
              )}
              <img
                src='/555.jpeg'
                alt='Image'
                width={100}
                height={100}
                className={`w-full h-[280px] lg:h-[420px] rounded-[20px]`}
              />
              <div className='flex flex-col items-center'>
                <BtnDropDown
                  className={`mt-[14px] mb-[14px] transition-all duration-500 ease-in-out ${
                    isState18 ? 'rotate-180' : ''
                  }`}
                  onClick={() => setState18(!isState18)}
                />
                <p
                  className={`mx-5 mb-[11px] text-base lg:text-lg ${
                    isState18
                      ? 'opacity-100 max-h-full block'
                      : 'opacity-0 max-h-0 hidden'
                  } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden`}
                >
                  Забудьте про стрес, пов&#x2019;язаний із щоденними завданнями,
                  завдяки нашому ШІ-асистенту, який пропонує рішення для
                  покращення продуктивності та ефективності вашого особистого та
                  професійного життя. Від планування вашого дня до оптимізації
                  робочих процесів, наш інтелектуальний помічник перетворює ваш
                  повсякденний досвід.
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col lg:hidden gap-8 md:gap-4'>
            {/* 3 */}
            <div className='relative w-[280px] md:w-[304px] lg:w-[48%] rounded-[20px] bg-cardBgGray'>
              <div className='absolute top-0 left-0 p-5 text-white font-medium text-base 3xl:font-bold 3xl:text-2xl'>
                Вирішу юридичні питання
              </div>
              {!isState19 && (
                <div className='hidden md:block absolute top-[50%] translate-y-[-50%] left-0 p-5 text-white text-sm lg:text-xl  w-[240px] md:w-[300px] lg:w-[400px]'>
                  Отримайте надійні юридичні консультації на відстані одного
                  кліку з нашим ШІ-помічником, спеціалізованим на наданні
                  стратегічних рекомендацій та інформованих порад.
                </div>
              )}
              <img
                src='/555.jpeg'
                alt='Image'
                width={100}
                height={100}
                className={`w-full h-[280px] lg:h-[420px] rounded-[20px]`}
              />
              <div className='flex flex-col items-center'>
                <BtnDropDown
                  className={`mt-[14px] mb-[14px] transition-all duration-500 ease-in-out ${
                    isState19 ? ' rotate-180' : ''
                  }`}
                  onClick={() => setState19(!isState19)}
                />
                <p
                  className={`mx-5 mb-[11px] text-base lg:text-lg ${
                    isState19
                      ? 'opacity-100 max-h-full block'
                      : 'opacity-0 max-h-0 hidden'
                  } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden`}
                >
                  Отримайте надійні юридичні консультації на відстані одного
                  кліку з нашим ШІ-помічником, спеціалізованим на наданні
                  стратегічних рекомендацій та інформованих порад. Незалежно від
                  складності вашого запиту, наш цифровий консультант пропонує
                  доступні та точні відповіді, забезпечуючи ваш спокій та
                  впевненість у кожному юридичному питанні.
                </p>
              </div>
            </div>
            {/* 4 */}
            <div
              className={`relative w-[280px] md:w-[304px] lg:w-[100%]  lg:flex rounded-[20px] bg-cardBgGray  ${
                isState20 ? 'lg:items-stretch' : 'lg:items-center'
              }`}
            >
              <div className='absolute top-0 left-0 p-5 text-white font-bold text-base lg:text-2xl w-[240px] md:w-[300px] lg:w-[400px]'>
                Персональний підхід
              </div>
              {!isState20 && (
                <div className='hidden md:block absolute top-[50%] translate-y-[-50%] left-0 p-5 text-white text-sm lg:text-xl  w-[240px] md:w-[300px] lg:w-[400px]'>
                  Юніті зберігає результати ваших діалогів і на основі них
                  генерує більш персоналізовану інформацію, яка відповідає вашим
                  конкретним запитам
                </div>
              )}
              <img
                src='/555.jpeg'
                alt='Image'
                width={100}
                height={100}
                className={`w-full h-[280px] lg:h-[420px] rounded-[20px]`}
              />
              <div
                className={`flex flex-col items-center lg:flex-col-reverse lg:items-center  ${
                  isState20 ? 'lg:justify-between lg:mb-8 lg:mr-8' : ' '
                }`}
              >
                <BtnDropDown
                  className={`mt-[14px] mb-3 transition-all duration-500 ease-in-out 	${
                    isState20
                      ? 'rotate-180 lg:-rotate-90 lg:mb-0 lg:self-end '
                      : 'rotate-right lg:mx-5'
                  }`}
                  onClick={() => setState20(!isState20)}
                />
                <p
                  className={`mx-5 mb-[11px] text-base lg:text-lg ${
                    isState20
                      ? 'opacity-100 max-h-full block'
                      : 'opacity-0 max-h-0 hidden'
                  } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden lg:m-10`}
                >
                  Юніті зберігає результати ваших діалогів і на основі них
                  генерує більш персоналізовану інформацію, яка відповідає вашим
                  конкретним запитам
                </p>
              </div>
            </div>
          </div>
          {/* end mobile tablet !!! */}
          {/* desctop!!! */}
          {/* 1 */}
          <div
            className={`relative w-[280px] md:w-[304px] lg:w-[100%] lg:flex rounded-[20px] bg-cardBgGray hidden ${
              isState17 ? 'lg:items-stretch' : 'lg:items-center'
            }`}
          >
            <div className='absolute top-0 left-0 p-5 text-white font-bold text-base lg:text-2xl w-[240px] md:w-[300px] lg:w-[400px]'>
              Персональний підхід
            </div>
            {!isState17 && (
              <div className='hidden md:block absolute top-[50%] translate-y-[-50%] left-0 p-5 text-white text-sm lg:text-xl  w-[240px] md:w-[300px] lg:w-[400px]'>
                Юніті зберігає результати ваших діалогів і на основі них генерує
                більш персоналізовану інформацію, яка відповідає вашим
                конкретним запитам111
              </div>
            )}
            <img
              src='/555.jpeg'
              alt='Image'
              width={100}
              height={100}
              className={`h-[280px] lg:h-[420px] rounded-[20px] ${
                isState17 ? 'w-[50%]' : 'w-full'
              }`}
            />
            <div
              className={`flex flex-col items-center lg:flex-col-reverse lg:items-center  ${
                isState17 ? 'lg:justify-between lg:mb-8 lg:mr-8 w-[50%]' : ' '
              }`}
            >
              <BtnDropDown
                className={`mt-[14px] mb-3 transition-all duration-500 ease-in-out 	${
                  isState17
                    ? 'rotate-180 lg:-rotate-90 lg:mb-0 lg:self-end '
                    : 'rotate-right lg:mx-5'
                }`}
                onClick={() => setState17(!isState17)}
              />
              <p
                className={`mx-5 mb-[11px] text-base lg:text-lg ${
                  isState17
                    ? 'opacity-100 max-h-full block '
                    : 'opacity-0 max-h-0 hidden'
                } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden lg:m-10`}
              >
                Юніті зберігає результати ваших діалогів і на основі них генерує
                більш персоналізовану інформацію, яка відповідає вашим
                конкретним запитам
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className='relative w-[280px] md:w-[304px] lg:w-[48%] rounded-[20px] bg-cardBgGray hidden lg:block'>
            <div className='absolute top-0 left-0 p-5 text-white font-medium text-base 3xl:font-bold 3xl:text-2xl'>
              Допоможу у виріщенні повсякденних питань
            </div>
            {!isState18 && (
              <div className='hidden md:block absolute top-[50%] translate-y-[-50%] left-0 p-5 text-white text-sm lg:text-xl w-[240px] md:w-[300px] lg:w-[400px]'>
                Забудьте про стрес, пов&#x2019;язаний із щоденними завданнями,
                завдяки нашому ШІ-асистенту, який пропонує рішення для
                покращення продуктивності та ефективності вашого особистого та
                професійного життя.
              </div>
            )}
            <img
              src='/555.jpeg'
              alt='Image'
              width={100}
              height={100}
              className={`w-full h-[280px] lg:h-[420px] rounded-[20px]`}
            />
            <div className='flex flex-col items-center'>
              <BtnDropDown
                className={`mt-[14px] mb-[14px] transition-all duration-500 ease-in-out ${
                  isState18 ? 'rotate-180' : ''
                }`}
                onClick={() => setState18(!isState18)}
              />
              <p
                className={`mx-5 mb-[11px] text-base lg:text-lg ${
                  isState18
                    ? 'opacity-100 max-h-full block'
                    : 'opacity-0 max-h-0 hidden'
                } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden`}
              >
                Забудьте про стрес, пов&#x2019;язаний із щоденними завданнями,
                завдяки нашому ШІ-асистенту, який пропонує рішення для
                покращення продуктивності та ефективності вашого особистого та
                професійного життя. Від планування вашого дня до оптимізації
                робочих процесів, наш інтелектуальний помічник перетворює ваш
                повсякденний досвід.
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className='relative w-[280px] md:w-[304px] lg:w-[48%] rounded-[20px] bg-cardBgGray hidden lg:block'>
            <div className='absolute top-0 left-0 p-5 text-white font-medium text-base 3xl:font-bold 3xl:text-2xl'>
              Вирішу юридичні питання
            </div>
            {!isState19 && (
              <div className='hidden md:block absolute top-[50%] translate-y-[-50%] left-0 p-5 text-white text-sm lg:text-xl  w-[240px] md:w-[300px] lg:w-[400px]'>
                Отримайте надійні юридичні консультації на відстані одного кліку
                з нашим ШІ-помічником, спеціалізованим на наданні стратегічних
                рекомендацій та інформованих порад.
              </div>
            )}
            <img
              src='/555.jpeg'
              alt='Image'
              width={100}
              height={100}
              className={`w-full h-[280px] lg:h-[420px] rounded-[20px]`}
            />
            <div className='flex flex-col items-center'>
              <BtnDropDown
                className={`mt-[14px] mb-[14px] transition-all duration-500 ease-in-out ${
                  isState19 ? ' rotate-180' : ''
                }`}
                onClick={() => setState19(!isState19)}
              />
              <p
                className={`mx-5 mb-[11px] text-base lg:text-lg ${
                  isState19
                    ? 'opacity-100 max-h-full block'
                    : 'opacity-0 max-h-0 hidden'
                } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden`}
              >
                Отримайте надійні юридичні консультації на відстані одного кліку
                з нашим ШІ-помічником, спеціалізованим на наданні стратегічних
                рекомендацій та інформованих порад. Незалежно від складності
                вашого запиту, наш цифровий консультант пропонує доступні та
                точні відповіді, забезпечуючи ваш спокій та впевненість у
                кожному юридичному питанні.
              </p>
            </div>
          </div>
          {/* 4 */}
          <div
            className={`relative w-[280px] md:w-[304px] lg:w-[100%]  lg:flex rounded-[20px] bg-cardBgGray hidden ${
              isState20 ? 'lg:items-stretch' : 'lg:items-center'
            }`}
          >
            <div className='absolute top-0 left-0 p-5 text-white font-bold text-base lg:text-2xl w-[240px] md:w-[300px] lg:w-[400px]'>
              Персональний підхід
            </div>
            {!isState20 && (
              <div className='hidden md:block absolute top-[50%] translate-y-[-50%] left-0 p-5 text-white text-sm lg:text-xl  w-[240px] md:w-[300px] lg:w-[400px]'>
                Юніті зберігає результати ваших діалогів і на основі них генерує
                більш персоналізовану інформацію, яка відповідає вашим
                конкретним запитам
              </div>
            )}
            <img
              src='/555.jpeg'
              alt='Image'
              width={100}
              height={100}
              className={`h-[280px] lg:h-[420px] rounded-[20px] ${
                isState20 ? ' w-[50%] ' : 'w-full'
              }`}
            />
            <div
              className={`flex flex-col items-center lg:flex-col-reverse lg:items-center  ${
                isState20 ? 'lg:justify-between lg:mb-8 lg:mr-8 w-[50%]' : ' '
              }`}
            >
              <BtnDropDown
                className={`mt-[14px] mb-3 transition-all duration-500 ease-in-out 	${
                  isState20
                    ? 'rotate-180 lg:-rotate-90 lg:mb-0 lg:self-end '
                    : 'rotate-right lg:mx-5'
                }`}
                onClick={() => setState20(!isState20)}
              />
              <p
                className={`mx-5 mb-[11px] text-base lg:text-lg ${
                  isState20
                    ? 'opacity-100 max-h-full block'
                    : 'opacity-0 max-h-0 hidden'
                } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden lg:m-10`}
              >
                Юніті зберігає результати ваших діалогів і на основі них генерує
                більш персоналізовану інформацію, яка відповідає вашим
                конкретним запитам
              </p>
            </div>
          </div>
          {/* end desctop !!!*/}
          {/*  */}
          <div className='w-full flex justify-center items-center md:justify-start lg:justify-center md:w-[624px] md:mx-auto mt-8 '>
            <BtnBigPurple className='px-8 py-2 bg-purple h-[139px] w-[139px] 1xl:h-[158px] 1xl:w-[158px] 2xl:h-[216px] 2xl:w-[216px] lg:h-[142px] lg:w-[142px] xl:h-[145px] xl:w-[145px]'>
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
        </div>
      </div>
      {/* end 5 section ready */}
    </section>
  )
}
