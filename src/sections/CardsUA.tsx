import { BtnBig } from '@/components/buttons/btn-big'
import { BtnDropDown } from '@/components/buttons/btn-drop-down'
import { BtnTryIt } from '@/components/buttons/btn-try-it'
import { Icon2AI } from '@/components/icons/icon-2-ai'
import { IconVolume } from '@/components/icons/icon-volume'
import { useState } from 'react'

export const CardsUA = (props: any) => {
  const [isState13, setState13] = useState(false)
  const [isState14, setState14] = useState(false)
  const [isState15, setState15] = useState(false)
  const [isState16, setState16] = useState(false)
  return (
    <section className={`${props.className}`}>
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
            <BtnBig className='w-[139px] h-[139px] turquoiseBg '>
              <IconVolume />
              інструкції
            </BtnBig>
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
                  isState13 ? 'lg:justify-between lg:mb-8 lg:mr-8' : ' '
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
                isState13 ? 'w-[50%]' : 'w-full'
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
            <BtnBig className='px-8 py-2 bg-purple h-[139px] w-[139px] 1xl:h-[158px] 1xl:w-[158px] 2xl:h-[216px] 2xl:w-[216px] lg:h-[142px] lg:w-[142px] xl:h-[145px] xl:w-[145px]'>
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
            </BtnBig>
          </div>
        </div>
      </div>
    </section>
  )
}
