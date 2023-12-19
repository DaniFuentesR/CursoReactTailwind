import { Layout } from "../../Componentes/Layout/Layout";
import  {OrdersCard}  from "../../Componentes/OrdersCard/OrdersCard";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Use Context/UseContext";
import { Link } from "react-router-dom";




function MyOrders() {

  const context = useContext(ShoppingCartContext);
  

    return (
      <Layout>

        <div className="flex flex-row items-center justify-center w-80 mb-6">
          <h1>My Orders</h1>
        </div>

        {
          context.order.map((order, index)=>(

            

              <Link key={index} to={`/myorders/${index}`}>

                <OrdersCard 
                  totalPrice={order.totalPrice} 
                  totalProducts={order.totalProducts}
                />
              </Link>
            
          ))
        }
        
        </Layout>
    )
  }
  
  export {MyOrders}; 