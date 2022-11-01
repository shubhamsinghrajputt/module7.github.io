import React, { useEffect, useState } from "react";

export default function Products() {
   const [users, setUser] = useState([]);

 const fetchData = async () => {
     const responce = await fetch(
       'https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json'
     );
     setUser(await responce.json());
   };
   useEffect(() => {
   fetchData();
   }, []);
  
  return (
    <>
      <div className="products-container">
        <div className="heading">
          <h3>Products</h3>
        </div>
        <div className="product-list">
           {
            users.map((user)=>{
                return(
                    <div>
                        <p>{user.title}</p>
                    </div>
                );
            })
          } 
        </div>
      </div>
    </>
  )
        }