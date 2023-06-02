
import { useEffect, useState } from 'react';

function Categories() {
const [cat, selectCat] = useState([]);
const categories ={
cat: "Jewelery",
elec: "electronics"
}
 
useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/category/jewelery`)
    .then((res)=>{
    res.json();
    })
    .then((data)=>{
        selectCat(data)
       
    })
},[])
console.log(cat)


    return(
        <div>categories</div>
    )
}

export default Categories