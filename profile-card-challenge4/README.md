# Frontend Mentor - Profile card component solution

This is a solution to the [Profile card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

## Overview

### The challenge

- Build out the project to the designs provided

### Screenshot

-1)profile card desktop view
   [./design/profile-card-desktop-view.png]

-2)profile card mobile view
   [./design/profile-card-mobile-view.png]

### Links

- Live Site URL: (https://shanib-ibrahim.github.io/Frontend-Mentor-Challenge/profile-card-challenge4/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Z-index

### What I learned

While working on these challenge i have learned flexbox, positions, Make a div background image as cover, HTML Semantic element, Media queries and z-index.

```html
<header class='bg-top'> </header>
```
```css
.bg-bottom {
  background-image: url("../images/bg-pattern-bottom.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 30rem 23rem;
  position: absolute;
  right: 0;
  bottom: 0;
  height: 700px;
  width: 700px;
  overflow: hidden;
  z-index: 2;
}
@media screen and (min-width: 1025px) {

  .bg-bottom {
    background-position:0;
    right: -15rem;
    bottom: -35rem;
    height: 1000px;
    width: 1000px;

  }


}
```


### Continued development

The area i need to more focus and learn in CSS and HTML are:

   1)transform
   2)translate
   3)pseudo-elements
   4)HTML Semantic where i need to use it
   5)float
   6)grid

### Useful resources

- [resource 1](https://developer.mozilla.org/en-US/) - This helped me for all CSS and HTML syntax. I really liked this pattern and will use it going forward.

## Author

- github- [@Shanib-Ibrahim](https://github.com/shanib-ibrahim)
- Frontend Mentor - [@shanib-ibrahim](https://www.frontendmentor.io/profile/shanib-ibrahim)



## Acknowledgments

I would recommend everyone thier to get start with frontend mentor Challenge as soon as possible.A good website for beginners to learn CSS and HTML.
