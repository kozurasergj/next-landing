export const getGradientClass = (page: string) => {
  if (page === 'main') {
    return 'text-gradient-main'
  } else if (page === 'ukrainians') {
    return 'text-gradient-ukrainians'
  }

  return 'text-gradient-main'
}

export const getTitleText = (page: string) => {
  if (page === '') {
    return `Привіт! <br/> я unity`
  } else if (page === 'ukrainians') {
    return `Юніті допоможе коли вам це необхідно`
  }  else if (page === 'business') {
    return `бізнес може зростати швидше`
  }
  else if (page === 'users') {
    return `Покращуйте ваше повсякденне життя з Unity!`
  }

  return `Вітаю! <br/> я unity Error`
}

