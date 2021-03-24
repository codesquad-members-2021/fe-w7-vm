// 돈을 뱉는다라는 함수를 실행시키기만 하면 됨.
// moneyPocket을 하나씩 리턴해주는 함수..

// 메시지 업데이트 함수 불러와서 사용
// 버튼을 누를때 만의 상태를 다뤄야한다
// 눌렀을때 이벤트만 전달
// 타입 메소드 아이템 
// 리턴 버튼이 눌렸을때 타입이 뭐야 ? 이 타입은 미리 정해놓은 함수를 실행시키는 거야
// 객체지향의 사실과 오해...필독서....
// 하나의 컴포넌트는 해당 컴포넌트의 일만 해줘야 한다.

class ReturnButtonPresentational {
    constructor({ $target }) {
        this.$target = $target

        this.render(this.$target)
    }

    addEvent() {
        // 버튼 클릭 시 moneyPocket 반환 함수 실행
        this.$target.querySelector(".return-button").addEventListener("click", function () { })
    }

    render($target) {
        $target.innerHTML = "";

        const $returnButton = `
            <button class="return-button">반환</button>
        `

        $target.insertAdjacentHTML("beforeend", $returnButton)
    }

}

export default ReturnButtonPresentational