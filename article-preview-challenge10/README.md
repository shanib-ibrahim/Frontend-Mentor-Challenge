# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

-1)article preview desktop view

[./design/article-preview-desktop-view.png]

-2)article preview mobile view

[./design/article-preview-mobile-view.png]

### Links

- Solution URL: (https://github.com/shanib-ibrahim/Frontend-Mentor-Challenge/edit/main/article-preview-challenge10)
- Live Site URL: (https://shanib-ibrahim.github.io/Frontend-Mentor-Challenge/article-preview-challenge10/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- SASS - CSS Preprocessor
- Javascript

### What I learned

While working on these challenge i have learned SASS function , variables , mixins , ampersand , Media queries using mixins and JS DOM Manipulations.

```html
<div class="main__content--shareDetails hidden">
  <p>share</p>
  <ul>
    <li>
      <a class="social-icon" href="#"
        ><img src="./images/icon-facebook.svg" alt=""
      /></a>
    </li>
    <li>
      <a class="social-icon" href="#"
        ><img src="./images/icon-twitter.svg" alt=""
      /></a>
    </li>
    <li>
      <a class="social-icon" href="#">
        <img src="./images/icon-pinterest.svg" alt="" />
      </a>
    </li>
  </ul>
  <div class="arrow-down"></div>
</div>
```

```SCSS
 &--shareDetails {
        background-color: $share-bg;
        display: flex;
        align-items: center;
        width: 100%;
        height: 4.6rem;
        padding: 1rem 1rem 1rem 2rem;
        color: #fff;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 2;
        font-size: 12px;
        p {
            letter-spacing: 0.5rem;
            text-transform: uppercase;
            color: $secondary-color;
        }
        ul li {
            display: inline-block;
            margin-left: 0.8rem;
        }
        .social-icon {
            @include transition-ease(all);
        }
        .social-icon:hover,
        .social-icon:active {
            mix-blend-mode: overlay;
        }
    }
```

```js
"use strict";

const shareButton = document.querySelector(".main__content--shareImage");

const shareView = document.querySelector(".main__content--shareDetails");

const shareImage = document.querySelector(".main__content--shareImage");

shareButton.addEventListener("click", function () {
  shareView.classList.toggle("hidden");
  shareImage.classList.toggle("active");
});
```

### Continued development

The area i need to more focus and learn in SASS, HTML and Bootstrap are:

1)Sass Functions
2)Mixins
3)pseudo-elements
4)HTML Semantic where i need to use it
5)ampersand
6)grid
7)Modern Javascript

### Useful resources

- [resource 1](https://developer.mozilla.org/en-US/) - This helped me for all CSS , HTML and JS syntax. I really liked this pattern and will use it going forward.

- [resource 2](https://sass-lang.com/documentation) - This is an amazing documentation by Sass which helped me finally understand how to minimise the use of css and to make the page responsive in all devices.

## Author

- github- [@Shanib-Ibrahim](https://github.com/shanib-ibrahim)
- Frontend Mentor - [@shanib-ibrahim](https://www.frontendmentor.io/profile/shanib-ibrahim)

## Acknowledgments

I would recommend everyone thier to get start with frontend mentor Challenge as soon as possible.A good website for beginners to learn CSS, HTML , Sass and Javascript.
