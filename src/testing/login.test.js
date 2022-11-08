import React from "react";

 import { render, fireEvent, screen } from "@testing-library/react";

    import Login from "../pages/login";

   describe("Login Page", () => {
    test("should render login page", () => {
       render(<Login />);
        expect(screen.getByText("Login")).toBeInTheDocument();
    })
   });

