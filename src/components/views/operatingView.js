export default class OperatingView {
  renderInsertMoney() {
    return `
    <div class="operating--window__container">
      <form class="navbar-form insert--money__form" role="search">
        <div class="form-group form-group-div">
          <input type="text" class="form-control insert--money__input" placeholder="원">
        </div>
        
      </form>
    </div>
      `;
  }

  renderExtraMoneyButton() {}

  renderOperatingWindow() {}

  getOperatingInfo() {}
}
