# Frontend Mentor - Social proof section solution

This is a solution to the [Social proof section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- View the optimal layout for the section depending on their device's screen size

### Screenshot

-1)Social proof section desktop view
   [./design/social-proof-section-desktop-view.png]

-2)Social proof section mobile view
   [./design/social-proof-section-mobile-view.png]

### Links

- Live Site URL:(https://shanib-ibrahim.github.io/Frontend-Mentor-Challenge/social-proof-section-challenge5/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Bootstrap
- Bootstrap grid
- Bootstrap card


### What I learned

While working on these challenge i have learned flexbox, positions, Make two background image as cover, HTML Semantic element, Bootstrap(grid,card) and Media queries.

```html
<div class="card">

  <div class="card-body">
    <img src="./images/image-colton.jpg" class="img-card rounded-circle" alt="card-image">
    <p class="card-title d-grid"><strong>Colton Smith</strong>
      <small>Verified Buyer</small>
    </p>
    <div class="clearfix"></div>
    <p class="card-text">"We needed the same printed design as the one we had ordered a week prior.
      Not only did they find the original order, but we also received it in time.
      Excellent!"</p>

  </div>
</div>
```
```css
.rating-content {
  display: flex;
  flex-direction: row;
  width: 80%;
}
.rating-content:nth-child(2)
{
  margin-left: 50px;
}
.rating-content:nth-child(3)
{
  margin-left: 100px;
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
