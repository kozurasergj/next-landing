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

export default function Users() {
  return (
    <div>
      <h2>Users</h2>
    </div>
  )
}
