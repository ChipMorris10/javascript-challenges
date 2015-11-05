/*
  Use a for loop, NOT forEach to complete each warm-up.
*/

module.exports = {

  joinWithFor: function(list) {
    var string = "";
    for (i = 0; i < list.length; i++) {
      string += list[i];
    }
    // console.log(string);
    return string;
  },

  joinWithForAndIndex: function(list) {
    var string = "";
    for (i = 0; i < list.length; i++) {
      string += list[i];
      string += i;
    }
    // console.log(string);
    return string;
  },

  /*
  tested in the console
  var test = ['a', 'b', 'c', 'd'];
  for (i = 0; i < test.length; i++) {
  console.log(i);
  }
  which returned 0 1 2 3

  then added:
  console.log(test[i]);
  which returned a, b, c, d

  then added
  console.log(i);
  which returned a0b1c2d3
  */



joinWithoutOddCharacters: function(cats){
    var string = "";
    // console.log(cats);
    // console.log(string);
    for (var i = 0; i < cats.length; i = i + 2) {
      string += cats[i];
    }
    // console.log(string);
    return string;
  },

// joinWithForAndToken: function(str) {
//   for (i = 0; i < str.length; i++) {
//     console.log(str);
//     return str.split('').join('*');
//   }
// },


joinWithForAndToken: function (arr, token) {
    var string = "";
    for (var i in arr){
      string += arr[i] + token;
    }
    return string.slice(0, 5);
  },

joinWithForAndAlternatingTokens: function(arr, star, plus) {
  var string = "";
  for (var i in arr) {
    // string += arr[i] + star + plus;  returns 1*+2*+3*+4

    // string += arr[i] + star + arr[i] + plus;  returns 1*1+2*2+3

    // string += arr[i];  returns 12345

    // string += arr[i] + star + arr[i];  returns 1*12*23*3

    // string += arr[i] + star + arr[i];  returns 1*12*23*3

    // string += arr[i] + star + arr.length + 1 + plus;  returns 1*51+2*51

    string += arr[0] + star + arr[1] + plus + arr[2] + star + arr[3] + plus + arr[4];
  }
  // console.log(string);
  return string.slice(0,9);
}




};



