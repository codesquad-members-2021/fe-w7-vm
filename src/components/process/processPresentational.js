import CurrentMoneyPresentational from "./currentMoneyDisplay/currentMoneyPresentational.js";
import ReturnButtonPresentational from "./returnButton/returnButtonPresentational.js"
import MessagesPresentational from "./messages/messagesPresentational.js"

class ProcessPresentational {
	constructor({ $target, currentMoney, reset, messages, buttonStatus }) {
		this.presentationals = null;

		this.render($target, currentMoney, reset, messages, buttonStatus)
	}

	render($target, currentMoney, reset, messages, buttonStatus) {
		console.log($target)

		const $wrap_process = document.createElement("section");
		$wrap_process.className = "wrap-process";

		$target.appendChild($wrap_process)

		this.presentationals = {
			currentMoney: new CurrentMoneyPresentational({
				$target: $wrap_process,
				currentMoney
			}),
			returnButton: new ReturnButtonPresentational({
				$target: $wrap_process,
				buttonStatus,
				reset
			}),
			messages: new MessagesPresentational({
				$target: $wrap_process,
				messages
			})
		}
	}
}

export default ProcessPresentational;

// handle[함수][상태]
// 컨테이너의 함수
/* const handleSubmitMoneyInput */
/* const handleClickReturnButton */

// 돔을 다루는 프레젠테이셔널 의 함수
/* const onClickReturnButton */
/* const onSubmitMoneyInput */