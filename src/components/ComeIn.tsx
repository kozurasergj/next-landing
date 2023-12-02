export const ComeIn =  ()=>{
return (
  <div className='flex flex-col items-center justify-center mb-8 md:mb-[122px] w-[279px] mx-auto md:w-[630px] 3xl:w-[1092px]'>
    <h3 className='md:text-left text-gradient text-3xl md:text-2xl 3xl:text-8xl font-bold uppercase relative text-center mb-5 3xl:mb-8'>
      ПРИЄДНУЙСЯ ДО НАШОГО КОМ’ЮНІТІ
    </h3>
    <div className='bg-[#181818] rounded-[30px] border border-solid border-[#CECECE] pt-6 pb-4 px-2 mb-16 md:mb-0 w-[290px] md:w-[630px]'>
      <h3 className='text-base text-[#D9D9D9] uppercase font-bold text-center'>
        МАЙБУТНЄ ВЖЕ ТУТ Unity
      </h3>
      <h3 className='text-base text-[#D9D9D9] uppercase font-bold mb-5 text-center'>
        САМЕ ЗАРАЗ ЧАС ПОЧАТИ
      </h3>
      <div className='flex flex-col items-center'>
        <p className='text-lg font-medium text-center mb-3'>
          Посилання для близьких
        </p>
        <a
          href='https://t.me/Serezha33'
          className='text-[#9463FE] font-semibold text-lg px-5 py-2 mb-1'
        >
          Телеграм
        </a>
        <div className='flex justify-center items-center gap-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='5'
            height='7'
            viewBox='0 0 5 7'
            fill='none'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M1.39373 3.00771L1.82064 1.41444C1.99193 0.775201 2.64899 0.395846 3.28823 0.567131C3.92747 0.738416 4.30683 1.39548 4.13555 2.03472L3.87483 3.00771H4.39247L4.61851 2.16413C4.86126 1.25815 4.32362 0.326923 3.41764 0.084168C2.51167 -0.158587 1.58044 0.379057 1.33768 1.28503L0.87609 3.00771H1.39373ZM1.25792 3.51455H0.740284L0.382264 4.8507C0.139508 5.75667 0.677155 6.6879 1.58313 6.93066C2.48911 7.17341 3.42034 6.63577 3.66309 5.72979L4.25666 3.51455H3.73903L3.18013 5.60038C3.00884 6.23963 2.35178 6.61898 1.71254 6.4477C1.0733 6.27641 0.693942 5.61935 0.865227 4.98011L1.25792 3.51455Z'
              fill='white'
            />
            <rect
              x='2.67896'
              y='1.97168'
              width='0.444336'
              height='3.0627'
              rx='0.222168'
              transform='rotate(14.9469 2.67896 1.97168)'
              fill='white'
            />
          </svg>
          <span className='text-[10px]'>Скопіювати посилання</span>
        </div>
      </div>
    </div>
  </div>
)
}