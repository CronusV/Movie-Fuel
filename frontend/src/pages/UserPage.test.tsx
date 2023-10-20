import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ProfilePage from "./UserPage";

describe("<ProfilePage />", () => {
    test("should display email", async () => {
        // Render the GuestProfileView component
        render(<ProfilePage />);


        expect(screen.getByText('Email')).toBeInTheDocument();
    });
});
describe("<ProfilePage />", () => {
    test("should  display About Me", async () => {
        // Render the GuestProfileView component
        render(<ProfilePage />);


        expect(screen.getByText('About Me')).toBeInTheDocument();
    });
});

describe("<ProfilePage />", () => {
    test("should display Favorites", async () => {
        // Render the GuestProfileView component
        render(<ProfilePage />);


        expect(screen.getByText('Favorites')).toBeInTheDocument();
    });
});
describe("<ProfilePage />", () => {
    test("clicking edit should render edit and save button", async () => {
        // Render the GuestProfileView component
        render(<ProfilePage />);
        const edit = screen.getByText('Edit');
        expect(edit).toBeInTheDocument();
        fireEvent.click(edit);
        expect(screen.getByText('Save')).toBeInTheDocument();

        expect(screen.getByText('Cancel')).toBeInTheDocument();
    });
});
describe("<ProfilePage />", () => {
    test("Favorites should have a delete button", async () => {
        // Render the GuestProfileView component
        const favs = ['323', '432', '432'];
        render(<ProfilePage />);

        const edit = screen.getByText('delete');
        expect(edit).toBeInTheDocument();
        fireEvent.click(edit);
        expect(screen.getByText('Save')).toBeInTheDocument();

        expect(screen.getByText('Cancel')).toBeInTheDocument();
    });
});