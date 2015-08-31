module.exports = {

  helloWorld: function(){
return "Hello World";
  },

  hello: function(string){
    return "Hello " + string;
  },

 shout: function(string){
    return "Hello " + string.toUpperCase();
 },

 whisper: function(string){
    return "Hello " + string.toLowerCase();
 },

 separate: function(string){
    return string.split("");
 },

reverseJoin: function(array){
    array.reverse();
    var whiteSpace = array.join(",");
    return whiteSpace;
 },

// reverseJoinCompact: function(string){
//     return string.reverse("");
// },

// backwardsDay: function(string){
//     return
// }







};  // end of document
