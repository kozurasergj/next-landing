'use client'
import { ComeIn } from '@/components/ComeIn'
import { Form } from '@/components/Form'
import { Hello } from '@/components/Hello'
import { usePathnameWithoutSlash } from '@/helpers/path'
import { CardsUA } from '@/sections/CardsUA'
import { usePathname } from 'next/navigation'

export default function Ukrainians() {
  const pathname = usePathname()

  return (
    <section>
      <Hello page={usePathnameWithoutSlash(pathname)} />
      <CardsUA className='mt-[164px]' />
      <Form />
      <ComeIn />
    </section>
  )
}
