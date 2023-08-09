import { store } from "../../src/store/store";

describe("store", () => {
    it("should return expected store value", ()=>{
        expect(typeof store).toBe("object");
        expect(store).toEqual(
            expect.objectContaining({
                dispatch: expect.any(Function),
                getState: expect.any(Function),
                replaceReducer: expect.any(Function),
                subscribe: expect.any(Function)
            })
        );
    });
});