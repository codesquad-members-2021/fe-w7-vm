const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const createRandomNumber = (max, min = 0) => Math.floor(Math.random() * (max - min) + min);
const moneyComma = (num) => {
  const arr = num.toString().split('');
  const comma = arr.reduce((acc, cur, idx) => {
    if (idx % 3 === arr.length % 3) {
      cur = `,${cur}`;
    }
    acc += cur;
    return acc;
  });
  return comma;
};

const reRender = (childClassName, parentClassName, renderFn) => {
  $(childClassName).remove();
  $(parentClassName).insertAdjacentHTML('beforeEnd', renderFn());
};

export { $, $$, createRandomNumber, moneyComma, reRender };
