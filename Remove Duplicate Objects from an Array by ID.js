const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Alex" },
  { id: 1, name: "John" }
];

// Expected Output

[
  { id: 1, name: "John" },
  { id: 2, name: "Alex" }
]

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Alex" },
  { id: 1, name: "John" }
];
// method 1
const result = users.filter((user,index,arr)=>{
    return index===arr.findIndex(item=> user.id==item.id)
    // return index === arr.findIndex((item)=>{ return user.id === item.id})
})
console.log(result);

// method 2

const seen = new Set();

const result = users.filter((user,index,user1)=>(
    !(seen.has(user.id)) && seen.add(user.id)
))

//***************** OR  ***********************// 
const result = users.filter((user,index,user1)=>{
    return !(seen.has(user.id)) && seen.add(user.id);
})
console.log(result);

//****************  method 3  ************************//

const result = users.reduce((acc, user) => {
  const exists = acc.some(item => item.id === user.id);

  if (!exists) {
    acc.push(user);
  }

  return acc;
}, []);

console.log(result);