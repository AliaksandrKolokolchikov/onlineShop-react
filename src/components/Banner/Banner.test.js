import Banner from './Banner';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createBrowserHistory } from 'history';
import { BrowserRouter } from 'react-router-dom';

describe('<Banner />', () => {
  const history = createBrowserHistory();
  it('renders correctly', () => {
    render(
      <BrowserRouter history={history}>
        <Banner />
      </BrowserRouter>,
    );
    userEvent.click(screen.getByText('See more'));
    expect(history.location.pathname).toBe('/');
  });
});
