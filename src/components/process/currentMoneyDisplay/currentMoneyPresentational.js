//여기서 상태를 변경해줘야 하는 것이 필요할까??
//현재돈 모델은 현재돈만 관리해주면 된다
//여기서 거스름돈을 계산해주는게 맞을까?

class CurrentPresentational {
    constructor({ $target, currentMoney }) {
        this.render($target, currentMoney)
    }

    render($target, currentMoney) {
        $target.innerHTML = "";

        const $currentMoney = `
            <span class="current-money">${currentMoney} 원</span>
        `;

        $target.insertAdjacentHTML("beforeend", $currentMoney)
    }
}

export default CurrentPresentational