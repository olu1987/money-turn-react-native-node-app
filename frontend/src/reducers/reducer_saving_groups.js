import actions from '../actions/index';
import actionTypes from '../action-types'

export default function(state = [], action){
    switch(action.type){
        case actionTypes.FETCH_ALL_SAVING_GROUPS:
            return [action.payload.data, ...state];
    }
    return state;
}