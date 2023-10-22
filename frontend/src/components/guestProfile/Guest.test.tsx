import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import GuestProfileView from './GuestProfileView';
jest.mock('axios');
const mockStore = configureStore([]);

const initialState = {
    guest: {
        aboutme: 'Sample About Me',
        editedText: 'Sample Edited Text',
        isEditing: false,
        username: 'sample_user',
        email: 'sample_email@example.com',
        favoriteItems: [
            {
                id: 1,
                title: 'Sample Title 1',
                poster_path: '/sample_poster_1.jpg',
                overview: 'Sample Overview 1',
            },
            {
                id: 2,
                title: 'Sample Title 2',
                poster_path: '/sample_poster_1.jpg',
                overview: 'Sample Overview 2',
            },
        ],
        favorites: ['1', '2'],
        profilepicture: '/sample_profile_picture.jpg',
    },
};

const store = mockStore(initialState);


describe('<GuestProfileView />', () => {
    test('should display user information and favorites', async () => {
        // Mock the useParams hook to provide a specific value for Otherusername

        jest.mock('axios', () => ({
            get: jest.fn().mockResolvedValue({ data: 'data-from-api' }),
        }));

        const mockFetch = jest.spyOn(global, 'fetch');
        mockFetch.mockResolvedValue(
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve({ data: 'data-from-fetch' }),
            }) as unknown as Response // Use type assertion here
        );
        render(
            <Provider store={store}>
                <GuestProfileView />
            </Provider>
        );
        //expect(fetch).toHaveBeenCalledWith('http://localhost:4000/user/profile/sample_user');
        expect(screen.getByText("sample_user's Profile Page")).toBeInTheDocument();
        expect(screen.getByText("sample_user's About Me")).toBeInTheDocument();
        expect(screen.getByText("sample_user's Favorites")).toBeInTheDocument();
        expect(screen.getByText('Sample About Me')).toBeInTheDocument();
        expect(screen.getByText('Sample Title 1')).toBeInTheDocument();
        expect(screen.getByText('Sample Title 2')).toBeInTheDocument();
        expect(screen.getByText('Sample Overview 1')).toBeInTheDocument();
        expect(screen.getByText('Sample Overview 2')).toBeInTheDocument();
    });
});
