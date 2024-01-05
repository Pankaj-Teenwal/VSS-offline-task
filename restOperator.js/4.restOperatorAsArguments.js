const addNumbers = (...args)=>{
    let result = 0;
    for(let i of args){
        result+=i;
    }


    return result/args.length;
}

console.log(addNumbers(1,2,3,4,5,6,7,8,9));