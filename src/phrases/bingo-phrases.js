export const FREE = 'FREE';

const bingoPhrases = [
  `Gusher`,
  `Diacetyl`,
  `Acetaldehyde`,
  `Chlorophenol`,
  `Skunky`,
  `Butyric acid`,
  `DMS`,
  `Ethyl acetate`,
  `Ethyl hexanoate`,
  `Isovaleric acid`,
  `Enteric`,
  `"Tastes like cardboard."`,
  `"This would score better as…"`,
  `"PLEASE don’t put me in Category 34."`,
  `Hop burn`,
  `"I swear I can taste extract."`,
  `IPA entry specifically mentions 6+ hops`,
  `“PLEASE don’t put me in wood-aged beers.”`,
  `Wood-aged beer entry mentions wood you've never heard of before`,
  `Pencil lead breaks`,
  `Calibration beer is an American Brown Ale`,
  `American Brown Ale passed off as British Brown Ale`,
  `Scottish Export has unfortunate peat smoke character`,
  `VERY sulfury lager`,
  `Fruit Beer has fruit you're pretty sure is illegal`,
  `"Do I have any volunteers to judge the IPA category?"`,
  `IPA category needs at least 4 judges`,
  `Courtesy 13`,
  `Legitimate 40+ beer`,
  `Infected American Pale Ale passed off as "Belgian"`,
  `Entered as Irish Red; tastes like a Killian's`,
  `"Barrel-aged Bière de Garde" is just infected`,
  `Every Saison compared to Dupont`,
  `Judging flight includes mis-mathched orphaned styles`,
  `Best of Show is an American Light Lager`,
  `Best of Show is an Imperial Stout`,
  `Distinctly shaped bottle and you just KNOW who entered it`,
  `Beer tastes WONDERFUL but is sadly miscategorized`,
  `Blacked out vanity cap`,
  `A can shows up in the flight`,
];

export default function getBingoPhrases() {
  const setOfPhrases = new Set();
  let copyOfSource = [].concat(bingoPhrases);

  while (setOfPhrases.size < 24) {
    const item = copyOfSource[Math.floor(Math.random() * copyOfSource.length)];
    setOfPhrases.add(item);
    copyOfSource = copyOfSource.filter(phrase => phrase !== item);
  }

  const squares = Array.from(setOfPhrases);
  squares.splice(12, 0, FREE);

  return squares;
}
