const p = new Promise((replay, reject) => {
    replay("Hello I am in the replay block of promise")
    reject("I am in the reject block")

    return p;
})

const p2 = new Promise((resolve, reject) => {
    reject("Promise p2 rejected");
    return p2;
})


    const runAsyncPromise = async () => {
        try {
            const p1Result = await p();
            const p2Result = await p2();
        }
        catch (err) {
            console.log("Err", err)
        }
    }
runAsyncPromise();

