# Frontend Mentor - Four card feature section solution

This is a solution to the [Four card feature section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

### Screenshot

-1)Four card feature section desktop view

   [./design/four-card-feature-section-desktop-view.png]

-2)Four card featuresection mobile view

   [./design/four-card-feature-section-mobile-view.png]

### Links

- Live Site URL: (https://shanib-ibrahim.github.io/Frontend-Mentor-Challenge/four-card-feature-section-challenge6/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Bootstrap
- Bootstrap grid
- Bootstrap card


### What I learned

While working on these challenge i have learned flexbox, positions, Make two background image as cover, HTML Semantic element, Bootstrap(grid,card) and Media queries.

```html
<div class="item1">
  <div class="card shadow">
    <div class="card-body">
      <h3 class="card-title">Supervisor</h3>
      <p class="card-text">Monitors activity to identify project roadblocks</p>
      <img src="./images/icon-supervisor.svg" alt="supervisor-icon">
    </div>
  </div>
</div>

<div class="item2">
  <div class="card shadow">
    <div class="card-body">
      <h3 class="card-title">Team Builder</h3>
      <p class="card-text">Scans our talent network to create the optimal team for your project</p>
      <img src="./images/icon-team-builder.svg" alt="supervisor-icon">
    </div>
  </div>


  <div class="card shadow">
    <div class="card-body">
      <h3 class="card-title">Karma</h3>
      <p class="card-text">Regularly evaluates our talent to ensure quality</p>
      <img src="./images/icon-karma.svg" alt="supervisor-icon">
    </div>
  </div>
</div>

<div class="item3">
  <div class="card shadow">
    <div class="card-body">
      <h3 class="card-title">Calculator</h3>
      <p class="card-text">Uses data from past projects to provide better delivery estimates</p>
      <img src="./images/icon-calculator.svg" alt="supervisor-icon">
    </div>
  </div>

</div>
</div>
```
```css
.item1 .card {
  border-top: solid 0.3125rem hsl(180, 62%, 55%);
}

.item2 .card:nth-child(1) {
  border-top: solid 0.3125rem hsl(0, 78%, 62%);
}

.item2 .card:nth-child(2){
  border-top: solid 0.3125rem hsl(34, 97%, 64%);
}

.item3 .card{
  border-top: solid 0.3125rem hsl(212, 86%, 64%);
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
