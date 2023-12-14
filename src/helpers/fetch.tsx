import { config } from '@/config'

export const fetchHomePage = async () => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  }
  const request = await fetch(
    `${config.api}/api/home-pages?populate=*`,
    reqOptions
  )
  const response = await request.json()
  return response
}
