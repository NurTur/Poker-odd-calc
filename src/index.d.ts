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
