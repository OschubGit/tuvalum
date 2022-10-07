import React from "react";
import { render, screen } from "@testing-library/react";
import Logo from "./Logo";

describe('Test for Logo component', () => {

    test("Check if Logo component render correctly", () => {
        render(<Logo alt={"logo"}/>);
        const imageElement = screen.getByAltText("logo");
        expect(imageElement).toBeInTheDocument();
        expect(imageElement).toHaveAttribute("class");
    })

})
