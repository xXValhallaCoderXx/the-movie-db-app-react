export const debounce = (fn: any, time: number) => {
  let timeout: any;

  return function() {
    // @ts-ignore: Mute `this` error
    const functionCall = () => fn.apply(this, arguments);

    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  };
};
