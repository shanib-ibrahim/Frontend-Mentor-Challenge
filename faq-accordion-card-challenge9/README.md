# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

-1)Faq accordion card desktop view

[./design/ffaq-accordion-card-desktop-view.png]

-2)Faq accordion card mobile view

[./design/faq-accordion-card-mobile-view.png]

### Links

- Live Site URL: (https://shanib-ibrahim.github.io/Frontend-Mentor-Challenge/faq-accordion-card-challenge9/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- SASS - CSS preprocessor

### What I learned

While working on these challenge i have learned SASS function , variables , mixins , ampersand and Media queries using mixins.

```html
<div class="faq__text">
  <h1>FAQ</h1>
  <div class="faq__item">
    <input type="checkbox" id="faq__question--check1" />
    <h2>
      <label for="faq__question--check1" class="faq__question">
        How many team members can I invite?
      </label>
    </h2>

    <div class="faq__collapse">
      <div class="faq__content">
        You can invite up to 2 additional users on the Free plan. There is no
        limit on team members for the Premium plan.
      </div>
    </div>
  </div>

  <div class="faq__item">
    <input type="checkbox" id="faq__question--check2" />
    <h2>
      <label for="faq__question--check2" class="faq__question">
        What is the maximum file upload size?
      </label>
    </h2>

    <div class="faq__collapse">
      <div class="faq__content">
        No more than 2GB. All files in your account must fit your allotted
        storage space.
      </div>
    </div>
  </div>

  <div class="faq__item">
    <input type="checkbox" id="faq__question--check3" />
    <h2>
      <label for="faq__question--check3" class="faq__question">
        How do I reset my password?
      </label>
    </h2>

    <div class="faq__collapse">
      <div class="faq__content">
        Click “Forgot password” from the login page or “Change password” from
        your profile page. A reset link will be emailed to you.
      </div>
    </div>
  </div>

  <div class="faq__item">
    <input type="checkbox" id="faq__question--check4" />
    <h2>
      <label for="faq__question--check4" class="faq__question">
        Can I cancel my subscription?
      </label>
    </h2>

    <div class="faq__collapse">
      <div class="faq__content">
        Yes! Send us a message and we’ll process your request no questions
        asked.
      </div>
    </div>
  </div>
</div>
```

```scss
&__question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: none;
  background: transparent;
  margin-bottom: 1rem;
  padding: 0;
  font-size: 0.875rem;
  font-family: "Kumbh Sans", sans-serif;
  font-weight: 400;
  text-align: left;

  &:hover {
    color: $hover-color;
    @include transition-ease(all);
  }

  &::after {
    content: "";
    display: block;
    width: 0.625rem;
    height: 1rem;
    background-image: url("../images/icon-arrow-down.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    @include transition-ease(transform);
  }
}
```

### Continued development

The area i need to more focus and learn in SASS, HTML and Bootstrap are:

1)Sass Functions
2)Mixins
3)pseudo-elements
4)HTML Semantic where i need to use it
5)ampersand
6)grid

### Useful resources

- [resource 1](https://developer.mozilla.org/en-US/) - This helped me for all CSS and HTML syntax. I really liked this pattern and will use it going forward.

- [resource 2](https://sass-lang.com/documentation) - This is an amazing documentation by Sass which helped me finally understand how to minimise the use of css and to make the page responsive in all devices.

## Author

- github- [@Shanib-Ibrahim](https://github.com/shanib-ibrahim)
- Frontend Mentor - [@shanib-ibrahim](https://www.frontendmentor.io/profile/shanib-ibrahim)

## Acknowledgments

I would recommend everyone thier to get start with frontend mentor Challenge as soon as possible.A good website for beginners to learn CSS, HTML and Sass.
