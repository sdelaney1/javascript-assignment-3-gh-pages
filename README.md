# Javascript Assignment #3

This assignment will be covering [`while`] loops, [`do...while`] loops, [creating new HTML elements][createElement], and [appending HTML elements][appendChild] to an HTML file via Javascript.

## Assignment

1. [Fork this repo][fork].

1. Only code inside the file named `script.js`. No editing any other files.

1. Create a `div` element with a class name of "**view**" and append it to the document `body`.

1. Create a `div` element with a class name of "**grass**" and append it to the previously created "view" div from step 3.

1. Create a `div` element with a class name of "**sun**" and append it to the previously created "view" div from step 3.

1. Write a [`while`] loop to create 5 divs. The div classes will be "**ray-1**", "**ray-2**", "**ray-3**", "**ray-4**", and "**ray-5**". Append each of these divs to the previously created "sun" div from step 5.

1. Create a `div` element with a class name of "**mountain**" and append it to the previously created "view" div from step 3.

1. Create a `div` element with a class name of "**mountain-top**" and append it to the previously created "mountain" div from step 7.

1. Write a [`do...while`] loop to create 3 divs. The div classes will be "**mountain-cap-1**", "**mountain-cap-2**", and "**mountain-cap-3**". Append each of these divs to the previously created "mountain-top" div from step 8.

### What the HTML should look like when you're done.

Remember, you're producing this HTML using JS. You cannot edit any file other than the `script.js` file.

```HTML
<div class="view">
    <div class="grass"></div>
    <div class="sun">
        <div class="ray-1"></div>
        <div class="ray-2"></div>
        <div class="ray-3"></div>
        <div class="ray-4"></div>
        <div class="ray-5"></div>
    </div>

    <div class="mountain">
        <div class="mountain-top">
            <div class="mountain-cap-1"></div>
            <div class="mountain-cap-2"></div>
            <div class="mountain-cap-3"></div>
        </div>
    </div>
</div>
```

### The HTML page should produce an image like so:

![output](output.png)

[`while`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
[`do...while`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while
[createElement]: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
[appendChild]: https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
[fork]: https://github.com/karbassi-id/javascript-assignment-3/fork
