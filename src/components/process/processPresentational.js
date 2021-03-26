import CurrentMoneyPresentational from "./currentMoneyDisplay/currentMoneyPresentational.js";
import ReturnButtonPresentational from "./returnButton/returnButtonPresentational.js"
import MessagesPresentational from "./messages/messagesPresentational.js"

class ProcessPresentational {
	constructor({ $target, currentMoney, messages, buttonStatus, onClickReturnButton }) {
		this.presentationals = null;

		this.render($target, currentMoney, messages, buttonStatus, onClickReturnButton)
	}

	render($target, currentMoney, messages, buttonStatus, onClickReturnButton) {

		this.presentationals = {
			currentMoney: new CurrentMoneyPresentational({ $target, currentMoney }),
			returnButton: new ReturnButtonPresentational({ $target, buttonStatus, onClickReturnButton }),
			messages: new MessagesPresentational({ $target, messages })
		}
	}
}

export default ProcessPresentational;