import { Switch } from "@mui/material";





interface ExtensionsCardProps {
    visibleExtensions: {
        description: string;
        isActive: boolean;
        logo: string;
        name: string;
    }[];
    removeExtension: (name: string) => void;
    handleToggleActive: (name: string) => void;
}


const ExtensionsCard = ({visibleExtensions,removeExtension,handleToggleActive}:ExtensionsCardProps) => {


    return (
        <>
            {visibleExtensions.map((item) => (
                <div key={item.description}>
                    <div className="bg-white dark:bg-neutral-700 dark:text-white shadow h-48 rounded-2xl p-4 flex flex-col gap-3 ">
                        {/* App icon  */}
                        <div className="flex gap-4 items-start justify-center">
                            <img className="" src={item.logo} alt={item.name} />
                            {/* App name & Description */}
                            <div className="flex flex-col gap-1">
                                <h3 className="font-bold text-xl">
                                    {item.name}
                                </h3>
                                <p className="w-full text-gray-600 dark:text-neutral-400 text-sm">
                                    {item.description}
                                </p>
                            </div>
                        </div>

                        {/* Remove & Toggle Button */}
                        <div className="flex justify-between items-end h-full">
                            <button
                                onClick={()=>removeExtension(item.name)}
                                className="border border-gray-400 px-3 py-1.5 rounded-full cursor-pointer"
                            >
                                Remove
                            </button>
                            <div className="px-3 py-2 rounded-full">
                                <Switch
                                onChange={()=>handleToggleActive(item.name)}
                                    checked={item.isActive}
                                    sx={{
                                        width: 44,
                                        height: 24,
                                        padding: 0,
                                        "& .MuiSwitch-switchBase": {
                                            padding: 0,
                                            margin: "4px", // This creates the "inset" padding inside the track
                                            transitionDuration: "300ms",
                                            "&.Mui-checked": {
                                                transform: "translateX(20px)", // Moves the circle over perfectly when checked
                                                color: "#fff", // White thumb circle when active
                                                "& + .MuiSwitch-track": {
                                                    backgroundColor: "#991b1b", // Maroon/Red background capsule
                                                    opacity: 1,
                                                    border: 0,
                                                },
                                            },
                                        },
                                        "& .MuiSwitch-thumb": {
                                            boxSizing: "border-box",
                                            width: 16,
                                            height: 16,
                                            backgroundColor: "#fff", // White thumb circle when inactive
                                        },
                                        "& .MuiSwitch-track": {
                                            borderRadius: 24 / 2, // Makes it a perfect pill
                                            backgroundColor: "#cbd5e1",
                                            opacity: 1,
                                            transition:
                                                "background-color 500ms",
                                        },
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ExtensionsCard;
