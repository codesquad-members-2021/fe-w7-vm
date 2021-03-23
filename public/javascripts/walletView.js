export default class WalletView {
  constructor() {
    this.init();
  }

  init() {
    this.render();
    this.controllEventListener();
  }

  render() {
    const $wallet = document.querySelector('.wallet');

    const makeWalletHTML = () => {
      const currencyUnits = ['10', '50', '100', '500', '1000', '5000', '10000'];
      const walletInnerHTML = (unit) => {
        return `<li>
        <div class="currency-unit__${unit}">${unit}원</div>
       <div class="currency-unit__${unit}__count">0개</div>
         </li>
         `;
      };
      return `<ul class="wallet__currency-unit"> ${template(
        currencyUnits,
        walletInnerHTML
      )} </ul>
      <ul>
         <li class="wallet__total"><input type="text"></li>
      </ul>`;
    };

    const template = (data, innerHTML) => {
      const html = data.map((unit) => innerHTML(unit)).join(' ');
      return html;
    };

    const html = makeWalletHTML();

    this.setValueOnDom($wallet, html);
  }

  controllEventListener() {
    const $walletInput = document.querySelector('.wallet__total input');
    $walletInput.addEventListener('click', () => {
      debugger;
    });
  }

  setValueOnDom(domClass, htmlTemplate) {
    domClass.innerHTML = htmlTemplate;
  }
}
