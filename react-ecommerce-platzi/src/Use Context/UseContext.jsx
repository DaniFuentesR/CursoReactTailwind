import { createContext, useState, useEffect } from "react";

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

    // Get Products
    const [products, setProducts] = useState(null)


    // Get Products by title
    const [searchByTitle, setSearchByTitle] = useState(null); 


    // Get Filtered Products
    const [filteredProducts, setFilteredProducts] = useState(null); 

    // Get Products by Category
    const [searchByCategory, setSearchByCategory] = useState(null); 
    
  
  
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then (res => res.json())
        .then (data => setProducts(data))
    }, [])
    
    
    const filteredProductsByTitle = (products, searchByTitle) => {
        
        return products?.filter(product => product.title.toLowerCase().includes(searchByTitle.toLowerCase()));
    }

    const filteredProductsByCategory = (products, searchByCategory) => {
    
        
        return products?.filter(product => 
            product && product.category &&
            product.category.toLowerCase().includes(searchByCategory.toLowerCase())
        );
    }

    const filterBy = (searchType, products, searchByTitle, searchByCategory) => {

        if (searchType === "BY_TITLE"){
            return filteredProductsByTitle(products, searchByTitle)
        }

        if(searchType === "BY_CATEGORY") {
            return filteredProductsByCategory(products, searchByCategory)
        }

        if(searchType === "BY_TITLE_AND_CATEGORY") {
            return filteredProductsByCategory(products, searchByCategory).filter(product => product.title.toLowerCase().includes(searchByTitle.toLowerCase())); 
        }

        if(!searchType) {
            return products
        }
    }

    useEffect(()=>{
        if(searchByCategory && searchByTitle) setFilteredProducts(filterBy("BY_TITLE_AND_CATEGORY",products, searchByCategory, searchByTitle));
        if(searchByTitle && !searchByCategory) setFilteredProducts(filterBy("BY_TITLE", products, searchByTitle, searchByCategory));
        if(searchByCategory && !searchByTitle) setFilteredProducts(filterBy("BY_CATEGORY", products, searchByCategory, searchByTitle));
        if(!searchByCategory && !searchByTitle) setFilteredProducts(filterBy(null, products, searchByCategory, searchByTitle));
    }, [products, searchByTitle, searchByCategory])


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
            setOrder,
            products,
            setProducts,
            searchByTitle,
            setSearchByTitle,
            filteredProducts,
            setFilteredProducts,
            searchByCategory,
            setSearchByCategory
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
   
export {ShoppingCartProvider};