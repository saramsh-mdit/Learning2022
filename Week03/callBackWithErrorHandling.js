const add = function(a,b) {
    return a + b;
}

const getResult = function(callback, err) {
    if(err) return new Error(err)

    let a = 50;
    let b= 30;
    return callback(a,b)
}

const function01 = ()=>{
    let result;
    try{
        // if(true) throw {message:"Error Occured"}
        // result = getResult(add);
    }
    catch(err) {
        console.log(err)
        result = getResult(add,err);
    }
    finally {
        console.log(result)
    }
    return result;
}

function01();