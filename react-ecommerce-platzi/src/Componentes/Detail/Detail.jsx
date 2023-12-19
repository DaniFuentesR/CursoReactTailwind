import "./Detail.css"; 
import { useContext } from "react";
import { ShoppingCartContext } from "../../Use Context/UseContext";


function Detail () {
    
    const context = useContext(ShoppingCartContext);
    

    return (
       <aside className={`product-detail flex-col right-0 border border-black rounded-lg bg-white ${context.isProductDetailOpen ? "flex" : "hidden"}`}>
            <div className="flex justify-between p-6">

                <span className="cursor-pointer" onClick={()=>context.setCounter(context.counter + 1 )}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                </span>
                
                <span className="cursor-pointer" onClick={context.closedProductDetail}> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </span>
            </div>
            <h3 className="text-lg font-bold p-4 flex justify-center">{context.productToShow.title}</h3>
            <figure>
                <img className="w-full h-full rounded-lg p-8" src={context.productToShow.image} alt={context.productToShow.title} />
            </figure>
            <p>
                <span className="flex justify-center font-semibold text-lg">
                    ${context.productToShow.price}
                </span>
                <span className="flex p-5">
                    {context.productToShow.description}
                </span>
            </p>
       </aside>
    )
};

export {Detail}; 




