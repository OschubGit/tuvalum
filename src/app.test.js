import React from "react";
import { render, screen} from "@testing-library/react";
import App from "./App";
import CartContextProvider from "./utils/context/cartContext";


describe('Test for App component', () => {

    test("Check if exist header, main and aside tags", () => {
        render(<CartContextProvider><App/></CartContextProvider>);
        const headerTag = screen.getByRole("banner");
        expect(headerTag).toBeInTheDocument();

        const mainTag = screen.getByRole("main");
        expect(mainTag).toBeInTheDocument();

        const asideTag = screen.getByRole("complementary");
        expect(asideTag).toBeInTheDocument();
    })

})

 