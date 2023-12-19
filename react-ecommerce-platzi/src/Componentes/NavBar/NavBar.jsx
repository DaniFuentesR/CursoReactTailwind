import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Use Context/UseContext";
import { useContext } from "react";



function NavBar (props) {

    const context = useContext(ShoppingCartContext); 
    const activeStyle = "underline";


    return(
        <nav className="flex justify-between items-center absolute w-full py-5 px-8 text-md font-light top-0 border">
            <ul className="flex space-x-5 items-center" >
                <li className="font-bold text-xl">

                    <NavLink to="/">
                        
                        Shopi 

                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" className={({isActive}) => isActive ? activeStyle : undefined}>
                        
                        All 

                    </NavLink>
                </li>
                <li>
                    <NavLink to="/clothes" className={({isActive}) => isActive ? activeStyle : undefined}>
                        
                        Clothes 

                    </NavLink>
                </li>
                <li>
                    <NavLink to="/electronics" className={({isActive}) => isActive ? activeStyle : undefined}>
                        
                        Electronics 

                    </NavLink>
                </li>

                <li>
                    <NavLink to="/fournitures" className={({isActive}) => isActive ? activeStyle : undefined}>
                        
                        Fournitures 

                    </NavLink>
                </li>

                <li>
                    <NavLink to="/toys" className={({isActive}) => isActive ? activeStyle : undefined}>
                        
                        Toys 

                    </NavLink>
                </li>
                <li>
                    <NavLink to="/others" className={({isActive}) => isActive ? activeStyle : undefined}>
                        
                        Others 

                    </NavLink>
                </li>
            </ul>
            <ul className="flex space-x-6 items-center">
                <li>

                    danifuentes@gmail.com

                </li>
                <li>
                    <NavLink to="/myorders" className={({isActive}) => isActive ? activeStyle : undefined}>
                        
                        My Orders

                    </NavLink>
                </li>
                <li>
                    <NavLink to="/myaccount" className={({isActive}) => isActive ? activeStyle : undefined}>
                        
                        My Account 

                    </NavLink>
                </li>
                <li>
                    <NavLink to="/signin" className={({isActive}) => isActive ? activeStyle : undefined}>
                        
                         Sign In

                    </NavLink>
                </li>

                <li className="flex" onClick={context.openCheckOutSideMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    <div>{context.counter}</div>
                    
                </li>

            </ul>
        </nav>
    )
};

export {NavBar}; 