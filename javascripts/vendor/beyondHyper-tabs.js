'use strict';

// Accessible Tabs
// https://codepen.io/BeyondHyper/pen/xZXXzj
// Does *not* require jQuery.
// NOTE: `aria-labelledby` was mispelled on line ~92. Changed/fixed.

// NOTE: we have transpiled this from ES6 to  ES 5 using https://babeljs.io/repl/


(function tabComponentIIFE(window) {
  'use strict';

  var TabComponent = function tabComponentConstructor(selector) {
    var element = document.querySelector(selector);
    if (!element || !element.nodeType) {
      throw new Error('The DOM element was not found when creating the tab component');
    }
    return TabComponent.init(element);
  };

  TabComponent.prototype = {
    handleTabInteraction: function handleTabInteraction(index, direction) {
      var currentIndex = this.currentIndex;
      var newIndex = index;

      if (direction) {
        if (direction === 37) {
          newIndex = index - 1;
        } else {
          newIndex = index + 1;
        }
      }

      if (newIndex < 0) {
        newIndex = this.tabs.length - 1;
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
    var _this = this;

    this.tabList = element.querySelector('.tab-list');
    this.tabItems = [].slice.call(this.tabList.querySelectorAll('.tab-item'));
    this.tabs = [].slice.call(this.tabList.querySelectorAll('.tab-link'));
    this.tabPanels = [].slice.call(element.querySelectorAll('.tab-panel'));
    this.currentIndex = 0;
    this.tabList.setAttribute('role', 'tablist');

    this.tabItems.forEach(function (item, index) {
      item.setAttribute('role', 'presentation');

      if (index === 0) {
        item.setAttribute('data-tab-active', '');
      }
    });

    this.tabs.forEach(function (item, index) {
      item.setAttribute('role', 'tab');
      item.setAttribute('id', 'tab' + index);

      if (index > 0) {
        item.setAttribute('tabindex', '-1');
      } else {
        item.setAttribute('aria-selected', 'true');
      }
    });

    this.tabPanels.forEach(function (item, index) {
      item.setAttribute('role', 'tabpanel');
      item.setAttribute('aria-labelledby', 'tab' + index);
      item.setAttribute('tabindex', '-1');

      if (index > 0) {
        item.setAttribute('hidden', '');
      }
    });

    this.tabList.addEventListener('click', function (event) {
      event.preventDefault();
      TabComponent.prototype.handleTabInteraction.call(_this, _this.tabs.indexOf(event.target));
    });

    this.tabList.addEventListener('keydown', function (event) {
      var index = _this.tabs.indexOf(event.target);

      // Left and right arrows
      if (event.which === 37 || event.which === 39) {
        event.preventDefault();
        TabComponent.prototype.handleTabInteraction.call(_this, index, event.which);
      }

      // Down arrow
      if (event.which === 40) {
        event.preventDefault();
        TabComponent.prototype.handleTabpanelFocus.call(_this, index);
      }
    });

    return this;
  };

  window.tabs = TabComponent;
})(window);

var tabComponent = tabs('[data-tab-component]');
