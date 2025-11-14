import { GlobalStateContext } from "@/contexts/global-state";
import { hexToRgb } from "@/utils/cn";
import { useContext, useEffect, useState } from "react";

export default function BackgroundGradient() {
    const { color } = useContext(GlobalStateContext);
    const [scale1, setScale1] = useState(1);
    const [scale2, setScale2] = useState(1);
    const [num, setNum] = useState(0);
    const [transform, setTransform] = useState([0, 0]);

    useEffect(() => {
        // Use sine wave to animate the gradient
        const interval = setInterval(() => {
            if (num > 2 * Math.PI) setNum(0);
            setNum(num + 0.1);
            setScale1(1 + Math.sin(num) * 0.2);
            setScale2(1 + Math.sin(num + Math.PI/2) * 0.2);
        }, 145);
        return () => clearInterval(interval);
    }, [num])

    useEffect(() => {
        // prespective effect for mouse move
        const body = document.querySelector("body");
        if (body) {
            body.addEventListener("mousemove", (e) => {
                const x = e.clientX / window.innerWidth - 0.5;
                const y = e.clientY / window.innerHeight - 0.5;
                setTransform([-x*35, -y*35]);
            });   
        }
    }, []);

    const rgb = hexToRgb(color);

    return (
        <div style={{
            transform: `translate(${transform[0]}px, ${transform[1]}px)`,
            msTransitionDelay: "0.1s",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 0,
            width: "100%",
            height: "100%",
        }}>
            <div
                style={{
                    background: `radial-gradient(circle, rgba(${rgb[0]},${rgb[1]},${rgb[2]},1) 0%, rgba(${rgb[0]},${rgb[1]},${rgb[2]},1) 5%, rgba(${rgb[0]},${rgb[1]},${rgb[2]},0.05) 70%)`,
                    filter: "blur(50px)",
                    position: "fixed",
                    top: "-30px",
                    right: "-90px",
                    width: "50%",
                    height: "50%",
                    transform: `scale(${scale1})`,
                }}
            />
            <div
                style={{
                    background: `radial-gradient(circle, rgba(${rgb[0]},${rgb[1]},${rgb[2]},1) 0%, rgba(${rgb[0]},${rgb[1]},${rgb[2]},1) 5%, rgba(${rgb[0]},${rgb[1]},${rgb[2]},0.05) 70%)`,
                    filter: "blur(50px)",
                    position: "fixed",
                    bottom: "-85px",
                    left: "-150px",
                    width: "50%",
                    height: "50%",
                    transform: `scale(${scale2})`,
                }}
            />
        </div>
    );
}
