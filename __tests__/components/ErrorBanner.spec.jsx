import React from "react";
import { render, screen } from "@testing-library/react";
import { ErrorBanner } from "../../src/components/ErrorBanner";

describe("ErrorBanner", () => {
    it("should have default message", () => {
        render(<ErrorBanner></ErrorBanner>);
        expect(screen.getByText("Something went wrong!")).toBeInTheDocument();
    });
});