# Frontend Mentor - Single price grid component solution

This is a solution to the [Single price grid component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
    -   [Useful resources](#useful-resources)
-   [Author](#author)
-   [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the component depending on their device's screen size
-   See a hover state on desktop for the Sign Up call-to-action

### Screenshot

 -1)Single price grid desktop view
   [./design/single-price-grid-desktop-view.png]

 -2)Single price grid mobile view
   [./design/single-price-grid-mobile-view.png]

### Links

-   Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   CSS Grid
-   Mobile-first workflow
-   Bootstrap

### What I learned

While working on these challenge i have learned flexbox, positions, Make two background image as cover, HTML Semantic element, CSS grid and Media queries.

```html
<div class="gird-container shadow">
  <div class="item1">
    <h5 class="main-heading">Join our community</h5>

    <p class="sub-heading">30-day, hassle-free money back guarantee</p>

    <small class="main-content">Gain access to our full library of tutorials along with expert code reviews.
      Perfect for any developers who are serious about honing their skills.</small>


  </div>
  </div>
```

```css
@media screen and (min-width: 1025px) {
  body{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
  }
  .gird-container {
    display: grid;
    grid-template-columns:50% 50%;
    grid-template-rows: 45% 55%;
    width: 50rem;
    height:36rem;
  }
}
```

### Continued development

The area i need to more focus and learn in CSS, HTML and Bootstrap are:

   1)transform
   2)translate
   3)pseudo-elements
   4)HTML Semantic where i need to use it
   5)float
   6)grid
   7)Bootstrap Utilities
   8)Bootstrap Components
   9)Bootstrap Layout

### Useful resources

- [resource 1](https://developer.mozilla.org/en-US/) - This helped me for all CSS and HTML syntax. I really liked this pattern and will use it going forward.

- [resource 2](https://getbootstrap.com/docs/5.1/getting-started/introduction/) - This is an amazing documentation by bootstrap which helped me finally understand how to minimise the use of css and to make the page responsive in all devices.

## Author

- github- [@Shanib-Ibrahim](https://github.com/shanib-ibrahim)
- Frontend Mentor - [@shanib-ibrahim](https://www.frontendmentor.io/profile/shanib-ibrahim)

## Acknowledgments

I would recommend everyone thier to get start with frontend mentor Challenge as soon as possible.A good website for beginners to learn CSS, HTML and Bootstrap.
