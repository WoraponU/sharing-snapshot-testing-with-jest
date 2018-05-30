import { sub } from './sub'
import { sum } from './sum'

export const calculate = (a, b, c) => {
  const responseSum = sum(a, b)
  return sub(responseSum, c)
}

