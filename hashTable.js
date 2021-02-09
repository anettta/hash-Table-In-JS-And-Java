function hashStringToInt(string, tableSize) {
    let hash = 17; // you want to pick a prime number 
    // as it will spread out where the keys are stored

    for( let i = 0; i < string.length; i++) {
        hash = (13 * hash * string.charCodeAt(i)) % tableSize;
    }
    

    return hash;

}


class HashTable {

table = new Array(3333); //creating a new array 


    setItem = (key, value) => { // we take the key, convert it to an integer and store it in array
        const idx = hashStringToInt(key, this.table.length);
        if  (this.table[idx]) {
            this.table[idx].push([key, value]);
        } else {
            this.table[idx] = [[key, value]];
        }
    };

    getItem = key => {
       const idx = hashStringToInt(key, this.table.length);
       if (!this.table[idx]) {
           return null;
       }
       return this.table[idx].find(x => x[0] === key)[1];
    };
}

const myTable = new HashTable();
myTable.setItem("firstName", "Anna");
myTable.setItem("firstName", "Ivan");  
myTable.getItem("firstName");
console.log(myTable.getItem("firstName"));


