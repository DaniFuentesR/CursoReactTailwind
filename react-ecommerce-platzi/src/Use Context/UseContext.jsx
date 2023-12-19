import { createContext, useState } from "react";

export const ShoppingCartContext = createContext(); 

function ShoppingCartProvider ({children}) {

    //Shopping Cart º Increment Quantity
    const [counter, setCounter] = useState(0);
    



    //Product Detail º Open/Closed Detail
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);


    const openProductDetail = () => {
        setIsProductDetailOpen(true); 
    }

    const closedProductDetail = () => {
        setIsProductDetailOpen(false); 
    }

    //Product Detail º Show Product
    const [productToShow, setProductToShow] = useState({});


    //Shopping Cart º Add Products to cart
    const [cartProducts, setCartProducts] = useState([]);


    //Checkout Side Menu º Open/Closed Detail
    const [isCheckOutSideMenuOpen, setIsCheckOutSideMenuOpen] = useState(false);


    const openCheckOutSideMenu = () => {
        setIsCheckOutSideMenuOpen(true); 
    }

    const closedCheckOutSideMenu = () => {
        setIsCheckOutSideMenuOpen(false); 
    }

    // Shopping Cart - Order

    const [order, setOrder] = useState([]); 

    
    return (

        <ShoppingCartContext.Provider value={{
            counter, 
            setCounter,
            openProductDetail,
            closedProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckOutSideMenuOpen,
            setIsCheckOutSideMenuOpen,
            openCheckOutSideMenu,
            closedCheckOutSideMenu,
            order,
            setOrder
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
   
export {ShoppingCartProvider};