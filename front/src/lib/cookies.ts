import Cookies from "js-cookie";

export const setCookie = (key: string, value: string) => {
  Cookies.set(key, value, {
    expires: 7,
    path: "/",
    secure: true,
    sameSite: "Strict",
  });
};

export const getCookie = (key: string) => {
  return Cookies.get(key);
};
