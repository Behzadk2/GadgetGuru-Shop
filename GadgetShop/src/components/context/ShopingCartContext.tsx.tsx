import { createContext } from "react";
interface cartItemToBackend {
    id : number,
    qtv : number
}

interface shopingCartContext{
    cartItem : cartItemToBackend[]
}
export const shopingCartContext = createContext({} as shopingCartContext)