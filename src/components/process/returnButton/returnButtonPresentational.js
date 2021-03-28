class ReturnButtonPresentational {
	constructor({ $target, buttonStatus, onClickReturnButton }) {
		this.render($target, buttonStatus, onClickReturnButton)
	}

	addEvent($target, onClickReturnButton) {
		$target.querySelector(".return-button").addEventListener("click", () => onClickReturnButton())
	}

	render($target, buttonStatus, onClickReturnButton) {
		const $returnButton_section = document.createElement("section");
		$returnButton_section.className = "return-button-section";

		$target.appendChild($returnButton_section)

		let $returnButton;
		if (buttonStatus) {
			$returnButton = `<button class="return-button" disabled>반환</button>`;
		} else {
			$returnButton = `<button class="return-button">반환</button>`;
		}
		$returnButton_section.insertAdjacentHTML("beforeend", $returnButton);
		// 라이프사이클 mounted
		this.addEvent($target, onClickReturnButton);
	}

}

export default ReturnButtonPresentational