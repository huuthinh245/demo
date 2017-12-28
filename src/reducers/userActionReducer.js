import {FETCH_USER,FETCH_SUCCESS,FETCH_ERROR} from '../types'
import { createActions, handleActions } from 'redux-actions'

const initialState = { data: '', error: '', fetching: false, arr: [] }

const {getUser,getUserSuccess,getUserFail}=createActions({
    FETCH_USER: payload,
    FETCH_SUCCESS:'',
    FETCH_ERROR
})