// 'use client'
import { Cards } from '@/components/Cards'
import { ComeIn } from '@/components/ComeIn'
import { Form } from '@/components/Form'
import { Hello } from '@/components/Hello'
import { fetchHomePage } from '@/helpers/fetch'

export default async function Home() {
  const homePage = await fetchHomePage()
  console.log(homePage.data)

  if (homePage.data[0].length === 0) return null

  return (
    <section className='font-sans'>
      <Hello data={homePage.data[0].attributes.Hello} />
      <Cards className='mt-16 md:mt-[117px] lg:mt-[243px]' />
      <Form />
      <ComeIn />
    </section>
  )
}

