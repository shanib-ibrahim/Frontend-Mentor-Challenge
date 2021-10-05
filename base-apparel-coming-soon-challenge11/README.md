# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

-1)Base apparel coming soon desktop view

[./design/base-apparel-coming-soon-desktop-design.png.png]

-2)Base apparel coming soon mobile view

[./design/base-apparel-coming-soon-mobile-design.png]

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

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
<div class="apparel__content--wrapperDescription">
  <div class="apparel__content--wrapperDescription--child1">
    <h1><span>We're</span><span>coming</span><span>soon</span></h1>
  </div>
  <div class="apparel__content--wrapperDescription--child2">
    <p>
      Hello fellow shoppers! We're currently building our new fashion store. Add
      your email below to stay up-to-date with announcements and our launch
      deals.
    </p>
  </div>
  <div class="apparel__content--wrapperDescription--child3">
    <input class="email" type="email" placeholder="Email Address" />
    <img class="error hidden" src="./images/icon-error.svg" alt="error-icon" />
    <div class="arrow">
      <img src="./images/icon-arrow.svg" alt="arrow-icon" />
    </div>
  </div>
  <span class="error-msg hidden"></span>
</div>
```

```scss
&Description {
  margin-top: 4rem;
  width: 60%;
  &--child1 {
    font-size: 3rem;
    letter-spacing: 1rem;
    h1 {
      width: 75%;
      margin: 0;
    }
  }
  &--child2 {
    margin: 0 0 3rem;
    width: 85%;
  }
  &--child3 {
    width: 75%;
    margin: 0 0 0.5rem;
    .arrow {
      padding: 0.7rem 2.3rem;
      border-radius: 2rem;
    }
  }
}
```

```js
arrowButton.addEventListener("click", function () {
  arrowButton.style.background =
    " linear-gradient(135deg, hsl(0, 0%, 100%), #ffc1c1)";
  arrowButton.style.boxShadow =
    "hsl(0, 80%, 86%) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px";
  if (email.value === "") {
    errorIcon.classList.remove("hidden");
    errorMessage.classList.remove("hidden");
    errorMessage.textContent = "Please enter email address";
    emailTextBox.style.border = "2px solid hsl(0, 93%, 68%)";
  } else if (!validateEmail(email.value)) {
    errorIcon.classList.remove("hidden");
    errorMessage.classList.remove("hidden");
    errorMessage.textContent = "Please Provide a valid email";
    emailTextBox.style.border = "2px solid hsl(0, 93%, 68%)";
  }
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
