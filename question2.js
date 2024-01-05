let time = 0;

let timer = setInterval(() => {

    
    if (time < 10) {
        time++
        console.log(time)
    }
    else{
        console.log("You are Done!")
        clearInterval(timer)
    }

}, 1000);

setTimeout(()=>{
    console.log("Bomb has been planted")
},5000)