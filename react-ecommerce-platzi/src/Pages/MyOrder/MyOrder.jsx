import { Layout } from "../../Componentes/Layout/Layout";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Use Context/UseContext";
import { OrderCard } from "../../Componentes/OrderCard/CardOrder";
import { Link } from "react-router-dom";



function MyOrder() {

  const context = useContext(ShoppingCartContext);

  const leftArrow = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
  const currentPath = window.location.pathname;

  let index = currentPath.substring(currentPath.lastIndexOf("/")+ 1);

   if (index === "last") index = context.order?.length -1


    return (
      
      <Layout>
        
        <div className="flex justify-center w-80 relative h-full">

          <Link to="/myorders" className="absolute left-0">
            <span className="h-6 w-6 text-black cursor-pointer">{leftArrow}</span>
          </Link>

          <h1 className="font-semibold text-lg">My Order</h1>
        </div>
        
        <div className="flex flex-col absolute w-80 mt-16 border p-6 rounded-lg">
                {
                    context.order?.[index]?.products.map(product => (
                    
                    <OrderCard 
                    key = {product.id}
                    id = {product.id}
                    title = {product.title}
                    imageUrl = {product.image}
                    price = {product.price}
                    />
                ))}
                
            </div>
            
        </Layout>
    )
  }
  
  export {MyOrder}; 