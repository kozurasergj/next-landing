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

export default function Business() {
  return (
    <div>
      <h2>Business</h2>
    </div>
  )
}
