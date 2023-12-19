import { Home } from '../Home/Home'
import {MyAccount} from "../MyAccount/MyAccount";
import { MyOrder } from '../MyOrder/MyOrder';
import { MyOrders } from '../MyOrders/MyOrders';
import { NotFound } from '../NotFound/NotFound';
import { SingIn } from '../SignIn/SignIn';
import { NavBar } from '../../Componentes/NavBar/NavBar';
import {useRoutes, BrowserRouter} from "react-router-dom"; 
import { ShoppingCartProvider } from "../../Use Context/UseContext";
import "./App.css"; 

const AppRoutes = () => {
  const routes = useRoutes([

    {
      path: "/",
      element: <Home />
    },
  
    {
      path:"/myaccount",
      element: <MyAccount/>
    },

    {
      path:"/myorder",
      element: <MyOrder/>
    },

    {
      path:"/myorders",
      element: <MyOrders/>
    },

    {
      path:"/myorders/last",
      element: <MyOrder/>
    },

    {
      path:"/myorders/:id",
      element: <MyOrder/>
    },
    
    {
      path:"/notfound",
      element: <NotFound/>
    },

    {
      path:"/signin",
      element: <SingIn/>
    },
  
  
  
  ])

    return routes
}

function App () {

  

  return (
    
    <ShoppingCartProvider>

      <BrowserRouter>

        <NavBar/>
        
        <AppRoutes/>

      </BrowserRouter>

    </ShoppingCartProvider>
  )
}

export default App
