# Buttons

A collection of CSS buttons.

[Live demo](https://labs.loupbrun.ca/buttons/).

## About This Project

My goal was to create a variety of stylish buttons for the web, using minimal markup while taking advantage of the HTML5/CSS3 technologies.

The collection includes 26 different button styles.

## Technical Details

Each style has been generated via a component-based system, using [SASS](http://sass-lang.com/) (a CSS preprocessor). The process is designed to make it easy and simple to create a new set of button styles in a modular fashion.

Ultimately, the **markup** is the same for each set of button style:

```html
<button class="btn btn-primary">Button</button>
```

where class `.btn` is the **generic component class** and `.btn-primary` is the **style-specific class**.

Leveraging the power of [SASS mixins](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#mixins), each style is generated simply by taking a color as an input. For the `alpha` style, it looks like this:

```scss
// Assuming the color variable has been declared, like so:
// $color-primary: #7AD84E
.btn-primary { @include btn-alpha($color-primary); }
```

## How To DIY _(Develop It Yourself)_

The project comes with a simple Grunt setup to compile the `SCSS` to the `main.css` found in root (but feel free to use your own tools). Requires [Node.js](https://nodejs.org) and the [`grunt-cli`](https://gruntjs.com/). Pretty standard these days.

### Setup

```bash
npm i -g grunt-cli # install the grunt-cli
npm i # install local packages
```

### Build

```bash
grunt # build those stylesheets
```

### Development: Watch & Rebuild

```bash
grunt dev
```

## Final Thoughts

Like any bit of UI, buttons should never be dull. Attention to detail is key in a design with sensibiilty.

Say hello, share your ideas or send me your thoughts to `louis` at `loupbrun` dot `ca`.

## Elsewhere On The Web

I’m trying to backtrack articles on the web that refer to this project.

- Codrops - [Collective #313](https://tympanus.net/codrops/collective/collective-313/)  
  > A collection of interesting button styles by Louis-Olivier Brassard.
- Speckyboy Web Design Magazine - [10 Amazing CSS Button Libraries & Collections](https://speckyboy.com/css-button-libraries/) 
  > The title may be simple, but Buttons is a library with over 20 collections of styles to choose from. Standouts include the slightly-glassy Delta, the fun and sassy Theta, the roomy and minimal Mu and keyboard-like Phi. Be sure to check out the ultra-cool click effects in the demo.
- Ric’s Website - [Best Free CSS Tools](https://ric.website/best-free-css-tools/)  
  > Get outstanding CSS buttons [here](https://labs.loupbrun.ca/buttons/) _\[points to my website\]_
- WPMU Dev - [9 Stunning CSS Button Libraries and Collections for WordPress](https://premium.wpmudev.org/blog/css-button-libraries-collections/)  
  > This collection of CSS buttons is so chockfull of personality, you might not be able to pull your gaze away (or your visitors’!). They’ve included such a diverse range of button styles and animations that you could realistically use this pack of buttons for use across multiple client sites and no one would be the wiser. This collection would also come in handy for A/B testing CTAs as well as tackling future rebrand projects that don’t need to deviate too far from the baseline design.
- Coliss - [Summary of HTML5 and CSS3 techniques for implementing buttons of various designs with minimal HTML](https://coliss.com/articles/build-websites/operation/css/collection-of-css-button.html)
- WHIZ Lists - [Web Design (Index)](http://whiz-lab.com/index.php/front_end/index/1)
- SeleQt - [CSSボタンのコレクション８選 (#2)](https://www.seleqt.net/design/awesomecssbuttonlibrariesandcollections/)
- roocket.ir - [50 tools, frameworks and CSS libraries in 2019](https://roocket.ir/articles/50-tools-frameworks-and-csas-library-in-2019)
- design.webclips.jp - [CSSで実装するボタンデザインとホバーエフェクトのアイデア](https://design.webclips.jp/css-button/)
- Anatomy - [A Japanese questionnaire crediting these Buttons](https://anatomy.med.gunma-u.ac.jp/?page_id=3327)

## License

[MIT](LICENSE)
