import HashTable from 'HashTable';
//Simple Hash Table Implementation

// https://www.freecodecamp.org/news/how-to-implement-a-simple-hash-table-in-javascript-cb3b9c1f2997/


// {}
// Complexity measures how many steps are required by our function — 
// the fewer steps, the faster the execution 
// (also known as “running time”).




// function fn(n, m) {  return n * m } 
// O(1) just one operation above!

// function fn(n, m) {  let s = []
// for (i = 0; i < n; i++) {  s.push(m)  }
// return s }
// O(n) we’re looping as many times as the value of n, which could be in the millions.

//function fn(n, m) {  let s = []
//for (i = 0; i < n; i++) {
//        s.push(n) 
// }  
//for (i = 0; i < m; i++) { 
//       s.push(m)  
// }
// return s
// }
// O(n + m) "do this, then when you're all done, do that" !!!


// hash table has two simple methods: set and get
// hashing function is used on the keys that you set or get
// a good hashing function is the key to an efficient hash table


// JS arrays are hash tables
// a = [][]
// a["some"] = "thing"'thing'
// a[ some: 'thing']


// https://www.mattzeunert.com/2017/02/01/implementing-a-hash-table-in-javascript.html


// hash tables are a common data structure for storing key-value pairs


var dict = new HashTable(); // hash tables can be used to implement associative arrays(also called dictionaries)
dict.set("PI", 3.14);
dict.get("PI");

function NaiveDict() {
    this.keys = [];
    this.values = [];
}

NaiveDict.prototype.set = function(key, value) {
    this.keys.push(key)
    this.values.push(value)
}
NaiveDict.prototype.get = function(lookupKey) {
    for (var i = 0; i < this.keys.length; i++) {
        var key = this.keys[i];
        if(key === lookupKey) {
            return this.values[i]
        }
    }
}

//O(n)

// GOAL IS TO EQUALLY DISTRIBUTE KEY-VALUE PAIRS ACROSS THE SLOTS

// THE KEY OF A KEY-VALUE PAIR DECIDES WHAT BUCKET IT SHOULD BE STORED IN
// FIRST, THE KEY IS CONVERTED TO A NUMBER USING A HASH FUNCTION

var hash = hashFunction("PI")

// we use the modulo operator to get an index thats smaller than our array size

var arraySize = 1000
var bucketIndex = hash % arraySize; 
