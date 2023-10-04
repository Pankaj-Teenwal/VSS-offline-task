let library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];

    let keys =  Object.keys(library[0]);
    console.log({keys});

    let newObj = {};


    library.map((item, index)=>{
        const {author, ...elsePart} = item;


        if(!newObj.hasOwnProperty(author)){
            newObj[author] = [elsePart]
        }

        else{
            newObj[author].push(elsePart)
        }
    })

    console.log(newObj)