import React from "react";
import { render, screen } from "@testing-library/react";
import { EmployeeCard } from "../../src/components/EmployeeCard";

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
            }
        };
    });

    it("should render as expected for no props", () => {
        const { container } = render(<EmployeeCard></EmployeeCard>);
        expect(container).toBeEmptyDOMElement();
    });

    it("should render as expected for valid props", () => {
        const { container } = render(<EmployeeCard { ...props }></EmployeeCard>);
        expect(container.querySelector("h5")).toHaveAttribute("class", "card-title");
        expect(container.querySelector("h5")).toHaveTextContent("mockFirstName mockLastName");
        expect(container.querySelector("h6")).toHaveTextContent("mockDepartment");
        expect(screen.getByText("mockQualification")).toBeInTheDocument();
    });

    it("should render as expected for FEMALE gender", () => {
        render(<EmployeeCard { ...{
            ...props,
            employee: {
                ...props.employee,
                gender: "FEMALE"
            }
        } }></EmployeeCard>);
        expect(screen.getByText("FEMALE")).toBeInTheDocument();
    });

    it("should render as expected for OTHER gender", () => {
        render(<EmployeeCard { ...{
            ...props,
            employee: {
                ...props.employee,
                gender: "OTHER"
            }
        } }></EmployeeCard>);
        expect(screen.getByText("OTHER")).toBeInTheDocument();
    });
});