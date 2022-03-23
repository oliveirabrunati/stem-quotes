/* mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));

[].map.call(document.querySelectorAll('.mdc-foo'), function(el){
    return new MDCFoo(el);
}); */

var MDCSlider = mdc.slider.MDCSlider;
var MDCMenu = mdc.menu.MDCMenu;

const slider = new MDCSlider(document.querySelector('.mdc-slider'));

const menu = new mdc.menu.MDCMenu(document.querySelector('.mdc-menu'));
menu.open = true;