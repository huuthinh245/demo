import * as ActionTypes from '../types'


export default (state = { data: '', error: '', fetching: false, arr: [] }, action) => {
      switch (action.type) {
            case ActionTypes.FETCH_USER:
                  return { ...state, fetching: true, error: '' }
            case ActionTypes.FETCH_SUCCESS:
           
                  return { ...state, data: action.payload.data, fetching: false }
            case ActionTypes.FETCH_CANCEL:

                  return { ...state, data: '', error: '', fetching: false }
            case ActionTypes.FETCH_ERROR:
                  return { ...state, data: '', error: 'fail', fetching: false }
            case ActionTypes.ADD_SUCCESS:

                  return { ...state, arr: state.arr.concat(action.payload.data), data: '', error: '', fetching: false }
            case ActionTypes.DELETE_SUCCESS:
                  return {
                        ...state, 
                        arr: state.arr.filter(data => data.id !==action.id),
                        error:'',
                        fetching:false,
                        data:''
                  }
            case ActionTypes.FAILED_USER:
                  return state;
            default:
                  return state
      }
}