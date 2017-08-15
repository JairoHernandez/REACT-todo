var moment = require('moment');

console.log(moment().format());

var now = moment();
console.log('Current timestamp', now.unix());

var timestamp = 1502747025;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('MMM D, YYYY @ h:mm a'));

// January 3rd, 2016 @ 12:13 timestamp
console.log('current moment', currentMoment.format('MMM Do, YYYY @ h:mmA'));
