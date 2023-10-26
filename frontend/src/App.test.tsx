import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
var foo = "bar"
 
const initialState = {
  auth: {
    token: 'Sample About Me',
 
  },
  user: {
    isLoaded: true
  }
};
const mockStore = configureStore([]);
test('renders all components', () => {
  const store = mockStore(initialState); // Initialize the mock store
 
  render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>
  );
});