import { writable } from "svelte/store";

export const product = writable([]);
export const openMenu = writable(false);
export const currency = writable("$");
export const openCart = writable(false);
export const total = writable(0);
