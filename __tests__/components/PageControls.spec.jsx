import React from "react";
import {
    fireEvent, render, screen 
} from "@testing-library/react";
import { PageControls } from "../../src/components/PageControls";
import { ProviderWrapper } from "../utils/ProviderWrapper";
import { useDispatch } from "react-redux";

jest.mock("../../src/hooks/useQualifications", () => ({
    ...jest.requireActual("../../src/hooks/useQualifications"),
    useQualifications: jest.fn().mockReturnValue({
        data: [
            {
                id: 1,
                value: "mock qualification 1"
            },
            {
                id: 2,
                value: "mock qualification 2"
            }
        ]
    })
}));

jest.mock("../../src/hooks/useDepartments", () => ({
    ...jest.requireActual("../../src/hooks/useDepartments"),
    useDepartments: jest.fn().mockReturnValue({
        data: [
            {
                id: 1,
                value: "mock department 1"
            },
            {
                id: 2,
                value: "mock department 2"
            }
        ]
    })
}));

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useDispatch: jest.fn()
}));

describe("PageControls", () => {
    it("should render as expected", () => {
        render(<ProviderWrapper><PageControls/></ProviderWrapper>);
        expect(screen.getByText("Search By:")).toBeInTheDocument();
    });

    it("should trigger dispatch when select dropdown", () => {
        const dispatch = jest.fn();
        useDispatch.mockReturnValue(dispatch);

        render(<ProviderWrapper><PageControls/></ProviderWrapper>);
        screen.getAllByTestId("selectId").forEach((element) => {
            fireEvent.change(element, {
                target: {
                    value: 2
                }
            });
        });
        expect(dispatch).toHaveBeenCalledTimes(2);
    });

    it("should trigger dispatch when user types in search", () => {
        const dispatch = jest.fn();
        useDispatch.mockReturnValue(dispatch);

        render(<ProviderWrapper><PageControls/></ProviderWrapper>);
        fireEvent.change(screen.getByRole("textbox"), {
            target: {
                value: "search text"
            }
        });
        expect(dispatch).toHaveBeenCalledTimes(1);
    });

    it("should trigger dispatch clear all filter clicked", () => {
        const dispatch = jest.fn();
        useDispatch.mockReturnValue(dispatch);
        render(<ProviderWrapper><PageControls/></ProviderWrapper>);
        fireEvent.click(screen.getByText("Clear Filters"));
        expect(dispatch).toHaveBeenCalledTimes(1);
    }); 
});