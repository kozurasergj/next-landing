'use client'
import { ComeIn } from '@/components/ComeIn'
import { Form } from '@/components/Form'
import { Hello } from '@/components/Hello'
import { usePathnameWithoutSlash } from '@/helpers/path'
import { CardsBusiness } from '@/sections/CardsBusiness'
import { CardsUsers } from '@/sections/CardsUsers'
import { usePathname } from 'next/navigation'

export default function Users() {
  const pathname = usePathname()
  return (
    <section>
      <Hello page={usePathnameWithoutSlash(pathname)} />
      <CardsUsers className='mt-[164px]' />
      <Form />
      <ComeIn />
    </section>
  )
}
