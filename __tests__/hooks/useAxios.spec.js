import { useAxios } from "../../src/hooks/useAxios";

describe("useAxios", () => {
    it("should return instance of axios", () => {
        const instance = useAxios();
        expect(typeof instance).toEqual("function");
    });
    
    it("should return promise object when called", () => {
        const instance = useAxios();
        expect(instance()).toBeInstanceOf(Promise);
    });
});