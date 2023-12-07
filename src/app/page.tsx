'use client'
import { Cards } from '@/components/Cards'
import { ComeIn } from '@/components/ComeIn'
import { Form } from '@/components/Form'
import { Hello } from '@/components/Hello'
import { usePathnameWithoutSlash } from '@/helpers/path'
import { usePathname } from 'next/navigation'

export default function Home() {
  const pathname = usePathname()
  return (
    <>
      <Hello page={usePathnameWithoutSlash(pathname)} />
      <Cards className='mt-16' />
      <Form />
      <ComeIn />
    </>
  )
}
