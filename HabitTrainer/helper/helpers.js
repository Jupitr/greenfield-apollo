'use strict'

var moment = require('moment');

var nextHabit = exports.nextHabit = function(habits) {
  var date = new Date();
  var current = convertTime(date.getHours(),  date.getMinutes());
  var diff, temp, next, nextDue;
  for (var i = 0; i < habits.length; i++) {
    if (habits[i].status !== 'completed'){
      var due = parseTime(moment(habits[i].dueTime).format('hh:mm a'), convertTime);
      temp = due - current;
      if (temp > 0) {
        if (temp < diff || diff === undefined) {
          diff = temp;
          next = habits[i].habitName;
          nextDue = due;
        }
      }
    }
  }
  next = next || 'good job!'
  return [next, nextDue, diff];
}

var sortHabits = exports.sortHabits = function(habits) {
  var accomplished = [], 
      active = [], 
      completed = [], 
      missed = [], 
      pending = [];

  for (var i = 0; i < habits.length; i++) {
    if (habits[i].streak >= 21) {
      accomplished.push(habits[i]);
    }
    if (habits[i].active) {
      active.push(habits[i]);
    }
    if (habits[i].status === 'completed') {
      completed.push(habits[i]);
    }
    if (habits[i].status === 'pending' || habits[i].status === 'remind') {
      pending.push(habits[i]);
    }
    if (habits[i].status === 'missed' || habits[i].status === 'failed') {
      missed.push(habits[i]);
    }
  }
  return [accomplished, active, completed, pending, missed];
}

var parseTime = exports.parseTime = function(time, cb) {
  var hr = time.match(/\d+(?=:)/gi).join("")*1;
  var min = time.match(/\d+(?= [ap]m)/gi).join("")*1;
  var ap = time.match(/am|pm/).join("");

  return cb(hr, min, ap);
}

var convertTime = exports.convertTime = function(hr, min, ap) {
  if (ap === 'am') {
    if (hr === 12) {
      return min;
    }
    return hr * 60 + min;
  }
  else if (ap === 'pm'){
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