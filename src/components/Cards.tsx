'use client'
import { ComponentProps } from '@/types'
import { useState } from 'react'
import { BtnBigPurple } from './buttons/big-purple-btn'
import { BtnDropDown } from './buttons/btn-drop-down'
import { BtnTryIt } from './buttons/btn-try-it'
import { Icon1AI } from './icons/icon-1-ai'
import { Icon2AI } from './icons/icon-2-ai'
import { IconVolume } from './icons/icon-volume'

export const Cards = (props: ComponentProps) => {
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
      {/* 1 section */}
      <div className='w-full flex justify-center md:justify-start md:w-[624px] mx-auto'>
        <div className='flex flex-col md:flex-row md:w-[527px] md:justify-between items-center justify-center mb-8 md:mb-0  w-[279px]  3xl:w-[1092px]'>
          <div>
            <h3 className='md:text-left text-gradient text-3xl md:text-2xl 3xl:text-8xl font-bold uppercase relative text-center mb-5 3xl:mb-8'>
              Unity для бізнесу
            </h3>
            <p className='mb-8 text-center md:text-left text-lg md:text-base 3xl:text-2xl text-[#D9D9D9]'>
              Індивідуальний підхід до офлайн та онлайн бізнесів
            </p>
          </div>
          <div className=''>
            <BtnBigPurple className='w-[139px] h-[139px] turquoiseBg '>
              <IconVolume />
              інструкції
            </BtnBigPurple>
          </div>
        </div>
      </div>
      <div className=' w-full target-cardsBg md:pb-[100px]'>
        <div className='flex flex-col md:flex-row md:flex-wrap md:w-[624px] lg:w-[800px] 2xl:w-[1005px] md:mx-auto items-center md:items-start cardsBg md:bg-none gap-8 md:gap-4 lg:gap-8  md:pt-16 mb-[360px] md:mb-0'>
          {/* 1 */}
          <div
            className={`relative w-[280px] md:w-[304px] lg:w-[100%] lg:flex rounded-[20px] bg-cardBgGray  ${
              isState1 ? 'lg:items-stretch' : 'lg:items-center'
            }`}
          >
            <div className='absolute top-0 left-0 p-5 text-white font-bold text-base lg:text-2xl w-[240px] md:w-[300px] lg:w-[400px]'>
              Персональний підхід
            </div>
            {!isState1 && (
              <div className='hidden md:block absolute top-[50%] translate-y-[-50%] left-0 p-5 text-white text-sm lg:text-xl  w-[240px] md:w-[300px] lg:w-[400px]'>
                Юніті зберігає результати ваших діалогів і на основі них генерує
                більш персоналізовану інформацію, яка відповідає вашим
                конкретним запитам
              </div>
            )}
            <img
              src='/777.png'
              alt='Image'
              width={100}
              height={100}
              className={`w-full h-[280px] lg:h-[420px] rounded-[20px]`}
            />
            <div
              className={`flex flex-col items-center lg:flex-col-reverse lg:items-center  ${
                isState1 ? 'lg:justify-between lg:mb-8 lg:mr-8' : ' '
              }`}
            >
              <BtnDropDown
                className={`mt-[14px] mb-3 transition-all duration-500 ease-in-out 	${
                  isState1
                    ? 'rotate-180 lg:-rotate-90 lg:mb-0 lg:self-end '
                    : 'rotate-right lg:mx-5'
                }`}
                onClick={() => setState1(!isState1)}
              />
              <p
                className={`mx-5 mb-[11px] text-base lg:text-lg ${
                  isState1
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
          <div className='relative w-[280px] md:w-[304px] lg:w-[48%] rounded-[20px] bg-cardBgGray'>
            <div className='absolute top-0 left-0 p-5 text-white font-medium text-base 3xl:font-bold 3xl:text-2xl'>
              Допоможу у виріщенні повсякденних питань
            </div>
            {!isState2 && (
              <div className='hidden md:block absolute top-[50%] translate-y-[-50%] left-0 p-5 text-white text-sm lg:text-xl w-[240px] md:w-[300px] lg:w-[400px]'>
                Забудьте про стрес, пов&#x2019;язаний із щоденними завданнями,
                завдяки нашому ШІ-асистенту, який пропонує рішення для
                покращення продуктивності та ефективності вашого особистого та
                професійного життя.
              </div>
            )}
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
                  isState2 ? 'rotate-180' : ''
                }`}
                onClick={() => setState2(!isState2)}
              />
              <p
                className={`mx-5 mb-[11px] text-base lg:text-lg ${
                  isState2
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
          <div className='relative w-[280px] md:w-[304px] lg:w-[48%] rounded-[20px] bg-cardBgGray'>
            <div className='absolute top-0 left-0 p-5 text-white font-medium text-base 3xl:font-bold 3xl:text-2xl'>
              Вирішу юридичні питання
            </div>
            {!isState3 && (
              <div className='hidden md:block absolute top-[50%] translate-y-[-50%] left-0 p-5 text-white text-sm lg:text-xl  w-[240px] md:w-[300px] lg:w-[400px]'>
                Отримайте надійні юридичні консультації на відстані одного кліку
                з нашим ШІ-помічником, спеціалізованим на наданні стратегічних
                рекомендацій та інформованих порад.
              </div>
            )}
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
                  isState3 ? ' rotate-180' : ''
                }`}
                onClick={() => setState3(!isState3)}
              />
              <p
                className={`mx-5 mb-[11px] text-base lg:text-lg ${
                  isState3
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
            className={`relative w-[280px] md:w-[304px] lg:w-[100%]  lg:flex rounded-[20px] bg-cardBgGray  ${
              isState4 ? 'lg:items-stretch' : 'lg:items-center'
            }`}
          >
            <div className='absolute top-0 left-0 p-5 text-white font-bold text-base lg:text-2xl w-[240px] md:w-[300px] lg:w-[400px]'>
              Персональний підхід
            </div>
            {!isState4 && (
              <div className='hidden md:block absolute top-[50%] translate-y-[-50%] left-0 p-5 text-white text-sm lg:text-xl  w-[240px] md:w-[300px] lg:w-[400px]'>
                Юніті зберігає результати ваших діалогів і на основі них генерує
                більш персоналізовану інформацію, яка відповідає вашим
                конкретним запитам
              </div>
            )}
            <img
              src='/777.png'
              alt='Image'
              width={100}
              height={100}
              className={`w-full h-[280px] lg:h-[420px] rounded-[20px]`}
            />
            <div
              className={`flex flex-col items-center lg:flex-col-reverse lg:items-center  ${
                isState4 ? 'lg:justify-between lg:mb-8 lg:mr-8' : ' '
              }`}
            >
              <BtnDropDown
                className={`mt-[14px] mb-3 transition-all duration-500 ease-in-out 	${
                  isState4
                    ? 'rotate-180 lg:-rotate-90 lg:mb-0 lg:self-end '
                    : 'rotate-right lg:mx-5'
                }`}
                onClick={() => setState4(!isState4)}
              />
              <p
                className={`mx-5 mb-[11px] text-base lg:text-lg ${
                  isState4
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
          {/*  */}
          <div className='w-full flex justify-center items-center md:justify-start md:w-[624px] md:mx-auto  3xl:hidden mt-8 '>
            <BtnTryIt className='px-8 py-2'>спробувати</BtnTryIt>
          </div>
        </div>
      </div>
      {/* end 1 section */}

      {/* 2 section */}
      <div className='relative'>
        <div className='3xl:hidde 3xl:left-[-200px] 3xl:top-[500px] absolute top-[-450px] left-[50%] md:top-[-200px] md:right-[-300px] md:w-[768px] md:h-[602px] md:translate-x-[0] translate-x-[-50%] flex items-center justify-center w-full'>
          <Icon1AI className='' />
        </div>
      </div>
      <div className='w-full flex justify-center md:justify-start md:w-[624px] mx-auto'>
        <div className='flex flex-col items-center justify-center mb-8 md:mb-0 w-[279px] md:w-[342px] 3xl:w-[1092px] '>
          <h3 className='w-full md:text-left text-gradient text-3xl md:text-2xl 3xl:text-8xl font-bold uppercase relative text-center mb-5 3xl:mb-8'>
            Unity для користувача
          </h3>
          <p className='mb-8 text-center md:text-left text-lg md:text-base 3xl:text-2xl text-[#D9D9D9]'>
            Допомога у вирішенні будь-яких питань вдома і закордоном
          </p>
          <BtnBigPurple className='w-[139px] h-[139px] turquoiseBg md:hidden'>
            <IconVolume />
            інструкції
          </BtnBigPurple>
        </div>
      </div>
      <div className=' w-full target-cardsBg4 md:pb-[100px]'>
        <div className='cardsBg4 md:bg-none flex flex-col md:flex-row md:flex-wrap md:w-[624px] md:items-start md:mx-auto items-center md:gap-4 md:pt-16 gap-8 mb-[360px] md:mb-0 '>
          {/*  */}
          <div className='relative w-[280px] md:w-[304px] rounded-[20px] bg-cardBgGray'>
            <div className='absolute top-0 left-0 p-5 text-white font-medium text-base 3xl:font-bold 3xl:text-2xl'>
              Складу план розваг для будь-якої компанії
            </div>
            <img
              src='/7.png'
              alt='Image'
              width={100}
              height={100}
              className='w-full h-[280px]'
            />
            <div className='flex flex-col items-center'>
              <BtnDropDown
                className={`mt-[14px] transition-all duration-500 ease-in-out ${
                  isState5 ? 'mb-[14px] rotate-180' : ''
                }`}
                onClick={() => setState5(!isState5)}
              />
              <p
                className={`mx-5 mb-[11px] text-base ${
                  isState5 ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'
                } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden`}
              >
                Перетворіть свої мрії про ідеальний відпочинок у реальність з
                нашою інноваційною ШІ, яка персоналізує пошук найунікальніших та
                незабутніх місць для відпочинку та розваг. Отримайте доступ до
                ексклюзивних рекомендацій, які гарантують захоплюючий досвід та
                неперевершені спогади.
              </p>
            </div>
          </div>
          {/*  */}
          <div className='relative w-[280px] md:w-[304px] rounded-[20px] bg-cardBgGray'>
            <div className='absolute top-0 left-0 p-5 text-white font-medium text-base 3xl:font-bold 3xl:text-2xl'>
              Запланую незабутню подорож
            </div>
            <img
              src='/6.png'
              alt='Image'
              width={100}
              height={100}
              className='w-full h-[280px]'
            />
            <div className='flex flex-col items-center'>
              <BtnDropDown
                className={`mt-[14px] transition-all duration-500 ease-in-out ${
                  isState6 ? 'mb-[14px] rotate-180' : ''
                }`}
                onClick={() => setState6(!isState6)}
              />
              <p
                className={`mx-5 mb-[11px] text-base ${
                  isState6 ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'
                } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden`}
              >
                Планування подорожей стає бездоганним із нашою ШІ, що пропонує
                вам цілісні маршрути та оригінальні пригоди. Від віддалених
                куточків до популярних туристичних пунктів, ми гарантуємо, що
                кожна подорож буде оптимально спланована та наповнена
                захоплюючими враженнями.
              </p>
            </div>
          </div>
          {/*  */}
          <div className='relative w-[280px] md:w-[304px] rounded-[20px] bg-cardBgGray'>
            <div className='absolute top-0 left-0 p-5 text-white font-medium text-base 3xl:font-bold 3xl:text-2xl'>
              Створю персональну програму тренувань
            </div>
            <img
              src='/8.png'
              alt='ef3f'
              width={100}
              height={100}
              className='w-full h-[280px]'
            />
            <div className='flex flex-col items-center'>
              <BtnDropDown
                className={`mt-[14px] transition-all duration-500 ease-in-out ${
                  isState8 ? 'mb-[14px] rotate-180' : ''
                }`}
                onClick={() => setState8(!isState8)}
              />
              <p
                className={`mx-5 mb-[11px] text-base ${
                  isState8 ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'
                } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden`}
              >
                Здобудьте ідеальну форму та почуйтеся краще з персоналізованим
                планом харчування та тренувань, розробленим нашим передовим ШІ.
                Ми створюємо детальні, науково обґрунтовані програми, які
                оптимізують ваші щоденні звички, підтримуючи здоров&#x2019;я та
                фізичну форму.
              </p>
            </div>
          </div>
          {/*  */}
          <div className='relative w-[280px] md:w-[304px] rounded-[20px] bg-cardBgGray'>
            <div className='absolute top-0 left-0 p-5 text-white font-medium text-base 3xl:font-bold 3xl:text-2xl'>
              Поділюся рецептами вишуканих страв
            </div>
            <img
              src='/9.png'
              alt='ef3f'
              width={100}
              height={100}
              className='w-full h-[280px]'
            />
            <div className='flex flex-col items-center'>
              <BtnDropDown
                className={`mt-[14px] transition-all duration-500 ease-in-out ${
                  isState7 ? 'mb-[14px] rotate-180' : ''
                }`}
                onClick={() => setState7(!isState7)}
              />
              <p
                className={`mx-5 mb-[11px] text-base ${
                  isState7 ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'
                } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden`}
              >
                Перетворіть свою кухню на місце магії та винахідливості з нашою
                ШІ, яка надає креативні поради та підтримку в приготуванні
                страв. Від простих рецептів до гастрономічних витворів, ми
                піднімемо ваші кулінарні навички на новий рівень.
              </p>
            </div>
          </div>
          {/*  */}
          <div className='w-full flex justify-center items-center md:justify-start md:w-[624px] md:mx-auto  3xl:hidden mt-8 '>
            <BtnTryIt className='px-8 py-2'>спробувати</BtnTryIt>
          </div>
        </div>
      </div>
      {/* end 2 section */}

      {/* 3 section */}
      <div className='relative'>
        <div className='md:hidden 3xl:w-[729px] 3xl:h-[672px] 3xl:left-[-200px] 3xl:top-[500px] absolute top-[-450px] md:top-[50px] left-[50%] md:left-[-300px] md:w-[768px] md:h-[602px] md:translate-x-[0] translate-x-[-50%] flex items-center justify-center w-full'>
          <Icon2AI className='' />
        </div>
      </div>
      <div className='w-full flex justify-center md:justify-start md:w-[624px] mx-auto'>
        <div className='flex flex-col md:flex-row md:w-[527px] md:justify-between items-center justify-center mb-8 md:mb-0  w-[279px]  3xl:w-[1092px]'>
          <div>
            <h3 className='md:text-left text-gradient text-3xl md:text-2xl 3xl:text-8xl font-bold uppercase relative text-center mb-5 3xl:mb-8'>
              Unity для бізнесу
            </h3>
            <p className='mb-8 text-center md:text-left text-lg md:text-base 3xl:text-2xl text-[#D9D9D9]'>
              Індивідуальний підхід до офлайн та онлайн бізнесів{' '}
            </p>
          </div>
          <div className=''>
            <BtnBigPurple className='w-[139px] h-[139px] turquoiseBg '>
              <IconVolume />
              інструкції
            </BtnBigPurple>
          </div>
        </div>
      </div>
      <div className=' w-full target-cardsBg4 md:pb-[100px]'>
        <div className='cardsBg4 md:bg-none flex flex-col md:flex-row md:flex-wrap md:w-[624px] md:items-start md:mx-auto items-center md:gap-4 md:pt-16 gap-8 '>
          {/*  */}
          <div className='relative w-[280px] md:w-[304px] rounded-[20px] bg-cardBgGray'>
            <div className='absolute top-0 left-0 p-5 text-white font-medium text-base 3xl:font-bold 3xl:text-2xl'>
              Допоможу в просуванні продуктів та послуг
            </div>
            <img
              src='/100.jpeg'
              alt='Image'
              width={100}
              height={100}
              className='w-full h-[280px]'
            />
            <div className='flex flex-col items-center'>
              <BtnDropDown
                className={`mt-[14px] transition-all duration-500 ease-in-out ${
                  isState9 ? 'mb-[14px] rotate-180' : ''
                }`}
                onClick={() => setState9(!isState9)}
              />
              <p
                className={`mx-5 mb-[11px] text-base ${
                  isState9 ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'
                } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden`}
              >
                Максимізуйте свою маркетингову стратегію з нашою передовою
                ШІ-технологією, яка цілеспрямовано просуває ваші продукти та
                послуги, досягаючи цільової аудиторії. Наші інноваційні рішення
                забезпечують підвищення показників та зростання продажів,
                використовуючи даними, зібраними та аналізованими для
                оптимального клієнтського залучення.
              </p>
            </div>
          </div>
          {/*  */}
          <div className='relative w-[280px] md:w-[304px] rounded-[20px] bg-cardBgGray'>
            <div className='absolute top-0 left-0 p-5 text-white font-medium text-base 3xl:font-bold 3xl:text-2xl'>
              Надам поради по розбудові сильної команди
            </div>
            <img
              src='/10.png'
              alt='Image'
              width={100}
              height={100}
              className='w-full h-[280px]'
            />
            <div className='flex flex-col items-center'>
              <BtnDropDown
                className={`mt-[14px] transition-all duration-500 ease-in-out ${
                  isState10 ? 'mb-[14px] rotate-180' : ''
                }`}
                onClick={() => setState10(!isState10)}
              />
              <p
                className={`mx-5 mb-[11px] text-base ${
                  isState10 ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'
                } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden`}
              >
                Підвищте ефективність вашого бізнесу з нашими ШІ-керованими
                стратегіями для оптимізації менеджменту та робочих процесів. Ми
                пропонуємо експертні рекомендації, засновані на глибокому
                аналізі даних, для створення гнучких, інноваційних робочих
                стратегій.
              </p>
            </div>
          </div>
          {/*  */}
          <div className='relative w-[280px] md:w-[304px] rounded-[20px] bg-cardBgGray'>
            <div className='absolute top-0 left-0 p-5 text-white font-medium text-base 3xl:font-bold 3xl:text-2xl'>
              Проконсультую щодо оптимізації робочих процесів
            </div>
            <img
              src='/12.png'
              alt='ef3f'
              width={100}
              height={100}
              className='w-full h-[280px]'
            />
            <div className='flex flex-col items-center'>
              <BtnDropDown
                className={`mt-[14px] transition-all duration-500 ease-in-out ${
                  isState11 ? 'mb-[14px] rotate-180' : ''
                }`}
                onClick={() => setState11(!isState11)}
              />
              <p
                className={`mx-5 mb-[11px] text-base ${
                  isState11 ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'
                } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden`}
              >
                Забезпечте успіх своїх проектів з нашою ШІ, яка ідентифікує
                потенційні ризики та розробляє стратегії для їх ефективної
                мінімізації. Наш підхід гарантує надійність та стійкість вашого
                проектного управління.
              </p>
            </div>
          </div>
          {/*  */}
          <div className='relative w-[280px] md:w-[304px] rounded-[20px] bg-cardBgGray'>
            <div className='absolute top-0 left-0 p-5 text-white font-medium text-base 3xl:font-bold 3xl:text-2xl'>
              Стану вашим асистентом з підтримки клієнтів
            </div>
            <img
              src='/13.png'
              alt='ef3f'
              width={100}
              height={100}
              className='w-full h-[280px]'
            />
            <div className='flex flex-col items-center'>
              <BtnDropDown
                className={`mt-[14px] transition-all duration-500 ease-in-out ${
                  isState12 ? 'mb-[14px] rotate-180' : ''
                }`}
                onClick={() => setState12(!isState12)}
              />
              <p
                className={`mx-5 mb-[11px] text-base ${
                  isState12 ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'
                } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden`}
              >
                Перетворіть клієнтський досвід з нашим ШІ-рішенням, що
                забезпечує висококласне обслуговування клієнтів та детальну
                інформацію про ваші товари та послуги. Наші інтелектуальні
                алгоритми спілкування з клієнтами підвищують задоволеність та
                лояльність, надаючи точну, своєчасну та персоналізовану
                підтримку.
              </p>
            </div>
          </div>
          {/*  */}
          <div className='w-full flex justify-center items-center md:justify-start md:w-[624px] md:mx-auto  3xl:hidden mt-8 '>
            <BtnTryIt className='px-8 py-2'>спробувати</BtnTryIt>
          </div>
        </div>
      </div>
      {/* end 3 section */}

      {/* 4 section */}

      <div className='relative'>
        <div className='md:hidden 3xl:w-[729px] 3xl:h-[672px] 3xl:left-[-200px] 3xl:top-[500px] absolute top-[-50px] md:top-[50px] left-[50%] md:left-[-300px] md:w-[768px] md:h-[602px] md:translate-x-[0] translate-x-[-50%] flex items-center justify-center w-full'>
          <Icon2AI className='' />
        </div>
      </div>
      <div className='w-full flex justify-center items-center md:justify-start  md:mt-0 mb-5 mt-[360px] md:w-[624px] mx-auto'>
        <BtnTryIt className='w-[215px] text-xs py-1'>
          спеціальна пропозиція{' '}
        </BtnTryIt>
      </div>
      <div className=' w-full target-cardsBg2'>
        <div className='w-full flex justify-center md:justify-start cardsBg2 md:bg-none md:w-[624px] mx-auto'>
          <div className='flex flex-col md:flex-row md:w-[527px] md:justify-between items-center justify-center mb-8 md:mb-0  w-[279px]  3xl:w-[1092px]'>
            <div>
              <h3 className='md:text-left text-gradient2 text-3xl md:text-2xl 3xl:text-8xl font-bold uppercase relative text-center mb-5 3xl:mb-8'>
                Unity для бізнесу
              </h3>
              <p className='mb-8 text-center md:text-left text-lg md:text-base 3xl:text-2xl text-[#D9D9D9]'>
                Індивідуальний підхід до офлайн та онлайн бізнесів{' '}
              </p>
            </div>
            <div className=''>
              <BtnBigPurple className='w-[139px] h-[139px] turquoiseBg '>
                <IconVolume />
                інструкції
              </BtnBigPurple>
            </div>
          </div>
        </div>
      </div>
      <div className=' w-full target-cardsBg3 md:pb-[100px]'>
        <div className='flex flex-col md:flex-row md:flex-wrap md:w-[624px] md:items-start md:mx-auto items-center md:gap-4 md:pt-16 gap-8 pb-[100px] cardsBg3 md:bg-none'>
          {/*  */}
          <div className='relative w-[280px] md:w-[304px] rounded-[20px] bg-cardBgGray'>
            <div className='absolute top-0 left-0 p-5 text-white font-medium text-base 3xl:font-bold 3xl:text-2xl'>
              З’ясую для вас юридичні питання
            </div>
            <img
              src='/17.png'
              alt='Image'
              width={100}
              height={100}
              className='w-full h-[280px]'
            />
            <div className='flex flex-col items-center'>
              <BtnDropDown
                className={`mt-[14px] transition-all duration-500 ease-in-out ${
                  isState13 ? 'mb-[14px] rotate-180' : ''
                }`}
                onClick={() => setState13(!isState13)}
              />
              <p
                className={`mx-5 mb-[11px] text-base ${
                  isState13 ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'
                } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden`}
              >
                Спростіть складність юридичного світу з нашим ШІ-допоміжником,
                який надає зрозумілі, точні відповіді на ваші юридичні питання.
                Завдяки глибокому аналізу та доступу до обширних юридичних баз
                даних, ми забезпечуємо вас найактуальнішою інформацією для вашої
                ситуації.
              </p>
            </div>
          </div>
          {/*  */}
          <div className='relative w-[280px] md:w-[304px] rounded-[20px] bg-cardBgGray'>
            <div className='absolute top-0 left-0 p-5 text-white font-medium text-base 3xl:font-bold 3xl:text-2xl'>
              Міграційні питання
            </div>
            <img
              src='/18.png'
              alt='Image'
              width={100}
              height={100}
              className='w-full h-[280px]'
            />
            <div className='flex flex-col items-center'>
              <BtnDropDown
                className={`mt-[14px] transition-all duration-500 ease-in-out ${
                  isState14 ? 'mb-[14px] rotate-180' : ''
                }`}
                onClick={() => setState14(!isState14)}
              />
              <p
                className={`mx-5 mb-[11px] text-base ${
                  isState14 ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'
                } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden`}
              >
                Ви на крок попереду з нашим ШІ-асистентом, який допомагає
                вирішувати всі аспекти міграційних питань. Від візових вимог до
                правових процедур адаптації, ми пропонуємо цілісну підтримку,
                щоб зробити процес міграції простим та прозорим.
              </p>
            </div>
          </div>
          {/*  */}
          <div className='relative w-[280px] md:w-[304px] rounded-[20px] bg-cardBgGray'>
            <div className='absolute top-0 left-0 p-5 text-white font-medium text-base 3xl:font-bold 3xl:text-2xl'>
              Правила безпеки для переміщених осіб
            </div>
            <img
              src='/19.png'
              alt='ef3f'
              width={100}
              height={100}
              className='w-full h-[280px]'
            />
            <div className='flex flex-col items-center'>
              <BtnDropDown
                className={`mt-[14px] transition-all duration-500 ease-in-out ${
                  isState15 ? 'mb-[14px] rotate-180' : ''
                }`}
                onClick={() => setState15(!isState15)}
              />
              <p
                className={`mx-5 mb-[11px] text-base ${
                  isState15 ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'
                } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden`}
              >
                Наша ШІ активно вивчає правила безпеки для переміщених осіб,
                надаючи життєво важливі настанови та поради, щоб підвищити вашу
                безпеку під час подорожей або переселення. Ви отримаєте доступ
                до найновіших міжнародних стандартів та рекомендацій, які
                допоможуть забезпечити мир і безпеку.
              </p>
            </div>
          </div>
          {/*  */}
          <div className='relative w-[280px] md:w-[304px] rounded-[20px] bg-cardBgGray'>
            <div className='absolute top-0 left-0 p-5 text-white font-medium text-base 3xl:font-bold 3xl:text-2xl'>
              Допоможу вирішити повсякденну задачу
            </div>
            <img
              src='/20.png'
              alt='ef3f'
              width={100}
              height={100}
              className='w-full h-[280px]'
            />
            <div className='flex flex-col items-center'>
              <BtnDropDown
                className={`mt-[14px] transition-all duration-500 ease-in-out ${
                  isState16 ? 'mb-[14px] rotate-180' : ''
                }`}
                onClick={() => setState16(!isState16)}
              />
              <p
                className={`mx-5 mb-[11px] text-base ${
                  isState16 ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'
                } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden`}
              >
                Забудьте про невирішені задачі з нашою ШІ-технологією, яка
                пропонує інтуїтивні рішення для вашого щоденного списку справ.
                Наші адаптивні алгоритми працюють, щоб оптимізувати ваш час та
                ефективність, надаючи вам спокій та організацію в кожному дні
              </p>
            </div>
          </div>
          {/*  */}
          <div className='w-full flex justify-center items-center md:justify-start md:w-[624px] md:mx-auto  3xl:hidden mt-8 '>
            <BtnTryIt className='px-8 py-2'>спробувати</BtnTryIt>
          </div>
        </div>
      </div>
      {/* end 4 section */}

      {/* 5 section */}
      <div className='w-full flex justify-center md:justify-start md:w-[624px] mx-auto'>
        <div className='flex flex-col md:flex-row md:w-[527px] md:justify-between items-center justify-center mb-8 md:mb-0  w-[279px]  3xl:w-[1092px]'>
          <div>
            <h3 className='md:text-left text-gradient text-3xl md:text-2xl 3xl:text-8xl font-bold uppercase relative text-center mb-5 3xl:mb-8'>
              Unity для бізнесу
            </h3>
            <p className='mb-8 text-center md:text-left text-lg md:text-base 3xl:text-2xl text-[#D9D9D9]'>
              Індивідуальний підхід до офлайн та онлайн бізнесів{' '}
            </p>
          </div>
          <div className=''>
            <BtnBigPurple className='w-[139px] h-[139px] turquoiseBg '>
              <IconVolume />
              інструкції
            </BtnBigPurple>
          </div>
        </div>
      </div>
      <div className=' w-full target-cardsBg5 pb-[100px]'>
        <div className='cardsBg5 md:bg-none flex flex-col md:flex-row md:flex-wrap md:w-[624px] md:items-start md:mx-auto items-center md:gap-4 md:pt-16 gap-8 '>
          {/*  */}
          <div className='relative w-[280px] md:w-[304px] rounded-[20px] bg-cardBgGray'>
            <div className='absolute top-0 left-0 p-5 text-white font-medium text-base 3xl:font-bold 3xl:text-2xl'>
              Перекладаю з 40+ мов світу, текстом та голосом
            </div>
            <img
              src='/21.png'
              alt='Image'
              width={100}
              height={100}
              className='w-full h-[280px]'
            />
            <div className='flex flex-col items-center'>
              <BtnDropDown
                className={`mt-[14px] transition-all duration-500 ease-in-out ${
                  isState17 ? 'mb-[14px] rotate-180' : ''
                }`}
                onClick={() => setState17(!isState17)}
              />
              <p
                className={`mx-5 mb-[11px] text-base ${
                  isState17 ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'
                } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden`}
              >
                Перемагайте мовні барєри з нашим передовим ШІ, який підтримує
                текст та голосові переклади з понад 40 мов світу. Наша
                технологія забезпечує миттєві, точні та природні переклади, що
                дозволяє вам легко спілкуватися та співпрацювати на глобальному
                рівні.
              </p>
            </div>
          </div>
          {/*  */}
          <div className='relative w-[280px] md:w-[304px] rounded-[20px] bg-cardBgGray'>
            <div className='absolute top-0 left-0 p-5 text-white font-medium text-base 3xl:font-bold 3xl:text-2xl'>
              Вивчатимемо необхідну мову разом за індивівуальною системою
            </div>
            <img
              src='/15.png'
              alt='Image'
              width={100}
              height={100}
              className='w-full h-[280px]'
            />
            <div className='flex flex-col items-center'>
              <BtnDropDown
                className={`mt-[14px] transition-all duration-500 ease-in-out ${
                  isState18 ? 'mb-[14px] rotate-180' : ''
                }`}
                onClick={() => setState18(!isState18)}
              />
              <p
                className={`mx-5 mb-[11px] text-base ${
                  isState18 ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'
                } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden`}
              >
                Спростіть процес роботи з іноземними документами завдяки нашому
                ШІ-асистенту, що надає розширені інструменти для читання та
                аналізу. Ми допомагаємо вам швидко визначати ключову інформацію,
                перекладати складні розділи та забезпечувати точне розуміння
                важливих документів.
              </p>
            </div>
          </div>
          {/*  */}
          <div className='relative w-[280px] md:w-[304px] rounded-[20px] bg-cardBgGray'>
            <div className='absolute top-0 left-0 p-5 text-white font-medium text-base 3xl:font-bold 3xl:text-2xl'>
              Дізнавайтеся значення ідіом, скорочень та сленгу та використовуйте
              їх у щоденному спілкуванні
            </div>
            <img
              src='/14.png'
              alt='ef3f'
              width={100}
              height={100}
              className='w-full h-[280px]'
            />
            <div className='flex flex-col items-center'>
              <BtnDropDown
                className={`mt-[14px] transition-all duration-500 ease-in-out ${
                  isState19 ? 'mb-[14px] rotate-180' : ''
                }`}
                onClick={() => setState19(!isState19)}
              />
              <p
                className={`mx-5 mb-[11px] text-base ${
                  isState19 ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'
                } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden`}
              >
                Обробляйте будь-яку форму писемного спілкування з легкістю,
                використовуючи наш ШІ-інструмент, який декодує значення ідіом,
                скорочень та сленгу. З нашою підтримкою, ви зможете точно
                розуміти та відповідати на повідомлення, зберігаючи контекст та
                нюанси оригінального тексту.
              </p>
            </div>
          </div>
          {/*  */}
          <div className='relative w-[280px] md:w-[304px] rounded-[20px] bg-cardBgGray'>
            <div className='absolute top-0 left-0 p-5 text-white font-medium text-base 3xl:font-bold 3xl:text-2xl'>
              Зі мною читання та аналіз документації іншими мовами стане ще
              легшим
            </div>
            <img
              src='/16.png'
              alt='ef3f'
              width={100}
              height={100}
              className='w-full h-[280px]'
            />
            <div className='flex flex-col items-center'>
              <BtnDropDown
                className={`mt-[14px] transition-all duration-500 ease-in-out ${
                  isState20 ? 'mb-[14px] rotate-180' : ''
                }`}
                onClick={() => setState20(!isState20)}
              />
              <p
                className={`mx-5 mb-[11px] text-base ${
                  isState20 ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'
                } transition-opacity duration-500 transition-max-h ease-in-out overflow-hidden`}
              >
                Обробляйте будь-яку форму писемного спілкування з легкістю,
                використовуючи наш ШІ-інструмент, який декодує значення ідіом,
                скорочень та сленгу. З нашою підтримкою, ви зможете точно
                розуміти та відповідати на повідомлення, зберігаючи контекст та
                нюанси оригінального тексту
              </p>
            </div>
          </div>
          {/*  */}
          <div className='w-full flex justify-center items-center md:justify-start md:w-[624px] md:mx-auto  3xl:hidden mt-8 '>
            <BtnTryIt className='px-8 py-2'>спробувати</BtnTryIt>
          </div>
        </div>
      </div>
      {/* end 5 section */}
    </section>
  )
}
