import ProcessPresentational from "./processPresentational.js"
import currentMoneyPresentational from "./currentMoneyDisplay/currentMoneyPresentational.js";
import ReturnButtonPresentational from "./returnButton/returnButtonPresentational.js"
import MessagesContainer from "./messages/messagesContainer.js"

class ProcessContainer {
    constructor({ $target, state }) {
        this.$target = $target;
        this.initialState = state;
        this.messagesContainer = MessagesContainer;
        this.moneyPocket = [];
        this.currentMoney = null;

        this.components = null;
        this.presentationals = null;

        this.setState(state)
        // this.setState({ type, method, item });
        // 질문 : state를 이렇게 주는 것도 괜찮은가?
    }

    setState(state) {
        switch (state.type) {
            case "default":
                this.messagesContainer.setState(state)
                break;
            case "cash":
                if (state.method === "put") {
                    this.moneyPocket.push(item);
                    this.currentMoney += this.moneyPocket;
                }
                else if (state.method === "take") {
                    const coin = this.moneyPocket.shift(item);
                    this.currentMoney -= coin;
                }
                this.messagesContainer.setState(state)
                break;

            case "goods":
                if (state.method === "selected") {
                    this.messagesContainer.setState(state)
                    this.moneyPocket = this.changeMoney({
                        currentMoney: this.currentMoney,
                        price: item.price
                    });
                    this.currentMoney = 0;
                    this.currentMoney += this.moneyPocket.reduce((acc, curr) => acc + curr, 0)
                }
                break;

            default:
                new Error(`${state.type} || ${state.method} is undefined`);
                break;
        }
        // 상태 변경 후 리렌더링
        this.render();
    }

    changeMoney({ currentMoney, price }) {
        const change = currentMoney - price;
        //거스름돈 알고리즘
    }

    render() {
        const $currentMoney = document.createElement("section");
        $currentMoney.className = "current-money-section";

        const $returnButton = document.createElement("section");
        $returnButton.className = "return-button-section";

        const $messages = document.createElement("section");
        $messages.className = "messages-section";

        const elements = [$currentMoney, $returnButton, $messages];

        elements.forEach((element) => this.$target.appendChild(element))

        // 의문 : 초기 state를 뭘로 주어야 할까?
        this.components = {
            messages: new MessagesContainer({
                $target: $messages,
                state: this.initialState
            })
        };

        this.presentationals = {
            process: new ProcessPresentational({
                $target: this.$target
            }),
            currentMoney: new currentMoneyPresentational({
                $target: $currentMoney,
                currentMoney: this.currentMoney
            }),
            returnButton: new ReturnButtonPresentational({
                $target: $returnButton
            })
        }
    }
}

export default ProcessContainer;