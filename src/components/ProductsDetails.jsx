import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom'

function ProductsDetails() {
  let value = useParams();
  const [productDetails,setProductDetails] = useState([]);
  const [isError,setError] = useState(false);

  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${value.productId}`)
    .then((res)=>res.json())
    .then((res)=>  setProductDetails(res))
    .catch((err)=>setError(true)); 
  },[])
  return (
    isError?<h1>this products is not available</h1> :
    <div>
      <h2>Product Id :{productDetails.id}</h2>
      <h2>Product Category : {productDetails.category}</h2>
      <h2> Product Title : {productDetails.title}</h2>
      <h2> Product Price : {productDetails.price}</h2>
    </div>
  )
}

export default ProductsDetails