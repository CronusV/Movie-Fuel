
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { MemoryRouter, Route } from "react-router-dom";
import axios from "axios"; // Mock Axios for API calls
import GuestProfileView from "./GuestProfileView";


// Create a mock Redux store
const mockStore = configureStore([]);
const initialState = {
    guest: {
        UserName: "TestUser",
        ProfilePicture: "sample_profile_picture.jpg",
        AboutMe: "Sample About Me",
        favoriteItems: [
            {
                title: "Sample Title 1",
                poster_path: "/sample_poster_1.jpg",
                overview: "Sample Overview 1",
            },
        ],
    },
};
const store = mockStore(initialState);

// Mock Axios for API calls
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("<GuestProfileView />", () => {
    test("should display user information and favorites", async () => {
        // Mock Axios response for profile data
        const profileData = {
            UserName: "TestUser",
            ProfilePicture: "sample_profile_picture.jpg",
            AboutMe: "Sample About Me",
            Favorites: ["1"],
        };
        mockedAxios.get.mockResolvedValue({ data: profileData });

        // Mock Axios response for favorite items
        const favoriteItemsData = [
            {
                title: "Sample Title 1",
                poster_path: "/sample_poster_1.jpg",
                overview: "Sample Overview 1",
            },
        ];
        mockedAxios.get.mockResolvedValue({ data: favoriteItemsData });

        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={["/guest/testuser"]}>
                    <Route path="/guest/:username">
                        <GuestProfileView />
                    </Route>
                </MemoryRouter>
            </Provider>
        );

        // Wait for asynchronous operations to complete
        await waitFor(() => {
            expect(screen.getByText("TestUser's Profile Page")).toBeInTheDocument();
            expect(screen.getByText("Sample About Me")).toBeInTheDocument();
            expect(screen.getByText("Sample Title 1")).toBeInTheDocument();
        });
    });
});
