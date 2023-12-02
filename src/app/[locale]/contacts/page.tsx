export async function getStaticPaths() {
  const locales = ['en', 'fi']
  const paths = locales.map((locale) => ({
    params: {
      locale,
    },
  }))

  return {
    paths,
    fallback: false, // или 'blocking' в зависимости от ваших требований
  }
}

export default function Contacts() {
  return (
    <div>
      <h2>Contacts</h2>
    </div>
  )
}
