'use strict'

var nextHabit = exports.nextHabit = function(habits) {
  var date = new Date();
  var current = convertTime(date.getHours(),  date.getMinutes());
  var diff, temp, next, nextDue;
  for (var i = 0; i < habits.length; i++) {
    var due = parseTime(habits[i].dueTime, convertTime);
    temp = due - current;
    if (temp > 0) {
      if (temp < diff || diff === undefined) {
        diff = temp;
        next = habits[i].habitName;
        nextDue = due;
      }
    }
  }
  next = next || 'good job!'
  return [next, nextDue, diff];
}

var parseTime = exports.parseTime = function(time, cb) {
  var hr = time.match(/\d+(?=:)/gi).join("")*1;
  var min = time.match(/\d+(?= [ap]m)/gi).join("")*1;
  var ap = time.match(/AM|PM/).join("");

  return cb(hr, min, ap);
}

var convertTime = exports.convertTime = function(hr, min, ap) {
  if (ap === 'AM') {
    if (hr === 12) {
      return min;
    }
    return hr * 60 + min;
  }
  else if (ap === 'PM'){
    if (hr !== 12) {
      return (hr + 12) * 60 + min;
    }
    return hr * 60 + min;
  }
  else {
    return hr * 60 + min;
  }
}

var mapToDomain = exports.mapToDomain = function(origin, target, number, reversed) {
  if (reversed) {
    return target[1] - target[0] - (target[1] - target[0]) / (origin[1] - origin[0]) * number; 
  }
  return (target[1] - target[0]) / (origin[1] - origin[0]) * number; 
}