import { useContext } from "react";
import { ShoppingCartContext } from "../../Use Context/UseContext";



function Card (data) {

    const context = useContext(ShoppingCartContext);

    const showProduct = (productDetail) => {
        context.openProductDetail();
        context.setProductToShow(productDetail); 
    }; 

    const addProductsToCart = (productData) => {

        context.setCounter(context.counter + 1 )
        context.setCartProducts([...context.cartProducts, productData]);
        context.openCheckOutSideMenu(); 
        console.log("Cart:", context.cartProducts);
    }

    const renderIcon = (id) => {

        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0; 

        if (isInCart) {
            return (
            <div className="absolute -top-2 -right-2 flex justify-center items-center bg-black text-white w-5 h-5 rounded-full" onClick={()=>addProductsToCart(data.data)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>

            </div>
            )
        } else{
        return (
            <div className="absolute -top-2 -right-2 flex justify-center items-center bg-gray-300 w-5 h-5 rounded-full" onClick={()=>addProductsToCart(data.data)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </div>
        )
        }
    }

    return(
        <div className="cursor-pointer w-56 h-80 rounded-lg border border-neutral-200 mb-16">
            <figure className="relative mb-6 w-full h-3/4 p-1">
                <span className="absolute bottom-0 left-0 rounded-lg bg-white/60 text-black text-sm mb-3 ml-2 px-2 font-semibold">{data.data.category}</span>
                <img className="rounded-lg w-64 h-64 object-cover" src={data.data.image} alt={data.data.title} onClick={()=>showProduct(data.data)}/>
               {renderIcon(data.data.id)}
                <p className="flex justify-between mt-2" onClick={()=>showProduct(data.data)}>
                    <span className="text-sm">{data.data.title}</span>
                    <span className="text-lg font-bold">${data.data.price}</span>
                </p>
            </figure>
        </div>
    )
};


export {Card}; 