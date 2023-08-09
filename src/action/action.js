export const SET_DEPARTMENT = "SET_DEPARTMENT";
export const SET_QUALIFICATION = "SET_QUALIFICATION";
export const SET_SEARCH_TEXT = "SET_SEARCH_TEXT";
export const RESET_FILTERS = "RESET_FILTERS";

export const departmentFilterAction = (departmentId) => {
    return {
        type: SET_DEPARTMENT,
        payload: departmentId
    };
};

export const qualificationFilterAction = (qualificationId) => {
    return {
        type: SET_QUALIFICATION,
        payload: qualificationId
    };
};

export const searchTextFilterAction = (searchText) => {
    return {
        type: SET_SEARCH_TEXT,
        payload: searchText
    };
};

export const resetFilterAction = () => {
    return {
        type: RESET_FILTERS
    };
};


