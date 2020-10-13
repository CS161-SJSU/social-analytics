import { AnyAction } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'
import { State } from './index'
import * as types from '../../constants/actions'

export default function userReducer(
  state: State = { loading: false, errors: null },
  action: AnyAction
) {
  switch (action.type) {
    // case HYDRATE:
    //   return { ...state, ...action.payload }
    case types.LOGIN_SUCCESS:
      return { ...state, ...action.payload, ...{ loading: false } }
    case types.LOGIN_FAILED:
      return { ...state, ...{ loading: false }, ...{ errors: action.payload } }
    default:
      return state
  }
}
// https://demos.creative-tim.com/nextjs-argon-dashboard/admin/dashboard