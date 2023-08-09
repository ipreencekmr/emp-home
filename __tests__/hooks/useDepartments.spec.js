import React from "react";
import { useDepartments } from "../../src/hooks/useDepartments";
import axios from "axios";

jest.mock("axios");

describe("useDepartments", () => {

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

        const mockDepartments = [
            {
                id: 1,
                value: "mock Department 1"
            },
            {
                id: 2,
                value: "mock Department 1"
            }
        ];

        useStateSpy.mockImplementationOnce(jest.fn(()=>[mockDepartments, setData]));
        useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setError]));
        useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setIsLoading]));

        axios.create = jest.fn(function () {
            return {
                get: jest.fn(() => Promise.resolve({
                    status: 200,
                    data: mockDepartments
                }))
            }
        });

        const { data, } = useDepartments();

        expect(data).toEqual(expect.arrayContaining([
            expect.objectContaining({
                id: 1,
                value: "mock Department 1"
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

        const { error } = useDepartments();
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

        const { error } = useDepartments();
        expect(error.message).toEqual("Something went wrong!");
    });
});