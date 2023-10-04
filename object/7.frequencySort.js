/**
 * 
 * const input = frequencySort("cCaaAAbbbBBBaaaa"));

// Output
"bbbBBBaaAAcC"

    step-1: i will take a empty object and map all characters of the string in the object;
    step-2: then i will take the the length of the 
 */

    const frequencySort=(string)=>{
        let obj = {};

        let result = "";

        for(let i of string){

            if(obj.hasOwnProperty(i)){
                obj[i] = obj[i]+1
            }
            else{
                obj[i]= 1;
            }
        }

        let entriesArray = Object.entries(obj).sort((a,b)=>b[1]- a[1])


        console.log(entriesArray)
        let str = "";
        for(const i of entriesArray){
            const [char, val] = i;
            // for(let i=0; i<val;i++){
            //     resultStr= resultStr+char
            // }

            str+= Array(val).fill(char).join("")
            
            console.log(str)

        }

    }

    // let array = [[5,4,54,34,6,4535,65,];

    // let array = [ [100,4,5], [400,6,4], [50,6,7], [65,4,6]]
    // array.sort((a,b)=>a[2]-b[2])
    // console.log({array})

//    [ [50,6,7], [65,4,6], [100,4,5], [400,6,4]] 
    
    // console.log(array.sort((a,b)=>a-b))






const input = frequencySort('cCaaAAbbbBBBaaaabbkkkekeKKuUUPPKKTTtEeeuQ');