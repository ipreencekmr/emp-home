import React from "react";
import { useDeleteEmployee } from "../../src/hooks/useDeleteEmployee";
import axios from "axios";

jest.mock("axios");

describe("useDeleteEmployee", () => {

    let useStateSpy;
    let useCallbackSpy;

    const setData = jest.fn();      
    const setError = jest.fn();
    const setIsLoading = jest.fn();
        
    beforeEach(()=>{
        useStateSpy = jest.spyOn(React, "useState");
        useCallbackSpy = jest.spyOn(React, "useCallback");
        useCallbackSpy.mockImplementationOnce(jest.fn((f) => f));
    });

    it("should return from function if no employee Id provided", () => {
        useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setData]));
        useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setError]));
        useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setIsLoading]));
        const { data, deleteEmployee } = useDeleteEmployee();
        deleteEmployee();
        expect(data).toEqual(null);
    });

    it("should return expected value on success status", () => {

        useStateSpy.mockImplementationOnce(jest.fn(()=>[true, setData]));
        useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setError]));
        useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setIsLoading]));

        axios.create = jest.fn(function () {
            return {
                delete: jest.fn(() => Promise.resolve({
                    status: 200,
                    data: true
                }))
            }
        });

        const empId = 1;
        const { data, deleteEmployee } = useDeleteEmployee();
        deleteEmployee(empId);

        expect(data).toEqual(true);
    });

    it("should return expected value on failure status", () => {

        useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setData]));
        useStateSpy.mockImplementationOnce(jest.fn(()=>[new Error("Something went wrong!"), 
            setError]));
        useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setIsLoading]));
        
        axios.create = jest.fn(function () {
            return {
                delete: jest.fn(() => Promise.resolve({
                    status: 404,
                    data: null
                }))
            }
        });

        const empId = 1;
        const { error, deleteEmployee } = useDeleteEmployee();
        deleteEmployee(empId);
        expect(error.message).toEqual("Something went wrong!");
    });

    it("should return expected value on call rejection", () => {

        useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setData]));
        useStateSpy.mockImplementationOnce(jest.fn(()=>[new Error("Something went wrong!"), 
            setError]));
        useStateSpy.mockImplementationOnce(jest.fn(()=>[null, setIsLoading]));

        axios.create = jest.fn(function () {
            return {
                delete: jest.fn(() => Promise.reject({
                    error: new Error("Something went wrong"),
                }))
            }
        });

        const empId = 1;
        const { error, deleteEmployee } = useDeleteEmployee();
        deleteEmployee(empId);
        expect(error.message).toEqual("Something went wrong!");
    });
});