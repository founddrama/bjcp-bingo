import { render, screen } from '@testing-library/react';
import Bingo from './Bingo';

describe('<Bingo />', () => {
  test('renders FREE square', () => {
    render(<Bingo />);
    const linkElement = screen.getByText(/FREE/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('should render 25 Bingo squares', () => {
    const { container } = render(<Bingo />);
    const squares = Array.from(container.querySelectorAll('.bingo-square'));

    expect(squares).toHaveLength(25);
  });
});
