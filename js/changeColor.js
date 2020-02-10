'use strict';

(function () {
  window.changeColor = function (wizardThings, colors, input) {
    wizardThings.addEventListener('click', function () {
      var color = window.util.getRandom(colors);
      if (wizardThings.tagName.toLowerCase() === 'div') {
        wizardThings.style.background = color;
      } else {
        wizardThings.style.fill = color;
      }
      input.value = color;
    });
  };
})();
