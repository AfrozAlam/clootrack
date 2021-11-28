import {FETCH_DATA} from '../actions/types'

const initialState = {
    apiData: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_DATA:
            return {
                ...state,
                apiData: action.payload
            }
        case 'CHANGE_DATA':
            return {
                ...state,
                apiData: action.payload
            }
        default:
            return state
    }
}