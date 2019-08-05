/**
 * @preserve nowait (c) KNOWLEDGECODE | MIT
 */
window.nowait = window.setImmediate || (() => {
    const channel = Math.random().toString(36).slice(2);
    const handlers = [];

    window.addEventListener('message', evt => {
        if (evt.origin === location.origin && evt.data === channel && handlers.length) {
            handlers.shift()();
            evt.stopImmediatePropagation();
        }
    }, { capture: true, passive: true });

    return fn => {
        handlers[handlers.length] = fn;
        window.postMessage(channel, location.origin);
    };
})();
