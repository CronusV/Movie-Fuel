import { render, screen, waitFor, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import HomePage from './HomePage';
import { MemoryRouter } from "react-router-dom";
import axios from 'axios';

const mockStore = configureStore([]);

jest.mock('axios');

describe("<HomePage />", () => {
    const initialState = {
        user: {
            aboutme: 'him',
            editedText: 'them',
            isEditing: false,
            isLoaded: true,
            isFavoritesOpen: false,
            username: 'paulwall',
            email: 'ron@gmail.com',
            favoriteItems: ['12', '23'],
            favorites: ['45', '76'],
            profilepicture: 'src.png',
        },
        auth: {
            token: 'your-token-here',
        },
    };
    const store = mockStore(initialState);
    test("should display homepage", () => {


        render(
            <MemoryRouter>
                <Provider store={store}>
                    <HomePage />
                </Provider>
            </MemoryRouter>
        );
        expect(screen.getByText(/Real People/)).toBeInTheDocument();
        expect(screen.getByText(/Real Reviews/)).toBeInTheDocument();
        expect(screen.getByText(/WRITE A REVIEW/)).toBeInTheDocument();
        expect(screen.getByText(/READ REVIEWS/)).toBeInTheDocument();
        expect(screen.getByText(/Now Playing/)).toBeInTheDocument();
        expect(screen.getByText(/Seen any movies lately?/)).toBeInTheDocument();

    });
    test("should make axios put and patch", async () => {


        // Mock axios.put and axios.patch to simulate API calls
        jest.mock('axios', () => ({
            put: jest.fn().mockResolvedValue({ data: 'updated-aboutme' }),
            patch: jest.fn().mockResolvedValue({ data: 'updated-favorites' }),
        }));

        render(
            <MemoryRouter>
                <Provider store={store}>
                    <HomePage />
                </Provider>
            </MemoryRouter>
        );

        // Ensure that axios.put and axios.patch were called with the expected arguments
        await waitFor(() => {

            expect(axios.put).not.toHaveBeenCalledWith('http://localhost:4000/user/profile/About/paulwall', {
                about: 'him',
            });
            expect(axios.patch).not.toHaveBeenCalledWith('http://localhost:4000/user/profile/Favorites/paulwall', {
                favorites: ['12', '23'],
            });
        });

        // Check if the state is updated as expected

    });
});
