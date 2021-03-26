class ReturnButtonPresentational {
	constructor({ $target, buttonStatus, reset }) {
		this.render($target, buttonStatus, reset)
	}

	addEvent($target, reset) {
		$target.querySelector(".return-button").addEventListener("click", () => reset())
	}

	render($target, buttonStatus, reset) {
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
		this.addEvent($target, reset);
	}

	// 라이프 사이클
	// mount() {}

}

export default ReturnButtonPresentational