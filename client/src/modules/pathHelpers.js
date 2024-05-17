import { BASENAME } from "./config/settings";

export const getPathname = () => {
  return window.location.pathname.replace(BASENAME.slice(0, -1), "");
};

export const setPathname = (pathname) => {
  if (pathname.startsWith("/") && BASENAME.length > 0) {
    pathname = pathname.slice(1);
  }
  window.location.pathname = `${BASENAME}${pathname}`;
};
