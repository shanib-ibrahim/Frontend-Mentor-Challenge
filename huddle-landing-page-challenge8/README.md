# Frontend Mentor - Huddle landing page with single introductory section solution

This is a solution to the [Huddle landing page with single introductory section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- View the optimal layout for the page depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

-1)Huddle landing page desktop view

  [.design/huddle-landing-page-desktop-view.png]

-2)Huddle landing page mobile view

  [.design/huddle-landing-page-mobile-view.png]

### Links

- Live Site URL: (https://shanib-ibrahim.github.io/Frontend-Mentor-Challenge/huddle-landing-page-challenge8/)

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
<main>
  <div class="row">
    <div class="col-lg-6 text-center">
      <img class="mockup-image" src="./images/illustration-mockups.svg" alt="">
    </div>
    <div class="col-lg-6 huddle-content">
      <h3>Build The Community <span>Your Fans Will Love</span></h3>

      <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
        Create connections with your users as you engage in genuine discussion.</p>

      <a class="btn" href="#">Register</a>


        <ul class="wrapper">
          <li class="facebook"><i class="fa fa-facebook fa-1x" aria-hidden="true"></i></li>
          <li class="twitter"><i class="fa fa-twitter fa-1x" aria-hidden="true"></i></li>
          <li class="instagram"><i class="fa fa-instagram fa-1x" aria-hidden="true"></i></li>
        </ul>


    </div>
  </div>
</main>
```
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

/*******************************Tag Selector***********************************/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body,
html {
    min-height: 100%;
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
