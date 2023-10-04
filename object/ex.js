var obj = {
    a: {
        b: {
            c: 12,
            j: false,
        },
        k: null,
    },
};

let str = ["a","b","c"]
let resultObj = 0;




for(let key of str){
   return (obj[key])? obj[key] : null

}

console.log(resultObj)