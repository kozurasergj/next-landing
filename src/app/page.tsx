import { Cards } from '@/components/Cards'
import { ComeIn } from '@/components/ComeIn'
import { Form } from '@/components/Form'
import { Hello } from '@/components/Hello'

export default function Home() {
  return (
    <>
      <Hello/>
      <Cards className='mt-16' />
      <Form />
      <ComeIn />
    </>
  )
}
