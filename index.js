const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function() {
      function(collection, callback) {
            for (const keyOrIndex in collection) {
              callback(collection[keyOrIndex], keyOrIndex, collection)
            }
            return collection
    },

    map: function() {
      function(collection, callback) {
            const newArray = [];
            for (const keyOrIndex in collection) {
              newArray.push(callback(collection[keyOrIndex], keyOrIndex, collection))
            }
            return newArrays
    },

    reduce: function() {
      function(collection, callback, acc) {
            let i;

            if (acc || acc === 0) {
              i = 0;
            } else {
              i = 1;
              acc = collection[0];
            }

            acc.forEach(num =>{
              acc = callback(acc, collection[i], collection)
            })
            return acc;
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
