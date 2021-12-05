import BingoSquare from './BingoSquare';
import getBingoPhrases from '../phrases/bingo-phrases';
import cyrb53 from '../utils/cyrb53-hash';

const phrases = getBingoPhrases();

function Bingo() {
  return (
    <main className="Bingo">
      {phrases.map(phrase => (
        <BingoSquare key={cyrb53(phrase)} phrase={phrase} />
      ))}
    </main>
  );
}

export default Bingo;
