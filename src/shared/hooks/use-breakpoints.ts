import {useState, useEffect} from "react";
import {throttle} from "shared/utils";

const getDeviceConfig = (width: number) => {
  if (width < 640) {
    return "xs";
  } else if (width >= 640 && width < 768) {
    return "sm";
  } else if (width >= 768 && width < 1024) {
    return "md";
  } else if (width >= 1024 && width < 1280) {
    return "lg";
  } else if (width >= 1280) {
    return "xl";
  }
};

const useBreakpoint = () => {
  const [breakPoint, setBreakPoint] = useState(() =>
    getDeviceConfig(window.innerWidth)
  );

  useEffect(() => {
    const innerWidth = throttle(() => {
      setBreakPoint(getDeviceConfig(window.innerWidth));
    }, 200);
    window.addEventListener("resize", innerWidth);
    return () => window.removeEventListener("resize", innerWidth);
  }, []);

  return breakPoint;
};
export default useBreakpoint;
