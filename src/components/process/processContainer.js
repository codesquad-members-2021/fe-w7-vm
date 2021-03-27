import ProcessPresentational from "./processPresentational.js"
import { useSelector, useSubscribe, useDispatch } from "../../util/store/useStore.js";
import * as ACTION from "../../util/enums/action.js";
import { addMoney } from "../../util/actions/wallet.js";
import "./scss/styles.scss"

class ProcessContainer {
	constructor({ $target }) {

		this.timer;
		this.moneyPocket = [];
		this.currentMoney = 0;
		this.messages = [];
		this.buttonStatus = false;

		this.presentationals = null;
		this.dispatch = useDispatch("wallet");

		// process 이니셜라이즈
		this.$process = document.createElement("section");
		this.$process.className = "process";
		$target.appendChild(this.$process);
		this.setState({ type: "INIT" });


		let subscribe = useSubscribe("goods");
		subscribe(ACTION.OUT_ITEM, (payload) => {
			this.setState({
				type: "SELECT_GOODS",
				method: "select",
				item: { name: payload.korean, price: payload.price }
			})
		})

		subscribe = useSubscribe("wallet");
		subscribe(ACTION.OUT_MONEY, (volume) => {
			this.setState({
				type: "CHANGE_CASH",
				method: "put",
				item: { volume }
			})
		})
	}

	setState(state) {
		// 메시지 업데이트
		this.updateMessage(state);

		// 상태 변경 
		switch (state.type) {
			case "CHANGE_CASH":
				if (state.method === "put") {
					this.moneyPocket.push(state.item.volume);
					this.currentMoney += state.item.volume;
				}
				else if (state.method === "return") {
					this.currentMoney -= state.item.volume;
					if (this.currentMoney === 0) {
						this.updateMessage(state);
					}
					this.dispatch(
						addMoney({ [state.item.volume]: state.item.volume })
					)
				}

			case "SELECT_GOODS":
				if (state.method === "select") {
					this.currentMoney -= state.item.price;
					this.moneyPocket = this.makeChange(this.currentMoney);
				}
				break;
			default:
				new Error(`${state.type} || ${state.method} is undefined`);
				break;
		}

		// currentMoney에 따른 컴포넌트 인터렉션 제어
		this.handleInteraction({ target: this.currentMoney });
		// 상태 변경 후 리렌더링
		this.render();
	}

	handleInteraction({ target }) {
		if (target === 0) {
			this.buttonStatus = true;
		} else {
			this.buttonStatus = false;
			this.debouncer(this.handleReturnButton.bind(this), 5000)
		}
	}

	debouncer(fn, ms) {
		clearTimeout(this.timer);
		this.timer = setTimeout(() => fn(), ms);
	}

	updateMessage(state) {
		this.messages.push(this.selectMessage(state));
	}

	selectMessage(state) {
		switch (state.type) {
			case "INIT":
				return `-- Vending Machine is on --`

			case "CHANGE_CASH":
				if (state.method === "put") {
					return `${state.item.volume}원이 투입 되었습니다.`
				}
				else if (state.method === "return") {
					if (this.currentMoney === 0) { return `투입된 금액이 없습니다.` }
					return `잔돈 ${state.item.volume}원이 반환 되었습니다.`
				}
				break;

			case "SELECT_GOODS":
				if (state.method === "select") {
					return `${state.item.name} 선택 하셨습니다.`
				}
				break;

			default:
				new Error(`${state.type} || ${state.method} || ${state.item} is undefined`)
				break;
		}
	}

	handleReturnButton() {
		const shiftedCoin = this.moneyPocket.shift();

		const state = {
			type: "CHANGE_CASH",
			method: "return",
			item: { volume: shiftedCoin }
		};

		this.setState(state);

		if (this.moneyPocket.length > 0) {
			this.handleReturnButton();
		}
	}

	makeChange(currentMoney) {
		const currentMoneyArr = currentMoney.toString().split("").reverse();
		let zero = "";
		let change = [];

		for (let i = 0; i < currentMoneyArr.length; i++) {
			const share = parseInt(currentMoneyArr[i] / 5);
			const rest = parseInt(currentMoneyArr[i] % 5);

			const fiveMoney = (share + zero) * 5;
			const oneMoney = [];

			for (let j = 0; j < rest; j++) {
				if (rest === 0) break;
				oneMoney.push(Number(1 + zero))
			}

			change.push(fiveMoney);
			oneMoney.forEach(v => change.push(v));
			zero += "0";
		}
		change = change.filter(v => v !== 0)
		return change
	}

	/* 
	 - this.currentMoney가 0초과일때
	 timer가 돌고 5초 뒤에 returnButton을 굴리는 함수를 실행시킨다.
	 5초뒤에 dispatch 실행
	*/

	render() {
		this.$process.innerHTML = "";

		this.presentationals = {
			process: new ProcessPresentational({
				$target: this.$process,
				currentMoney: this.currentMoney, // 머니 컴포넌트 상태
				messages: this.messages, // 메세지 컴포넌트 상태
				buttonStatus: this.buttonStatus, // 버튼 컴포넌트 상태
				onClickReturnButton: this.handleReturnButton.bind(this)
			})
		}
	}
}

export default ProcessContainer;