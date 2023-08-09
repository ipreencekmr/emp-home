import {
    RESET_FILTERS,
    SET_DEPARTMENT, 
    SET_QUALIFICATION, 
    SET_SEARCH_TEXT 
} from "../action/action"

export const defaultState = {
    departmentId: -1,
    qualificationId: -1,
    searchText: ""
};

export const appReducer = (state = defaultState, action) => {
    switch(action.type) {
        case SET_DEPARTMENT:
            return {
                ...state,
                departmentId: action.payload
            };
        case SET_QUALIFICATION:
            return {
                ...state,
                qualificationId: action.payload
            }
        case SET_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.payload
            }
        case RESET_FILTERS:
            return {
                ...defaultState
            }
        default:
            return {
                ...state
            }
    }
};