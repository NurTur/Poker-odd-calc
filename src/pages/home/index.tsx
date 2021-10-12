import React, { ReactElement } from 'react';
import { TexasHoldem } from '../../poker-odds-calc/index';
// import { s100, s40 } from "./button";

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

  function getScriptPath(foo: any): any {
    const fooStr = foo.toString();
    return window.URL.createObjectURL(
      new Blob([fooStr.slice(0, fooStr.length - 1).slice(8)], { type: 'text/javascript' }),
    );
  }

  const MAX_VALUE = 10000;

  function newWorker(self: any): any {
    return new Worker(
      getScriptPath(() => {
        self.addEventListener(
          'message',
          (e: any) => {
            let value = 0;
            while (value <= e.data) {
              self.postMessage(value);
              value += 1;
            }
          },
          false,
        );
      }),
    );
  }

  for (let i = 1; i < 9; i += 1) {
    console.log(window.self);
    const workerNew = newWorker(window.self);
    const divEl = document.createElement('div');
    divEl.setAttribute('id', `result${i}`);
    document.body.appendChild(divEl);

    workerNew.addEventListener(
      'message',
      (e: any) => {
        document.getElementById(`result${i}`).innerHTML = e.data;
      },
      false,
    );

    workerNew.postMessage(MAX_VALUE);
  }

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
