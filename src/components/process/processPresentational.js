class ProcessPresentational {
    constructor($target) {
        this.render($target);
    }

    render($target) {
        const $process = `
            <section class="process"></section>
        `;

        $target.insertAdjacentHTML("beforeend", $process)
    }
}

export default ProcessPresentational