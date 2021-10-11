export interface IItem {
  guid: string;
}

export interface ISelectedItemState {
  items: IItem[];
  addItem(item: IItem): void;
  removeItem(item: IItem): void;
  toggleItem(item: IItem): void;
}
