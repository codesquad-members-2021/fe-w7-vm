export const _ = {
  $: (selector, element = document) => element.querySelector(selector),
  $$: (selector, element = document) => element.querySelectorAll(selector),
};

export const url = {
  prod: "http://localhost:9000/prod",
};

export const request = async (url) => {
  const data = await fetch(url);
  return data.json();
};

export const currency = {
  units: [10, 50, 100, 500, 1000, 5000, 10000],
};

export const NUMBERS = {
  INITNUM: 0,
  DEFAULTVALUE: 100000,
  BUYPRODUCT: 2000
};

export const getRandom = (value) => parseInt(Math.random().toFixed(2) * value + 1000);

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
