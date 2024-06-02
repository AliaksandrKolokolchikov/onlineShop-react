import '@testing-library/jest-dom';
import Footer from './Footer';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import userEvent from '@testing-library/user-event';

describe('<Footer />', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );

    expect(screen.getByText('Developed by Flekssando')).toBeInTheDocument();
  });

  it('should navigate on Home route', () => {
    const history = createBrowserHistory();
    render(
      <BrowserRouter history={history}>
        <Footer />
      </BrowserRouter>,
    );

    userEvent.click(screen.getByAltText('Stuff'));
    expect(history.location.pathname).toBe('/');
  });
});
