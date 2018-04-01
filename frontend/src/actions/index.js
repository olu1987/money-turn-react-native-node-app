import axios from 'axios';
import actionTypes from '../action-types';

function fetchAllSavingGroups(){
    const url = `http://localhost:3000/api/saving-group`;
    const request = axios.get(url);

    return{
        type: actionTypes.FETCH_ALL_SAVING_GROUPS,
        payload: request
    }
}

export default {
    fetchAllSavingGroups
}