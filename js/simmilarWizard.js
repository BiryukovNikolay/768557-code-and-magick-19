'use strict';

window.simmilarWizard = (function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var wizards = [
    {
      name: window.util.getRandom(WIZARD_NAMES) + ' ' + window.util.getRandom(WIZARD_SURNAMES),
      coatColor: window.util.getRandom(COAT_COLORS),
      eyesColor: window.util.getRandom(EYES_COLORS)
    },
    {
      name: window.util.getRandom(WIZARD_NAMES) + ' ' + window.util.getRandom(WIZARD_SURNAMES),
      coatColor: window.util.getRandom(COAT_COLORS),
      eyesColor: window.util.getRandom(EYES_COLORS)
    },
    {
      name: window.util.getRandom(WIZARD_NAMES) + ' ' + window.util.getRandom(WIZARD_SURNAMES),
      coatColor: window.util.getRandom(COAT_COLORS),
      eyesColor: window.util.getRandom(EYES_COLORS)
    },
    {
      name: window.util.getRandom(WIZARD_NAMES) + ' ' + window.util.getRandom(WIZARD_SURNAMES),
      coatColor: window.util.getRandom(COAT_COLORS),
      eyesColor: window.util.getRandom(EYES_COLORS)
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
})();
