export default function Contacts() {
  return (
    <div className='md:w-[624px] lg:w-[90%] flex flex-col	justify-center sm:mt-[55px] md:mt-[85px] sm:ml-4 md:ml-20 sm:mb-[60px] md:mb-[100px] lg:mb-[190px]'>
      <div className='w-full'>
        <h2 className='text-left leading-20 text-white text-3xl md:text-7xl lg:text-9xl  md:font-extrabold lg:font-bold sm:mb-0 md:mb-[73px] lg:mb-0'>
          Contacts
        </h2>
      </div>
      <div className='sm:mt-0 lg:mt-32 sm:block lg:flex'>
        <div className='w-full flex flex-col sm:min-h-[300px] lg:max-h-[380px] lg:min-h-max sm:justify-around lg:space-evenly text-[19px] lg:text-2xl'>
          <div className='leading-5'>
            <p className='text-gray2 uppercase mb-3'>START A PROJECT</p>
            <p>info@uwp.digital</p>
          </div>
          <div className='leading-5 sm:max-w-[400px] lg:max-w-[512px]'>
            <p className='text-gray2  uppercase mb-3'>
              CALL US MONDAY TO FRIDAY: 10:00 – 18:00
            </p>
            <p className='uppercase'>+46 73 718 77 47</p>
          </div>
          <div className='leading-5	'>
            <p className='text-gray2 uppercase mb-3'>WE ARE HERE</p>
            <p>Onnekop, Per Bings vag 13B, 242 98Horby, Sweden</p>
          </div>
        </div>
        <div className='map'>
          <iframe
            className='sm:w-[290px] md:w-[624px] sm:h-[200px] md:h-[440px] lg:h-[565px]'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.3174739806905!2d13.868192590077449!3d55.78772501994236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46540b48629ac2ed%3A0x23e8d59f75097169!2zw5ZubmVrw7ZwIFBlciBCaW5ncyB2w6RnIDEzQiwgMjQyIDk4IEjDtnJieSwg0KjQstC10YbQuNGP!5e0!3m2!1sru!2spl!4v1701860611174!5m2!1sru!2spl'
          ></iframe>
        </div>
      </div>
    </div>
  )
}
