import { useContext, useEffect } from "react";
import { GlobalStateContext } from "@/contexts/global-state";
import { hexToHsl, hslToHex } from "@/utils/cn";

export default function ChangeColor() {
    const { cheatCodeActive, setCheatCodeActive, color, setColor } =
        useContext(GlobalStateContext);

    useEffect(() => {
        // listen for cheat code
        const keys = [] as string[];
        const cheatCode = "color me pls";
        window.addEventListener("keydown", (e) => {
            console.log(e.key);
            keys.push(e.key);
            keys.splice(-cheatCode.length - 1, keys.length - cheatCode.length);
            if (keys.join("").includes(cheatCode)) {
                setCheatCodeActive(true);
                console.log("cheat code activated");
            }
        });
    }, [setCheatCodeActive]);

    return (
        cheatCodeActive && (
            <div className="absolute top-5 left-5 z-20">
                <button className="p-[3px] relative">
                    {" "}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div
                        className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent"
                        onClick={() => {
                            const hsl = hexToHsl(color);
                            const random = Math.floor(Math.random() * 180);
                            const newColor = [(hsl[0] + random) % 360, hsl[1], hsl[2]];
                            const hex = hslToHex(newColor[0], newColor[1], newColor[2]);
                            setColor(hex);
                        }}
                    >
                        color me pls
                    </div>
                </button>
            </div>
        )
    );
}
