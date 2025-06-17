import { render, screen } from '@testing-library/react';

import Page from '@/app/page';

describe('Home Page', () => {
  it('renders the welcome message', () => {
    render(<Page />);
    expect(screen.getByText(/Get started by editing/i)).toBeInTheDocument();
  });
});
