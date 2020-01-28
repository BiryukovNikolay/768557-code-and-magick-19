'use strict';

var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_X_1 = 300;
var CLOUD_Y_1 = 30;
var CLOUD_X_2 = 600;
var CLOUD_Y_2 = 20;
var CLOUD_X_3 = 550;
var CLOUD_Y_3 = 120;
var CLOUD_X_4 = 600;
var CLOUD_Y_4 = 270;
var CLOUD_X_5 = 250;
var CLOUD_Y_5 = 250;
var CLOUD_X_6 = 50;
var CLOUD_Y_6 = 280;
var CLOUD_X_7 = 80;
var CLOUD_Y_7 = 180;
var topLine = [CLOUD_Y, CLOUD_Y_1, CLOUD_Y_2];
var bottomLine = [CLOUD_Y_4, CLOUD_Y_5, CLOUD_Y_6];
var leftLine = [CLOUD_X, CLOUD_X_7, CLOUD_X_6];
var rightLine = [CLOUD_X_2, CLOUD_X_3, CLOUD_X_4];
var GAP = 10;
var INDENT = 30;
var TIME_LABEL = 20;
var SPACE_COLUMN = 50;


var renderCloud = function (ctx, x, y, X_1, Y_1, X_2, Y_2, X_3, Y_3, X_4, Y_4, X_5, Y_5, X_6, Y_6, X_7, Y_7, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(X_1, Y_1);
  ctx.lineTo(X_2, Y_2);
  ctx.lineTo(X_3, Y_3);
  ctx.lineTo(X_4, Y_4);
  ctx.lineTo(X_5, Y_5);
  ctx.lineTo(X_6, Y_6);
  ctx.lineTo(X_7, Y_7);
  ctx.closePath();
  ctx.fill();
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var getMinElement = function (arr) {
  var minElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < minElement) {
      minElement = arr[i];
    }
  }
  return minElement;
};

var topPoint = getMaxElement(topLine) + INDENT;
var bottomPoint = getMinElement(bottomLine) - INDENT;
var leftPoint = getMaxElement(leftLine) + INDENT;
var rightPoint = getMinElement(rightLine) - INDENT;
var maxHeight = bottomPoint - topPoint;
var maxWidth = rightPoint - leftPoint;
var maxHeightColumn = (maxHeight - 3 * GAP) - TIME_LABEL;
var widthColumn = maxWidth / 4 - SPACE_COLUMN;

// Отрисовка облака статистики
window.renderStatistics = function (ctx, players, times) {
  // Отрисовка тени облака (координаты +GAP относительно поля статистики)
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_X_1 + GAP, CLOUD_Y_1 + GAP, CLOUD_X_2 + GAP, CLOUD_Y_2 + GAP, CLOUD_X_3 + GAP, CLOUD_Y_3 + GAP, CLOUD_X_4 + GAP, CLOUD_Y_4 + GAP, CLOUD_X_5 + GAP, CLOUD_Y_5 + GAP, CLOUD_X_6 + GAP, CLOUD_Y_6 + GAP, CLOUD_X_7 + GAP, CLOUD_Y_7 + GAP, 'rgba(0, 0, 0, 0.3)');
  // Отривовка поля статистики
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_X_1, CLOUD_Y_1, CLOUD_X_2, CLOUD_Y_2, CLOUD_X_3, CLOUD_Y_3, CLOUD_X_4, CLOUD_Y_4, CLOUD_X_5, CLOUD_Y_5, CLOUD_X_6, CLOUD_Y_6, CLOUD_X_7, CLOUD_Y_7, '#fff');
  ctx.stroke();

  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили! ', leftPoint, topPoint);
  ctx.fillText('Список результатов: ', leftPoint, topPoint + 2 * GAP);
  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var color = i * 15;
    ctx.fillStyle = 'hsl(240, ' + color + '%, 50%)';
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(leftPoint + (widthColumn + SPACE_COLUMN) * i, bottomPoint, widthColumn, -((maxHeightColumn * times[i]) / maxTime));
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], leftPoint + (widthColumn + SPACE_COLUMN) * i, bottomPoint + 2 * GAP);
    ctx.fillText(Math.round(times[i]), leftPoint + (widthColumn + SPACE_COLUMN) * i, bottomPoint - (((maxHeightColumn * times[i]) / maxTime) + GAP));
  }
};
