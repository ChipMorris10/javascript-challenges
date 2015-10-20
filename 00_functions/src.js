module.exports = {

helloWorld: function(){
  return "Hello World";
},

hello: function(string) {
  return "Hello " + string;
},

shout: function(string) {
  var str = string.toUpperCase();
  return "Hello " + str;
},

whisper: function(string) {
  var str = string.toLowerCase();
  return "Hello " + str;
},

separate: function(string) {
  return string.split('');
},

reverseJoin: function(arr) {
arr.reverse();
var string = arr.join(',');
return string;
},

reverseJoinCompact: function(arr) {
  arr.reverse();
  var string = arr.join('');
  return string;
},

backwardsDay: function(str) {
  return "Hello " + str.split('').reverse().join('');
}



}  // end of document
