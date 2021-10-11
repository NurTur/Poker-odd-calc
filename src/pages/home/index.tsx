import React, { ReactElement } from 'react';
import { TexasHoldem } from '../../poker-odds-calc/index';

function Home(): ReactElement {
  const Table = new TexasHoldem();
  Table.addPlayer(['Qs', 'Kh']).addPlayer(['5s', '5c']).addPlayer(['2d', 'As']).exhaustive();

  const Result = Table.calculate();

  console.log(Result);

  return <div>dfddfdfdf</div>;
}

export default Home;
