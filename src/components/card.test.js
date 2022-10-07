import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe('Test for Card component', () => {

    test("Check if render correctly", () => {
        const defaultImg = "https://idento.es/wp-content/plugins/accelerated-mobile-pages/images/SD-default-image.png"
        
        render(<Card src={defaultImg} price={"1000"}/>);

        const imageElement = screen.getByTestId("src-product");
        expect(imageElement).toBeInTheDocument();
        
        const titleElement = screen.getByRole("heading");
        expect(titleElement).toBeInTheDocument();

        const priceElement = screen.getByText(/1000/i);
        expect(priceElement).toBeInTheDocument();

        const addToCartButton = screen.getByRole("button");
        expect(addToCartButton).toBeInTheDocument();
        expect(addToCartButton).toBeEnabled();
    })

})