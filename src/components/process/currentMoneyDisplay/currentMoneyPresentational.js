class CurrentMoneyPresentational {
	constructor({ $target, currentMoney }) {
		this.render($target, currentMoney)
	}

	render($target, currentMoney) {

		const $currentMoney_section = document.createElement("section");
		$currentMoney_section.className = "current-money-section";

		$target.appendChild($currentMoney_section)

		const $currentMoney = `
            <span class="current-money">${currentMoney} 원</span>
        `;

		$currentMoney_section.insertAdjacentHTML("beforeend", $currentMoney)
	}
}

export default CurrentMoneyPresentational