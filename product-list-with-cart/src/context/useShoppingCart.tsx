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


export const ShoppingCartContext = createContext<any>(null);

export function ShoppingCartProvider({ children }: { children: ReactNode }) {
    const [desserts, setDesserts] = useState<IData[]>([]);
    useEffect(() => {
        setDesserts(data);
    }, []);

    return (
        <ShoppingCartContext.Provider value={{ desserts }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}
