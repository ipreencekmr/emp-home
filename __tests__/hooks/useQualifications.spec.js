import React from "react";
import { useQualifications } from "../../src/hooks/useQualifications";
import axios from "axios";

jest.mock("axios");

describe("useQualifications", () => {

    let useStateSpy;
    let useCallbackSpy;
    let useEffectSpy;

    const setData = jest.fn();      
    const setError = jest.fn();
    const setIsLoading = jest.fn();
        
    beforeEach(()=>{
        useStateSpy = jest.spyOn(React, "useState");
        useCallbackSpy = jest.spyOn(React, "useCallback");
        useEffectSpy = jest.spyOn(React, "useEffect");

        useCallbackSpy.mockImplementationOnce(jest.fn((f) => f));
        useEffectSpy.mockImplementationOnce(jest.fn((f) => f()));
    });

    it("should return expected value on success status", () => {

        const mockQualifications = [
            {
                id: 1,
                value: "mock Qualification 1"
            },
            {
                id: 2,
                value: "mock Qualification 2"
            }
        ];

        useStateSpy.mockImplementationOnce(jest.fn(()=>[mockQualifications, setData]));
        useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setError]));
        useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setIsLoading]));

        axios.create = jest.fn(function () {
            return {
                get: jest.fn(() => Promise.resolve({
                    status: 200,
                    data: mockQualifications
                }))
            }
        });

        const { data, } = useQualifications();

        expect(data).toEqual(expect.arrayContaining([
            expect.objectContaining({
                id: 1,
                value: "mock Qualification 1"
            })
        ]));
    });

    it("should return expected value on failure status", () => {

        useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setData]));
        useStateSpy.mockImplementationOnce(jest.fn(()=>[new Error("Something went wrong!"), 
            setError]));
        useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setIsLoading]));
        
        axios.create = jest.fn(function () {
            return {
                get: jest.fn(() => Promise.resolve({
                    status: 404,
                    data: null
                }))
            }
        });

        const { error } = useQualifications();
        expect(error.message).toEqual("Something went wrong!");
    });

    it("should return expected value on call rejection", () => {

        useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setData]));
        useStateSpy.mockImplementationOnce(jest.fn(()=>[new Error("Something went wrong!"), 
            setError]));
        useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setIsLoading]));

        axios.create = jest.fn(function () {
            return {
                get: jest.fn(() => Promise.reject({
                    error: new Error("Something went wrong"),
                }))
            }
        });

        const { error } = useQualifications();
        expect(error.message).toEqual("Something went wrong!");
    });
});