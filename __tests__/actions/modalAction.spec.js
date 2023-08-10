import {
    TOGGLE_MODAL,
    BUTTON_CLICKED,
    SET_CANCEL_BUTTON_TEXT,
    SET_CONFIRM_BUTTON_TEXT,
    SET_MODAL_TITLE,
    SET_MODAL_CONTENT,
    RESET_MODAL,
    SET_MODAL_TAG,
    toggleModalAction,
    buttonClickedAction,
    setCancelButtonTextAction,
    setConfirmButtonTextAction,
    setModalTitleAction,
    setModalContentAction,
    resetModalAction,
    setModalTagAction
} from "../../src/action/modalAction";

describe("action", ()=>{
    it("should return toggleModalAction with type", ()=>{
        const action = toggleModalAction(true);
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: TOGGLE_MODAL,
            payload: true
        }));
    });

    it("should return buttonClickedAction with type", ()=>{
        const action = buttonClickedAction(1);
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: BUTTON_CLICKED,
            payload: 1
        }));
    });

    it("should return setCancelButtonTextAction with type", ()=>{
        const action = setCancelButtonTextAction("mockValue");
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: SET_CANCEL_BUTTON_TEXT,
            payload: "mockValue"
        }));
    });

    it("should return setConfirmButtonTextAction with type", ()=>{
        const action = setConfirmButtonTextAction("mockValue");
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: SET_CONFIRM_BUTTON_TEXT,
            payload: "mockValue"
        }));
    });

    it("should return setModalTitleAction with type", ()=>{
        const action = setModalTitleAction("mockValue");
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: SET_MODAL_TITLE,
            payload: "mockValue"
        }));
    });

    it("should return setModalContentAction with type", ()=>{
        const action = setModalContentAction("mockValue");
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: SET_MODAL_CONTENT,
            payload: "mockValue"
        }));
    });

    it("should return setModalTagAction with type", ()=>{
        const action = setModalTagAction(1);
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: SET_MODAL_TAG,
            payload: 1
        }));
    });

    it("should return resetModalAction with type", ()=>{
        const action = resetModalAction();
        expect(typeof action).toBe("object");
        expect(action).toEqual(expect.objectContaining({
            type: RESET_MODAL,
        }));
    });

})