/**
 * 
 * const input = frequencySort("cCaaAAbbbBBBaaaa"));
 * 
 */

const frequencySort = (string) => {
    let obj = {}

    let resultArr = 0;
    for (let i of string) {
        if (obj.hasOwnProperty(i)) {
            obj[i] = obj[i] + 1
        }
        else {
            obj[i] = 1;
        }
    }
    console.log(obj)

    let entries = Object.entries(obj).sort((a,b)=> b[1]-a[1]);


    for(let item of entries){
        const [char, val] = item;
        resultArr = Array(val).fill(char).join("")       
    }

    return resultArr;
}



const input = frequencySort("cCaaAAbbbBBBaaaa");

console.log(input)