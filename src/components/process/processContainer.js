import ProcessPresentational from "./processPresentational.js"
import { useSelector, useSubscribe, useDispatch } from "../../util/store/useStore.js";
import * as ACTION from "../../util/enums/action.js";
import { addMoney } from "../../util/actions/wallet.js";
import "./scss/styles.scss"

class ProcessContainer {
	constructor({ $target }) {
		this.moneyPocket = [];
		this.currentMoney = 0;
		this.messages = [];
		this.buttonStatus = false;
		this.presentationals = null;

		// process 이니셜라이즈
		this.$process = document.createElement("section");
		this.$process.className = "process";
		$target.appendChild(this.$process);
		this.setState({ type: "INIT" });

		this.dispatch = useDispatch("wallet");
		let subscribe = useSubscribe("goods");

		subscribe(ACTION.OUT_ITEM, (payload) => {
			this.setState({
				type: "SELECT_GOODS",
				method: "select",
				item: { name: payload.korean, price: payload.price }
			})
		})
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
					this.moneyPocket.push(state.item);
					this.currentMoney += state.item;
				}
				else if (state.method === "return") {
					this.currentMoney -= state.item;
					// this.dispatch(addMoney(state.item.volume))
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

		if (this.currentMoney === 0) {
			this.buttonStatus = true;
		} else {
			this.buttonStatus = false;
		}
		// 상태 변경 후 리렌더링
		this.render();
	}

	updateMessage(state) {
		this.messages.push(this.selectMessage(state));
	}

	selectMessage(state) {
		switch (state.type) {
			case "INIT":
				this.currentMoney = 0;
				return `-- PPAMPPAM & SWING Vending Machine is on --`

			case "CHANGE_CASH":
				if (state.method === "put") {
					return `${state.item}원이 투입 되었습니다.`
				}
				else if (state.method === "return") {
					// if (this.currentMoney < 0) { return `자판기 종료` }
					return `잔돈 ${state.item}원이 반환 되었습니다.`
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
			item: shiftedCoin
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