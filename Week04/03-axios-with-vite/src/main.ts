import axios from 'axios';
import './style.css'

let isError = false;

const getData = async ()=> {
  try {
    const data = await axios.get("https://jsonplaceholder.typicode.com/posts") as {data:any[]};
    let stringHTML = '';
    data.data.forEach((item:any)=>{stringHTML +=` <p>${item.id} - ${item.title}</p>`}) 
    document.querySelector<HTMLDivElement>('#list')!.innerHTML = stringHTML
  }
  catch(error) {
    isError = true;
  }
}

getData();


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
   <h2>Hello World </h2>
   ${isError ? `<h2>Error Occured</h2>`: ''}
  </div>
`

