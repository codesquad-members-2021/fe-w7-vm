let coin = [
  {
    unit: 10,
    cnt: 0,
  },
  {
    unit: 50,
    cnt: 1,
  },
  {
    unit: 100,
    cnt: 5,
  },
  {
    unit: 500,
    cnt: 5,
  },
  {
    unit: 1000,
    cnt: 2,
  },
  {
    unit: 5000,
    cnt: 2,
  },
  {
    unit: 10000,
    cnt: 1,
  },
];

function rendomfun() {
  return ~~(10 * Math.random());
}

let Rendomcoin = (defaultCoin) => {
  defaultCoin.map((v) => (v.cnt = rendomfun()));
};

Rendomcoin(coin);

export default coin;
