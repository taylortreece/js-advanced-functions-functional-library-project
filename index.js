const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      for(const value of newCollection) {
        iteratee(value)
      }

      return collection
    },

    map: function(collection, iteratee) {
      let newArray = []
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      for(const value of newCollection) {
        newArray.push(iteratee(value))
      }

      return newArray
    },

    reduce: function(collection, iteratee) {
      let newValue;
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      console.log(newCollection)

      for(const value of newCollection) {
        console.log(iteratee(accumulator, value))
      }
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()