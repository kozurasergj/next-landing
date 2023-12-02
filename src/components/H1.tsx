import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function H1() {
  const t = useTranslations('Index')

  return (
    <div>
      <div>
        <Link href='/en' locale='en'>
          In english
        </Link>{' '}
        |{' '}
        <Link href='/fi' locale='fi'>
          In Finnish
        </Link>
        <br />
        <br />
      </div>
      <div>
        <p>{t('title')}</p>
      </div>
      <div></div>
    </div>
  )
}
