const divide = (num,divider) => {
    try{
        if(divider === 0) {
            throw {
                data:divider,
                message:"Zero creates a bug."
            }
        }

        return num/divider

    }
    catch(err)
    {
        console.log(err);
        return new Error(err)
    }
}

console.log(divide(100,5));
console.log(divide(100,0));

