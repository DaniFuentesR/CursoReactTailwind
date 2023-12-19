import {useState, useEffect} from "react";
import { Layout } from "../../Componentes/Layout/Layout";
import { Card } from "../../Componentes/Card/Card";
import { Detail } from "../../Componentes/Detail/Detail";
import { CheckOutSideMenu } from "../../Componentes/CheckoutSideMenu/CheckoutSideMenu";

function Home() {

  const [products, setProducts] = useState(null)
  
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then (res => res.json())
    .then (data => setProducts(data))
  }, [])


  return (
    <Layout>

        
      <div className="grid  grid-cols-4 place-items-center w-full max-w-screen-lg align-middle bg-white/50 gap-4 gap-y-4">
      
      {
        products ?.map ((product) =>
        
          < Card  key={product.id}  data={product}/> )
      }
      
      </div>
      <CheckOutSideMenu/>
      <Detail/>
      </Layout>
  )
}

export {Home}; 