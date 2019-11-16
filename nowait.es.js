/**
 * @preserve nowait (c) KNOWLEDGECODE | MIT
 */

export default queueMicrotask || (fn => Promise.resolve().then(fn));
