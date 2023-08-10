import React from "react";
import { render, screen } from "@testing-library/react";
import { EmployeeList } from "../../src/components/EmployeeList";
import { ProviderWrapper } from "../utils/ProviderWrapper";
import { useEmployees } from "../../src/hooks/useEmployees";
import { useSelector } from "react-redux";

const mockEmpData = [
    {
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
    {
        id: 2,
        firstName: "mockFirstName 2",
        lastName: "mockLastName 2",
        department: {
            id: 1,
            value: "mockDepartment"
        },
        qualification: {
            id: 1,
            value: "mockQualification"
        },
        gender: "FEMALE"
    },
    {
        id: 3,
        firstName: "mockFirstName 3",
        lastName: "mockLastName 3",
        department: {
            id: 1,
            value: "mockDepartment"
        },
        qualification: {
            id: 1,
            value: "mockQualification"
        },
        gender: "OTHER"
    }
];

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn()
}));

jest.mock("../../src/hooks/useEmployees", () => ({
    ...jest.requireActual("../../src/hooks/useEmployees"),
    useEmployees: jest.fn().mockReturnValue({
        data: mockEmpData
    })
}));

describe("EmployeeList", () => {

    afterEach(()=>{
        jest.clearAllMocks();
    });

    it("should render as expected", () => {        
        const { container } = render(<ProviderWrapper><EmployeeList/></ProviderWrapper>);
        expect(container).toBeInTheDocument();
    });

    it("should return ErrorBanner if error", () => {
        useEmployees.mockReturnValue({
            data: null,
            error: new Error("Something went wrong!")
        });
        render(<ProviderWrapper><EmployeeList/></ProviderWrapper>);
        expect(screen.getByRole("alert")).toBeInTheDocument();
    });

    it("should not filter data if filters not applied", () => {
        useEmployees.mockReturnValue({
            data: mockEmpData,
        });
        
        const mockState = {
            app: {
                departmentId: -1,
                qualificationId: -1,
                searchText: ""
            },
            modal: {
                show: false,
                buttonIndex: -1,
                tagIndex: -1,
            }
        };

        useSelector.mockImplementation((f) => f(mockState));

        const { container } = render(<ProviderWrapper><EmployeeList/></ProviderWrapper>);
        expect(container.querySelector("h5")).toHaveAttribute("class", "card-title");
        expect(screen.getAllByText("mockDepartment")).toHaveLength(3);
    });

    it("should filter data if filters applied", () => {
        useEmployees.mockReturnValue({
            data: mockEmpData,
        });
        
        const mockState = {
            app: {
                departmentId: 1,
                qualificationId: 1,
                searchText: "mock"
            },
            modal: {
                show: false,
                buttonIndex: -1,
                tagIndex: -1,
            }
        };

        useSelector.mockImplementation((f) => f(mockState));

        const { container } = render(<ProviderWrapper><EmployeeList/></ProviderWrapper>);
        expect(container.querySelector("h5")).toHaveAttribute("class", "card-title");
        expect(screen.getAllByRole("link")).toHaveLength(3);
    });
});

