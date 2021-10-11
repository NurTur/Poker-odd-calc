interface IMenu {
  label: string;
  link?: string;
  open?: string;
}

function setItemsInMap(data: IMenu[], actionPush: Function): Record<string, any> {
  const map = new Map<string, any>();
  data.forEach((item: IMenu) => {
    if (item.open) {
      map.set(item.label, actionOpenWindow.bind(null, item.open));
    } else {
      map.set(item.label, actionPush.bind(null, item.link));
    }
  });
  return map;
}

function actionOpenWindow(link: string): void {
  window.open(link, '_blank');
}

export { setItemsInMap };
