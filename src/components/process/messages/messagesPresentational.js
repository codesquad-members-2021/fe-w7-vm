class MessagesPresentational {
    constructor({ $target, messages }) {
        this.render($target, messages);
    }

    render($target, messages) {
        const $messages = `
            <div class="message">${messages}</div>
        `;

        $target.insertAdjacentHTML("beforeend", $messages)
    }
}

export default MessagesPresentational