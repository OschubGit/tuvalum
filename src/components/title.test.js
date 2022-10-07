import React from "react";
import { render, screen } from "@testing-library/react";
import Title from "./Title";

describe('Test for Title component', () => {

    test('Check component Title has a text prop', () => {
      render(<Title text="Products"/>);
      const titleElement = screen.getByText("Products");
      expect(titleElement).toBeInTheDocument();
    })

    test('Check if component has got a classname', () => {
      render(<Title size={"xs"}/>);
      const titleClass = screen.getByTestId('title-component')
      expect(titleClass).toHaveClass("title-xs");
    })

})

