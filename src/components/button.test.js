import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe('Test for Button component', () => {

    test("Check if Button component render correctly", () => {
        render(<Button>Button</Button>);
        const buttonElement = screen.getByRole("button");
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toBeEnabled();
    })

})
