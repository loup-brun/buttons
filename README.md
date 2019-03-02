# Buttons

A collection of CSS buttons.

[Live demo](https://labs.loupbrun.ca/buttons/).

## About this project

My goal was to create a variety of stylish buttons for the web, using minimal markup while taking advantage of the HTML5/CSS3 technologies.

The collection includes 26 different button styles.

Each style has been generated via a component-based system, using [SASS](http://sass-lang.com/) (a CSS preprocessor). The process is designed to make it easy and simple to create a new set of button styles in a modular fashion.

Ultimately, the **markup** is the same for each set of button style:

```html
<button class="btn btn-primary">Button</button>
```

where class `.btn` is the generic component class and `.btn-primary` is the style-specific class.

Leveraging the power of SASS [mixins](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#mixins), each style is generated simply by taking a color as an input. For the `alpha` style, it looks like this:

```scss
// Assuming the color variable has been declared, like so:
// $color-primary: #7AD84E
.btn-primary { @include btn-alpha($color-primary); }
```

## How to develop

The project comes with a simple Grunt setup to compile the `SCSS` to the `main.css` found in root, but feel. Requires [Node.js](https://nodejs.org) and the [`grunt-cli`](https://gruntjs.com/). Pretty standard these days.

### Setup

```bash
npm i -g grunt-cli # install the grunt-cli
npm i # install local packages
```

### Build

```bash
grunt # build those stylesheets
```

### Development: watch & rebuild

```bash
grunt dev
```

## Final thoughts

Like any bit of UI, buttons should never be dull. Attention to detail is key in a design with sensibiilty.

Say hello, share your ideas or send me your thoughts to `louis` at `loupbrun` dot `ca`.
