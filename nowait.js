/**
 * @preserve nowait (c) KNOWLEDGECODE | MIT
 */

self.nowait = queueMicrotask || setImmediate || (function () {
    'use strict';

    if (Promise) {
        return function (fn) {
            Promise.resolve().then(fn);
        };
    }
    if (requestAnimationFrame) {
        return function (fn) {
            requestAnimationFrame(fn);
        };
    }
    return function (fn) {
        setTimeout(fn, 0);
    };
}());
