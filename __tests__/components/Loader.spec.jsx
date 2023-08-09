import React from "react";
import { render, screen } from "@testing-library/react"
import { Loader } from "../../src/components/Loader";
describe("Loader", () => {
    it("should have three spinners", () => {
        render(<Loader></Loader>);
        expect(screen.getAllByText("Loading...")).toHaveLength(3);
    });
});