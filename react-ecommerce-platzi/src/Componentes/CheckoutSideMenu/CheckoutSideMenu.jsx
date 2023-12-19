import "./CheckoutSideMenu.css"; 
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Use Context/UseContext";
import { OrderCard } from "../OrderCard/CardOrder";
import { totalPrice } from "../../Utils";


function CheckOutSideMenu () {
    
    const context = useContext(ShoppingCartContext);
    
    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts); 
        context.setCounter(context.counter-1); 
        
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: "01-02-2023",
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd]);
        context.setCartProducts([]); 
        context.setCounter(0); 
    }

    return (

       <aside className={`checkout-side-menu flex-col right-0 border border-black rounded-lg bg-white ${context.isCheckOutSideMenuOpen ? "flex" : "hidden"}`}>
            <div className="flex justify-between px-6">
                
                <span className="cursor-pointer py-5" onClick={context.closedCheckOutSideMenu}> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </span>
            </div>
            <h3 className="text-lg font-bold p-4 flex justify-center">My Order</h3>

            <div className="p-6 overflow-y-scroll">
                {
                    context.cartProducts.map(product => 
                    
                    <OrderCard 
                    key = {product.id}
                    id = {product.id}
                    title = {product.title}
                    imageUrl = {product.image}
                    price = {product.price}
                    handleDelete = {handleDelete}
                    />
                )}
            </div>
            
            <div className="p-6 flex justify-between">
                <span className="font-semibold">Total:</span>
                <span>${totalPrice(context.cartProducts)}</span>
            </div>

            <Link to="myorders/last">
                <button className="py-3 border rounded-md w-full font-semibold bg-gray-700 text-white" onClick={()=> handleCheckout()}>Checkout</button>
            </Link>

            

       </aside>
    )
};

export {CheckOutSideMenu}; 




