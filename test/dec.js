'use strict';

var throws = require('assert').throws;

var S = require('..');

var eq = require('./internal/eq');
var errorEq = require('./internal/errorEq');


test('dec', function() {

  eq(typeof S.dec, 'function');
  eq(S.dec.length, 1);

  throws(function() { S.dec('xxx'); },
         errorEq(TypeError,
                 'Invalid value\n' +
                 '\n' +
                 'dec :: FiniteNumber -> FiniteNumber\n' +
                 '       ^^^^^^^^^^^^\n' +
                 '            1\n' +
                 '\n' +
                 '1)  "xxx" :: String\n' +
                 '\n' +
                 'The value at position 1 is not a member of ‘FiniteNumber’.\n'));

  throws(function() { S.dec(Infinity); },
         errorEq(TypeError,
                 'Invalid value\n' +
                 '\n' +
                 'dec :: FiniteNumber -> FiniteNumber\n' +
                 '       ^^^^^^^^^^^^\n' +
                 '            1\n' +
                 '\n' +
                 '1)  Infinity :: Number, ValidNumber\n' +
                 '\n' +
                 'The value at position 1 is not a member of ‘FiniteNumber’.\n'));

  throws(function() { S.dec(-Infinity); },
         errorEq(TypeError,
                 'Invalid value\n' +
                 '\n' +
                 'dec :: FiniteNumber -> FiniteNumber\n' +
                 '       ^^^^^^^^^^^^\n' +
                 '            1\n' +
                 '\n' +
                 '1)  -Infinity :: Number, ValidNumber\n' +
                 '\n' +
                 'The value at position 1 is not a member of ‘FiniteNumber’.\n'));

  eq(S.dec(2), 1);
  eq(S.dec(-1), -2);
  eq(S.dec(1.5), 0.5);
  eq(S.dec(-1.5), -2.5);

});
