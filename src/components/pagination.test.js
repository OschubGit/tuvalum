import React from "react";
import { render, screen} from "@testing-library/react";
import Pagination from "./Pagination";


describe('Test for Pagination component', () => {

    test("Check if prevButton is rendered and is disabled", () => {
        render(<Pagination currentPage={0}/>);
        const prevButton = screen.getByRole("button", {
            name: "Anterior",
        });
        expect(prevButton).toBeInTheDocument();
        expect(prevButton).toBeDisabled();
    })
    
    test("Check if nextButton is rendered and is enabled", () => {
        render(<Pagination currentPage={1}/>);
        const nextButton = screen.getByRole("button", {
            name: "Siguiente",
        });
        expect(nextButton).toBeInTheDocument();
        expect(nextButton).toBeEnabled();
    })

    test("Check if currentPage exist", async () => {
        render(<Pagination currentPage={1} />);
        const currentPage = screen.getByTestId("current-page");
        expect(currentPage).toBeInTheDocument();
        expect(currentPage).toHaveTextContent(1);
    })

})

 