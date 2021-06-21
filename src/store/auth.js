import { atom } from "recoil";

export const authStore = atom({
  key: "authStore",
  default: localStorage.getItem("token"),
});

export const userStore = atom({
  key: "userStore",
	default: null,
});
