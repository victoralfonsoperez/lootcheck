import * as constants from './constants'

export const setBalance = balance => ({
  type: constants.SET_BALANCE,
  balance,
})
