"use strict";

/**
 * @preserve nowait (c) KNOWLEDGECODE | MIT
 */
window.nowait = window.setImmediate || function () {
  var channel = Math.random().toString(36).slice(2);
  var handlers = [];
  window.addEventListener('message', function (evt) {
    if (evt.origin === location.origin && evt.data === channel && handlers.length) {
      handlers.shift()();
      evt.stopImmediatePropagation();
    }
  }, {
    capture: true,
    passive: true
  });
  return function (fn) {
    handlers[handlers.length] = fn;
    window.postMessage(channel, location.origin);
  };
}();
