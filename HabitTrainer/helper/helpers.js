'use strict'

var nextHabit = exports.nextHabit = function(habits) {
  var date = new Date();
  var hr = date.getHours();
  var min = date.getMinutes();
  for (var i = 0; i < habits.length; i++) {
    parseTime();
  }
}

var parseTime = exports.parseTime = function(time, cb) {
  var hr = time.match(/\d+(?=:)/gi).join("")*1;
  var min = time.match(/\d+(?=[ap]m)/gi).join("")*1;
  var ap = time.match(/AM|PM/).join("");

  return cb(hr, min, ap);
}

var convertTime = exports.convertTime = function(hr, min, ap) {
  if (ap === 'AM') {
    if (hr === 12) {
      return min;
    }
    return hr * 12 + min;
  }
  else {
    if (hr !== 12) {
      return (hr + 12) * 12 + min;
    }
    return hr * 12 + min;
  }
}

console.log(parseTime('4:30PM', convertTime));