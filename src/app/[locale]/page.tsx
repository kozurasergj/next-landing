import { Cards } from '@/components/Cards'
import { ComeIn } from '@/components/ComeIn'
import { Form } from '@/components/Form'
import H1 from '@/components/H1'
import { Hello } from '@/components/Hello'

export default function Home() {
  return (
    <>
      <Hello>
        <H1></H1>
      </Hello>
      <Cards className='mt-16' />
      <Form />
      <ComeIn />
    </>
  )
}
