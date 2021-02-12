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