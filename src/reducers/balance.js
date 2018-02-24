import * as contants from '../actions/constants'

const balance = (state = 0, action) => {
  switch (action.type) {
    case contants.SET_BALANCE:
      return action.balance
    default:
      return balance
  }
}

export default balance
