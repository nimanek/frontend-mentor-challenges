import { createContext, useEffect, useState, type ReactNode } from "react";
import data from "../../data.json";

export interface IData {
    image: {
        thumbnail: string;
        mobile: string;
        tablet: string;
        desktop: string;
    };
    name: string;
    category: string;
    price: number;
}

export type CartItem = {
    item: string;
    qty: number;
};

export const ShoppingCartContext = createContext<any>(null);

export function ShoppingCartProvider({ children }: { children: ReactNode }) {
    const [desserts, setDesserts] = useState<IData[]>([]);
    const [cart, setCart] = useState<CartItem[]>([]);

    

    const handleAdd = (name: string) => {
        setCart((prevCart) => {
            // Check if already exists
            const existing = prevCart.find((c) => c.item === name);
            if (existing) {
                // If exists so add 1 more
                return prevCart.map((c) =>
                    c.item === name ? { ...c, qty: c.qty + 1 } : c,
                );
            }
            // If didn't exist so add 1
            return [...prevCart, { item: name, qty: 1 }];
        });
    };

    const handleDec = (name: string) => {
        setCart((prevCart) => {
            // Find the product
            const existing = prevCart.find((c) => c.item === name);
            // If didn't exist, don't do anything
            if (!existing) return prevCart;
            // If more than 1 exists
            if (existing.qty > 1) {
                return prevCart.map((c) =>
                    c.item === name ? { ...c, qty: c.qty - 1 } : c,
                );
            }
            // If only there is 1
            return prevCart.filter((c) => c.item !== name);
        });
    };

    useEffect(() => {
        setDesserts(data);
    }, []);

    return (
        <ShoppingCartContext.Provider
            value={{ desserts, handleAdd, handleDec, cart }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
}
