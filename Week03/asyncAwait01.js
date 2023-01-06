const getSmana = (samanKoList) => {
    return new Promise((sucess, failed) => {
        setTimeout(() => {
            if (samanKoList)
                sucess(samanKoList);
            failed("Saman nae chai na");
        }, 2000
        )
    })
}

// PROMISE
getSmana()
.then((data)=> {
    // do something
    console.log("Promise DATA:",data)
})
.catch((err)=> {
    console.log("ERROR from Promise:",err)
})

// ASYNC AWAIT
const asyncFunc = async (data)=> {
    try{
        let newData = await getSmana(data);
        console.log("Async Await Data",data)
        return newData; 
    }
    catch(err){
        console.log("Error from ASYNC AWAIT:",err)
        return err;
    }
}

setTimeout(()=> {
    asyncFunc(["Sugar 1Kg","Buscuit 3pic"])
},3000)
