'use strict';

var setup = document.querySelector('.setup');
document.querySelector('.setup-similar').classList.remove('hidden');
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var getRandom = function (arr) {
  var randomNumber = arr[Math.floor(Math.random() * Math.floor(arr.length))];
  return randomNumber;
};

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var wizards = [
  {
    name: getRandom(WIZARD_NAMES) + ' ' + getRandom(WIZARD_SURNAMES),
    coatColor: getRandom(COAT_COLORS),
    eyesColor: getRandom(EYES_COLORS)
  },
  {
    name: getRandom(WIZARD_NAMES) + ' ' + getRandom(WIZARD_SURNAMES),
    coatColor: getRandom(COAT_COLORS),
    eyesColor: getRandom(EYES_COLORS)
  },
  {
    name: getRandom(WIZARD_NAMES) + ' ' + getRandom(WIZARD_SURNAMES),
    coatColor: getRandom(COAT_COLORS),
    eyesColor: getRandom(EYES_COLORS)
  },
  {
    name: getRandom(WIZARD_NAMES) + ' ' + getRandom(WIZARD_SURNAMES),
    coatColor: getRandom(COAT_COLORS),
    eyesColor: getRandom(EYES_COLORS)
  }
];

for (var i = 0; i < wizards.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  similarListElement.appendChild(wizardElement);
  var sameWizard = wizards[i];
  wizardElement.querySelector('.setup-similar-label').textContent = sameWizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
}
// одеть Надежду
var FIRE_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = setup.querySelector('.setup-user-name');
var MIN_NAME_LENGTH = 2;
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var wizardCoat = setup.querySelector('.wizard-coat');
var mainCoatColor = setup.querySelector('.coat-color');
var wizardEyes = setup.querySelector('.wizard-eyes');
var mainEyesColor = setup.querySelector('.eyes-color');
var setupFireball = setup.querySelector('.setup-fireball-wrap');
var fireballColor = setup.querySelector('.fireball-color');
var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closePopup();
  }
};
var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress());
};

var closePopup = function () {
  setup.classList.add('hidden');
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

var changeColor = function (wizardThings, colors, input) {
  wizardThings.style.fill = getRandom(colors);
  input.value = wizardThings.style.fill;
};

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < MIN_NAME_LENGTH) {
    target.setCustomValidity('Имя должно состоять минимум из ' +
      MIN_NAME_LENGTH +
      '-х символов'
    );
  } else {
    target.setCustomValidity('');
  }
});
// Изменения цветов плаща глаз и файрбола.
wizardCoat.addEventListener('click', function () {
  changeColor(wizardCoat, COAT_COLORS, mainCoatColor);
});

wizardEyes.addEventListener('click', function () {
  changeColor(wizardEyes, EYES_COLORS, mainEyesColor);
});

setupFireball.addEventListener('click', function () {
  setupFireball.style.background = getRandom(FIRE_COLORS);
  fireballColor.value = setupFireball.style.background;
});
