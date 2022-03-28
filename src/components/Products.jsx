import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const AllProducts = styled.div`
display:grid;
grid-template-columns: auto auto auto;
grid-gap:2vh;
width:fit-content;
margin:auto;
height:fit-content;
border:1px solid black;
padding:7vh;
`;
const CardBox = styled.div`
  padding:2vh;
  border:1px solid black;
  width:200px;
  height:200px;
`

function Products() {
  const [data,setData] = useState([]);
  const [isLoading,setLoading] = useState(true);
  const [isError,setError] = useState(false);

   let isTrue = true;
  useEffect(() =>{
   fetch(`https://fakestoreapi.com/products`)
   .then((res)=>res.json())
   .then((res)=> isTrue&& setData(res))
   .catch((err)=>setError(true))
   .finally(()=>setLoading(false))

   return ()=>{
    isTrue=false;
   }
  },[])
  return (
    isLoading? <div>...loading</div> : isError?<h1>try again</h1> :
      <AllProducts>
      {
        data.map((item)=>{
          return <CardBox key={item.id}>
            <h2>{item.category}</h2>
            <h2>{item.price}</h2>
            <Link to={`/Products/${item.id}`}>More Details ..</Link>
          </CardBox>
        })
      } 
       </AllProducts>
  )
}

export default Products