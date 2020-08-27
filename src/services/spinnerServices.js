


export function showSpinner() {
    const spinnerEvent = new CustomEvent('spinnerEvent', {detail: "open"});
    document.dispatchEvent(spinnerEvent)
}

export function hideSpinner() {
    const spinnerEvent = new CustomEvent('spinnerEvent', {detail: "close"});
    document.dispatchEvent(spinnerEvent)
}