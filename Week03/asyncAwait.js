// const getData = async () => {
//     const responce = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     const data = await responce.json();
//     if(data)
//     {
//         console.log(data)
//     }
// }

// with error handling
const getData = async () => {
    try {

        const responce = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await responce.json();
        if(data)
        {
            console.log(data)
        }
    }
    catch(nripesh) {
        console.log("ERROR AYO")
    }
}
    

getData()