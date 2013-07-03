# How to use

## HTML
Menu markup:

```html
<nav class="slide-nav">
  <ul>

    <li>
      <input type="search" class="slide-nav-search" placeholder="Søg">
    </li>

    <li><a href="#">Bliv medlem</a></li>

    <li>
      <a href="#">Bliv medlem</a>
      <ul>
        <li><a href="#">Mega mikkel</a></li>
        <li><a href="#">Mega mikkel</a></li>
      </ul>
    </li>

    <li class="show-sub-nav">
      <a href="#" class="current">Bliv medlem</a>
      <ul>
        <li><a href="#">Mega mikkel</a></li>
        <li><a href="#">Mega mikkel</a></li>
      </ul>
    </li>

  </ul>
</nav>
```

Button to trigger the slide:
```html
<button type="button" class="toggle-slide-nav">Menu</button>
```

If on a subpage use `.current` on an anchor element to mark it as the current page.
The `.show-sub-nav` class can be used on a list item containing a sub nav to have that open from the start.

The markup should be placed outside any main site wrapper element you may have.

## CSS
Just include the slide-nav.scss file. You need to adjust some of the selectors to match the classes you're using.

## JavaScript
```javascript
$('.slide-nav').slideNav({
  // options...
});
```

# Possible options
`hasSubNavs: [boolean]`
Set to true if the menu should support sub menus.
Default is `false`.

`toggleButtonSelector: [string]`
A jQuery style selector of the button that should toggle the nav.
Default is `.toggle-slide-nav`.

`touch: [boolean]`
Whether or no swipe events to toggle the nav should be set.
This requires [jquery.hammer.js](http://eightmedia.github.io/hammer.js/)
Default is `false`.
