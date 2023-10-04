/**
 * 
 * var obj = {
  a: {
    b: {
      c: 12,
      j: false,
    },
    k: null,
  },
};

const findPath=(str)=>{


}

console.log(findPath(obj, "a.b.c")); // 12
console.log(findPath(obj, "a.b")); // {c: 12, j: false}
console.log(findPath(obj, "a.b.d")); // undefined
console.log(findPath(obj, "a.c")); // undefined
console.log(findPath(obj, "a.b.c.d")); // undefined
console.log(findPath(obj, "a.b.c.d.e")); // undefined
console.log(findPath(obj, "a.b.j")); //false
console.log(findPath(obj, "a.b.j.k")); //undefined
console.log(findPath(obj, "a.k")); //null
 */

var obj = {
    a: {
        b: {
            c: 12,
            j: false,
        },
        k: null,
    },
};

const findPath = (obj, str)=>{

    str = str.split(".")
    let resultObj = 0;
    for(let key of str){
        if(typeof(obj[key])===Object){
            
            return obj[key]
        }
        else if(resultObj[key]){
            return resultObj[key]
        }
        else{
            return undefined;
        }
    }
    console.log(resultObj)
}

findPath(obj, "a");