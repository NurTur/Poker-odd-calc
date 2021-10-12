import React, { ReactElement } from 'react';
import { TexasHoldem } from '../../poker-odds-calc/index';
// import { s100, s40 } from "./button";

// function sortPreflop(preflop: any[]): any[] {
//   const cards = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];
//   const mast = ['h', 'c', 'd', 's'];

//   const arr = preflop.map((item) => {
//     const a = cards.indexOf(item.slice(0, 1));
//     const b = cards.indexOf(item.slice(2, 3));

//     if (a === b) {
//       console.log(item, '  ', mast.indexOf(item.slice(1, 2)), '  ', mast.indexOf(item.slice(3)));
//       if (mast.indexOf(item.slice(1, 2)) > mast.indexOf(item.slice(3))) {
//         return `${item.slice(2)}${item.slice(0, 2)}`;
//       }
//     } else if (a > b) {
//       return `${item.slice(2)}${item.slice(0, 2)}`;
//     }
//     return item;
//   });

//   arr.sort((a, b) => {
//     console.log(a, ' - ', b, '  ', a - b);
//     return a - b;
//   });
//   console.log(arr);
//   return [];
// }

function Home(): ReactElement {
  const arr: any[] = [];

  // const [arr, setArr] = React.useState([]);
  // const cards = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];

  // const mast = ['h', 'c', 'd', 's'];
  // let u = 0;

  const Table = new TexasHoldem();

  // Table.addPlayer(['Ts', 'Js']).addPlayer(['5s', '5h']);
  console.log(Table);
  // const Result = Table.calculate();
  // console.log(Result);

  // const Table2 = new TexasHoldem();

  // Table2.addPlayer(['Ts', 'Js']).addPlayer(['5s', '5h']).exhaustive();

  // const Result2 = Table2.calculate();
  // console.log(Result2);

  // for (const blind of s40) {
  //   const firstBlind = blind.slice(0, 2);
  //   const secondBlind = blind.slice(2);

  //   let wins = 0;
  //   let ties = 0;
  //   let iterations = 0;
  //   let k = 0;

  //   for (const full of s100) {
  //     if (s40.indexOf(full) >= 0) {
  //       const first = full.slice(0, 2);
  //       const second = full.slice(2);
  //       if (
  //         [first, second, 'Js', 'Ts'].indexOf(firstBlind) < 0
  //         && [first, second, 'Js', 'Ts'].indexOf(secondBlind) < 0
  //       ) {
  //         const Table = new TexasHoldem();

  //         Table.addPlayer(['Ts', 'Js'])
  //           .addPlayer([firstBlind, secondBlind])
  //           .addPlayer([first, second]);

  //         const Result = Table.calculate();
  //         const getOpponent = Result.getPlayers()[1];

  //         wins += getOpponent.getWins();
  //         ties += getOpponent.getTies();
  //         iterations += Result.getIterations();
  //         console.log(
  //           `${(k += 1)} ${blind}   ${first}${second}  ${(
  //             (getOpponent.getWins() / Result.getIterations())
  //             * 100
  //           ).toFixed(3)}`,
  //         );
  //       }
  //     }
  //   }

  //   let result = wins + ties / 2;
  //   result = (result / iterations) * 100;
  //   arr.push({ key: blind, percent: result.toFixed(3) });
  //   console.log(
  //     `-------------------------------${(u += 1)} ${blind}    ${result.toFixed(
  //       3,
  //     )}--------------------------`,
  //   );
  // }

  return (
    <ul>
      {/* {JSON.stringify(arr)} */}
      {arr.map((i) => (
        <>
          <li key={i.key}>
            {i.key}
            {'                '}
            {i.percent}
          </li>
          <br />
        </>
      ))}
    </ul>
  );
}

export default Home;
