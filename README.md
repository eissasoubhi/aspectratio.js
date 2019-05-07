# aspectratiojs
This script recalculate a div element height (or any element with block display) to behave like the img tag when resizing the tab horizontally, thus keeping the width-height aspect ratio of the element.

![Demo](/demo.gif)

## Requirements

- JQuery

## Usage

```html
<div class="aspectratio" data-ar-width="1200" data-ar-height="200"></div>
```
The aspect ratio of this div will be always kept to 1200x200 pixels by recalculating the div height whenever the browser tab is resized.

`data-ar-width` and `data-ar-height` are the aspect ratio the calculation is based on.

By setting the attribute `data-ar-full_width` to false, `data-ar-width` and `data-ar-height` becomes also the maximum width and height of the element in question.

```html
<div class="aspectratio" data-ar-width="1200" data-ar-height="200" data-ar-full_width="false"></div>
```

## Example 

See the **index.html** file or the demo here: https://eissasoubhi.github.io/aspectratio.js/
