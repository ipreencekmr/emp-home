import { modalReducer, defaultState } from "../../src/reducer/modalReducer";

import {
    toggleModalAction,
    buttonClickedAction,
    setCancelButtonTextAction,
    setConfirmButtonTextAction,
    setModalTitleAction,
    setModalContentAction,
    resetModalAction,
    setModalTagAction
} from "../../src/action/modalAction";

describe("formReducer", () => {
    it("should work for show modal action", ()=>{
        const action = toggleModalAction(true);
        const state = modalReducer(defaultState, action);
        expect(state.show).toEqual(true);
    });

    it("should work for hide modal action", ()=>{
        const action = toggleModalAction(false);
        const state = modalReducer(defaultState, action);
        expect(state.show).toEqual(false);
    });

    it("should work for action button click", ()=>{
        const action = buttonClickedAction(3);
        const state = modalReducer(defaultState, action);
        expect(state.buttonIndex).toEqual(3);
    });

    it("should work for setCancelButtonTextAction action", ()=>{
        const action = setCancelButtonTextAction("mockValue");
        const state = modalReducer(defaultState, action);
        expect(state.cancelButtonText).toEqual("mockValue");
    });

    it("should work for setConfirmButtonTextAction action", ()=>{
        const action = setConfirmButtonTextAction("mockValue");
        const state = modalReducer(defaultState, action);
        expect(state.confirmButtonText).toEqual("mockValue");
    });

    it("should work for setModalTitleAction action", ()=>{
        const action = setModalTitleAction("mockValue");
        const state = modalReducer(defaultState, action);
        expect(state.modalTitle).toEqual("mockValue");
    });

    it("should work for setModalContentAction action", ()=>{
        const action = setModalContentAction("mockValue");
        const state = modalReducer(defaultState, action);
        expect(state.modalContent).toEqual("mockValue");
    });

    it("should work for setModalTagAction action", ()=>{
        const action = setModalTagAction(5);
        const state = modalReducer(defaultState, action);
        expect(state.tagIndex).toEqual(5);
    });

    it("should work for reset modal action", ()=>{
        const action = resetModalAction();
        const state = modalReducer(defaultState, action);
        expect(state.show).toEqual(false);
        expect(state.buttonIndex).toEqual(-1);
        expect(state.tagIndex).toEqual(-1);
        expect(state.cancelButtonText).toEqual("No");
        expect(state.confirmButtonText).toEqual("Yes");
    });

    it("should return same state for invalid action", ()=>{
        const action = {
            type: "INVALID_ACTION"
        };
        const state = modalReducer(defaultState, action);
        expect(state).toEqual(expect.objectContaining(defaultState));
    }); 
});