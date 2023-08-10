import {
    TOGGLE_MODAL, BUTTON_CLICKED, SET_MODAL_TAG,
    SET_CANCEL_BUTTON_TEXT, SET_CONFIRM_BUTTON_TEXT, 
    SET_MODAL_TITLE, SET_MODAL_CONTENT, RESET_MODAL,
} from "../action/modalAction"

export const defaultState = {
    show: false,
    buttonIndex: -1,
    tagIndex: -1,
    cancelButtonText: "No",
    confirmButtonText: "Yes",
    modalTitle: "Confirmation",
    modalContent: "Are you sure, you want to delete an Employee Record ?\n Press Yes to confirm."
};

export const modalReducer = (state = defaultState, action) => {
    switch(action.type) {
        case TOGGLE_MODAL:{
            const copyState = {
                ...state
            };
            copyState.show = action.payload;
            if(action.payload) {
                copyState.buttonIndex = -1;
                copyState.tagIndex = action.tag;
            }
            return copyState;
        }
        case BUTTON_CLICKED:
            return {
                ...state,
                buttonIndex: action.payload
            }
        case SET_CANCEL_BUTTON_TEXT:
            return {
                ...state,
                cancelButtonText: action.payload
            }
        case SET_CONFIRM_BUTTON_TEXT:
            return {
                ...state,
                confirmButtonText: action.payload
            }
        case SET_MODAL_TITLE:
            return {
                ...state,
                modalTitle: action.payload
            }
        case SET_MODAL_CONTENT:
            return {
                ...state,
                modalContent: action.payload
            }
        case SET_MODAL_TAG:{
            return {
                ...state,
                tagIndex: action.payload
            }
        }
        case RESET_MODAL:
            return {
                ...defaultState
            }
        default:
            return {
                ...state
            }
    }
};