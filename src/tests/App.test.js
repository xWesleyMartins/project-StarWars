import React, { waitFor }from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import mockData from './mock/mockData';
import userEvent from '@testing-library/user-event';

const api = () => {
  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockData),
  });
};
describe('', () => {
  beforeEach(api);
  afterEach(() => jest.clearAllMocks());

  test('I am your test', async () => {
    const { debug } = render(<App />);
      expect(global.fetch).toHaveBeenCalled();
      // await waitFor(() => {
        const planetNameInput = await screen.findByTestId('name-filter');
        expect(planetNameInput).toBeInTheDocument();
        // })
        const table = await screen.findAllByRole('row');
        expect(table).toHaveLength(11);

        const columnNameInput = await screen.findByTestId('column-filter');
        expect(columnNameInput).toBeInTheDocument();
        const comparisonNameInput = await screen.findByTestId('comparison-filter');
        expect(comparisonNameInput).toBeInTheDocument();
        const valueNumImput = await screen.findByTestId('value-filter');
        expect(valueNumImput).toBeInTheDocument();

  });

  test('teste comparison "maior que"', async () => {
    const { debug } = render(<App />);
      expect(global.fetch).toHaveBeenCalled();
      
      // const planetNameInput = await screen.findByTestId('name-filter');
      // userEvent.type(planetNameInput, 'Tatooine');
      const columnNameInput = await screen.findByTestId('column-filter');
      userEvent.selectOptions(columnNameInput, 'population')
      const comparisonNameInput = await screen.findByTestId('comparison-filter');
      userEvent.selectOptions(comparisonNameInput, 'maior que')
      const valueNumImput = await screen.findByTestId('value-filter');
      userEvent.type(valueNumImput, '10000');
      const filterBtn = await screen.findByRole('button', {name: /Filtrar/i})
      userEvent.click(filterBtn)
      const table = await screen.findAllByRole('row');
      expect(table).toHaveLength(8);
      debug()
  });

  test('teste comparison "menor que"', async () => {
    const { debug } = render(<App />);
      expect(global.fetch).toHaveBeenCalled();
      
      // const planetNameInput = await screen.findByTestId('name-filter');
      // userEvent.type(planetNameInput, 'Tatooine');
      const columnNameInput = await screen.findByTestId('column-filter');
      userEvent.selectOptions(columnNameInput, 'population')
      const comparisonNameInput = await screen.findByTestId('comparison-filter');
      userEvent.selectOptions(comparisonNameInput, 'menor que')
      const valueNumImput = await screen.findByTestId('value-filter');
      userEvent.type(valueNumImput, '10000');
      const filterBtn = await screen.findByRole('button', {name: /Filtrar/i})
      userEvent.click(filterBtn)
      const table = await screen.findAllByRole('row');
      expect(table).toHaveLength(2);
      debug()
  });
  test('teste comparison "igual a"', async () => {
    const { debug } = render(<App />);
      expect(global.fetch).toHaveBeenCalled();
      
      // const planetNameInput = await screen.findByTestId('name-filter');
      // userEvent.type(planetNameInput, 'Tatooine');
      const columnNameInput = await screen.findByTestId('column-filter');
      userEvent.selectOptions(columnNameInput, 'population')
      const comparisonNameInput = await screen.findByTestId('comparison-filter');
      userEvent.selectOptions(comparisonNameInput, 'igual a')
      const valueNumImput = await screen.findByTestId('value-filter');
      userEvent.type(valueNumImput, '10000');
      const filterBtn = await screen.findByRole('button', {name: /Filtrar/i})
      userEvent.click(filterBtn)
      const table = await screen.findAllByRole('row');
      expect(table).toHaveLength(1);
      // debug()
  });
});
