import {useContext} from "react";
import { Layout } from "../../Componentes/Layout/Layout";
import { Card } from "../../Componentes/Card/Card";
import { Detail } from "../../Componentes/Detail/Detail";
import { CheckOutSideMenu } from "../../Componentes/CheckoutSideMenu/CheckoutSideMenu";
import { ShoppingCartContext } from "../../Use Context/UseContext";


function Home() {

  
  const context = useContext(ShoppingCartContext);

  const renderView = () => {
    if (context.filteredProducts?.length > 0) {
      return (
        context.filteredProducts?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    } else {
      return (
        <div>We don't have anything :(</div>
      )
    }
  }

  return (

    <Layout>

      
      <input className="w-80 h-10 absolute border rounded-md p-4 focus:outline-none" type="text" placeholder="Search a product" onChange={(event)=> context.setSearchByTitle(event.target.value)}/>  

      <div className="grid grid-cols-4 place-items-center w-full max-w-screen-lg align-middle bg-white/50 gap-4 gap-y-4 mt-20">
      
      {
        renderView()
      }
      
      </div>
      <CheckOutSideMenu/>
      <Detail/>
      </Layout>
  )
}

export {Home}; 