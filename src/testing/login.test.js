import React from "react";

 import { render, screen } from "@testing-library/react";

 import Login from "../pages/Login";

   describe("Login Page", () => {
    test("should render login page", () => {
       render(<Login />);
        expect(screen.getByText("Login")).toBeInTheDocument();
        expect(screen.getByText("Login")).toBeInTheDocument();
    })
   });

