import * as ActionTypes from '../types'
import { createAction, handleActions } from 'redux-actions'


const initialState = { data: '', error: '', fetching: false, arr: [] }