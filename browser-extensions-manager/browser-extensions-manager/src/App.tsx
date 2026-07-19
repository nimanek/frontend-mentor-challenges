import "./App.css";
import ExtensionsList from "./components/ExtensionsList";
import ExtensionsListFilter from "./components/ExtensionsListFilter";
import Navbar from "./components/Navbar";
import items from "../data.json";
import { useEffect, useState } from "react";

type ItemsType = {
    description: string;
    isActive: boolean;
    logo: string;
    name: string;
};
type FilterType = "all" | "active" | "inactive";

function App() {
    const [extensions, setExtensions] = useState<ItemsType[]>(items);
    const [currentFilter, setCurrentFilter] = useState<FilterType>("all");
    const [isDark, setIsDark] = useState<boolean>(false);

    // Removing an extension func
    const removeExtension = (name: string) => {
        const filtered = extensions.filter(
            (extension) => extension.name !== name,
        );
        setExtensions(filtered);
    };

    // On/Off extension toggle func
    const handleToggleActive = (name: string) => {
        setExtensions((prevExtensions) =>
            prevExtensions.map((extension) => {
                if (extension.name === name) {
                    return { ...extension, isActive: !extension.isActive };
                }
                return extension;
            }),
        );
    };

    // All/Active/Inactive filter extensions buttons
    const visibleExtensions = extensions.filter((item) => {
        if (currentFilter === "active") return item.isActive === true;
        if (currentFilter === "inactive") return item.isActive === false;
        return true; // 'all'
    });

    useEffect(() => {
            const root = document.documentElement;
            if (isDark) {
                root.classList.add("dark");
            } else {
                root.classList.remove("dark");
        };
    }, [isDark]);

    return (
        <>
            <div className="min-h-svh">
                <Navbar isDark={isDark} setIsDark={setIsDark}/>
                <ExtensionsListFilter
                    currentFilter={currentFilter}
                    setCurrentFilter={setCurrentFilter}
                />
                <ExtensionsList
                    visibleExtensions={visibleExtensions}
                    removeExtension={removeExtension}
                    handleToggleActive={handleToggleActive}
                />
                <div className=""></div>
            </div>
        </>
    );
}

export default App;
