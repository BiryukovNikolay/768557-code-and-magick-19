'use strict';

var X = 100;
var Y = 10;
var X_1 = 300;
var Y_1 = 30;
var X_2 = 600;
var Y_2 = 20;
var X_3 = 550;
var Y_3 = 120;
var X_4 = 600;
var Y_4 = 270;
var X_5 = 250;
var Y_5 = 250;
var X_6 = 50;
var Y_6 = 280;
var X_7 = 80;
var Y_7 = 180;
var topLine = [Y, Y_1, Y_2];
var bottomLine = [Y_4, Y_5, Y_6];
var leftLine = [X, X_7, X_6];
var rightLine = [X_2, X_3, X_4];
var GAP = 10; // Размер отступа тени
var INDENT = 30; // Размер отступа блока статистики от кривых (вписанный прямоугольник)
var TIME_LABEL = 20; // Размер отступа показателя времени от столбцов
var SPACE_COLUMN = 50; // Размер отступа между столбцами


var renderCloud = function (ctx, interval, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(X + interval, Y + interval);
  ctx.lineTo(X_1 + interval, Y_1 + interval);
  ctx.lineTo(X_2 + interval, Y_2 + interval);
  ctx.lineTo(X_3 + interval, Y_3 + interval);
  ctx.lineTo(X_4 + interval, Y_4 + interval);
  ctx.lineTo(X_5 + interval, Y_5 + interval);
  ctx.lineTo(X_6 + interval, Y_6 + interval);
  ctx.lineTo(X_7 + interval, Y_7 + interval);
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

// Определяем границы блока статистики (прямоугольника вписанного внутрь многоугольника)
var topPoint = getMaxElement(topLine) + INDENT;
var bottomPoint = getMinElement(bottomLine) - INDENT;
var leftPoint = getMaxElement(leftLine) + INDENT;
var rightPoint = getMinElement(rightLine) - INDENT;
// Параметры блока статистики
var maxHeight = bottomPoint - topPoint;
var maxWidth = rightPoint - leftPoint;
// Параметры столбцов
var maxHeightColumn = (maxHeight - 3 * GAP) - TIME_LABEL;
var widthColumn = maxWidth / 4 - SPACE_COLUMN;

// Отрисовка облака статистики
window.renderStatistics = function (ctx, players, times) {
  // Отрисовка тени облака (координаты +GAP относительно поля статистики)
  renderCloud(ctx, GAP, 'rgba(0, 0, 0, 0.3)');
  // Отривовка облака статистики
  renderCloud(ctx, 0, '#fff');
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
