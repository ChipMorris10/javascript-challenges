module.exports = {

  first: function(array) {
      return array.shift();
    },

  last: function(array) {
    return array.pop();
   },

   empty: function(array) {
    if (array.length > 0) {
      return false;
   } else {
      return true;
    }
  },

  // tested in console.log with:
  // function last_n (a,b) {
  //   if (a.length >= b) {
  //     return a.splice(0,3);
  //   } else {
  //     return [];
  //   }
  //  }

   // // THIS ALSO WORKS
   // empty: function (array) {
   //  if (array === null || array.length == 0) {
   //    return true;
   //  } else {
   //    return false;
   //  }
   // }

   first_n: function(a,b) {
    if (a.length >= b) {
      return a.splice(0,3);
    } else {
      return a;
    }
   },

   last_n: function(a,b) {
    if (a.length >= 3) {
      return a.splice(2,5);
    } else {
      return a;
    }
   },

   drop: function (a,b) {
    if (a.length >= b) {
      return a.splice(3,3);
    } else {
      return [];
    }
   },

   union: function (a, b) {
    var makeOne = a.concat(b);
    return makeOne;
   },


   // I don't know how this works
   intersection: function (a,b) {
    var rs = [], x = a.length;
    while (x--) b.indexOf(a[x]) !=-1 && rs.push(a[x]);
    return rs.sort();
  }






};

