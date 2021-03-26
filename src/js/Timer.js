import { NUMBERS } from "./variables.js";
import { _ } from "./utils.js";

export default class Timer {
  constructor(target) {
    this.count = 0;
    this.target = target;
    this.timerHtml = null;
  }

  init(walletModel) {
    this.render();
    this.timerHtml = _.$(".timer");
    setInterval(() => {
      if (this.count >= NUMBERS.TERM) {
        walletModel.returnBalance();
        this.count = 0;
        this.timerHtml.classList.add("hidden");
        return;
      }
      this.timerHtml.innerText = ++this.count;
    }, NUMBERS.INITMS);
  }

  render() {
    this.target.insertAdjacentHTML("beforeend", "<div class='timer hidden'></div>");
  }
}
