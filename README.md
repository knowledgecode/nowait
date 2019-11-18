# nowait

This is a better async function than the `setTimeout(..., 0)` for the browser. It will execute the passed function asynchronously with the best way in supported by the running browser. The `setTimeout(..., 0)` will be used if there is no other better way.

## Installation

via npm:

```shell
npm install knowledgecode@nowait --save
```

## Usage

ES modules:

```javascript
import nowait from './dist/nowait.es.min.js';

nowait(fn);
```

Traditional:

```html
<script src="./dist/nowait.min.js"></script>
<script>
  nowait(fn);
</script>
```

## Browser support

Chrome, Android Chrome, Firefox, Safari, iOS Safari, Edge, IE
