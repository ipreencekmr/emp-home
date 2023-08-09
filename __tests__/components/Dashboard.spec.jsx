import React from "react";
import { render, screen } from "@testing-library/react";
import { Dashboard } from "../../src/components/Dashboard";
import { ProviderWrapper } from "../utils/ProviderWrapper";

jest.mock("emp_employee/Employee", () => {
    return {
        __esModule: true,
        default: jest.fn(() => <div data-testid="employeeId"></div>),
    }
}, {
    virtual: true
});

describe("Dashboard", () => {
    it("should render as expected", () => {
        render(<ProviderWrapper><Dashboard/></ProviderWrapper>);
        expect(screen.getByText("Search By:")).toBeInTheDocument();
    });
});