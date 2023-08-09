import { appReducer, defaultState } from "../../src/reducer/appReducer";

import {
    departmentFilterAction,
    qualificationFilterAction,
    searchTextFilterAction,
    resetFilterAction
} from "../../src/action/action";

describe("formReducer", () => {
    it("should work for department filter action", ()=>{
        const action = departmentFilterAction(2);
        const state = appReducer(defaultState, action);
        expect(state.departmentId).toEqual(2);
    });

    it("should work for qualification filter action", ()=>{
        const action = qualificationFilterAction(3);
        const state = appReducer(defaultState, action);
        expect(state.qualificationId).toEqual(3);
    });

    it("should work for search text action", ()=>{
        const action = searchTextFilterAction("mockValue");
        const state = appReducer(defaultState, action);
        expect(state.searchText).toEqual("mockValue");
    });

    it("should work for reset filter action", ()=>{
        const action = resetFilterAction();
        const state = appReducer(defaultState, action);
        expect(state.departmentId).toEqual(-1);
        expect(state.qualificationId).toEqual(-1);
        expect(state.searchText).toEqual("");
    });

    it("should have default state if no state passed", () => {
        const action = resetFilterAction();
        let undefinedState;
        const state = appReducer(undefinedState, action);
        expect(state.departmentId).toEqual(-1);
        expect(state.qualificationId).toEqual(-1);
        expect(state.searchText).toEqual("");
    });

    it("should return same state for invalid action", ()=>{
        const action = {
            type: "INVALID_ACTION"
        };
        const state = appReducer(defaultState, action);
        expect(state).toEqual(expect.objectContaining(defaultState));
    }); 
});