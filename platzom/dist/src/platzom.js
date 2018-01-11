'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});
exports.default = platzom;
function platzom(str) {
      var translation = str;
      //1
      translation.toLowerCase().endsWith('ar') ? translation = str.slice(0, -2) : translation;
      //2
      translation.toLowerCase().startsWith('z') ? translation += 'pe' : translation;
      //3
      var length = translation.length,
          half = Math.round(translation.length / 2);
      length >= 10 ? translation = translation.slice(0, half) + ' - ' + translation.slice(half) : translation;
      //4
      var reverse = function reverse(str) {
            return str.split('').reverse().join('');
      },
          minMay = function minMay(str) {
            return str.split('').map(function (c) {
                  return str.indexOf(c) % 2 == 0 ? c.toUpperCase() : c.toLowerCase();
            }).join('');
      };

      translation = str === reverse(translation) ? minMay(str) : translation;

      return translation;
}