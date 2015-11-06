/*
  The primary goal of this warm-up is to work on refactoring
  out duplicated code. As you build the peaks and valleys
  methods, some duplication will arise. Get the tests passing
  first and then refactor to remove the duplication.

  Note: The peaks/valleys are fun to console.log out while
  writing these methods.
*/

module.exports = {
  peak: function() {
    return ('/\\');
},

valley: function() {
  return ('___');
},

// peaks: function() {
//   return ('/\\/\\/\\');
// },

// refactored code
peaks: function(a) {
  var string = '';
  for(var i=0; i<a; i++)
    string += '/\\';
    return string;
},

// OR
// peaks: function(char) {
//   var string = '';
//   while(char) {
//     string += '/\\';
//     char--;
//   }
//   return string;
// },


// valleys: function() {
//   return ('______');
// },


valleys: function(a) {
  var string = '';
  while(a) {
    string += '___';
    a--;
  }
  return string;
},

// This doesn't work and I don't know why.
// valleys: function(a) {
//   var string = '';
//   for(var i=0; i<a; i++);
//     string += '_';
//     return string;
// },

peaksAndValleys: function() {
  return('/\\/\\___');
},

peaksAndValleys: function(a, b){
    var string1 = '';
    var string2 = '';
    while (a) {
      string1 += '/\\';
      a--;
    }
    while (b) {
      string2 += '___';
      b--;
    }
    return string1 + string2;
  },





};
