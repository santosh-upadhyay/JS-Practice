
// ********* Merge Objects with Sum of Common Values***************//
// Input:
const obj1 = { a: 10, b: 20 };
const obj2 = { b: 5, c: 30 };
// Output:
{
    // a:10, b:25, c:30
}

for (let key in obj2){
    if(obj1[key]){
        obj1[key]+=obj2[key];
    }else{
        obj1[key] = obj2[key];
    }
}
// method 2
Object.keys(obj2).forEach(key=>{
    obj1[key] = (obj1[key]||0)+obj2[key];
})

// method 3
Object.entries(obj2).forEach(([key,value])=>{
    obj1[key] = (obj1[key]||0)+value;
})

// method 4
for([key, value] of Object.entries(obj2)){
    obj1[key]  = (obj1[key]||0)+obj2[key];
}
// method 5
const mergedObj = Object.keys({...obj1, ...obj2}).reduce((acc, key) => {
    acc[key] = (obj1[key] || 0) + (obj2[key] || 0);
    return acc;
}, {});
console.log(mergedObj)

// method 6
function mergeAndSum(obj1, obj2) {
    const result = {};

    const keys = new Set([
        ...Object.keys(obj1),
        ...Object.keys(obj2)
    ]);

    for (const key of keys) {
        result[key] = (obj1[key] || 0) + (obj2[key] || 0);
    }

    return result;
}

const obj1 = { a: 10, b: 20 };
const obj2 = { b: 5, c: 30 };

console.log(mergeAndSum(obj1, obj2));
// { a: 10, b: 25, c: 30 }


//********************** */ method7 ******************

function mergeObjects(...objects) {
    return objects.reduce((result, obj) => {
        for (const key in obj) {
            result[key] = (result[key] || 0) + obj[key];
        }
        return result;
    }, {});
}

const obj1 = { a: 10, b: 20 };
const obj2 = { b: 5, c: 30 };
const obj3 = { a: 15, c: 10, d: 50 };

console.log(mergeObjects(obj1, obj2, obj3));



