import React from "react";
import {
    fireEvent, render, screen 
} from "@testing-library/react";
import { ConfirmationDialogue } from "../../src/components/ConfirmationDialogue";
import { ProviderWrapper } from "../utils/ProviderWrapper";
import { useDispatch, useSelector } from "react-redux";

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
    useDispatch: jest.fn()
}));

describe("ConfirmationDialogue", () => {

    const dispatch = jest.fn();
    beforeEach(()=>{
        const mockState = {
            modal: {
                show: true
            }
        };
        useSelector.mockImplementation((f) => f(mockState));
        useDispatch.mockImplementation(()=>dispatch);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should render as expected for hidden modal", () => {
        const mockState = {
            modal: {
                show: false
            }
        };
        useSelector.mockImplementation((f) => f(mockState));
        render(<ProviderWrapper><ConfirmationDialogue/></ProviderWrapper>);
        expect(screen.getByTestId("verificationModalId")).toHaveAttribute("aria-hidden", "true");
    });

    it("should render show dialogue", () => {
        render(<ProviderWrapper><ConfirmationDialogue/></ProviderWrapper>);
        expect(screen.getByTestId("verificationModalId")).toHaveAttribute("aria-modal", "true");
    });

    it("should call dispatch on close button Clicked", () => {
        render(<ProviderWrapper><ConfirmationDialogue/></ProviderWrapper>);
        fireEvent.click(screen.getByTestId("modalCloseButtonId"));
        expect(dispatch).toHaveBeenCalledTimes(2);
    });

    it("should call dispatch on cancel button Clicked", () => {
        render(<ProviderWrapper><ConfirmationDialogue/></ProviderWrapper>);
        fireEvent.click(screen.getByTestId("modalCancelButtonId"));
        expect(dispatch).toHaveBeenCalledTimes(2);
    });

    it("should call dispatch on confirm button Clicked", () => {
        render(<ProviderWrapper><ConfirmationDialogue/></ProviderWrapper>);
        fireEvent.click(screen.getByTestId("modalConfirmButtonId"));
        expect(dispatch).toHaveBeenCalledTimes(2);
    });
});