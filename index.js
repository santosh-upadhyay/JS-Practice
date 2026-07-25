//***Find Missing Keys Between Two Objects********//
Input:
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, c: 3, d: 4 };
output:
// this 
[ 'b' ] [ 'd' ]
// or this
[ 'b', 'd' ]

// method 1

const obj3= Object.keys(obj1).filter(key=>!(key in obj2));
const obj4= Object.keys(obj2).filter(key=>!(key in obj1));
console.log(obj3,obj4)
// method 2
const set1 = new Set(Object.keys(obj1));
const set2 = new Set(Object.keys(obj2));

const missing = [
    ...Object.keys(obj1).filter(key=>!(set2.has(key))),
    ...Object.keys(obj2).filter(key=>!(set1.has(key)))
]

console.log(missing);