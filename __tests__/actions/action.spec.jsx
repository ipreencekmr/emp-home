import {
    SET_DEPARTMENT,
    SET_QUALIFICATION,
    SET_SEARCH_TEXT,
    RESET_FILTERS,
    departmentFilterAction,
    qualificationFilterAction,
    searchTextFilterAction,
    resetFilterAction
} from "../../src/action/action";

describe("action", ()=>{
    it("should return department action with type", ()=>{
        const action = departmentFilterAction(1);
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: SET_DEPARTMENT,
            payload: 1
        }));
    });

    it("should return qualification action with type", ()=>{
        const action = qualificationFilterAction(1);
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: SET_QUALIFICATION,
            payload: 1
        }));
    });

    it("should return search text action with type", ()=>{
        const action = searchTextFilterAction("mockValue");
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: SET_SEARCH_TEXT,
            payload: "mockValue"
        }));
    });

    it("should return clear filter action with type", ()=>{
        const action = resetFilterAction();
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: RESET_FILTERS,
        }));
    });

})