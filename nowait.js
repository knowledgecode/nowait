/**
 * @preserve nowait (c) KNOWLEDGECODE | MIT
 */

(function (global) {
    'use strict';

    global.nowait = queueMicrotask || setImmediate || (function () {
        if (Promise) {
            return function (fn) {
                Promise.resolve().then(fn);
            };
        }
        return function (fn) {
            setTimeout(fn, 0);
        };
    }());

}(this));
