import { nasaAPI } from "../api/api";

const SET_SEARCH_RESULT = "gallery/reducer/SET_SEARCH_RESULT";

let initialState = {
    searchResult: {},
};

const app = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_RESULT:
            return { ...state, searchResult: action.payload };
        default:
            return state;
    }
};

let setSearchResult = (payload) => ({ type: SET_SEARCH_RESULT, payload });

export const getSearchRequest = (keyword) => {
    return (dispatch) => {
        nasaAPI.getSearchResult(keyword).then((data) => {
            dispatch(setSearchResult(data));
        });
    };
};

export default app;
