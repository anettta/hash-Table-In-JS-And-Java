function hashStringToInt(string) {
    let hash = 17; // you want to pick a prime number 
    // as it will spread out where the keys are stored

}


class HashTable {

table = new Array(101);


    setItem = (key, item) => {
        const idx = hashStringToInt(key);
        this.table[idx] = value;

    };

    getItem = key => {
       const idx = hashStringToInt(key);
       return this.table[idx];
    };
}

const myTable = new HashTable();
myTable.setItem("firstName", "Anna");
myTable.getItem("firstName");
console.log(myTable.getItem("firstName"));


