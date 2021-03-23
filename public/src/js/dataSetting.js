export const initMoney = (a, b, c, d, e, f, g) => {
  return [
    {
      type: 10,
      count: a,
    },
    {
      type: 50,
      count: b,
    },
    {
      type: 100,
      count: c,
    },
    {
      type: 500,
      count: d,
    },
    {
      type: 1000,
      count: e,
    },
    {
      type: 5000,
      count: f,
    },
    {
      type: 10000,
      count: g,
    },
  ];
};
export const myMoney = initMoney(3, 3, 4, 5, 6, 7, 4);
