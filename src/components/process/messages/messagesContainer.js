import MessagesPresentational from "./messagesPresentational.js"

class MessagesContainer {
    constructor({ $target, state }) {
        this.$target = $target;
        this.messages = [];

        this.presentationals = null;

        this.setState(state)
    }

    setState(state) {
        this.updateMessage(state)
        this.render();
    }

    updateMessage(state) {
        this.messages.push(
            this.selectMessage(state)
        );
    }

    selectMessage(state) {
        switch (state.type) {
            case "default":
                // clear되는 시점을 언제로 잡을지 고민필요
                this.clearMessage();
                return `자판기 시작`
            case "cash":
                if (state.method === "put") {
                    return `${item}원이 투입 되었습니다.`
                }
                else if (state.method === "return" || state.method === "take") {
                    return `잔돈 ${item}원이 반환 되었습니다.`
                }
                break;
            case "goods":
                if (state.method === "selected") {
                    return `${state.item} 선택 하셨습니다.`
                }
                break;
            default:
                new Error(`${state.type} || ${state.method} is undefined`)
                break;
        }
    }

    clearMessage() {
        this.$target.innerHTML = "";
    }

    render() {
        this.presentationals = new MessagesPresentational({
            $target: this.$target,
            messages: this.messages
        })
    }
}

export default MessagesContainer;