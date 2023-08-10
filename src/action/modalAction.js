export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const BUTTON_CLICKED = "BUTTON_CLICKED";
export const SET_CANCEL_BUTTON_TEXT = "SET_CANCEL_BUTTON_TEXT";
export const SET_CONFIRM_BUTTON_TEXT = "SET_CONFIRM_BUTTON_TEXT";
export const SET_MODAL_TITLE = "SET_MODAL_TITLE";
export const SET_MODAL_CONTENT = "SET_MODAL_CONTENT";
export const RESET_MODAL = "RESET_MODAL";
export const SET_MODAL_TAG = "SET_MODAL_TAG";

export const toggleModalAction = (show, tag=-1) => {
    return {
        type: TOGGLE_MODAL,
        payload: show,
        tag: tag
    }
};

export const buttonClickedAction = (index) => {
    return {
        type: BUTTON_CLICKED,
        payload: index
    }
};

export const setCancelButtonTextAction = (value) => {
    return {
        type: SET_CANCEL_BUTTON_TEXT,
        payload: value
    }
};

export const setConfirmButtonTextAction = (value) => {
    return {
        type: SET_CONFIRM_BUTTON_TEXT,
        payload: value
    }
};

export const setModalTitleAction = (value) => {
    return {
        type: SET_MODAL_TITLE,
        payload: value
    }
};

export const setModalContentAction = (value) => {
    return {
        type: SET_MODAL_CONTENT,
        payload: value
    }
};

export const resetModalAction = () => {
    return {
        type: RESET_MODAL
    }
};

export const setModalTagAction = (tagIndex) => {
    return {
        type: SET_MODAL_TAG,
        payload: tagIndex
    }
};