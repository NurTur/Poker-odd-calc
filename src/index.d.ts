import Card from './poker-odds-calc/lib/Card';

declare module '*.png' {
  const value: string;
  export = value;
}

declare module '*.svg' {
  const content: string;
  export = content;
}

declare module '*.json' {
  const value: any;
  export default value;
}

declare global {
  interface Array<T> {
    sortCards(): Array<Card>;
    sortPairs(): Array<Array<Card>>;
  }
}
