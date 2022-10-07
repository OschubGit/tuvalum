import React from "react";
import { render, screen } from "@testing-library/react";
import Alerts from "./Alerts";

describe('Test for Alerts component', () => {

    test("Check if Alert component render correctly with message", () => {
        render(<Alerts message={"Todavía no hay productos"}/>);
        const alertElement = screen.getByText(/Todavía no hay productos/i);
        expect(alertElement).toBeInTheDocument();
    })

})
