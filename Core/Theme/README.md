# Alliance Business Suite Turing Theme.


Welcome to the Alliance Business Suite Turing Theme. Our Main default theme is clean, blog & ecommerce focused, and designed for clarity. The ABS's Turing Theme is simple, readable on a wide variety of screen sizes, and suitable for multiple languages. We designed it using a mobile-first approach, meaning your content takes center-stage, regardless of whether your visitors arrive by smartphone, tablet, laptop, or desktop computer.

## Contents

- [Getting Started](#getting-started)
- [Theme Features](#Template-features)
- [Change Features](#change-features)
- [Sources and Credits](#sources-and-credits)
- [Changelog Updates History](#changelog-updates-history)
- [Version](#version)




## Getting Started

ABS's Turing Theme is complete multipurpose Alliance Business Suite Theme built with best practices. It will be a perfect solution for your portals, customizable into any store contains responsiveness & great UI. Well tested on compatible browsers.

The template contains
- **40+ Components**
- **3 Homepages**
- **3 Header Styles**
- **12 Dashboard Pages**
- **3 Product Pages**
- **7 Shop Pages**
- **5 Blog Pages**
- **Box mode** 
- **Unlimited Color variations** 

### Template Features

- Clean CSS structure **(Most of the styles have specificity level 1)**.
- Clean markup **(Markup correctly formatted with comments for setup things)**.
- Fully responsive **(For your desktop and mobile users)**.
- Cross Browser compatibility **(Work on most of the famous browsers)**.
- Fresh Design **(Modern approaches used by many web apps)**.
- User convenient **(Easy to use for any professional and non-professional)**.
- W3C Validated **(All files are passed from W3C validation service)**.
- Well Documented **(Files are commented for users to understand)**.

### Extra Features

- Intrinsic placeholder loading **(Initially set image container height)**.
- Vertical Mega Menu.
- 10 Color schemes generated.
- Box version included.
- Sass compatible.

## Change Features

**1. Google Fonts**

The template is using **sans-serif** font **Open Sans** from [Google Fonts](https://fonts.google.com/). You could change according to your choice. Erase that line from `html` files, and put new one here.

```html
<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800" rel="stylesheet">
```

After that also specify rule in **CSS**.

```css
font-family: "Open Sans", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; 
```

**2. Disable Preloader from pages**

The template is using **preloader** until **body** configuration class `config` is not removed. **Preloader** will be hidden when the `config` class is removed. But it is not necessary to show **preloader** during page load. If you remove **preloader** then it doesn't affect the look & feel of the page. So you could disable **preloader**. All HTML files have this markup underneath **body** element.

```html
<div class="preloader is-active">
   <div class="preloader__wrap">
      <img class="preloader__img" src="/public/themes/turing/images/preloader.png" alt="">
   </div>
</div>
```

Remove this markup from all **html** files.

After that in the `app.js` file, there is a method named `RESHOP.appConfiguration()` inside that method comment the line.

```javascript
RESHOP.appConfiguration = function () {
  $('body').removeAttr('class');
  //  $('.preloader').removeClass('is-active');
};
```

**3. Disable Modal**

Default when you visit the **Homepage** a newsletter modal will pop up. You can disable the newsletter modal by editing the file `app.js`. This file is invoking a method named `showNewsletterModal()` inside `window` `load` event, comment that line modal will not show.

```javascript
$(window).on('load', function () {
  // RESHOP.showNewsletterModal();
});
```

**4. Slider Options**

The template contains **8 methods** which are associated with **8 sliders**.

```javascript
/*
 * Hero Slider / Primary Slider
 * Index, Index-2, Index-3
 */
RESHOP.primarySlider();

/*
 * Product Slider
 */
RESHOP.productSlider();

/*
 * Tab Slider
 * Index-2 (Only)
 */
RESHOP.tabSlider();

/*
 * Brand Slider
 */
RESHOP.brandSlider();

/*
 * Testimonial Slider
 */
RESHOP.testimonialSlider();

/*
 * Blog Post Slider
 */
RESHOP.blogPostGallery();

/*
 * Product Detail Slider
 * Include Thumbnail Slider
 * Remember this method doesn't have
 * any relation with (Modal Product Detail Slider)
 */
RESHOP.productDetailInit();

/*
 * Product Detail Slider
 * Include Thumbnail Slider
 */
RESHOP.modalProductDetailInit();
```

Bottom code is showing **methods body** where you could change the slider options.

```javascript
/*
 * Hero Slider / Primary Slider
 * Index, Index-2, Index-3
 */
RESHOP.primarySlider = function () {
  $primarySlider.owlCarousel({});
};

/*
 * Product Slider
 */
RESHOP.productSlider = function () {
  thisInstance.owlCarousel({});
};

/*
 * Tab Slider
 * Index-2 (Only)
 */
RESHOP.tabSlider = function () {
  thisInstance.owlCarousel({});
};

/*
 * Brand Slider
 */
RESHOP.brandSlider = function () {
  .owlCarousel({});
};

/*
 * Testimonial Slider
 */
RESHOP.testimonialSlider = function () {
  .owlCarousel({});
};

/*
 * Blog Post Slider
 */
RESHOP.blogPostGallery = function () {
  $(this).owlCarousel({});
};

/*
 * Product Detail Slider
 * Include Thumbnail Slider
 * Remember this method doesn't have any
 * relation with (Modal Product Detail Slider)
 */
RESHOP.productDetailInit = function () {
  $productDetailElement.slick({});
  $productDetailElementThumbnail.slick({});
};

/*
 * Product Detail Slider
 * Include Thumbnail Slider
 */
RESHOP.modalProductDetailInit = function () {
  $modalProductDetailElement.slick({});
  $modalProductDetailElementThumbnail.slick({});
};
```

**5. Change color scheme**

All **.html** pages are included with default color scheme i.e. `app.css`.

```html
<!DOCTYPE html>
<html class="no-js" lang="en">
<head>
    <meta charset="UTF-8">
    <!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge"><![endif]-->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link href="/public/themes/turing/images/favicon.png" rel="shortcut icon">
    <title>@ViewData["Title"]</title>

    <!--====== Google Font ======-->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800" rel="stylesheet">

    <!--====== Vendor Css ======-->
    <link rel="stylesheet" href="/public/themes/turing/css/vendor.css">

    <!--====== Utility-Spacing ======-->
    <link rel="stylesheet" href="/public/themes/turing/css/utility.css">

    <!--====== App Default color scheme ======-->
    <link rel="stylesheet" href="/public/themes/turing/css/app.css">
</head>
```

You can change the stylesheet according to your **color scheme**, just erase the old `<link>` tag with the new one.

```html
<link rel="stylesheet" href="/public/themes/turing/css/app.color3.css">
```

**6. Change Template from Wide to Box**

You can see all default pages are **wide**. Change page from **wide** into a **box**, by adding this **CSS** class `boxed` on **html** element.

```html
<!DOCTYPE html>
<html class="no-js boxed" lang="en">
```


## Version
Version 1.0.0 - Feburary 2021 Initial Theme Release


# Credits

*We want to thank [Ahmad Hussnain](https://github.com/ahmadHuss) whose amazing Open Source [HTML Template](https://github.com/ahmadHuss/ludus-free-premium-ecommerce-template) serves as the base HTML+CSS+JS mix for the eCommerce part of the Turing Theme. License: MIT*

## Sources and Credits
- [Ludus Free Premium E-commerce Template](https://github.com/ahmadHuss/ludus-free-premium-ecommerce-template/blob/master/LICENSE)
- [BEM - Block Element Modifier](https://en.bem.info/methodology/quick-start/)
- [Normalize.css](https://necolas.github.io/normalize.css/)
- [Bootstrap 4 with components Grid, Nav, Modal, Tooltip & Transitions](https://getbootstrap.com/)
- [Font Awesome 5](https://fontawesome.com/)
- [Animate.css](https://daneden.github.io/animate.css/)
- [Modernizr](https://modernizr.com/)
- [Popper.js](https://popper.js.org/)
- [Owl Carousel 2](https://owlcarousel2.github.io/OwlCarousel2/)
- [Slick Carousel](https://kenwheeler.github.io/slick/)
- [jQuery](https://jquery.com/)
- [jQuery ScrollUp](https://github.com/markgoodyear/scrollup)
- [jQuery Elevate Zoom](http://elevateweb.co.uk/image-zoom)
- [jQuery Light Gallery](https://sachinchoolur.github.io/lightGallery/)
- [jQuery Fitvids](http://fitvidsjs.com/)
- [Isotope](https://isotope.metafizzy.co/)
- [Final Countdown](https://hilios.github.io/jQuery.countdown/)
