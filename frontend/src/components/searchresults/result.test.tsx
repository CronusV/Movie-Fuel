import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Result from './result';
import { MemoryRouter } from "react-router-dom";


const mockStore = configureStore([]);

jest.mock('axios');

describe("<ResultPage />", () => {
    const initialState = {

        auth: {
            token: 'your-token-here' as any,
        },
    };
    const store = mockStore(initialState);

    test("results page with token", () => {


        render(
            <MemoryRouter>
                <Provider store={store}>
                    <Result adult={false} backdrop_path={null} genre_ids={0} id={0} original_language={''} original_title={''} overview={''} popularity={0} poster_path={''} release_date={''} title={''} video={false} vote_average={0} vote_count={0} />
                </Provider>
            </MemoryRouter>
        );

        expect(screen.getByText(/SearchResult/)).toBeInTheDocument();
        expect(screen.getByText(/Based on:/)).toBeInTheDocument();
        expect(screen.getByText(/Find similar movies/)).toBeInTheDocument();
        expect(screen.getByText(/Add to Favorites/)).toBeInTheDocument();

    });

    test("results page no token,", () => {
        initialState.auth.token = null;

        render(
            <MemoryRouter>
                <Provider store={store}>
                    <Result adult={false} backdrop_path={null} genre_ids={0} id={0} original_language={''} original_title={''} overview={''} popularity={0} poster_path={''} release_date={''} title={''} video={false} vote_average={0} vote_count={0} />
                </Provider>
            </MemoryRouter>
        );

        expect(screen.getByText(/SearchResult/)).toBeInTheDocument();
        expect(screen.getByText(/Based on:/)).toBeInTheDocument();
        expect(screen.getByText(/Find similar movies/)).toBeInTheDocument();
        expect(screen.queryByText(/Add to Favorites/)).not.toBeInTheDocument();

    });

});
