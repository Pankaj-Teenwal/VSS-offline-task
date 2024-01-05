const Products = [

    {
        id:1,
        name:"iphone 12",
        brand: "apple"
    },

    {
        id:2,
        name:"iphone 13",
        brand: "apple"
    },

    {
        id:3,
        name:"Samsung s22",
        brand: "samsung"
    },

    {
        id:4,
        name:"Samsung s23",
        brand: "samsung"
    }
]


const updatedProduct =(obj)=>{
    let resultObj = {}
    for(let item of obj){
        const {brand, ...elsePart} = item;

        if(!resultObj.hasOwnProperty(brand)){
            resultObj[brand] = [elsePart]
        }

        else{
            resultObj[brand].push(elsePart)
        }


    }

    return resultObj;
}


console.log(updatedProduct(Products))