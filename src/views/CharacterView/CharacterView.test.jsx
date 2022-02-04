import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import CharacterView from './CharacterView';

test.only('should render character details', async () => {
  render(
    <MemoryRouter initialEntries={['/character/1']}>
      <Route path="/character/:id">
        <CharacterView />
      </Route>
    </MemoryRouter>
  );
  const loading = screen.getByRole('heading');
  expect(loading).toBeInTheDocument();
  const img = await screen.findByRole('img', {
    name: /rick sanchez/i,
  });
  expect(img).toBeInTheDocument();
});
