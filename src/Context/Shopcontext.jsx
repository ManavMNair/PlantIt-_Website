// Context Provider
import React, { useState } from "react";
import { createContext } from "react";
import all_products from '../Components/Assets/ShopPage/js-files/allProductsdata';

export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
    let cart ={}
    for (let index = 100; index<all_products.length+102; index++){
        cart[index] = 0;
    }
    return cart
}
const ShopContextProvider = (props) => {
    const [cartItems,setCartItems] = useState(getDefaultCart())
    
    
    const addToCart = (itemId) => {
        setCartItems((prev) => {
            const newCartItems = { ...prev };
            const itemCount = newCartItems[itemId] || 0;
            newCartItems[itemId] = itemCount + 1;
            return newCartItems;
        });
        console.log("cart items", cartItems);
    };
    
    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({
            ...prev,[itemId]:prev[itemId]-1
        }))
    }
    const deleteCartItem = (itemId) =>{
        setCartItems((prev)=>({
            ...prev,[itemId]:0
        }))
    }

    const getTotalAmount = ()=>{
        let totalAmount = 0 ;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_products.find((product)=> product.productId===Number(item))
                totalAmount += itemInfo.price * cartItems[item];
                }
            }
            return totalAmount
        }
    const getTotalCart = ()=>{
        let totalItem =0;
        for (const item in cartItems){
            if(cartItems[item]>0){
                totalItem += cartItems[item];

            }
            
        }
        return totalItem;
    }
    const contextValue = {deleteCartItem,getTotalCart, getTotalAmount,all_products,cartItems,addToCart,removeFromCart };




    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}; 

export default ShopContextProvider;
