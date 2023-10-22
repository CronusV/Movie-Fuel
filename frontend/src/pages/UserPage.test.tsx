import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import UserPage from "./UserPage";
import { setUser } from "../state/userSlice";
import userEvent from "@testing-library/user-event"; // Import userEvent

const mockStore = configureStore([]);
const initialState = {
    user: {
        aboutme: "Sample About Me",
        editedText: "Sample Edited Text",
        isEditing: false,
        username: "sample_user",
        email: "sample_email@example.com",
        favoriteItems: [
            {
                id: 1,
                title: "Sample Title 1",
                poster_path: "/sample_poster_1.jpg",
                overview: "Sample Overview 1",
            },
        ],
        favorites: ["1", "2"],
        profilepicture: "/sample_profile_picture.jpg",
    },
};

const store = mockStore(initialState);

describe("<UserPage />", () => {
    test("should display user information", () => {
        render(
            <Provider store={store}>
                <UserPage />
            </Provider>
        );

        // Check if user information is displayed
        expect(screen.getByText("Your Profile Page")).toBeInTheDocument();
        expect(screen.getByText("Sample About Me")).toBeInTheDocument();
        expect(screen.getByText("Sample Title 1")).toBeInTheDocument();
        expect(screen.getByText("delete")).toBeInTheDocument();



    });

    test("should display 'Edit' button when not in editing mode", () => {
        render(
            <Provider store={store}>
                <UserPage />
            </Provider>
        );

        expect(screen.getByText("Edit")).toBeInTheDocument();
        expect(screen.queryByText("Save")).not.toBeInTheDocument();
        expect(screen.queryByText("Cancel")).not.toBeInTheDocument();
    });


});
