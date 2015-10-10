'use strict'

var nextHabit = exports.nextHabit = function(habits) {
  var date = new Date();
  var current = convertTime(date.getHours(),  date.getMinutes());
  var diff, next, temp;
  for (var i = 0; i < habits.length; i++) {
    var due = parseTime(habits[i].dueTime, convertTime);
    temp = due - current;
    if (temp > 0) {
      if (temp < diff || diff === undefined) {
        diff = temp;
        next = habits[i].habitName;
      }
    }
  }
  next = next || 'good job!'
  return next;
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
    return hr * 12 + min;
  }
  else if (ap === 'PM'){
    if (hr !== 12) {
      return (hr + 12) * 12 + min;
    }
    return hr * 12 + min;
  }
  else {
    return hr * 12 + min;
  }
}

var HABITS = [
  {habitName: 'Submit a Pull Request', streak: 5, checkinCount: 25, failedCount: 3, reminderTime: '2:30 PM', dueTime: '4:30 PM', streakRecord: 15, active:true},
  {habitName: 'Complete a Pomodoro', streak: 10, checkinCount: 20, failedCount: 4, reminderTime: '2:30 PM', dueTime: '4:30 PM', streakRecord: 20, active:true},
  {habitName: 'Workout', streak: 8, checkinCount: 15, failedCount: 2, reminderTime: '2:30 PM', dueTime: '4:30 PM', streakRecord: 8, active:true}
];

console.log(nextHabit(HABITS));