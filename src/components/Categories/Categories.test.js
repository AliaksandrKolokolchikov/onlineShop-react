import Categories from './Categories';
import '@testing-library/jest-dom';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { createBrowserHistory, createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

const mockProducts = [
  {
    id: 1,
    name: 'Clothes',
    image: 'https://i.imgur.com/QkIa5tT.jpeg',
    creationAt: '2024-06-02T08:27:52.000Z',
    updatedAt: '2024-06-02T08:27:52.000Z',
  },
  {
    id: 2,
    name: 'Electronics',
    image: 'https://i.imgur.com/ZANVnHE.jpeg',
    creationAt: '2024-06-02T08:27:52.000Z',
    updatedAt: '2024-06-02T08:27:52.000Z',
  },
  {
    id: 3,
    name: 'Furniture',
    image: 'https://i.imgur.com/Qphac99.jpeg',
    creationAt: '2024-06-02T08:27:52.000Z',
    updatedAt: '2024-06-02T08:27:52.000Z',
  },
  {
    id: 4,
    name: 'Shoes',
    image: 'https://i.imgur.com/qNOjJje.jpeg',
    creationAt: '2024-06-02T08:27:52.000Z',
    updatedAt: '2024-06-02T08:27:52.000Z',
  },
  {
    id: 5,
    name: 'Miscellaneous',
    image: 'https://i.imgur.com/BG8J0Fj.jpg',
    creationAt: '2024-06-02T08:27:52.000Z',
    updatedAt: '2024-06-02T08:27:52.000Z',
  },
];

const renderCategories = (amount, history) =>
  render(
    <MemoryRouter history={history}>
      <Routes>
        <Route
          path={'/'}
          element={<Categories products={mockProducts} title="Categories" amount={amount} />}
        />
        <Route path={'/categories/1'} element={<div>Categories1</div>} />
      </Routes>
    </MemoryRouter>,
  );

// TODO: обновить тест после обновления категории
describe('Categories', () => {
  it('renders without crashing', () => {
    const history = createBrowserHistory();
    renderCategories(5, history);

    expect(screen.getByText('Categories')).toBeInTheDocument();
  });
  it('should update history after click on product', async () => {
    const history = createMemoryHistory();
    renderCategories(5, history);

    userEvent.click(screen.getByTestId('Link-1'));
    await expect(screen.getByText('Categories1')).toBeInTheDocument();
  });
});
