import getBingoPhrases, { FREE } from "./bingo-phrases";

describe('getBingoSquares()', () => {
  test('it should return 25 phrases', () => {
    expect(getBingoPhrases()).toHaveLength(25);
  });

  test('it should contain "FREE" as the center square', () => {
    const squares = getBingoPhrases();
    expect(squares).toContain(FREE);
    expect(squares[12]).toBe(FREE);
  });
});
