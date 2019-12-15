export const debounce = (fn: any, time: number) => {
  let timeout: any;

  return function() {
    // @ts-ignore: Mute `this` error
    const functionCall = () => fn.apply(this, arguments);

    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  };
};

export const throttle = (callback: any, limit: any) => {
  let wait = false;
  return () => {
    // We return a throttled function
    if (!wait) {
      // If we're not waiting
      callback.call(); // Execute users function
      wait = true; // Prevent future invocations
      setTimeout(() => {
        // After a period of time
        wait = false; // And allow future invocations
      }, limit);
    }
  };
};

export const isEmpty = (obj: object) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};
