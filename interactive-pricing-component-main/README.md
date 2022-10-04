# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view 


Here are the different page view ranges and the corresponding monthly price totals:

- 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month

If the visitor switches the toggle to yearly billing, a 25% discount should be applied to all prices.


### Links

- Live Site URL:(https://interactivepricingfrontend.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript

### What I learned

I learnt how to design and input range.
I learnt how to create a toggle slider

```html
<h1>Some HTML code I'm proud of</h1>
<input type="range" min="0" max="4"  value="2" class="range"  />
<label class="switch">
        <input type="checkbox" id="billing" />
        <span class="slider"></span>
</label>
```
```css
.proud-of-this-css {
  appearance: none;
  .range::-webkit-slider-thumb {
    -webkit-appearance: none;
 }}
```
```js
const proudOfThisFunc = () => {
  if(isYearly){
        price.innerHTML = perMonth[range.value] * .75
    } else {
        price.innerHTML = perMonth[range.value]
    }
}
```


### Continued development

i'll like to work on how to create linear-gradient background easily for range inputs according to the range value using javascript.
 

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author
- Frontend Mentor - [@labisigloria](https://www.frontendmentor.io/profile/labisigloria)
- Twitter - [@olabisi_gloriaa](https://www.twitter.com/olabisi_gloriaa)



