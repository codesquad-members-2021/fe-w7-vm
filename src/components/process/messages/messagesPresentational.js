class MessagesPresentational {
	constructor({ $target, messages }) {
		this.render($target, messages);
	}

	render($target, messages) {
		const $messages_section = document.createElement("section");
		$messages_section.className = "messages-section";

		$target.appendChild($messages_section)

		messages.forEach((message) => {
			const $message = `
            <div class="message">${message}</div>
            `;
			$messages_section.insertAdjacentHTML("beforeend", $message)
		})
	}
}

export default MessagesPresentational