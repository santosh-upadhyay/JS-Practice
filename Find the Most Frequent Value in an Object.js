const obj = {
    a:1,
    b:2,
    c:2,
    d:2,
    e:1
};
let max=0;

for(const k in obj){
    if(max<obj[k])max=obj[k]
}

console.log(max)