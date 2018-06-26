(function(){'use strict';var f=[];function g(a){f.push(a);1===f.length&&l()}function m(){for(;f.length;)f[0](),f.shift()}if(window.MutationObserver){var n=document.createElement("div");(new MutationObserver(m)).observe(n,{attributes:!0});var l=function(){n.setAttribute("x",0)}}else l=function(){setTimeout(m)};function p(a){this.a=q;this.b=void 0;this.f=[];var b=this;try{a(function(a){r(b,a)},function(a){t(b,a)})}catch(c){t(b,c)}}var q=2;function u(a){return new p(function(b,c){c(a)})}function v(a){return new p(function(b){b(a)})}
function r(a,b){if(a.a===q){if(b===a)throw new TypeError("Promise settled with itself.");var c=!1;try{var d=b&&b.then;if(null!==b&&"object"===typeof b&&"function"===typeof d){d.call(b,function(b){c||r(a,b);c=!0},function(b){c||t(a,b);c=!0});return}}catch(e){c||t(a,e);return}a.a=0;a.b=b;w(a)}}function t(a,b){if(a.a===q){if(b===a)throw new TypeError("Promise settled with itself.");a.a=1;a.b=b;w(a)}}
function w(a){g(function(){if(a.a!==q)for(;a.f.length;){var b=a.f.shift(),c=b[0],d=b[1],e=b[2],b=b[3];try{0===a.a?"function"===typeof c?e(c.call(void 0,a.b)):e(a.b):1===a.a&&("function"===typeof d?e(d.call(void 0,a.b)):b(a.b))}catch(h){b(h)}}})}p.prototype.g=function(a){return this.c(void 0,a)};p.prototype.c=function(a,b){var c=this;return new p(function(d,e){c.f.push([a,b,d,e]);w(c)})};
function x(a){return new p(function(b,c){function d(c){return function(d){h[c]=d;e+=1;e===a.length&&b(h)}}var e=0,h=[];0===a.length&&b(h);for(var k=0;k<a.length;k+=1)a[k].c(d(k),c)})}function y(a){return new p(function(b,c){for(var d=0;d<a.length;d+=1)a[d].c(b,c)})};window.Promise||(window.Promise=p,window.Promise.resolve=v,window.Promise.reject=u,window.Promise.race=y,window.Promise.all=x,window.Promise.prototype.then=p.prototype.c,window.Promise.prototype["catch"]=p.prototype.g);}());

(function(){'use strict';function h(a){document.body?a():document.addEventListener("DOMContentLoaded",a)};function v(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.h=document.createElement("span");this.g=document.createElement("span");this.f=-1;this.b.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
this.g.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;";this.b.appendChild(this.h);this.c.appendChild(this.g);this.a.appendChild(this.b);this.a.appendChild(this.c)}
function w(a,c,b){a.a.style.cssText="min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font-size:100px;font-family:"+c+";"+b}function x(a){var c=a.a.offsetWidth,b=c+100;a.g.style.width=b+"px";a.c.scrollLeft=b;a.b.scrollLeft=a.b.scrollWidth+100;return a.f!==c?(a.f=c,!0):!1}
function y(a,c){a.b.addEventListener("scroll",function(){x(a)&&null!==a.a.parentNode&&c(a.f)},!1);a.c.addEventListener("scroll",function(){x(a)&&null!==a.a.parentNode&&c(a.f)},!1);x(a)};function z(a,c){var b=c||{};this.family=a;this.style=b.style||"normal";this.variant=b.variant||"normal";this.weight=b.weight||"normal";this.stretch=b.stretch||"stretch";this.featureSettings=b.featureSettings||"normal"}var B=null;
z.prototype.a=function(a,c){var b=a||"BESbswy",C=c||3E3,k="font-style:"+this.style+";font-variant:"+this.variant+";font-weight:"+this.weight+";font-stretch:"+this.stretch+";font-feature-settings:"+this.featureSettings+";-moz-font-feature-settings:"+this.featureSettings+";-webkit-font-feature-settings:"+this.featureSettings+";",g=document.createElement("div"),l=new v(b),m=new v(b),n=new v(b),d=-1,e=-1,f=-1,q=-1,r=-1,t=-1,p=this;return new Promise(function(a,b){function c(){null!==g.parentNode&&g.parentNode.removeChild(g)}
function u(){if(-1!==d&&-1!==e||-1!==d&&-1!==f||-1!==e&&-1!==f)if(d===e||d===f||e===f){if(null===B){var b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);B=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))}B?d===q&&e===q&&f===q||d===r&&e===r&&f===r||d===t&&e===t&&f===t||(c(),a(p)):(c(),a(p))}}h(function(){function a(){if(Date.now()-D>=C)c(),b(p);else{var A=document.hidden;if(!0===A||void 0===A)d=l.a.offsetWidth,e=m.a.offsetWidth,f=n.a.offsetWidth,
u();setTimeout(a,50)}}var D=Date.now();w(l,"sans-serif",k);w(m,"serif",k);w(n,"monospace",k);g.appendChild(l.a);g.appendChild(m.a);g.appendChild(n.a);document.body.appendChild(g);q=l.a.offsetWidth;r=m.a.offsetWidth;t=n.a.offsetWidth;a();y(l,function(a){d=a;u()});w(l,p.family+",sans-serif",k);y(m,function(a){e=a;u()});w(m,p.family+",serif",k);y(n,function(a){f=a;u()});w(n,p.family+",monospace",k)})})};window.FontFaceObserver=z;window.FontFaceObserver.prototype.check=z.prototype.a;}());

// Set custom fonts we're loading as variables for FontFaceObserver
var options = {
  "fonts" : [
    {
      "family" : "HelveticaNeueW01-97Blac",
      "weight" : "normal"
    },
    {
      "family" : "HelveticaNeueW01-45Ligh",
      "weight" : "normal"
    }
  ],
  "timeOut": 8000,
  "latinChars": null
}

// Then check to see if they've been loaded OR are unavailable.
// Custom timeout set at 8 seconds
var fontCheck = [];
for (var font in options.fonts) {
  var face = new FontFaceObserver(options.fonts[font].family, options.fonts[font].weight);
  fontCheck.push(face.check(options.latinChars,options.timeOut));
}

Promise.all(fontCheck).then(function() {
  document.documentElement.className += " fonts-loaded";
}, function() {
  document.documentElement.className += " fonts-unavailable";
});

/* NOTE: This is a special dropdown version of responsive-nav.js.
 * https://github.com/samikeijonen/responsive-nav.js
 */
 /* responsive-nav.js 1.0.39
  * https://github.com/viljamis/responsive-nav.js
  * http://responsive-nav.com
  *
  * Copyright (c) 2015 @viljamis
  * Available under the MIT license
  */

 /* global Event */
 (function (document, window, index) {
   // Index is used to keep multiple navs on the same page namespaced

   "use strict";

   var responsiveNav = function (el, options) {

     var computed = !!window.getComputedStyle;

     /**
      * getComputedStyle polyfill for old browsers
      */
     if (!computed) {
       window.getComputedStyle = function(el) {
         this.el = el;
         this.getPropertyValue = function(prop) {
           var re = /(\-([a-z]){1})/g;
           if (prop === "float") {
             prop = "styleFloat";
           }
           if (re.test(prop)) {
             prop = prop.replace(re, function () {
               return arguments[2].toUpperCase();
             });
           }
           return el.currentStyle[prop] ? el.currentStyle[prop] : null;
         };
         return this;
       };
     }
     /* exported addEvent, removeEvent, getChildren, setAttributes, addClass, removeClass, forEach */

     /**
      * Add Event
      * fn arg can be an object or a function, thanks to handleEvent
      * read more at: http://www.thecssninja.com/javascript/handleevent
      *
      * @param  {element}  element
      * @param  {event}    event
      * @param  {Function} fn
      * @param  {boolean}  bubbling
      */
     var addEvent = function (el, evt, fn, bubble) {
         if ("addEventListener" in el) {
           // BBOS6 doesn't support handleEvent, catch and polyfill
           try {
             el.addEventListener(evt, fn, bubble);
           } catch (e) {
             if (typeof fn === "object" && fn.handleEvent) {
               el.addEventListener(evt, function (e) {
                 // Bind fn as this and set first arg as event object
                 fn.handleEvent.call(fn, e);
               }, bubble);
             } else {
               throw e;
             }
           }
         } else if ("attachEvent" in el) {
           // check if the callback is an object and contains handleEvent
           if (typeof fn === "object" && fn.handleEvent) {
             el.attachEvent("on" + evt, function () {
               // Bind fn as this
               fn.handleEvent.call(fn);
             });
           } else {
             el.attachEvent("on" + evt, fn);
           }
         }
       },

       /**
        * Remove Event
        *
        * @param  {element}  element
        * @param  {event}    event
        * @param  {Function} fn
        * @param  {boolean}  bubbling
        */
       removeEvent = function (el, evt, fn, bubble) {
         if ("removeEventListener" in el) {
           try {
             el.removeEventListener(evt, fn, bubble);
           } catch (e) {
             if (typeof fn === "object" && fn.handleEvent) {
               el.removeEventListener(evt, function (e) {
                 fn.handleEvent.call(fn, e);
               }, bubble);
             } else {
               throw e;
             }
           }
         } else if ("detachEvent" in el) {
           if (typeof fn === "object" && fn.handleEvent) {
             el.detachEvent("on" + evt, function () {
               fn.handleEvent.call(fn);
             });
           } else {
             el.detachEvent("on" + evt, fn);
           }
         }
       },

       /**
        * Get the children of any element
        *
        * @param  {element}
        * @return {array} Returns matching elements in an array
        */
       getChildren = function (e) {
         if (e.children.length < 1) {
           throw new Error("The Nav container has no containing elements");
         }
         // Store all children in array
         var children = [];
         // Loop through children and store in array if child != TextNode
         for (var i = 0; i < e.children.length; i++) {
           if (e.children[i].nodeType === 1) {
             children.push(e.children[i]);
           }
         }
         return children;
       },

       /**
        * Sets multiple attributes at once
        *
        * @param {element} element
        * @param {attrs}   attrs
        */
       setAttributes = function (el, attrs) {
         for (var key in attrs) {
           el.setAttribute(key, attrs[key]);
         }
       },

       /**
        * Adds a class to any element
        *
        * @param {element} element
        * @param {string}  class
        */
       addClass = function (el, cls) {
         if (el.className.indexOf(cls) !== 0) {
           el.className += " " + cls;
           el.className = el.className.replace(/(^\s*)|(\s*$)/g,"");
         }
       },

       /**
        * Remove a class from any element
        *
        * @param  {element} element
        * @param  {string}  class
        */
       removeClass = function (el, cls) {
         var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
         el.className = el.className.replace(reg, " ").replace(/(^\s*)|(\s*$)/g,"");
       },

       /**
        * forEach method that passes back the stuff we need
        *
        * @param  {array}    array
        * @param  {Function} callback
        * @param  {scope}    scope
        */
       forEach = function (array, callback, scope) {
         for (var i = 0; i < array.length; i++) {
           callback.call(scope, i, array[i]);
         }
       },

       /**
        * Checks if an element has certain class
        *
        * @param  {element}  element
        * @param  {string}   class name
        * @return {Boolean}
        */
       hasClass = function (el, cls) {
         return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
       },

       /**
        * Sets or removes .focus class on an element.
        */
       toggleFocus = function () {
         var self = this,
    menuItems = opts.menuItems;

         // Move up through the ancestors of the current link until we hit 'menu-items' class. That's top level ul-element class name.
         while ( -1 === self.className.indexOf( menuItems ) ) {

           // On li elements toggle the class .focus.
           if ( 'li' === self.tagName.toLowerCase() ) {
             if ( -1 !== self.className.indexOf( 'focus' ) ) {
               self.className = self.className.replace( ' focus', '' );
             } else {
               self.className += ' focus';
             }
           }

           self = self.parentElement;
         }

       };

     var nav,
       opts,
       navToggle,
       styleElement = document.createElement("style"),
       htmlEl = document.documentElement,
       hasAnimFinished,
       isMobile,
       navOpen,
       dropdownButton;

     var ResponsiveNav = function (el, options) {
         var i;

         /**
          * Default options
          * @type {Object}
          */
         this.options = {
           animate: true,                    // Boolean: Use CSS3 transitions, true or false
           transition: 284,                  // Integer: Speed of the transition, in milliseconds
           label: "Menu",                    // String: Label for the navigation toggle
           insert: "before",                 // String: Insert the toggle before or after the navigation
           customToggle: "",                 // Selector: Specify the ID of a custom toggle
           closeOnNavClick: false,           // Boolean: Close the navigation when one of the links are clicked
           openPos: "relative",              // String: Position of the opened nav, relative or static
           navClass: "nav-collapse",         // String: Default CSS class. If changed, you need to edit the CSS too!
           navActiveClass: "js-nav-active",  // String: Class that is added to <html> element when nav is active
           jsClass: "js",                    // String: 'JS enabled' class which is added to <html> element
           enableFocus: false,               // Boolean: Do we add 'focus' class in nav elements
           enableDropdown: false,            // Boolean: Do we use multi level dropdown
           menuItems: "menu-items",          // String: Class that is added only to top ul element
           subMenu: "sub-menu",              // String: Class that is added to sub menu ul elements
           openDropdown: "Open sub menu",    // String: Label for opening sub menu
           closeDropdown: "Close sub menu",  // String: Label for closing sub menu
           init: function(){},               // Function: Init callback
           open: function(){},               // Function: Open callback
           close: function(){},              // Function: Close callback
           resizeMobile: function(){},       // Function: Resize callback for "mobile"
           resizeDesktop: function(){}       // Function: Resize callback for "desktop"
         };

         // User defined options
         for (i in options) {
           this.options[i] = options[i];
         }

         // Adds "js" class for <html>
         addClass(htmlEl, this.options.jsClass);

         // Wrapper
         this.wrapperEl = el.replace("#", "");

         // Try selecting ID first
         if (document.getElementById(this.wrapperEl)) {
           this.wrapper = document.getElementById(this.wrapperEl);

         // If element with an ID doesn't exist, use querySelector
         } else if (document.querySelector(this.wrapperEl)) {
           this.wrapper = document.querySelector(this.wrapperEl);

         // If element doesn't exists, stop here.
         } else {
           throw new Error("The nav element you are trying to select doesn't exist");
         }

         // Inner wrapper
         this.wrapper.inner = getChildren(this.wrapper);

         // For minification
         opts = this.options;
         nav = this.wrapper;

         // Init
         this._init(this);
       };

     ResponsiveNav.prototype = {

       /**
        * Unattaches events and removes any classes that were added
        */
       destroy: function () {
         this._removeStyles();
         removeClass(nav, "closed");
         removeClass(nav, "opened");
         removeClass(nav, opts.navClass);
         removeClass(nav, opts.navClass + "-" + this.index);
         removeClass(htmlEl, opts.navActiveClass);
         nav.removeAttribute("style");
         nav.removeAttribute("aria-hidden");

         removeEvent(window, "resize", this, false);
         removeEvent(window, "focus", this, false);
         removeEvent(document.body, "touchmove", this, false);
         removeEvent(navToggle, "touchstart", this, false);
         removeEvent(navToggle, "touchend", this, false);
         removeEvent(navToggle, "mouseup", this, false);
         removeEvent(navToggle, "keyup", this, false);
         removeEvent(navToggle, "click", this, false);

         if (!opts.customToggle) {
           navToggle.parentNode.removeChild(navToggle);
         } else {
           navToggle.removeAttribute("aria-hidden");
         }

    if(opts.enableDropdown) {
      var self = this;
           forEach(dropdownButton, function (i, el) {
             removeEvent(el, "touchstart", self, false);
             removeEvent(el, "touchend", self, false);
             removeEvent(el, "mouseup", self, false);
             removeEvent(el, "keyup", self, false);
             removeEvent(el, "click", self, false);
           });
      }

       },

       /**
        * Toggles the navigation open/close
        */
       toggle: function () {
         if (hasAnimFinished === true) {
           if (!navOpen) {
             this.open();
           } else {
             this.close();
           }
         }
       },

       /**
        * Opens the navigation
        */
       open: function () {
         if (!navOpen) {
           removeClass(nav, "closed");
           addClass(nav, "opened");
           addClass(htmlEl, opts.navActiveClass);
           addClass(navToggle, "active");
           nav.style.position = opts.openPos;
           setAttributes(nav, {"aria-hidden": "false"});
      setAttributes(nav, {"aria-expanded": "true"});
      setAttributes(navToggle, {"aria-expanded": "true"});
           navOpen = true;
           opts.open();
         }
       },

       /**
        * Closes the navigation
        */
       close: function () {
         if (navOpen) {
           addClass(nav, "closed");
           removeClass(nav, "opened");
           removeClass(htmlEl, opts.navActiveClass);
           removeClass(navToggle, "active");
           setAttributes(nav, {"aria-hidden": "true"});
      setAttributes(nav, {"aria-expanded": "false"});
      setAttributes(navToggle, {"aria-expanded": "false"});

           // If animations are enabled, wait until they finish
           if (opts.animate) {
             hasAnimFinished = false;
             setTimeout(function () {
               nav.style.position = "absolute";
               hasAnimFinished = true;

               if(opts.enableDropdown) {
                 removeClass(nav, "dropdown-active");
                 forEach(dropdownButton, function (i, el) {
                   removeClass(el, "toggled");
                   removeClass(el.nextSibling, "toggled"); // Remove class from sub-menu ul element.
                 });
               }

             }, opts.transition + 10);

           // Animations aren't enabled, we can do these immediately
           } else {
             nav.style.position = "absolute";

             if(opts.enableDropdown) {
               removeClass(nav, "dropdown-active");
               forEach(dropdownButton, function (i, el) {
                 removeClass(el, "toggled");
                 removeClass(el.nextSibling, "toggled"); // Remove class from sub-menu ul element.
               });
             }
           }

           navOpen = false;
           opts.close();
         }
       },

       /**
        * Resize is called on window resize and orientation change.
        * It initializes the CSS styles and height calculations.
        */
       resize: function () {

         // Resize watches navigation toggle's display state
         if (window.getComputedStyle(navToggle, null).getPropertyValue("display") !== "none") {

           isMobile = true;
           setAttributes(navToggle, {"aria-hidden": "false"});
      setAttributes(nav, {"aria-expanded": "false"});
      setAttributes(navToggle, {"aria-expanded": "false"});

           // If the navigation is hidden
           if (nav.className.match(/(^|\s)closed(\s|$)/)) {
             setAttributes(nav, {"aria-hidden": "true"});
             nav.style.position = "absolute";
           }

           // If the navigation is not hidden
           if (!nav.className.match(/(^|\s)closed(\s|$)/)) {
        setAttributes(nav, {"aria-expanded": "true"});
        setAttributes(navToggle, {"aria-expanded": "true"});
           }

           this._createStyles();
           this._calcHeight();
      opts.resizeMobile();

         } else {

           isMobile = false;
           setAttributes(navToggle, {"aria-hidden": "true"});
           setAttributes(nav, {"aria-hidden": "false"});
      nav.removeAttribute("aria-expanded");
      navToggle.removeAttribute("aria-expanded");
           nav.style.position = opts.openPos;
           this._removeStyles();
      opts.resizeDesktop();

         }
       },

       /**
        * Takes care of all even handling
        *
        * @param  {event} event
        * @return {type} returns the type of event that should be used
        */
       handleEvent: function (e) {
         var evt = e || window.event;

         switch (evt.type) {
         case "touchstart":
           this._onTouchStart(evt);
           break;
         case "touchmove":
           this._onTouchMove(evt);
           break;
         case "touchend":
         case "mouseup":
           this._onTouchEnd(evt);
           break;
         case "click":
           this._preventDefault(evt);
           break;
         case "keyup":
           this._onKeyUp(evt);
           break;
         case "focus":
         case "resize":
           this.resize(evt);
           break;
         }
       },

       /**
        * Initializes the widget
        */
       _init: function () {
         this.index = index++;

         addClass(nav, opts.navClass);
         addClass(nav, opts.navClass + "-" + this.index);
         addClass(nav, "closed");
         hasAnimFinished = true;
         navOpen = false;

         this._closeOnNavClick();
         this._createToggle();
         this._transitions();
         this.resize();

    // Enable more accessible dropdown menu
         this._createFocus();
         this._createDropdown();

         /**
          * On IE8 the resize event triggers too early for some reason
          * so it's called here again on init to make sure all the
          * calculated styles are correct.
          */
         var self = this;
         setTimeout(function () {
           self.resize();
         }, 20);

         addEvent(window, "resize", this, false);
         addEvent(window, "focus", this, false);
         addEvent(document.body, "touchmove", this, false);
         addEvent(navToggle, "touchstart", this, false);
         addEvent(navToggle, "touchend", this, false);
         addEvent(navToggle, "mouseup", this, false);
         addEvent(navToggle, "keyup", this, false);
         addEvent(navToggle, "click", this, false);

         /**
          * Init callback here
          */
         opts.init();
       },

       /**
        * Creates Styles to the <head>
        */
       _createStyles: function () {
         if (!styleElement.parentNode) {
           styleElement.type = "text/css";
           document.getElementsByTagName("head")[0].appendChild(styleElement);
         }
       },

       /**
        * Removes styles from the <head>
        */
       _removeStyles: function () {
         if (styleElement.parentNode) {
           styleElement.parentNode.removeChild(styleElement);
         }
       },

       /**
        * Creates Navigation Toggle
        */
       _createToggle: function () {

         // If there's no toggle, let's create one
         if (!opts.customToggle) {
           var toggle = document.createElement("a");
           toggle.innerHTML = opts.label;
           setAttributes(toggle, {
             "href": "#",
             "class": "nav-toggle"
           });

           // Determine where to insert the toggle
           if (opts.insert === "after") {
             nav.parentNode.insertBefore(toggle, nav.nextSibling);
           } else {
             nav.parentNode.insertBefore(toggle, nav);
           }

           navToggle = toggle;

         // There is a toggle already, let's use that one
         } else {
           var toggleEl = opts.customToggle.replace("#", "");

           if (document.getElementById(toggleEl)) {
             navToggle = document.getElementById(toggleEl);
           } else if (document.querySelector(toggleEl)) {
             navToggle = document.querySelector(toggleEl);
           } else {
             throw new Error("The custom nav toggle you are trying to select doesn't exist");
           }
         }
       },

       /**
        * Closes the navigation when a link inside is clicked.
        */
       _closeOnNavClick: function () {
         if (opts.closeOnNavClick) {
           var links = nav.getElementsByTagName("a"),
             self = this;
           forEach(links, function (i, el) {
             addEvent(links[i], "click", function () {
               if (isMobile) {
                 self.toggle();
               }
             }, false);
           });
         }
       },

       /**
        * Prevents the default functionality.
        *
        * @param  {event} event
        */
       _preventDefault: function(e) {
         if (e.preventDefault) {
           if (e.stopImmediatePropagation) {
             e.stopImmediatePropagation();
           }
           e.preventDefault();
           e.stopPropagation();
           return false;

         // This is strictly for old IE
         } else {
           e.returnValue = false;
         }
       },

       /**
        * On touch start we get the location of the touch.
        *
        * @param  {event} event
        */
       _onTouchStart: function (e) {
         if (!Event.prototype.stopImmediatePropagation) {
           this._preventDefault(e);
         }
         this.startX = e.touches[0].clientX;
         this.startY = e.touches[0].clientY;
         this.touchHasMoved = false;

         /**
          * Remove mouseup event completely here to avoid
          * double triggering the event.
          */
         removeEvent(navToggle, "mouseup", this, false);
       },

       /**
        * Check if the user is scrolling instead of tapping.
        *
        * @param  {event} event
        */
       _onTouchMove: function (e) {
         if (Math.abs(e.touches[0].clientX - this.startX) > 10 ||
         Math.abs(e.touches[0].clientY - this.startY) > 10) {
           this.touchHasMoved = true;
         }
       },

       /**
        * On touch end toggle the navigation.
        *
        * @param  {event} event
        */
       _onTouchEnd: function (e) {
         this._preventDefault(e);
         if (!isMobile) {
           return;
         }

         // Get event.target, the old IE way
         var thisEvent = e || window.event,
           targetEl = thisEvent.target || thisEvent.srcElement,
           isDropdownTapped = false;

         // Was it sub-navigation toggle or the main toggle?
         if (hasClass(targetEl, "dropdown-toggle") && opts.enableDropdown) isDropdownTapped = true;

         // If the user isn't scrolling
         if (!this.touchHasMoved) {

           // If the event type is touch
           if (e.type === "touchend") {

      // If sub-navigation toggle was tapped
             if (isDropdownTapped) {
               this._toggleDropdown(targetEl);

             // If the main toggle was tapped
             } else {
               this.toggle();
             }
             return;

           // Event type was click, not touch
           } else {
             var evt = e || window.event;

             // If it isn't a right click, do toggling
             if (!(evt.which === 3 || evt.button === 2)) {
               if (isDropdownTapped) {
                 this._toggleDropdown(targetEl);
               } else {
                 this.toggle();
               }
             }
           }
         }
       },

       /**
        * For keyboard accessibility, toggle the navigation on Enter
        * keypress too.
        *
        * @param  {event} event
        */
       _onKeyUp: function (e) {
         var evt = e || window.event,
           targetEl = e.target,
           isDropdownTapped = false;

         if (hasClass(targetEl, "dropdown-toggle") && opts.enableDropdown) isDropdownTapped = true;
         if (evt.keyCode === 13) {
          if (isDropdownTapped) {
             this._toggleDropdown(targetEl);
           } else {
             this.toggle();
           }
         }
       },

       /**
        * Adds the needed CSS transitions if animations are enabled
        */
       _transitions: function () {
         if (opts.animate) {
           var objStyle = nav.style,
             transition = "max-height " + opts.transition + "ms, visibility " + opts.transition +  "ms linear";

           objStyle.WebkitTransition =
           objStyle.MozTransition =
           objStyle.OTransition =
           objStyle.transition = transition;
         }
       },

       /**
        * Calculates the height of the navigation and then creates
        * styles which are later added to the page <head>
        */
       _calcHeight: function () {
         var savedHeight = 0;
         for (var i = 0; i < nav.inner.length; i++) {
           savedHeight += nav.inner[i].offsetHeight;
         }

         var innerStyles = "." + opts.jsClass + " ." + opts.navClass + "-" + this.index + ".opened{max-height:" + savedHeight + "px !important} ." + opts.jsClass + " ." + opts.navClass + "-" + this.index + ".opened.dropdown-active {max-height:9999px !important}";

         if (styleElement.styleSheet) {
           styleElement.styleSheet.cssText = innerStyles;
         } else {
           styleElement.innerHTML = innerStyles;
         }

         innerStyles = "";
       },

       /**
        * Creates 'focus' class on nav elements
        */
       _createFocus: function () {

    // Bail if focus is not enabled.
      if(!opts.enableFocus) {
      return;
    }

         // Get all the link elements within the menu.
         var menu = nav.getElementsByTagName( 'ul' )[0],
         links = menu.getElementsByTagName( 'a' ),
    len,
    i;

         // Each time a menu link is focused or blurred, toggle focus.
         for ( i = 0, len = links.length; i < len; i++ ) {
           links[i].addEventListener( 'focus', toggleFocus, true );
           links[i].addEventListener( 'blur', toggleFocus, true );
         }

    },

       /**
        * Enable multi-level dropdown
        */
       _createDropdown: function () {

         // Bail if multiple level dropdown is not enabled.
         if(!opts.enableDropdown) {
           return;
         }

         var self = this;

         // Get submenus
         var menu = nav.getElementsByTagName( 'ul' )[0],
         subMenus = nav.getElementsByClassName( opts.subMenu ),
         i,
         len;

        // Add .multiple-level-nav class to nav
        addClass(nav, 'multiple-level-nav');

        // Set menu items with sub menus to aria-haspopup="true" and add toggle button before sub menu.
        for (i = 0, len = subMenus.length; i < len; i++) {
          subMenus[i].parentNode.setAttribute( 'aria-haspopup', 'true' );
          subMenus[i].insertAdjacentHTML( 'beforebegin', '<button class="dropdown-toggle" aria-expanded="false">' + opts.openDropdown + '</button>' );
        }

        // Select all dropdown buttons
        dropdownButton = nav.querySelectorAll( '.dropdown-toggle' );

        // For each dropdown Button element add click event
        forEach( dropdownButton, function( i, el ) {
           addEvent(el, "touchstart", self, false);
           addEvent(el, "touchend", self, false);
           addEvent(el, "mouseup", self, false);
           addEvent(el, "keyup", self, false);
           addEvent(el, "click", self, false);
        });

       },

       /**
        * Toggles sub-navigations open/closed
        *
        * @param  {element} The toggle that was tapped
        */
       _toggleDropdown: function (targetEl) {

         // Enable active class to let the navigation expand over
         // the calculated max height
         //addClass(nav, "dropdown-active");

         // Change dropdown button text on every click
         if( targetEl.innerHTML === opts.openDropdown ) {
           targetEl.innerHTML = opts.closeDropdown;
         } else {
           targetEl.innerHTML = opts.openDropdown;
         }

         // Check if the sub-navigation is inside another sub-nav
         var parentEl = targetEl.parentNode,
           isInsideSub = hasClass(parentEl.parentNode.parentNode, "dropdown");

         // Toggle dropdown button
         if( !hasClass( targetEl, 'toggled' ) ) {

           // Add .toggled class
           addClass( targetEl, 'toggled' );

           // Set aria-expanded to true
           targetEl.setAttribute( 'aria-expanded', 'true' );

           // Get next element meaning UL with .sub-menu class
           var nextElement = targetEl.nextElementSibling;

           // Add 'toggled' class to sub-menu element
           addClass( nextElement, 'toggled' );

           // Add 'dropdown-active' class to nav when dropdown is toggled
           addClass( nav, 'dropdown-active' );

         } else {

           // Remove .toggled class
           removeClass( targetEl, 'toggled' );

           // Set aria-expanded to false
           targetEl.setAttribute( 'aria-expanded', 'false' );

           // Get next element meaning UL with .sub-menu
           var nextElement = targetEl.nextElementSibling;

           // Remove 'toggled' class from sub-menu element
           removeClass( nextElement, 'toggled' );

           // Remove 'dropdown-active' class to nav when dropdown is toggled
           removeClass( nav, 'dropdown-active' );

         }

       },

     };

     /**
      * Return new Responsive Nav
      */
     return new ResponsiveNav(el, options);

   };

   if (typeof module !== "undefined" && module.exports) {
     module.exports = responsiveNav;
   } else {
     window.responsiveNav = responsiveNav;
   }

 }(document, window, 0));

// Init responsive nav
var customToggle = document.getElementById('nav-toggle');
var navigation = responsiveNav(".nav-collapse", {
  animate: true,                // Boolean: Use CSS3 transitions, true or false
  insert: "before",             // String: Insert the toggle before or after the navigation
  transition: 600,              // Integer: Speed of the transition, in milliseconds
  customToggle: "#nav-toggle",  // Selector: Specify the ID of a custom toggle
  enableFocus: true,            // Boolean: Do we add 'focus' class in nav elements
  enableDropdown: true,         // Boolean: Do we use multi level dropdown
  menuItems: "menu-items",      // String: Class that is added only to top ul element
  subMenu: "sub-menu",
  openPos: "relative",          // String: Class that is added to sub menu ul elements
  openDropdown: '<span class="screen-reader-text">Open sub menu</span>',    // String: Label for opening sub menu
  closeDropdown: '<span class="screen-reader-text">Close sub menu</span>',  // String: Label for closing sub menu
  open: function () {
    customToggle.innerHTML = '<img src="https://static.wvu.edu/global/images/icons/wvu/hamburger-menu--1.0.0.svg" alt="Menu icon" />Close Menu';
  },
  close: function () {
    customToggle.innerHTML = '<img src="https://static.wvu.edu/global/images/icons/wvu/hamburger-menu--1.0.0.svg" alt="Menu icon" />Open Menu';
  },
  resizeMobile: function () {
    customToggle.setAttribute( 'aria-controls', 'nav' );
  },
  resizeDesktop: function () {
    customToggle.removeAttribute( 'aria-controls' );
  },
});

// Required JS for "WVU Masthead w/Nav + Search Toggle"

// First, get the ID's of what we want to add classes to:
var inactiveSearch = document.getElementById('js-wvu-nav__search-toggle');
var mastheadSearchSlider = document.getElementById('js-wvu-masthead__search-slider');
var mastheadSearchInput = document.getElementById('js-wvu-masthead__search-input');

// Find the search toggle, then, on click
// If there is not a class of `wvu-nav__custom-search-toggle--active-search`, add it. This changes the icon to an `×`
// At the same time, make the search pattern visible by adding the `wvu-masthead__search-slider--is-visible` class to the search container.
// Finally, add focus to the <input>.
inactiveSearch.addEventListener('click', function () {
  if (!this.classList.contains('wvu-nav__custom-search-toggle--active-search')) {
    this.classList.add('wvu-nav__custom-search-toggle--active-search');
    mastheadSearchSlider.classList.add('wvu-masthead__search-slider--is-visible');
    mastheadSearchInput.focus();
  }
  // When the button has already been clicked (and has the class we added above), the search is visible.
  // Remove the `wvu-nav__custom-search-toggle--active-search` to change the `×` icon back to a search icon.
  // Also remove the `wvu-masthead__search-slider--is-visible` to hide the search.
  // Then, finally, restore focus to the search button.
  else {
    this.classList.remove('wvu-nav__custom-search-toggle--active-search');
    mastheadSearchSlider.classList.remove('wvu-masthead__search-slider--is-visible');
    this.focus();
  }
});

// Accessible Tabs
// https://codepen.io/BeyondHyper/pen/xZXXzj
// Does *not* require jQuery.
// NOTE: `aria-labelledby` was mispelled on line ~92. Changed/fixed.

(function tabComponentIIFE(window) {
  'use strict';
  var TabComponent = function tabComponentConstructor(selector) {
    const element = document.querySelector(selector);
    if (!element || !element.nodeType) {
      throw new Error('The DOM element was not found when creating the tab component');
    }
    return TabComponent.init(element);
  }


  TabComponent.prototype = {
    handleTabInteraction: function handleTabInteraction(index, direction) {
      const currentIndex = this.currentIndex;
      let newIndex = index;

      if (direction) {
        if (direction === 37) {
          newIndex = index - 1;
        } else {
          newIndex = index + 1
        }
      }

      if (newIndex < 0) {
        newIndex = this.tabs.length - 1 ;
      } else if (newIndex === this.tabs.length) {
        newIndex = 0;
      }

      // update tabs
      this.tabs[currentIndex].setAttribute('tabindex', '-1');
      this.tabs[currentIndex].removeAttribute('aria-selected');
      this.tabItems[currentIndex].removeAttribute('data-tab-active');

      this.tabs[newIndex].setAttribute('aria-selected', 'true');
      this.tabItems[newIndex].setAttribute('data-tab-active', '');
      this.tabs[newIndex].removeAttribute('tabindex');
      this.tabs[newIndex].focus();

      // update tab panels
      this.tabPanels[currentIndex].setAttribute('hidden', '');
      this.tabPanels[newIndex].removeAttribute('hidden');

      this.currentIndex = newIndex;

      return this;
    },

    handleTabpanelFocus: function handleTabPanelFocus(index) {
      this.tabPanels[index].focus();

      return this;
    }
  };

  // Intialize Tab Component
  TabComponent.init = function tabComponentInit(element) {
    this.tabList = element.querySelector('.tab-list');
    this.tabItems = [].slice.call(this.tabList.querySelectorAll('.tab-item'));
    this.tabs = [].slice.call(this.tabList.querySelectorAll('.tab-link'));
    this.tabPanels = [].slice.call(element.querySelectorAll('.tab-panel'));
    this.currentIndex = 0;
    this.tabList.setAttribute('role', 'tablist');

    this.tabItems.forEach((item, index) => {
      item.setAttribute('role', 'presentation');

      if (index === 0) {
        item.setAttribute('data-tab-active', '');
      }
    });

    this.tabs.forEach((item, index) => {
      item.setAttribute('role', 'tab');
      item.setAttribute('id', 'tab' + index);

      if (index > 0) {
        item.setAttribute('tabindex', '-1');
      } else {
        item.setAttribute('aria-selected', 'true');
      }
    });

    this.tabPanels.forEach((item, index) => {
      item.setAttribute('role', 'tabpanel');
      item.setAttribute('aria-labelledby', 'tab' + index);
      item.setAttribute('tabindex', '-1');

      if (index > 0) {
        item.setAttribute('hidden', '');
      }
    });

    this.tabList.addEventListener('click', event => {
      event.preventDefault();
       TabComponent.prototype.handleTabInteraction.call(this, this.tabs.indexOf(event.target));
    });

    this.tabList.addEventListener('keydown', event => {
      const index = this.tabs.indexOf(event.target);

      // Left and right arrows
      if (event.which === 37 || event.which === 39) {
        event.preventDefault();
        TabComponent.prototype.handleTabInteraction.call(this, index, event.which);
      }

      // Down arrow
      if (event.which === 40) {
        event.preventDefault();
        TabComponent.prototype.handleTabpanelFocus.call(this, index);
      }
    });

    return this;
  }

  window.tabs = TabComponent
})(window);

const tabComponent = tabs('[data-tab-component]');
