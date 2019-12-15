export const debounce = (fn: any, time: number) => {
  let timeout: any;

  return function() {
    // @ts-ignore: Mute `this` error
    const functionCall = () => fn.apply(this, arguments);

    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  };
};

export const isEmpty = (obj: object) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};
