'use strict';

window.util = (function () {
  var ESC_KEY = 27;
  var ENTER_KEY = 13;
  return {
    getRandom: function (arr) {
      var randomNumber = arr[Math.floor(Math.random() * Math.floor(arr.length))];
      return randomNumber;
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEY) {
        action();
      }
    },
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEY) {
        action();
      }
    }
  };
})();
