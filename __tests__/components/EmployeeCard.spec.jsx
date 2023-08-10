import React from "react";
import {
    fireEvent, render, screen 
} from "@testing-library/react";
import { EmployeeCard } from "../../src/components/EmployeeCard";
import { ProviderWrapper } from "../utils/ProviderWrapper";
import { useSelector } from "react-redux";
import { useDeleteEmployee } from "../../src/hooks/useDeleteEmployee";

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn()
}));

jest.mock("../../src/hooks/useDeleteEmployee", () => ({
    ...jest.requireActual("../../src/hooks/useDeleteEmployee"),
    useDeleteEmployee: jest.fn().mockReturnValue({
        data: null,
        deleteEmployee: jest.fn()
    })
}));

describe("EmployeeCard", () => {

    let props;

    beforeEach(()=>{
        props = {
            employee: {
                id: 1,
                firstName: "mockFirstName",
                lastName: "mockLastName",
                department: {
                    id: 1,
                    value: "mockDepartment"
                },
                qualification: {
                    id: 1,
                    value: "mockQualification"
                },
                gender: "MALE"
            },
            refresh: jest.fn()
        };

        const mockState = {
            modal: {
                buttonIndex: 1,
                tagIndex: 1,
            }
        };

        useSelector.mockImplementation((f) => f(mockState));
    });

    it("should render as loader for no props", () => {
        render(<ProviderWrapper><EmployeeCard/></ProviderWrapper>);
        expect(screen.getAllByText("Loading...")).toHaveLength(3);
    });

    it("should render as expected for valid props", () => {
        const { container } = render(<ProviderWrapper>
            <EmployeeCard { ...props } />
        </ProviderWrapper>);
        expect(container.querySelector("h5")).toHaveAttribute("class", "card-title");
        expect(container.querySelector("h5")).toHaveTextContent("mockFirstName mockLastName");
        expect(container.querySelector("h6")).toHaveTextContent("mockDepartment");
        expect(screen.getByText("mockQualification")).toBeInTheDocument();
    });

    it("should render as expected for FEMALE gender", () => {
        render(<ProviderWrapper><EmployeeCard { ...{
            ...props,
            employee: {
                ...props.employee,
                gender: "FEMALE"
            }
        } } /></ProviderWrapper>);
        expect(screen.getByText("FEMALE")).toBeInTheDocument();
    });

    it("should render as expected for OTHER gender", () => {
        render(<ProviderWrapper><EmployeeCard { ...{
            ...props,
            employee: {
                ...props.employee,
                gender: "OTHER"
            }
        } } /></ProviderWrapper>);
        expect(screen.getByText("OTHER")).toBeInTheDocument();
    });

    it("should return ErrorBanner if error", () => {
        const deleteEmployee = jest.fn();
        useDeleteEmployee.mockReturnValue({
            data: null,
            error: new Error("Something went wrong!"),
            deleteEmployee
        });
        render(<ProviderWrapper><EmployeeCard { ...props } /></ProviderWrapper>);
        expect(screen.getByRole("alert")).toBeInTheDocument();
    });

    it("should call refresh on successful deletion", () => {
        const deleteEmployee = jest.fn();
        useDeleteEmployee.mockReturnValue({
            data: true,
            error: null,
            deleteEmployee
        });
        render(<ProviderWrapper><EmployeeCard { ...props } /></ProviderWrapper>);
        fireEvent.click(screen.getByTestId("deleteEmpBtnId"));
        expect(deleteEmployee).toHaveBeenCalled();
    });
});